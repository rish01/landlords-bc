import { describe, expect, it } from "vitest";
import { assertDevSuperadminEnv } from "./env.ts";

describe("DEV_SUPERADMIN guard", () => {
  it("allows the vars outside production", () => {
    expect(() =>
      assertDevSuperadminEnv({
        NODE_ENV: "development",
        DEV_SUPERADMIN_EMAIL: "ops@example.com",
      }),
    ).not.toThrow();
  });

  it("refuses the vars in production", () => {
    expect(() =>
      assertDevSuperadminEnv({
        NODE_ENV: "production",
        DEV_SUPERADMIN_EMAIL: "ops@example.com",
      }),
    ).toThrow(/forbidden/);
  });
});
