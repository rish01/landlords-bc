import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema/index.ts";

/**
 * Application DB client. RLS GUCs are set only inside domain transaction
 * wrappers (PR-06), never in Next.js proxy/middleware.
 */
export function createDb(url: string) {
  const client = postgres(url, { max: 10, prepare: false });
  return drizzle(client, { schema });
}
