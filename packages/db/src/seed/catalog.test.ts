import { describe, expect, it } from "vitest";
import {
  FEATURE_FLAGS,
  ISSUE_CATEGORIES,
  MEMBERSHIP_PLANS,
  RESOURCE_CATEGORIES,
  ROLE_PERMISSIONS,
} from "./catalog.ts";

describe("seed catalog", () => {
  it("has 13 issue categories", () => {
    expect(ISSUE_CATEGORIES).toHaveLength(13);
  });

  it("has resource category seeds from the brief", () => {
    expect(RESOURCE_CATEGORIES.map((c) => c.slug)).toContain("landlord-basics");
    expect(RESOURCE_CATEGORIES.map((c) => c.slug)).toContain("bc-tenancy-rules");
  });

  it("does not put prices in git", () => {
    for (const plan of MEMBERSHIP_PLANS) {
      expect(plan).not.toHaveProperty("unitAmountCents");
      expect(plan).not.toHaveProperty("stripePriceId");
    }
    const live = MEMBERSHIP_PLANS.filter((p) => p.isActive).map((p) => p.slug);
    expect(live).toEqual(["individual", "property-manager"]);
  });

  it("keeps Phase 2–5 flags off and guides on", () => {
    expect(FEATURE_FLAGS.find((f) => f.key === "guides")?.enabled).toBe(true);
    expect(FEATURE_FLAGS.find((f) => f.key === "community")?.enabled).toBe(false);
    expect(FEATURE_FLAGS.find((f) => f.key === "directory")?.enabled).toBe(false);
    expect(FEATURE_FLAGS.find((f) => f.key === "ai.assistant")?.enabled).toBe(false);
  });

  it("maps Super Admin to every catalogued permission except cases:read_any", () => {
    expect(ROLE_PERMISSIONS.super_admin).not.toContain("cases:read_any");
    expect(ROLE_PERMISSIONS.super_admin).toContain("staff:manage");
    expect(ROLE_PERMISSIONS.content_admin).not.toContain("members:write");
  });
});
