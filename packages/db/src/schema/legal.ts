import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const legalDocumentVersions = pgTable("legal_document_versions", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull(),
  version: text("version").notNull(),
  content: text("content").notNull(),
  effectiveAt: timestamp("effective_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
