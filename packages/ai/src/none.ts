import type { AiProvider, CompletionRequest, CompletionResponse } from "./types.ts";

const REFUSAL =
  "AI features are not enabled. This platform does not provide legal advice.";

export const noneProvider: AiProvider = {
  name: "none",
  complete(_req: CompletionRequest): Promise<CompletionResponse> {
    return Promise.resolve({
      text: REFUSAL,
      citationIds: [],
      refused: true,
    });
  },
};
