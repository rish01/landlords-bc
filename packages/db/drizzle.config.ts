import { defineConfig } from "drizzle-kit";

/**
 * Schema is generated in PR-04 (`npx @better-auth/cli generate` merged here).
 * Migrations never run inside the web container at boot — ECS migrator task only.
 */
export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "postgres://lbc:lbc@localhost:5432/landlords_bc",
  },
});
