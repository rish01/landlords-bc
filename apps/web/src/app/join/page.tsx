import { Button, Callout } from "@lbc/ui";
import Link from "next/link";
import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";

export const metadata = { title: "Join" };

export default function JoinPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="Join the BC landlord community"
          lede="Choose a plan first. You will see the live price before you create a password. We will not ask for a tenant’s name."
        />
        <div className="mx-auto max-w-3xl space-y-6 px-6 pb-16">
          <ol className="list-decimal space-y-2 pl-5 text-ink-500">
            <li>Select Individual or Property manager.</li>
            <li>Create your account (privacy and terms required; commercial email optional).</li>
            <li>Tell us your landlord type and region — no civic address.</li>
            <li>Pay by secure checkout. We never store card numbers.</li>
            <li>Confirmation and member access.</li>
          </ol>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="cta">
              <Link href="/membership">See plans</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/login">I already have an account</Link>
            </Button>
          </div>
          <Callout>
            Account creation and payment open with the membership system. Nothing on this page
            charges you today.
          </Callout>
        </div>
      </main>
    </PublicShell>
  );
}
