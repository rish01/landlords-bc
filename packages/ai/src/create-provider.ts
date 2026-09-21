import { noneProvider } from "./none.ts";
import type { AiProvider, AiProviderName } from "./types.ts";

function parseName(raw: string | undefined): AiProviderName {
  if (raw === undefined || raw === "" || raw === "none") {
    return "none";
  }
  if (raw === "spacexai" || raw === "xai") {
    return raw;
  }
  throw new Error(`Unknown AI_PROVIDER="${raw}". Allowed: none, spacexai, xai.`);
}

/**
 * Default until Phase 5 is `none`. SpaceXAI/xAI clients are added in PR-33
 * and stay flag-off until counsel signs the PIPA gate.
 */
export function createAiProvider(
  env: Record<string, string | undefined> = process.env,
): AiProvider {
  const name = parseName(env.AI_PROVIDER);
  if (name === "none") {
    return noneProvider;
  }
  throw new Error(
    `AI_PROVIDER=${name} is not implemented until Phase 5 (PR-33). Keep AI_PROVIDER=none.`,
  );
}
