import { NextResponse } from "next/server";
import { pingPostgres, pingRedis } from "../../lib/health.ts";

/**
 * Readiness: Postgres + Redis. Stripe is intentionally not on this path —
 * degraded billing must not take the site out of the load balancer.
 */
export async function GET() {
  const [postgres, redis] = await Promise.all([
    pingPostgres(process.env.DATABASE_URL),
    pingRedis(process.env.REDIS_URL),
  ]);
  const ok = postgres.ok && redis.ok;
  return NextResponse.json(
    { ok, service: "web", checks: { postgres, redis } },
    { status: ok ? 200 : 503 },
  );
}
