import { boolean, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const featureFlags = pgTable("feature_flags", {
  key: text("key").primaryKey(),
  enabled: boolean("enabled").default(false).notNull(),
  payload: jsonb("payload").$type<Record<string, unknown>>(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
