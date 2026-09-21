export type IssueCategory = {
  slug: string;
  title: string;
  summary: string;
};

export const issueCategories: IssueCategory[] = [
  { slug: "non-payment-of-rent", title: "Non-payment of rent", summary: "When rent is late or unpaid, and what the RTB process generally involves." },
  { slug: "late-rent", title: "Late rent", summary: "Patterns of late payment, notices, and keeping a clear record." },
  { slug: "damage", title: "Damage", summary: "Documenting condition, deposits, and repairs without overreaching." },
  { slug: "noise", title: "Noise", summary: "Quiet enjoyment, evidence, and proportionate next steps." },
  { slug: "unauthorized-occupants", title: "Unauthorized occupants", summary: "Who may live in the unit under a typical BC tenancy agreement." },
  { slug: "lease-violations", title: "Lease violations", summary: "Material terms, written notice, and when dispute resolution applies." },
  { slug: "communication-problems", title: "Communication problems", summary: "Keeping correspondence professional and dated." },
  { slug: "move-out-issues", title: "Move-out issues", summary: "Condition inspection, keys, and the deposit timeline." },
  { slug: "security-deposit-questions", title: "Security deposit questions", summary: "What you can collect, how you hold it, and return rules." },
  { slug: "repairs", title: "Repairs", summary: "Landlord repair duties and how to document requests and work." },
  { slug: "eviction-related-questions", title: "Eviction-related questions", summary: "Official notices, service, and why unofficial templates are risky." },
  { slug: "dispute-resolution", title: "Dispute resolution", summary: "Applying to the RTB and preparing a file." },
  { slug: "other", title: "Other", summary: "Start here if you are unsure which issue fits." },
];

export function getIssue(slug: string): IssueCategory | undefined {
  return issueCategories.find((item) => item.slug === slug);
}
