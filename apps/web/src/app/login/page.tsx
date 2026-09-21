import { Button, Callout, Input } from "@lbc/ui";
import Link from "next/link";
import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";

export const metadata = {
  title: "Log in",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro title="Log in" lede="Sign in to your Landlords BC member account." />
        <form className="mx-auto flex max-w-md flex-col gap-4 px-6 pb-16">
          <Input label="Email" type="email" name="email" autoComplete="email" required />
          <Input
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
          <Button type="button">Log in</Button>
          <p className="text-sm text-ink-500">
            <Link href="/join" className="text-accent-800">
              Join now
            </Link>
            {" · "}
            Member sign-in is not connected yet. The form is here so the navigation never 404s.
          </p>
          <Callout>
            Authentication ships with membership. We will never ask for your password by email.
          </Callout>
        </form>
      </main>
    </PublicShell>
  );
}
