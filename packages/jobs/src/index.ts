import { PgBoss } from "pg-boss";
import { JOB_NAMES } from "./names.ts";

export { JOB_NAMES, type JobName } from "./names.ts";

export async function createBoss(connectionString: string): Promise<PgBoss> {
  const boss = new PgBoss({ connectionString, application_name: "lbc-worker" });
  boss.on("error", (err: unknown) => {
    console.error("[pg-boss]", err);
  });
  await boss.start();
  await boss.createQueue(JOB_NAMES.hello);
  return boss;
}

export { handleHello } from "./hello.ts";
