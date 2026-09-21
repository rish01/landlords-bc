import { describe, expect, it } from "vitest";
import { isInternalUiEnabled } from "./internal-ui.ts";

describe("isInternalUiEnabled", () => {
  it("is on in development by default", () => {
    expect(isInternalUiEnabled({ NODE_ENV: "development" })).toBe(true);
  });

  it("is off in production unless INTERNAL_UI=1", () => {
    expect(isInternalUiEnabled({ NODE_ENV: "production" })).toBe(false);
    expect(isInternalUiEnabled({ NODE_ENV: "production", INTERNAL_UI: "1" })).toBe(true);
  });
});
