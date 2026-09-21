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
      <section className="relative isolate min-h-[85vh] overflow-hidden bg-navy-950 text-paper-0">
        <HeroVisual />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center gap-8 px-6 pt-28 pb-16">
          <p className="text-sm font-medium tracking-[0.04em] text-accent-100 uppercase">
            British Columbia
          </p>
          <h1 className="text-display max-w-4xl">BC Landlords. Better Informed. Better Connected.</h1>
          <p className="max-w-xl text-lg text-paper-1">
            Resources, education, community and advocacy built specifically for rental-property
            owners across British Columbia.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="cta">
              <Link href="/join">Join now</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/resources">Explore resources</Link>
            </Button>
          </div>
        </div>
      </section>

      <main id="main">
        <section className="border-b border-paper-2 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="font-display text-2xl text-navy-900">I have a problem</h2>
            <p className="mt-2 mb-6 max-w-2xl text-ink-500">
              Start with the issue. We will point you to the relevant BC process, documents, and
              official sources.
            </p>
            <IssueSearch />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/guides" className="block h-full">
              <ActionCard
                icon={<span aria-hidden>1</span>}
                title="I have a tenant issue"
                description="Find the relevant BC process and a calm next step."
              />
            </Link>
            <Link href="/forms" className="block h-full">
              <ActionCard
                icon={<span aria-hidden>2</span>}
                title="I need a form or document"
                description="Official forms, organization templates, and examples."
              />
            </Link>
            <Link href="/knowledge" className="block h-full">
              <ActionCard
                icon={<span aria-hidden>3</span>}
                title="I need to understand the rules"
                description="Plain-language guides to tenancy rules and processes."
              />
            </Link>
            <Link href="/join" className="block h-full">
              <ActionCard
                icon={<span aria-hidden>4</span>}
                title="I want to join the community"
                description="Membership, discussion, and a professional peer group."
              />
            </Link>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-navy-900">Why join</h2>
              <p className="mt-4 text-ink-500">
                You should not have to reconstruct the RTB site, a Facebook thread, and a folder of
                PDFs every time rent is late.
              </p>
              <p className="mt-3 text-ink-500">
                Landlords BC is a professional home: education first, private documentation, and a
                community that does not shame tenants.
              </p>
              <p className="mt-3 text-ink-500">
                We earn trust by citing official sources and by refusing a public “bad tenant”
                database.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="border-l-4 border-accent-700 bg-accent-50 px-4 py-3">
                <strong className="text-navy-900">Privacy by design.</strong>
                <span className="mt-1 block text-ink-500">Your cases stay yours. Staff cannot browse them in v1.</span>
              </li>
              <li className="border-l-4 border-navy-700 bg-paper-1 px-4 py-3">
                <strong className="text-navy-900">Written for BC.</strong>
                <span className="mt-1 block text-ink-500">RTA, RTB, and municipal context — not generic landlord tips.</span>
              </li>
              <li className="border-l-4 border-navy-700 bg-paper-1 px-4 py-3">
                <strong className="text-navy-900">A professional community.</strong>
                <span className="mt-1 block text-ink-500">Moderated. Evidence over venting. No tenant identifiers.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl text-navy-900">Member benefits</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <li key={item.title}>
                <h3 className="font-medium text-navy-900">{item.title}</h3>
                <p className="mt-2 text-ink-500">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl text-navy-900">Featured resources</h2>
              <Link href="/resources" className="text-sm font-medium text-accent-800">
                All resources
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {featuredResources.map((item) => (
                <Link key={item.title} href={item.href} className="block h-full">
                  <ResourceCard
                    title={item.title}
                    description={item.description}
                    category={<span className="text-sm text-ink-500">{item.category}</span>}
                    access={<AccessChip level={item.access} />}
                    updated={item.updated}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-navy-900">Latest BC updates</h2>
            <ul className="mt-6 divide-y divide-paper-2">
              {newsItems.map((item) => (
                <li key={item.title} className="py-4">
                  <p className="text-sm text-ink-400">Published {item.date}</p>
                  <Link href={item.href} className="mt-1 block font-medium text-navy-900">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-navy-900">From the community</h2>
            <p className="mt-2 text-sm text-ink-400">Editor-picked titles. Not a live member feed.</p>
            <ul className="mt-6 flex flex-col gap-4">
              {homepageTeasers.map((item) => (
                <li key={item.title} className="rounded-[12px] bg-white p-5 shadow-[var(--shadow-card)]">
                  <p className="text-xs font-medium tracking-wide text-accent-800 uppercase">
                    {item.topic}
                  </p>
                  <Link href={item.href} className="mt-1 block text-navy-900">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-navy-900">Advocacy</h2>
              <p className="mt-4 text-ink-500">
                Current focus: making official process information easier to navigate so landlords
                do not rely on rumour.
              </p>
              <Link href="/advocacy" className="mt-4 inline-block text-sm font-medium text-accent-800">
                Read the advocacy centre
              </Link>
            </div>
            <div>
              <h2 className="font-display text-3xl text-navy-900">Upcoming events</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {events.map((item) => (
                  <li key={item.title}>
                    <p className="font-medium text-navy-900">{item.title}</p>
                    <p className="text-sm text-ink-400">{item.when}</p>
                  </li>
                ))}
              </ul>
              <Link href="/events" className="mt-4 inline-block text-sm font-medium text-accent-800">
                Events
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl text-navy-900">Why trust us</h2>
          <p className="mt-3 max-w-2xl text-ink-500">
            Transparent governance, a privacy commitment, source attribution, dated guides, and
            professional partnerships. We do not publish unverifiable membership stats.
          </p>
          <Link href="/trust" className="mt-4 inline-block text-sm font-medium text-accent-800">
            Full trust page
          </Link>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.role} className="rounded-[12px] bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="text-navy-900">“{item.quote}”</p>
                <footer className="mt-3 text-sm text-ink-400">{item.role}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="bg-navy-950 text-paper-0">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16">
            <h2 className="font-display text-3xl">Join the BC landlord community</h2>
            <p className="max-w-xl text-paper-1">
              Get member access to guides, forms, and a moderated community built for rental-property
              owners in British Columbia.
            </p>
            <Button asChild variant="cta">
              <Link href="/join">Join now</Link>
            </Button>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-10">
          <Callout>{LEGAL_DISCLAIMER}</Callout>
        </div>
      </main>
    </PublicShell>
  );
}
