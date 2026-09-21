import { Button } from "@lbc/ui";
import Link from "next/link";
import { PageIntro } from "./page-intro.tsx";
import { PublicShell } from "./public-shell.tsx";

export const stubRobots = { index: false, follow: false };

export function StubPage({
  title,
  lede,
  points,
}: {
  title: string;
  lede: string;
  points: string[];
}) {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro title={title} lede={lede} />
        <div className="mx-auto max-w-3xl px-6 pb-16">
          <ul className="mb-8 list-disc space-y-2 pl-5 text-ink-500">
            {points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button asChild variant="cta">
            <Link href="/join">Join now</Link>
          </Button>
        </div>
      </main>
    </PublicShell>
  );
}
