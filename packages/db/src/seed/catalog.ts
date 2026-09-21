export const ROLES = [
  { slug: "super_admin", name: "Super Admin" },
  { slug: "content_admin", name: "Content Admin" },
  { slug: "community_moderator", name: "Community Moderator" },
  { slug: "membership_admin", name: "Membership Admin" },
  { slug: "advocacy_admin", name: "Advocacy Admin" },
] as const;

export const PERMISSIONS = [
  { key: "staff:manage", description: "Invite and manage staff users and roles" },
  { key: "audit:read", description: "Read audit logs" },
  { key: "flags:write", description: "Change feature flags" },
  { key: "content:read", description: "Read CMS content" },
  { key: "content:write", description: "Write CMS content" },
  { key: "events:write", description: "Create and edit events" },
  { key: "community:moderate", description: "Moderate community posts" },
  { key: "community:reveal_author", description: "Reveal anonymous post authors" },
  { key: "members:read", description: "Read member billing profiles" },
  { key: "members:write", description: "Update membership records" },
  { key: "billing:refund", description: "Issue refunds" },
  { key: "plans:write", description: "Edit plan names and entitlements (not prices)" },
  { key: "advocacy:aggregate_read", description: "Read advocacy aggregates without identity" },
  { key: "advocacy:cms_write", description: "Write advocacy CMS" },
  { key: "notifications:broadcast", description: "Send organization broadcasts" },
] as const;

export const ROLE_PERMISSIONS: Record<(typeof ROLES)[number]["slug"], readonly string[]> = {
  super_admin: PERMISSIONS.map((p) => p.key),
  content_admin: ["content:read", "content:write", "events:write", "advocacy:cms_write"],
  community_moderator: ["community:moderate", "community:reveal_author"],
  membership_admin: [
    "members:read",
    "members:write",
    "billing:refund",
    "plans:write",
    "notifications:broadcast",
  ],
  advocacy_admin: ["advocacy:aggregate_read", "advocacy:cms_write"],
};

export const ISSUE_CATEGORIES = [
  { slug: "non-payment-of-rent", name: "Non-payment of rent", summary: "When rent is late or unpaid, and what the RTB process generally involves." },
  { slug: "late-rent", name: "Late rent", summary: "Patterns of late payment, notices, and keeping a clear record." },
  { slug: "damage", name: "Damage", summary: "Documenting condition, deposits, and repairs without overreaching." },
  { slug: "noise", name: "Noise", summary: "Quiet enjoyment, evidence, and proportionate next steps." },
  { slug: "unauthorized-occupants", name: "Unauthorized occupants", summary: "Who may live in the unit under a typical BC tenancy agreement." },
  { slug: "lease-violations", name: "Lease violations", summary: "Material terms, written notice, and when dispute resolution applies." },
  { slug: "communication-problems", name: "Communication problems", summary: "Keeping correspondence professional and dated." },
  { slug: "move-out-issues", name: "Move-out issues", summary: "Condition inspection, keys, and the deposit timeline." },
  { slug: "security-deposit-questions", name: "Security deposit questions", summary: "What you can collect, how you hold it, and return rules." },
  { slug: "repairs", name: "Repairs", summary: "Landlord repair duties and how to document requests and work." },
  { slug: "eviction-related-questions", name: "Eviction-related questions", summary: "Official notices, service, and why unofficial templates are risky." },
  { slug: "dispute-resolution", name: "Dispute resolution", summary: "Applying to the RTB and preparing a file." },
  { slug: "other", name: "Other", summary: "Start here if you are unsure which issue fits." },
] as const;

