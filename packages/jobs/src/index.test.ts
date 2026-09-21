import { describe, expect, it } from "vitest";
import { JOB_NAMES } from "./names.ts";

describe("JOB_NAMES", () => {
  it("includes the scaffold hello job", () => {
    expect(JOB_NAMES.hello).toBe("hello");
  });
});
