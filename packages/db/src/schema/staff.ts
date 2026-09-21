import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "./better-auth.ts";
import { roles } from "./rbac.ts";

export const staffInvites = pgTable("staff_invites", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull(),
  roleId: uuid("role_id")
    .notNull()
    .references(() => roles.id),
  tokenHash: text("token_hash").notNull().unique(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  acceptedAt: timestamp("accepted_at", { withTimezone: true }),
  createdBy: text("created_by").references(() => user.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
