import { seed } from "./index.ts";

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("DATABASE_URL is required to seed");
}

await seed(url);
console.log("[seed] ok");
