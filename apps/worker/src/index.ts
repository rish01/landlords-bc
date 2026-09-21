import { createBoss, handleHello, JOB_NAMES } from "@lbc/jobs";
import { startHealthServer } from "./health.ts";

const port = Number(process.env.WORKER_PORT ?? 3001);

async function main() {
  startHealthServer(port);
  console.log(`[worker] health on :${port}`);

  const url = process.env.DATABASE_URL;
  if (!url) {
    console.warn("[worker] DATABASE_URL unset — pg-boss not started (health still up)");
    return;
  }

  const boss = await createBoss(url);
  await boss.work(JOB_NAMES.hello, handleHello);
  await boss.send(JOB_NAMES.hello, { message: "landlords-bc worker hello" });
  console.log("[worker] pg-boss started, hello job registered");
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
