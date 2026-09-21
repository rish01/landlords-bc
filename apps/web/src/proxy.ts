import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isNoindexPath } from "./lib/site.ts";

/**
 * Next.js 16 network boundary (`proxy.ts` replaces `middleware.ts`).
 *
 * Cookie *shape* checks may live here later (redirect to /login if the
 * session cookie is missing). This file must never authorize: every loader,
 * Route Handler, and Server Action calls auth.api.getSession() in Node
 * (PR-05 / PR-06). RLS GUCs are set only in packages/domain transaction
 * wrappers, never here.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  if (isNoindexPath(request.nextUrl.pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
