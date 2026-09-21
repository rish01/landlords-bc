import { describe, expect, it } from "vitest";
import { indexablePaths, isNoindexPath } from "./site.ts";

describe("public indexing", () => {
  it("does not put stub or private routes in the sitemap list", () => {
    expect(indexablePaths).not.toContain("/community");
    expect(indexablePaths).not.toContain("/advocacy");
    expect(indexablePaths).not.toContain("/events");
    expect(indexablePaths).not.toContain("/internal/ui");
    expect(indexablePaths).toContain("/");
    expect(indexablePaths).toContain("/guides");
  });

  it("marks stubs and member trees as noindex", () => {
    expect(isNoindexPath("/community")).toBe(true);
    expect(isNoindexPath("/advocacy")).toBe(true);
    expect(isNoindexPath("/events")).toBe(true);
    expect(isNoindexPath("/admin/staff")).toBe(true);
    expect(isNoindexPath("/about")).toBe(false);
  });
});
