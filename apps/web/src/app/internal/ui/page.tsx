import {
  AccessChip,
  ActionCard,
  BadgeGold,
  Button,
  Callout,
  Card,
  DocKindChip,
  EmptyState,
  Footer,
  Input,
  LEGAL_DISCLAIMER,
  Logo,
  ResourceCard,
  contrastRatio,
  formatRatio,
  passesAa,
  tokens,
} from "@lbc/ui";
import { notFound } from "next/navigation";
import { isInternalUiEnabled } from "../../../lib/internal-ui.ts";

export const dynamic = "force-dynamic";

const contrastRows = [
  { name: "accent-800", fg: tokens.accent800, small: true as const },
  { name: "accent-700", fg: tokens.accent700, small: false as const },
  { name: "accent-600", fg: tokens.accent600, small: false as const },
  { name: "danger-600", fg: tokens.danger600, small: true as const },
  { name: "success-700", fg: tokens.success700, small: true as const },
  { name: "warning-700", fg: tokens.warning700, small: true as const },
];

function ContrastCell({ fg, bg, requireSmall }: { fg: string; bg: string; requireSmall: boolean }) {
  const ratio = contrastRatio(fg, bg);
  const ok = passesAa(ratio, requireSmall ? "small" : "large");
  return (
    <td className={ok ? "text-success-700" : "text-danger-600"}>
      {formatRatio(ratio)} {requireSmall ? "AA small" : "AA large"} {ok ? "pass" : "fail"}
    </td>
  );
}

export default function InternalUiPage() {
  if (!isInternalUiEnabled()) {
    notFound();
  }

  const goldOnPaper = contrastRatio(tokens.badgeGold, tokens.paper0);
  const goldOnNavy = contrastRatio(tokens.badgeGold, tokens.navy950);
  const whiteOnAccent = contrastRatio(tokens.white, tokens.accent600);
  const whiteOnNavy = contrastRatio(tokens.white, tokens.navy900);

  return (
    <div className="min-h-screen bg-paper-0">
      <header className="border-b border-paper-2 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <p className="font-mono text-sm text-ink-500">/internal/ui · noindex</p>
        </div>
      </header>

      <main id="main" className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
        <section className="flex flex-col gap-4">
          <h1 className="text-display text-navy-900">Design system</h1>
          <p className="max-w-2xl text-lg text-ink-500">
            Tokens, type, and primitives for Landlords BC. Not default shadcn. Public pages load
            Fraunces + Plus Jakarta Sans only. IBM Plex Mono is loaded on this route for
            preview, and later on cases, billing, and admin.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-display text-[28px] leading-9 text-navy-900 md:text-4xl">
            Contrast table
          </h2>
          <p className="text-ink-500">
            Small text uses accent-800. Accent-600 is for large display and solid buttons with
            white text. Gold is decorative on navy, never small text on paper.
          </p>
          <div className="overflow-x-auto rounded-[12px] bg-white shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="border-b border-paper-2 text-navy-900">
                <tr>
                  <th className="px-4 py-3">Token</th>
                  <th className="px-4 py-3">On paper-0</th>
                  <th className="px-4 py-3">On white</th>
                </tr>
              </thead>
              <tbody>
                {contrastRows.map((row) => (
                  <tr key={row.name} className="border-b border-paper-2">
                    <td className="px-4 py-3 font-mono" style={{ color: row.fg }}>
                      {row.name}
                    </td>
                    <ContrastCell fg={row.fg} bg={tokens.paper0} requireSmall={row.small} />
                    <ContrastCell fg={row.fg} bg={tokens.white} requireSmall={row.small} />
                  </tr>
                ))}
                <tr className="border-b border-paper-2">
                  <td className="px-4 py-3 font-mono">white on accent-600</td>
                  <td colSpan={2} className="px-4 py-3 text-success-700">
                    {formatRatio(whiteOnAccent)} AA small{" "}
                    {passesAa(whiteOnAccent, "small") ? "pass" : "fail"}
                  </td>
                </tr>
                <tr className="border-b border-paper-2">
                  <td className="px-4 py-3 font-mono">white on navy-900</td>
                  <td colSpan={2} className="px-4 py-3 text-success-700">
                    {formatRatio(whiteOnNavy)} AA small{" "}
                    {passesAa(whiteOnNavy, "small") ? "pass" : "fail"}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-badge-gold">badge-gold</td>
                  <td className="px-4 py-3 text-ink-500">
                    {formatRatio(goldOnPaper)} on paper — do not use as small text
                  </td>
                  <td className="px-4 py-3 text-success-700">
                    {formatRatio(goldOnNavy)} on navy-950 (decorative)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-display text-[28px] leading-9 text-navy-900">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Join now</Button>
            <Button variant="cta">Join now</Button>
            <Button variant="secondary">Explore resources</Button>
            <Button variant="accent">Continue</Button>
            <Button variant="ghost">Learn more</Button>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-display text-[28px] leading-9 text-navy-900">Action cards</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ActionCard
              icon={<span aria-hidden>1</span>}
              title="I have a tenant issue"
              description="Find the relevant BC process and next step."
            />
            <ActionCard
              icon={<span aria-hidden>2</span>}
              title="I need a form"
              description="Official forms and organization templates."
            />
            <ActionCard
              icon={<span aria-hidden>3</span>}
              title="I need the rules"
              description="Plain-language guides to tenancy rules."
            />
            <ActionCard
              icon={<span aria-hidden>4</span>}
              title="I want to join"
              description="Membership, community, and member resources."
            />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-display text-[28px] leading-9 text-navy-900">
            Resource card and chips
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <ResourceCard
              title="Security deposits in BC"
              description="What you can collect, how you hold it, and what happens at move-out."
              category={<span className="text-sm text-ink-500">Move-out</span>}
              access={<AccessChip level="public" />}
              updated="1 Sep 2026"
            />
            <ResourceCard
              title="Notice to end tenancy"
              description="When an official RTB form is required, and how to serve it."
              category={<DocKindChip kind="official" />}
              access={<AccessChip level="members" />}
              updated="12 Aug 2026"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <DocKindChip kind="official" />
            <DocKindChip kind="template" />
            <DocKindChip kind="educational" />
            <DocKindChip kind="third_party" />
            <BadgeGold>Member</BadgeGold>
          </div>
        </section>

        <section className="flex max-w-md flex-col gap-4">
          <h2 className="font-display text-[28px] leading-9 text-navy-900">Form</h2>
          <Input label="Email" type="email" autoComplete="email" placeholder="you@example.com" />
          <Input label="Password" type="password" error="Use at least 12 characters." />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-display text-[28px] leading-9 text-navy-900">Callout and empty</h2>
          <Callout>{LEGAL_DISCLAIMER}</Callout>
          <EmptyState
            title="You have no cases yet. Start from the Issue Navigator or create one."
            action={<Button variant="accent">Open guides</Button>}
          />
          <Card>
            <p className="font-mono text-sm text-ink-500">INV-1042 · Plex Mono on this route</p>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
