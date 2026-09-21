import type { MetadataRoute } from "next";
import { indexablePaths, siteUrl } from "../lib/site.ts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return indexablePaths.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
