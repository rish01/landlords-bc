import { NextResponse } from "next/server";

/**
 * Liveness: process is up. No dependency checks (a hung DB must not
 * kill the kube/ECS liveness probe and trigger a crash loop).
 */
export function GET() {
  return NextResponse.json({ ok: true, service: "web" });
}
