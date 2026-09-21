import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site.ts";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
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
        "/legal",
        "/contact",
        "/news",
      ],
      disallow: [
        "/dashboard",
        "/cases",
        "/community",
        "/membership/manage",
        "/profile",
        "/admin",
        "/api",
        "/saved",
        "/notifications",
        "/directory",
        "/internal",
        "/advocacy",
        "/events",
        "/login",
      ],
    },
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
