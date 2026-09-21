# syntax=docker/dockerfile:1
FROM node:24-bookworm-slim AS deps
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ./
COPY apps/web/package.json apps/web/package.json
COPY packages/config/package.json packages/config/package.json
COPY packages/ui/package.json packages/ui/package.json
COPY packages/db/package.json packages/db/package.json
COPY packages/domain/package.json packages/domain/package.json
COPY packages/emails/package.json packages/emails/package.json
COPY packages/search/package.json packages/search/package.json
COPY packages/ai/package.json packages/ai/package.json
COPY packages/jobs/package.json packages/jobs/package.json
RUN pnpm install --frozen-lockfile

FROM node:24-bookworm-slim AS build
WORKDIR /app
RUN corepack enable
COPY --from=deps /app ./
COPY . .
RUN pnpm --filter @lbc/web build

FROM node:24-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
RUN useradd --system --uid 1001 nextjs
COPY --from=build --chown=nextjs:nextjs /app/apps/web/.next/standalone ./
COPY --from=build --chown=nextjs:nextjs /app/apps/web/.next/static ./apps/web/.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
