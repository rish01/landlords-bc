import { describe, expect, it } from "vitest";
import { createAiProvider } from "./create-provider.ts";

describe("createAiProvider", () => {
  it("defaults to none and refuses without calling a model", async () => {
    const provider = createAiProvider({ AI_PROVIDER: "none" });
    expect(provider.name).toBe("none");
    const result = await provider.complete({
      purpose: "resource_assistant",
      memberId: "00000000-0000-0000-0000-000000000000",
      input: "What is a security deposit in BC?",
      citations: [],
    });
    expect(result.refused).toBe(true);
    expect(result.citationIds).toEqual([]);
    expect(result.text).toMatch(/not provide legal advice/i);
  });

  it("rejects live providers until Phase 5", () => {
    expect(() => createAiProvider({ AI_PROVIDER: "spacexai" })).toThrow(/Phase 5/);
  });
});
