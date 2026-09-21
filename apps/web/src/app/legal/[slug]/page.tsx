import { notFound } from "next/navigation";
import { PageIntro } from "../../../components/page-intro.tsx";
import { PublicShell } from "../../../components/public-shell.tsx";
import { getLegalDoc, legalDocs } from "../../../content/legal.ts";

export function generateStaticParams() {
  return legalDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  return { title: doc?.title ?? "Legal" };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) {
    notFound();
  }

  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro title={doc.title} lede={`Version ${doc.version}. ${doc.effective}.`} />
        <div className="mx-auto max-w-3xl space-y-8 px-6 pb-16">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl text-navy-900">{section.heading}</h2>
              <p className="mt-2 text-ink-500">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </PublicShell>
  );
}
