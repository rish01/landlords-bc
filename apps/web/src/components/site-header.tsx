"use client";

import { Button, Logo, cn } from "@lbc/ui";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loggedOutNav } from "../content/nav.ts";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = !overlay || scrolled;

  useEffect(() => {
    if (!overlay) {
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = solid
    ? "text-navy-800 hover:text-navy-950"
    : "text-paper-0 hover:text-white";

  return (
    <header
      className={cn(
        "z-40 w-full transition-colors duration-150",
        overlay ? "fixed top-0" : "sticky top-0",
        solid ? "border-b border-paper-2 bg-paper-0/95 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <Link href="/" className="shrink-0">
          <Logo inverted={!solid} />
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex" aria-label="Primary">
          {loggedOutNav.map((item) => (
            <Link key={item.href} href={item.href} className={cn("text-sm font-medium", linkClass)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link href="/login" className={cn("text-sm font-medium", linkClass)}>
            Log in
          </Link>
          <Button asChild variant={solid ? "cta" : "secondary"}>
            <Link href="/join">Join now</Link>
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Button asChild variant={solid ? "cta" : "secondary"} className="px-4">
            <Link href="/join">Join now</Link>
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex size-12 items-center justify-center rounded-[12px]",
              solid ? "text-navy-900" : "text-paper-0",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-paper-2 bg-paper-0 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {loggedOutNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-12 py-3 text-base text-navy-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="min-h-12 py-3 text-base text-navy-900" onClick={() => setOpen(false)}>
              Log in
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
