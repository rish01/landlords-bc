# `@lbc/db`

Drizzle schema and seeds. Better Auth identity tables are CLI-generated (`src/schema/better-auth.ts`). Application tables (`members`, RBAC, consents, audit, flags, plans, categories) live beside them.

## Commands

```bash
pnpm --filter @lbc/db generate   # drizzle-kit generate
pnpm --filter @lbc/db migrate    # apply migrations
pnpm --filter @lbc/db seed       # roles, permissions, categories, plans (no prices)
```

`DEV_SUPERADMIN_*` is refused when `NODE_ENV=production`. This package never writes a password hash; credential hashes belong on `account.password` via Better Auth (PR-05).
