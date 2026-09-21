export type LegalDoc = {
  slug: string;
  title: string;
  version: string;
  effective: string;
  sections: { heading: string; body: string }[];
};

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy policy",
    version: "0.1-draft",
    effective: "To be confirmed before launch",
    sections: [
      {
        heading: "Who we are",
        body: "Landlords BC operates this platform for rental-property owners in British Columbia. We have not invented a legal corporation name on this page. Counsel will complete the legal entity before launch.",
      },
      {
        heading: "What we collect",
        body: "We collect the minimum needed to run membership: display name, email, region, landlord type, and billing records via our payment processor. We do not collect tenant names for a public list. We do not store raw card numbers.",
      },
      {
        heading: "Private case files",
        body: "If you save a rental issue, that file is private to you. Staff cannot browse cases in the first version of the product.",
      },
      {
        heading: "Your rights",
        body: "You may request access, correction, export, or deletion. Account deletion includes a cooling-off period. Invoices may be retained as required by law.",
      },
      {
        heading: "Counsel review",
        body: "This is a shell for PIPA-aligned posture. It is not a legal opinion. Qualified Canadian privacy review is required before launch.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of use",
    version: "0.1-draft",
    effective: "To be confirmed before launch",
    sections: [
      {
        heading: "The service",
        body: "Landlords BC provides education, membership, and related tools. Content is general information, not legal advice, and not a substitute for the Residential Tenancy Branch.",
      },
      {
        heading: "Acceptable use",
        body: "You may not publish tenant identifiers, harass anyone, or use the service to discriminate or retaliate. We may suspend accounts that break these rules.",
      },
      {
        heading: "Membership",
        body: "Fees are annual. Prices live in the payment processor. Cancellation takes effect at period end unless we state otherwise in the final terms.",
      },
    ],
  },
  {
    slug: "community-guidelines",
    title: "Community guidelines",
    version: "0.1-draft",
    effective: "To be confirmed before launch",
    sections: [
      {
        heading: "What we encourage",
        body: "Constructive questions, evidence-based information, respectful disagreement, and privacy.",
      },
      {
        heading: "What we prohibit",
        body: "Harassment, threats, hate, discrimination, doxxing, personal attacks, private tenant information, retaliatory content, fraudulent information, and illegal activity.",
      },
      {
        heading: "Anonymous posts",
        body: "You may post anonymously to other members. The system still retains your identity for moderation. Anonymous does not mean untraceable.",
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie policy",
    version: "0.1-draft",
    effective: "To be confirmed before launch",
    sections: [
      {
        heading: "Essential cookies",
        body: "Session cookies are required to keep you signed in. They are not used for advertising.",
      },
      {
        heading: "Analytics",
        body: "Analytics cookies, if used, will be off until you opt in. We plan privacy-conscious, self-hosted analytics.",
      },
    ],
  },
  {
    slug: "data-retention",
    title: "Data retention",
    version: "0.1-draft",
    effective: "To be confirmed before launch",
    sections: [
      {
        heading: "Membership records",
        body: "We keep membership and invoice records for as long as you are a member and as required for tax and accounting.",
      },
      {
        heading: "Case files",
        body: "Private cases stay until you delete them or close your account, subject to a short cooling-off period.",
      },
      {
        heading: "Backups",
        body: "Encrypted backups lag live deletion by a defined window. We will publish that window before launch.",
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility statement",
    version: "0.1-draft",
    effective: "To be confirmed before launch",
    sections: [
      {
        heading: "Standard",
        body: "We aim to meet WCAG 2.2 AA: keyboard access, visible focus, labelled forms, and sufficient contrast.",
      },
      {
        heading: "Contact",
        body: "If you find a barrier, use the contact page. We want to know.",
      },
    ],
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((doc) => doc.slug === slug);
}
