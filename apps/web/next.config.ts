import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const monorepoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "../..");

const nextConfig: NextConfig = {
  // Docker/ECS uses standalone. Vercel provides its own tracing — do not
  // set output there or the platform looks for a static "public" folder.
  ...(!process.env.VERCEL ? { output: "standalone" as const } : {}),
  outputFileTracingRoot: monorepoRoot,
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/navigator", destination: "/guides", permanent: true }];
  },
  transpilePackages: [
    "@lbc/ai",
    "@lbc/db",
    "@lbc/domain",
    "@lbc/emails",
    "@lbc/search",
    "@lbc/ui",
  ],
};

export default nextConfig;
