import { Callout, LEGAL_DISCLAIMER } from "@lbc/ui";
import Link from "next/link";
import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";
import { issueCategories } from "../../content/issues.ts";

export const metadata = { title: "Issue Navigator" };

export default function GuidesPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="Issue Navigator"
          lede="Choose the situation. We will outline what it generally involves, which BC rules apply, and what to document."
        />
        <div className="mx-auto max-w-3xl px-6 pb-16">
          <ul className="divide-y divide-paper-2">
            {issueCategories.map((item) => (
              <li key={item.slug} className="py-4">
                <Link href={`/guides/${item.slug}`} className="font-medium text-navy-900">
                  {item.title}
                </Link>
                <p className="mt-1 text-ink-500">{item.summary}</p>
              </li>
            ))}
          </ul>
          <Callout className="mt-8">{LEGAL_DISCLAIMER}</Callout>
        </div>
      </main>
    </PublicShell>
  );
}
