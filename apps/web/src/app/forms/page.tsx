import { Callout, DocKindChip, LEGAL_DISCLAIMER } from "@lbc/ui";
import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";

export const metadata = { title: "Forms" };

export default function FormsPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="Forms and documents"
          lede="Official government forms are linked out. Organization templates are labelled so they cannot be mistaken for RTB documents."
        />
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 pb-16">
          <div className="flex flex-wrap gap-2">
            <DocKindChip kind="official" />
            <DocKindChip kind="template" />
            <DocKindChip kind="educational" />
            <DocKindChip kind="third_party" />
          </div>
          <p className="text-ink-500">
            The library is being populated with legally reviewed items. Until then, start with the{" "}
            <a className="text-accent-800" href="/government">
              government resource layer
            </a>
            .
          </p>
          <Callout>{LEGAL_DISCLAIMER}</Callout>
        </div>
      </main>
    </PublicShell>
  );
}
