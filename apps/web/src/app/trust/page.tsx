import { PublicShell } from "../../components/public-shell.tsx";
import { PageIntro } from "../../components/page-intro.tsx";

export const metadata = { title: "Why trust us" };

const points = [
  {
    title: "Transparent governance",
    body: "Policies, community rules, and membership terms will be published and versioned. We will not hide behind unverifiable claims.",
  },
  {
    title: "Privacy commitment",
    body: "Cases are private. Member emails are never a public directory. Authorization is enforced on the server.",
  },
  {
    title: "Source attribution",
    body: "Guides cite official RTB and government resources. Unofficial templates are labelled as such.",
  },
  {
    title: "Dated information",
    body: "Tenancy rules change. Every article shows when it was published or last reviewed.",
  },
  {
    title: "Professional partnerships",
    body: "We will name partners only when there is a real relationship. We do not invent endorsements.",
  },
];

export default function TrustPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="Why trust us"
          lede="Credibility with landlords, government, media, and the public is a product requirement."
        />
        <div className="mx-auto max-w-3xl space-y-8 px-6 pb-16">
          {points.map((item) => (
            <section key={item.title}>
              <h2 className="font-display text-2xl text-navy-900">{item.title}</h2>
              <p className="mt-2 text-ink-500">{item.body}</p>
            </section>
          ))}
          <p className="text-sm text-ink-400">
            We do not publish unverifiable statistics. This page will be reviewed by counsel before
            launch.
          </p>
        </div>
      </main>
    </PublicShell>
  );
}
