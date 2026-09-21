import { Button } from "@lbc/ui";
import Link from "next/link";
import { PublicShell } from "../components/public-shell.tsx";

export default function NotFound() {
  return (
    <PublicShell>
      <main id="main" className="mx-auto flex max-w-xl flex-1 flex-col gap-6 px-6 py-24">
        <h1 className="font-display text-4xl text-navy-900">Page not found</h1>
        <p className="text-ink-500">That address is not a page on Landlords BC.</p>
        <Button asChild variant="secondary">
          <Link href="/">Go home</Link>
        </Button>
      </main>
    </PublicShell>
  );
}
