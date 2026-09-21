import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const planInterval = pgEnum("plan_interval", ["year"]);
export const taxBehaviour = pgEnum("tax_behaviour", ["inclusive", "exclusive"]);

/**
 * Prices live in Stripe. `unit_amount_cents` and stripe IDs are caches filled
 * by PR-10. Seeds must leave them null. Never commit live prices.
 */
export const membershipPlans = pgTable("membership_plans", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  interval: planInterval("interval").default("year").notNull(),
  currency: text("currency").default("CAD").notNull(),
  stripeProductId: text("stripe_product_id"),
  stripePriceId: text("stripe_price_id"),
  unitAmountCents: integer("unit_amount_cents"),
  entitlementCommunity: boolean("entitlement_community").default(true).notNull(),
  entitlementForms: boolean("entitlement_forms").default(true).notNull(),
  entitlementKnowledgeMember: boolean("entitlement_knowledge_member").default(true).notNull(),
  entitlementCases: boolean("entitlement_cases").default(true).notNull(),
  entitlementEvents: boolean("entitlement_events").default(true).notNull(),
  entitlementDirectoryOptIn: boolean("entitlement_directory_opt_in").default(false).notNull(),
  maxProperties: integer("max_properties"),
  isPublic: boolean("is_public").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  isActive: boolean("is_active").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const taxConfig = pgTable("tax_config", {
  id: uuid("id").defaultRandom().primaryKey(),
  label: text("label").notNull(),
  rateBps: integer("rate_bps").notNull(),
  taxBehaviour: taxBehaviour("tax_behaviour").notNull(),
  region: text("region").default("BC").notNull(),
  effectiveFrom: timestamp("effective_from", { withTimezone: true }).notNull(),
  accountantReviewedAt: timestamp("accountant_reviewed_at", { withTimezone: true }),
});
