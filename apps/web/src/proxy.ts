import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js 16 network boundary (`proxy.ts` replaces `middleware.ts`).
 *
 * Cookie *shape* checks may live here later (redirect to /login if the
 * session cookie is missing). This file must never authorize: every loader,
 * Route Handler, and Server Action calls auth.api.getSession() in Node
 * (PR-05 / PR-06). RLS GUCs are set only in packages/domain transaction
 * wrappers, never here.
 */
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
