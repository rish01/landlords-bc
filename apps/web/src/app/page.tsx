import { Button, Footer, Logo } from "@lbc/ui";

/**
 * Scaffold placeholder. Public homepage IA ships in PR-03.
 */
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-paper-2 bg-paper-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
        </div>
      </header>
      <main id="main" className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
        <h1 className="text-display text-navy-900">Landlords BC</h1>
        <p className="text-lg text-ink-500">
          Platform scaffold is running. The public homepage ships in PR-03. Open the design
          system gallery while developing.
        </p>
        <div>
          <Button asChild variant="secondary">
            <a href="/internal/ui">View design system</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
