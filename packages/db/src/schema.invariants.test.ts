import { describe, expect, it } from "vitest";
import { account, members, user } from "./schema/index.ts";
import { PERMISSIONS } from "./seed/catalog.ts";

describe("identity schema", () => {
  it("keeps credential hashes on account.password, not user or members", () => {
    expect(account.password).toBeDefined();
    expect(user).not.toHaveProperty("password");
    expect(user).not.toHaveProperty("passwordHash");
    expect(members).not.toHaveProperty("password");
    expect(members).not.toHaveProperty("passwordHash");
  });

  it("uses Better Auth emailVerified boolean and session token", () => {
    expect(user.emailVerified).toBeDefined();
    expect(user.status).toBeDefined();
    expect(user.lastLoginAt).toBeDefined();
  });

  it("does not grant cases:read_any", () => {
    expect(PERMISSIONS.some((p) => p.key === ("cases:read_any" as string))).toBe(false);
  });
});