export const RESOURCE_CATEGORIES = [
  { slug: "landlord-basics", name: "Landlord basics" },
  { slug: "tenancy-agreements", name: "Tenancy agreements" },
  { slug: "rent-payments", name: "Rent payments" },
  { slug: "maintenance", name: "Maintenance" },
  { slug: "notices", name: "Notices" },
  { slug: "move-in", name: "Move-in" },
  { slug: "move-out", name: "Move-out" },
  { slug: "dispute-resolution", name: "Dispute resolution" },
  { slug: "documentation", name: "Documentation" },
  { slug: "property-management", name: "Property management" },
  { slug: "insurance", name: "Insurance" },
  { slug: "tax-financial", name: "Tax and financial" },
  { slug: "bc-tenancy-rules", name: "BC tenancy rules" },
  { slug: "municipal-rules", name: "Municipal rules" },
  { slug: "advocacy", name: "Advocacy" },
  { slug: "professional-services", name: "Professional services" },
] as const;

export const COMMUNITY_CATEGORIES = [
  { slug: "general-discussion", name: "General Discussion" },
  { slug: "tenant-issues", name: "Tenant Issues" },
  { slug: "repairs-maintenance", name: "Repairs & Maintenance" },
  { slug: "notices-documentation", name: "Notices & Documentation" },
  { slug: "dispute-resolution", name: "Dispute Resolution" },
  { slug: "property-management", name: "Property Management" },
  { slug: "new-landlords", name: "New Landlords" },
  { slug: "experienced-landlords", name: "Experienced Landlords" },
  { slug: "bc-rental-regulations", name: "BC Rental Regulations" },
  { slug: "municipal-issues", name: "Municipal Issues" },
  { slug: "insurance", name: "Insurance" },
  { slug: "taxes", name: "Taxes" },
  { slug: "contractors-services", name: "Contractors & Services" },
  { slug: "advocacy", name: "Advocacy" },
  { slug: "general-business", name: "General Business" },
] as const;

export const SERVICE_CATEGORIES = [
  { slug: "lawyers", name: "Lawyers" },
  { slug: "accountants", name: "Accountants" },
  { slug: "insurance", name: "Insurance" },
  { slug: "property-managers", name: "Property managers" },
  { slug: "contractors", name: "Contractors" },
  { slug: "plumbers", name: "Plumbers" },
  { slug: "electricians", name: "Electricians" },
  { slug: "inspectors", name: "Inspectors" },
  { slug: "cleaning", name: "Cleaning" },
  { slug: "restoration", name: "Restoration" },
  { slug: "real-estate", name: "Real estate" },
] as const;

export const FEATURE_FLAGS: { key: string; enabled: boolean }[] = [
  { key: "guides", enabled: true },
  { key: "community", enabled: false },
  { key: "cases", enabled: false },
  { key: "advocacy", enabled: false },
  { key: "directory", enabled: false },
  { key: "services", enabled: false },
  { key: "events", enabled: false },
  { key: "ai.assistant", enabled: false },
  { key: "ai.nl_search", enabled: false },
  { key: "ai.issue_summary", enabled: false },
  { key: "ai.doc_organize", enabled: false },
];

export const MEMBERSHIP_PLANS = [
  {
    slug: "individual",
    name: "Individual",
    description: "Single-seat annual membership for landlords who own and manage their own units.",
    isActive: true,
    isPublic: true,
    sortOrder: 1,
  },
  {
    slug: "property-manager",
    name: "Property manager",
    description: "Single-seat annual membership for professionals who manage rentals for others.",
    isActive: true,
    isPublic: true,
    sortOrder: 2,
  },
  {
    slug: "multi-property",
    name: "Multi-property",
    description: "Inactive until launched. Not a multi-seat organization.",
    isActive: false,
    isPublic: false,
    sortOrder: 10,
  },
  {
    slug: "professional-corporate",
    name: "Professional / corporate",
    description: "Inactive until launched. Seats are a post-v1 extension.",
    isActive: false,
    isPublic: false,
    sortOrder: 11,
  },
  {
    slug: "premium",
    name: "Premium",
    description: "Inactive until launched.",
    isActive: false,
    isPublic: false,
    sortOrder: 12,
  },
] as const;

export const LEGAL_SLUGS = [
  "privacy",
  "terms",
  "community-guidelines",
  "cookies",
  "data-retention",
  "accessibility",
] as const;
