# Landlords BC

Digital home for BC landlords: membership, knowledge, community, and advocacy.

Product and technical design: [`docs/landlords-bc-design.md`](docs/landlords-bc-design.md).

## PR-01 scaffold

pnpm workspaces + Turborepo.

```
apps/web          Next.js App Router (standalone) — /healthz, /readyz
apps/worker       pg-boss hello job + health server
packages/ui       design system (empty until PR-02)
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

`AI_PROVIDER=none`. No product UI yet (homepage IA is PR-03).

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

## License

Private. All rights reserved.
