# syntax=docker/dockerfile:1
FROM node:24-bookworm-slim AS deps
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ./
COPY apps/worker/package.json apps/worker/package.json
COPY packages/config/package.json packages/config/package.json
COPY packages/jobs/package.json packages/jobs/package.json
RUN pnpm install --frozen-lockfile

FROM node:24-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV WORKER_PORT=3001
RUN corepack enable
COPY --from=deps /app ./
COPY packages/config packages/config
COPY packages/jobs packages/jobs
COPY apps/worker apps/worker
USER node
EXPOSE 3001
CMD ["pnpm", "--filter", "@lbc/worker", "start"]
