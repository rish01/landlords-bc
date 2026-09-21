import { Button, Callout, LEGAL_DISCLAIMER } from "@lbc/ui";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "../../../components/page-intro.tsx";
import { PublicShell } from "../../../components/public-shell.tsx";
import { getIssue, issueCategories } from "../../../content/issues.ts";

export function generateStaticParams() {
  return issueCategories.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssue(slug);
  return {
    title: issue?.title ?? "Guide",
    robots: { index: false, follow: true },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssue(slug);
  if (!issue) {
    notFound();
  }

  const sections = [
    { heading: "What this generally involves", body: issue.summary },
    { heading: "Relevant BC rules", body: "This section will cite the RTA and RTB materials after legal review." },
    { heading: "Recommended documentation", body: "Dates, copies of notices, and photographs of the property — never a public post of tenant identifiers." },
    { heading: "Suggested next steps", body: "Stay proportionate. Check official sources. Get qualified advice when the stakes are high." },
    { heading: "Forms and templates", body: "Official government forms open in a new tab. Organization templates are labelled separately." },
    { heading: "Related education", body: "See the knowledge centre for longer explainers once they are published." },
    { heading: "Official government links", body: "Residential Tenancy Branch resources open with an “Official RTB resource” label." },
  ];

  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro title={issue.title} lede="Public educational layer. Saving a private case requires membership." />
        <div className="mx-auto max-w-3xl space-y-8 px-6 pb-16">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl text-navy-900">{section.heading}</h2>
              <p className="mt-2 text-ink-500">{section.body}</p>
            </section>
          ))}
          <p>
            <a
              href="https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies"
              className="text-accent-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              Official RTB resource
            </a>
          </p>
          <Callout>{LEGAL_DISCLAIMER}</Callout>
          <Button asChild variant="cta">
            <Link href="/join">Join to save this privately</Link>
          </Button>
        </div>
      </main>
    </PublicShell>
  );
}
