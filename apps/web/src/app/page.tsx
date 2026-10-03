import {
  AccessChip,
  ActionCard,
  Button,
  Callout,
  LEGAL_DISCLAIMER,
  ResourceCard,
} from "@lbc/ui";
import Link from "next/link";
import { HeroVisual } from "../components/hero-visual.tsx";
import { IssueSearch } from "../components/issue-search.tsx";
import { PublicShell } from "../components/public-shell.tsx";
import {
  benefits,
  events,
  featuredResources,
  homepageTeasers,
  newsItems,
  testimonials,
} from "../content/home.ts";

export default function HomePage() {
  return (
    <PublicShell overlayHero>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_center_left,rgba(148,163,184,0.18),transparent_38%)]" />
        <HeroVisual />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center gap-8 px-6 pb-16 pt-28 lg:px-12">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-white/70">
            British Columbia
          </p>
          <div className="max-w-4xl">
            <h1 className="text-[3.2rem] font-medium leading-[0.9] tracking-[-0.06em] text-white md:text-[5.4rem]">
              BC landlords,
              <span className="block text-white/75">simplified.</span>
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/75 md:text-xl">
            Resources, education, community, and advocacy built for the realities of renting in
            British Columbia.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="cta" className="!rounded-full !px-6 !py-3 !text-base">
              <Link href="/join">Join now</Link>
            </Button>
            <Button asChild variant="secondary" className="!rounded-full !border-white/20 !bg-white/5 !px-6 !py-3 !text-base !text-white hover:!bg-white/10">
              <Link href="/resources">Explore resources</Link>
            </Button>
          </div>
        </div>
      </section>

      <main id="main" className="bg-[#f5f5f5] text-[#111111]">
        <section className="border-b border-black/5 bg-white/80">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-12">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.26em] text-black/50">
                  Start here
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-black md:text-5xl">
                  I have a problem.
                </h2>
              </div>
            </div>
            <IssueSearch />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Link href="/guides" className="block h-full">
              <ActionCard
                icon={<span aria-hidden>01</span>}
                title="Tenant issue"
                description="Find the relevant BC process and a calm next step."
              />
            </Link>
            <Link href="/forms" className="block h-full">
              <ActionCard
                icon={<span aria-hidden>02</span>}
                title="Forms & docs"
                description="Official forms, templates, and examples."
              />
            </Link>
            <Link href="/knowledge" className="block h-full">
              <ActionCard
                icon={<span aria-hidden>03</span>}
                title="Understand the rules"
                description="Plain-language guidance on tenancy law and process."
              />
            </Link>
            <Link href="/join" className="block h-full">
              <ActionCard
                icon={<span aria-hidden>04</span>}
                title="Join the community"
                description="Membership built around professional landlord support."
              />
            </Link>
          </div>
        </section>

        <section className="bg-[#ededed]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-black/50">Why join</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.06em] text-black md:text-5xl">
                Clarity without the chaos.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-black/70">
                You should not have to reconstruct the RTB site, a Facebook thread, and a folder of
                PDFs every time rent is late.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-black/70">
                Landlords BC gives you privacy, context, and a professional community built for
                real-world landlord problems.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_18px_48px_rgba(17,17,17,0.08)]">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/50">01</p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.05em] text-black">Privacy by design</h3>
                <p className="mt-3 text-base leading-7 text-black/65">
                  Your cases stay yours. Staff cannot browse them in v1.
                </p>
              </div>
              <div className="rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_18px_48px_rgba(17,17,17,0.08)]">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/50">02</p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.05em] text-black">Written for BC</h3>
                <p className="mt-3 text-base leading-7 text-black/65">
                  RTA, RTB, and municipal context — not generic landlord tips.
                </p>
              </div>
              <div className="rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_18px_48px_rgba(17,17,17,0.08)]">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/50">03</p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.05em] text-black">Professional community</h3>
                <p className="mt-3 text-base leading-7 text-black/65">
                  Moderated. Evidence over venting. No tenant identifiers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-black/50">Member benefits</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-black md:text-5xl">
                Built to feel premium.
              </h2>
            </div>
          </div>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <li key={item.title} className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.04)]">
                <h3 className="text-xl font-medium tracking-[-0.04em] text-black">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-black/65">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-12">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.26em] text-black/50">Resources</p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-black md:text-5xl">
                  Featured guidance.
                </h2>
              </div>
              <Link href="/resources" className="text-sm font-medium text-black underline-offset-4 hover:underline">
                All resources
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {featuredResources.map((item) => (
                <Link key={item.title} href={item.href} className="block h-full">
                  <ResourceCard
                    title={item.title}
                    description={item.description}
                    category={<span className="text-sm text-black/65">{item.category}</span>}
                    access={<AccessChip level={item.access} />}
                    updated={item.updated}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-black/50">News</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-black md:text-5xl">
              Latest BC updates.
            </h2>
            <ul className="mt-8 divide-y divide-black/10">
              {newsItems.map((item) => (
                <li key={item.title} className="py-5">
                  <p className="text-sm text-black/50">Published {item.date}</p>
                  <Link href={item.href} className="mt-2 block text-lg font-medium text-black hover:text-black/75">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-black/50">Community</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-black md:text-5xl">
              From the community.
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {homepageTeasers.map((item) => (
                <li key={item.title} className="rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_12px_30px_rgba(17,17,17,0.04)]">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-black/50">
                    {item.topic}
                  </p>
                  <Link href={item.href} className="mt-3 block text-lg font-medium text-black hover:text-black/75">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1fr_1fr] lg:px-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-black/50">Advocacy</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-black md:text-5xl">
                Making process easier.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-black/70">
                Current focus: making official process information easier to navigate so landlords do
                not rely on rumour.
              </p>
              <Link href="/advocacy" className="mt-6 inline-block text-sm font-medium text-black underline-offset-4 hover:underline">
                Read the advocacy centre
              </Link>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-black/50">Events</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-black md:text-5xl">
                Upcoming events.
              </h2>
              <ul className="mt-8 space-y-4">
                {events.map((item) => (
                  <li key={item.title} className="rounded-[20px] border border-black/10 bg-[#f5f5f5] p-5">
                    <p className="text-lg font-medium text-black">{item.title}</p>
                    <p className="mt-1 text-sm text-black/55">{item.when}</p>
                  </li>
                ))}
              </ul>
              <Link href="/events" className="mt-6 inline-block text-sm font-medium text-black underline-offset-4 hover:underline">
                Events
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-12">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-black/50">Trust</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-black md:text-5xl">
              Why trust us.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-black/70">
            Transparent governance, a privacy commitment, source attribution, dated guides, and
            professional partnerships. We do not publish unverifiable membership stats.
          </p>
          <Link href="/trust" className="mt-6 inline-block text-sm font-medium text-black underline-offset-4 hover:underline">
            Full trust page
          </Link>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.role} className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_12px_30px_rgba(17,17,17,0.04)]">
                <p className="text-lg leading-8 text-black">\"{ item.quote}\"</p>
                <footer className="mt-4 text-sm uppercase tracking-[0.2em] text-black/50">{item.role}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="bg-[#0a0a0a] text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-12 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-white/60">Join now</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-white md:text-5xl">
                Join the BC landlord community.
              </h2>
            </div>
            <Button asChild variant="cta" className="!rounded-full !px-6 !py-3 !text-base !bg-white !text-black hover:!bg-[#eaeaea]">
              <Link href="/join">Join now</Link>
            </Button>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
          <Callout>{LEGAL_DISCLAIMER}</Callout>
        </div>
      </main>
    </PublicShell>
  );
}