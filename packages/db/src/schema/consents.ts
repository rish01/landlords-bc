import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "./better-auth.ts";

export const consentKind = pgEnum("consent_kind", [
  "privacy",
  "terms",
  "cookies_analytics",
  "casl_commercial",
  "directory_opt_in",
  "testimonial",
]);

export const consents = pgTable("consents", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  kind: consentKind("kind").notNull(),
  version: text("version").notNull(),
  grantedAt: timestamp("granted_at", { withTimezone: true }).defaultNow().notNull(),
  ipHash: text("ip_hash"),
  userAgentHash: text("user_agent_hash"),
  withdrawnAt: timestamp("withdrawn_at", { withTimezone: true }),
});
