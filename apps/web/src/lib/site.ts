export function siteUrl(): string {
  return process.env.APP_URL ?? "http://localhost:3000";
}

export const indexablePaths = [
  "/",
  "/resources",
  "/knowledge",
  "/forms",
  "/guides",
  "/government",
  "/about",
  "/trust",
  "/membership",
  "/join",
  "/legal/privacy",
  "/legal/terms",
  "/legal/community-guidelines",
  "/legal/cookies",
  "/legal/data-retention",
  "/legal/accessibility",
  "/contact",
  "/news",
] as const;

export const noindexPathPrefixes = [
  "/dashboard",
  "/cases",
  "/admin",
  "/internal",
  "/community",
  "/advocacy",
  "/events",
  "/profile",
  "/saved",
  "/notifications",
  "/directory",
  "/membership/manage",
  "/api",
  "/login",
] as const;

export function isNoindexPath(pathname: string): boolean {
  return noindexPathPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}
