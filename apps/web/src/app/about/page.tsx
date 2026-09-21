import { PublicShell } from "../../components/public-shell.tsx";
import { PageIntro } from "../../components/page-intro.tsx";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="About Landlords BC"
          lede="A professional home for rental-property owners in British Columbia."
        />
        <div className="mx-auto max-w-3xl space-y-4 px-6 pb-16 text-ink-500">
          <p>
            Landlords BC exists so that a landlord with a problem today can find the relevant BC
            process, document it privately, and ask peers without harming anyone’s privacy.
          </p>
          <p>
            We serve first-time basement-suite owners, condo landlords, multi-property owners,
            property managers, and rental-housing professionals. The tone is professional and
            non-adversarial. We do not publish tenant names, and we do not operate a “bad tenant”
            database.
          </p>
          <p>
            Educational material on this site is general information, not legal advice. Official
            government sources remain authoritative.
          </p>
        </div>
      </main>
    </PublicShell>
  );
}
