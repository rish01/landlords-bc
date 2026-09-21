import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const monorepoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "../..");

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: monorepoRoot,
  poweredByHeader: false,
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
