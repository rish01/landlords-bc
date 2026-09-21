import { integer, pgEnum, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const categoryType = pgEnum("category_type", [
  "content",
  "community",
  "news",
  "advocacy",
  "forms",
  "services",
]);

export const categories = pgTable(
  "categories",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    type: categoryType("type").notNull(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    sortOrder: integer("sort_order").default(0).notNull(),
    parentId: uuid("parent_id"),
  },
  (table) => [uniqueIndex("categories_type_slug_uidx").on(table.type, table.slug)],
);

export const issueCategories = pgTable("issue_categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  summary: text("summary").notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
