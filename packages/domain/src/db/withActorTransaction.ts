/**
 * Authorization transaction wrappers land in PR-06.
 * Next.js proxy/middleware must never set RLS GUCs.
 */
export async function withActorTransaction(): Promise<never> {
  throw new Error("withActorTransaction is implemented in PR-06");
}

export async function withStripeWebhookTransaction(): Promise<never> {
  throw new Error("withStripeWebhookTransaction is implemented in PR-06");
}

export async function withMemberJobTransaction(): Promise<never> {
  throw new Error("withMemberJobTransaction is implemented in PR-06");
}
