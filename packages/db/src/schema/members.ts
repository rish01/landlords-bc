import { boolean, pgEnum, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import { user } from "./better-auth.ts";

export const landlordType = pgEnum("landlord_type", [
  "first_time",
  "small",
  "multi",
  "manager",
  "professional",
]);

export const region = pgEnum("region", [
  "interior",
  "lower_mainland",
  "island",
  "north",
  "multiple",
]);

export const unitBand = pgEnum("unit_band", ["1", "2-4", "5-10", "11-50", "50+"]);

export const directoryContactMethod = pgEnum("directory_contact_method", ["form", "website"]);

export const members = pgTable(
  "members",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    phone: text("phone"),
    landlordType: landlordType("landlord_type"),
    region: region("region"),
    unitBand: unitBand("unit_band"),
    stripeCustomerId: text("stripe_customer_id"),
    directoryOptIn: boolean("directory_opt_in").default(false).notNull(),
    directoryBusinessName: text("directory_business_name"),
    directoryRegion: text("directory_region"),
    directoryLandlordType: text("directory_landlord_type"),
    directoryWebsite: text("directory_website"),
    directoryContactMethod: directoryContactMethod("directory_contact_method"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  (table) => [
    uniqueIndex("members_user_id_uidx").on(table.userId),
    uniqueIndex("members_stripe_customer_id_uidx").on(table.stripeCustomerId),
  ],
);
