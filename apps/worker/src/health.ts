import http from "node:http";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import pg from "pg";

async function pingPostgres(url: string | undefined) {
  if (!url) {
    return { ok: false, detail: "DATABASE_URL unset" };
  }
  const client = new pg.Client({ connectionString: url, connectionTimeoutMillis: 2000 });
  try {
    await client.connect();
    await client.query("select 1");
    return { ok: true, detail: "ok" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown error";
    return { ok: false, detail: message };
  } finally {
    await client.end().catch(() => undefined);
  }
}

async function pingDisk() {
  const file = path.join(os.tmpdir(), "lbc-worker-readyz");
  try {
    await fs.writeFile(file, "ok");
    await fs.unlink(file);
    return { ok: true, detail: "ok" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown error";
    return { ok: false, detail: message };
  }
}

export function startHealthServer(port: number): http.Server {
  const server = http.createServer((req, res) => {
    void (async () => {
      if (req.url === "/healthz") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ ok: true, service: "worker" }));
        return;
      }
      if (req.url === "/readyz") {
        const [postgres, disk] = await Promise.all([
          pingPostgres(process.env.DATABASE_URL),
          pingDisk(),
        ]);
        const ok = postgres.ok && disk.ok;
        res.writeHead(ok ? 200 : 503, { "content-type": "application/json" });
        res.end(JSON.stringify({ ok, service: "worker", checks: { postgres, disk } }));
        return;
      }
      res.writeHead(404);
      res.end();
    })();
  });
  server.listen(port);
  return server;
}
