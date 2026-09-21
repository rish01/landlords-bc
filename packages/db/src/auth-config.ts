import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink } from "better-auth/plugins";
import { twoFactor } from "better-auth/plugins/two-factor";
import { createDb } from "./client.ts";

/**
 * Schema-generation config for `npx @better-auth/cli generate`.
 * The live Next.js handler lands in PR-05. Do not treat this as a runtime
 * auth server (no email senders, no cookie names).
 */
const db = createDb(
  process.env.DATABASE_URL ?? "postgres://lbc:lbc@localhost:5432/landlords_bc",
);

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg" }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 12,
  },
  user: {
    additionalFields: {
      status: {
        type: "string",
        required: false,
        defaultValue: "active",
        input: false,
      },
      lastLoginAt: {
        type: "date",
        required: false,
        input: false,
      },
    },
  },
  plugins: [
    twoFactor(),
    magicLink({
      sendMagicLink: async () => {
        /* PR-05 */
      },
    }),
  ],
});
