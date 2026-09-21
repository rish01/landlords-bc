import pg from "pg";
import { createClient } from "redis";

export type CheckResult = {
  ok: boolean;
  detail: string;
};

export async function pingPostgres(url: string | undefined): Promise<CheckResult> {
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

export async function pingRedis(url: string | undefined): Promise<CheckResult> {
  if (!url) {
    return { ok: false, detail: "REDIS_URL unset" };
  }
  const client = createClient({ url });
  try {
    await client.connect();
    const pong = await client.ping();
    return { ok: pong === "PONG", detail: pong };
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown error";
    return { ok: false, detail: message };
  } finally {
    await client.quit().catch(() => undefined);
  }
}
