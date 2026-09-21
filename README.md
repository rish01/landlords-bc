# Landlords BC

Digital home for BC landlords: membership, knowledge, community, and advocacy.

Product and technical design: [`docs/landlords-bc-design.md`](docs/landlords-bc-design.md).

## PR-01 scaffold

pnpm workspaces + Turborepo.

```
apps/web          Next.js App Router (standalone) — /healthz, /readyz
apps/worker       pg-boss hello job + health server
packages/ui       design system (tokens, primitives, contrast tests)
packages/domain   use-cases / authz (wrappers stubbed until PR-06)
packages/db       Drizzle + Better Auth identity, RBAC, seeds (no prices)
packages/emails   React Email (templates in PR-15)
packages/search   FTS adapter interface (PR-14)
packages/jobs     pg-boss client + hello job
packages/ai       provider interface; AI_PROVIDER=none
packages/config   shared tsconfig
infra/terraform   VPC, ECS, RDS, Redis, S3, KMS, migrator task
```

Pinned at kickoff (2026-09-21): **Next.js 16** (Active LTS), **better-auth 1.7.5**, **PostgreSQL 18** (not older than 16), **Node 24**.

`AI_PROVIDER=none`. Public homepage and IA: `/`. Design system gallery: [`/internal/ui`](http://localhost:3000/internal/ui) (noindex, off in production unless `INTERNAL_UI=1`).

Next.js 16 uses `src/proxy.ts` in place of `middleware.ts`. Proxy never authorizes.

## Local development

Requires **Node 24** (see `.nvmrc`) and **pnpm 10**.

```bash
corepack enable
pnpm install
cp .env.example .env.local
docker compose up -d          # Postgres 18 + Redis
pnpm dev                      # web :3000, worker :3001
```

Checks:

```bash
pnpm lint
pnpm typecheck
pnpm test
```

- `GET /healthz` — process up, no deps
- `GET /readyz` — Postgres + Redis (web); Postgres + disk (worker). Stripe is not on the ready path.

Database (PR-04):

```bash
pnpm --filter @lbc/db generate   # SQL from schema
pnpm --filter @lbc/db migrate    # apply
pnpm --filter @lbc/db seed       # roles, permissions, categories, plans (no prices)
```

`DEV_SUPERADMIN_*` is forbidden in production. Credential hashes live on `account.password`, never on `user` or `members`.

Migrations never run inside the web container at boot. The ECS **migrator** task runs before new tasks receive traffic.

## Deploy on Vercel (preview)

This is a **Next.js** app in a pnpm monorepo, not a static site. Production systems of record are planned for AWS `ca-central-1`; Vercel is fine for a preview.

`vercel.json` at the repo root forces the Next.js builder (`pnpm --filter @lbc/web build`, output `apps/web/.next`). That file is what Vercel reads when **Root Directory** is the git root.

Preferred dashboard settings (**Settings → General → Build and Deployment**):

| Setting | Value |
|---|---|
| **Framework Preset** | Next.js |
| **Root Directory** | `apps/web` |
| **Output Directory** | leave default — turn **Override** off. Do not set `public` |
| **Build Command** | leave default |
| **Install Command** | leave default (`pnpm install`) |
| **Node.js Version** | 22.x or 24.x |
| **Include files outside Root Directory** | on (needed for `packages/*`) |

`No Output Directory named "public"` means Vercel used the Other/static preset after a successful `next build`. Turbo logs showing both `@lbc/web` and `@lbc/worker` mean Root Directory is the git root, not `apps/web`. Next.js writes `.next`; it does not emit a static `public` folder.

After changing settings, **Redeploy** (a settings-only change does not require a new commit). If Root Directory stays the git root, push the root `vercel.json` and redeploy from that commit.

## License

Private. All rights reserved.
