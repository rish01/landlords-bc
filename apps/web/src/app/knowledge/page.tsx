import { Callout, LEGAL_DISCLAIMER } from "@lbc/ui";
import Link from "next/link";
import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";

export const metadata = { title: "Knowledge" };

const topics = [
  { href: "/guides/security-deposit-questions", title: "Security deposits" },
  { href: "/guides/move-out-issues", title: "Move-out" },
  { href: "/guides/repairs", title: "Repairs" },
  { href: "/guides/dispute-resolution", title: "Dispute resolution" },
];

export default function KnowledgePage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="Knowledge centre"
          lede="Long-form, BC-specific explanations. Dated. Cited. Not a substitute for legal advice."
        />
        <div className="mx-auto max-w-3xl space-y-6 px-6 pb-16">
          <ul className="divide-y divide-paper-2">
            {topics.map((item) => (
              <li key={item.href} className="py-3">
                <Link href={item.href} className="text-lg text-navy-900">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Callout>{LEGAL_DISCLAIMER}</Callout>
        </div>
      </main>
    </PublicShell>
  );
}
