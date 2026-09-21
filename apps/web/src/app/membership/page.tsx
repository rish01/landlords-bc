import { Button } from "@lbc/ui";
import Link from "next/link";
import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";

export const metadata = { title: "Membership" };

const plans = [
  {
    name: "Individual",
    who: "Landlords who own and manage their own rental units.",
    points: ["Guides and forms", "Private documentation", "Community when it opens", "Annual billing in CAD"],
  },
  {
    name: "Property manager",
    who: "Professionals who manage rentals for others. Still a single-seat membership.",
    points: ["Same member library", "Professional community space", "Advocacy reporting", "Annual billing in CAD"],
  },
];

export default function MembershipPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="Membership"
          lede="Two live single-seat annual plans at launch. Prices are set in billing, never hard-coded on this page."
        />
        <div className="mx-auto grid max-w-5xl gap-6 px-6 pb-16 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-[12px] bg-white p-6 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-2xl text-navy-900">{plan.name}</h2>
              <p className="mt-2 text-ink-500">{plan.who}</p>
              <p className="mt-4 text-sm font-medium text-navy-800">Price set at checkout</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-ink-500">
                {plan.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="cta">
                  <Link href="/join">Join now</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </PublicShell>
  );
}
