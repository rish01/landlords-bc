import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";

export const metadata = { title: "Government resources" };

const links = [
  {
    href: "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies",
    title: "Residential Tenancy Branch",
    note: "Official RTB resource",
  },
  {
    href: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/02078_01",
    title: "Residential Tenancy Act",
    note: "Official RTB resource",
  },
];

export default function GovernmentPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="BC government resources"
          lede="We send you to official pages. We do not host government forms as if they were ours."
        />
        <ul className="mx-auto max-w-3xl space-y-4 px-6 pb-16">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-lg text-accent-800"
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.title}
              </a>
              <p className="text-sm text-ink-400">{item.note} — opens in a new tab.</p>
            </li>
          ))}
        </ul>
      </main>
    </PublicShell>
  );
}
