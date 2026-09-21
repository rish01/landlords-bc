import { eq } from "drizzle-orm";
import { createDb } from "../client.ts";
import {
  categories,
  featureFlags,
  issueCategories,
  legalDocumentVersions,
  membershipPlans,
  permissions,
  rolePermissions,
  roles,
} from "../schema/index.ts";
import {
  COMMUNITY_CATEGORIES,
  FEATURE_FLAGS,
  ISSUE_CATEGORIES,
  LEGAL_SLUGS,
  MEMBERSHIP_PLANS,
  PERMISSIONS,
  RESOURCE_CATEGORIES,
  ROLE_PERMISSIONS,
  ROLES,
  SERVICE_CATEGORIES,
} from "./catalog.ts";
import { assertDevSuperadminEnv, hasDevSuperadmin } from "./env.ts";

export async function seed(url: string) {
  assertDevSuperadminEnv();
  const db = createDb(url);

  for (const role of ROLES) {
    await db.insert(roles).values(role).onConflictDoNothing({ target: roles.slug });
  }
  for (const permission of PERMISSIONS) {
    await db.insert(permissions).values(permission).onConflictDoNothing({ target: permissions.key });
  }

  const roleRows = await db.select().from(roles);
  const permissionRows = await db.select().from(permissions);
  const roleBySlug = new Map(roleRows.map((row) => [row.slug, row]));
  const permissionByKey = new Map(permissionRows.map((row) => [row.key, row]));

  for (const [slug, keys] of Object.entries(ROLE_PERMISSIONS)) {
    const role = roleBySlug.get(slug);
    if (!role) {
      continue;
    }
    for (const key of keys) {
      const permission = permissionByKey.get(key);
      if (!permission) {
        continue;
      }
      await db
        .insert(rolePermissions)
        .values({ roleId: role.id, permissionId: permission.id })
        .onConflictDoNothing();
    }
  }

  for (const [index, item] of ISSUE_CATEGORIES.entries()) {
    await db
      .insert(issueCategories)
      .values({ ...item, sortOrder: index })
      .onConflictDoNothing({ target: issueCategories.slug });
  }

  const grouped = [
    { type: "content" as const, rows: RESOURCE_CATEGORIES },
    { type: "community" as const, rows: COMMUNITY_CATEGORIES },
    { type: "services" as const, rows: SERVICE_CATEGORIES },
  ];
  for (const group of grouped) {
    for (const [index, item] of group.rows.entries()) {
      await db
        .insert(categories)
        .values({ type: group.type, slug: item.slug, name: item.name, sortOrder: index })
        .onConflictDoNothing();
    }
  }

  for (const plan of MEMBERSHIP_PLANS) {
    await db
      .insert(membershipPlans)
      .values({
        slug: plan.slug,
        name: plan.name,
        description: plan.description,
        isActive: plan.isActive,
        isPublic: plan.isPublic,
        sortOrder: plan.sortOrder,
        entitlementDirectoryOptIn: false,
        stripeProductId: null,
        stripePriceId: null,
        unitAmountCents: null,
      })
      .onConflictDoNothing({ target: membershipPlans.slug });
  }

  for (const flag of FEATURE_FLAGS) {
    await db
      .insert(featureFlags)
      .values(flag)
      .onConflictDoNothing({ target: featureFlags.key });
  }

  for (const slug of LEGAL_SLUGS) {
    const existing = await db
      .select({ id: legalDocumentVersions.id })
      .from(legalDocumentVersions)
      .where(eq(legalDocumentVersions.slug, slug))
      .limit(1);
    if (existing[0]) {
      continue;
    }
    await db.insert(legalDocumentVersions).values({
      slug,
      version: "0.1-draft",
      content: `${slug} shell. Counsel reviews before launch.`,
    });
  }

  if (hasDevSuperadmin()) {
    console.warn(
      "[seed] DEV_SUPERADMIN_* is set. Staff bootstrap uses staff_invites in PR-05; no password is stored by this seed.",
    );
  }
}

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is required to seed");
  }
  await seed(url);
  console.log("[seed] ok");
}

if (import.meta.url === `file://${process.argv[1]?.replaceAll("\\", "/")}`) {
  main().catch((err: unknown) => {
    console.error(err);
    process.exit(1);
  });
}
