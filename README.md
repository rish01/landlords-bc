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
packages/db       Drizzle + pinned better-auth (schema in PR-04)
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

Migrations never run inside the web container at boot. The ECS **migrator** task runs before new tasks receive traffic.

## Deploy on Vercel (preview)

This is a **Next.js** app in a pnpm monorepo, not a static site. Production systems of record are planned for AWS `ca-central-1`; Vercel is fine for a preview.

In the Vercel project **Settings → General → Build and Deployment**:

| Setting | Value |
|---|---|
| **Framework Preset** | Next.js |
| **Root Directory** | `apps/web` |
| **Output Directory** | *empty* — delete `public` if it is set |
| **Build Command** | leave default (`next build`) |
| **Install Command** | leave default (`pnpm install`) |
| **Node.js Version** | 22.x or 24.x |

The error `No Output Directory named "public"` means the project is on the static/Other preset. Next.js writes `.next`, not `public`.

`apps/web/vercel.json` sets `"framework": "nextjs"`. After changing settings, **Redeploy**.

## License

Private. All rights reserved.
