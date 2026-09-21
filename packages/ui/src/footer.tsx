import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn.ts";
import { Logo } from "./logo.tsx";

export type FooterLink = {
  href: string;
  label: string;
};

const defaultLinks: FooterLink[] = [
  { href: "/about", label: "About" },
  { href: "/trust", label: "Why trust us" },
  { href: "/resources", label: "Resources" },
  { href: "/membership", label: "Membership" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/community-guidelines", label: "Community guidelines" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/accessibility", label: "Accessibility" },
];

export type FooterProps = HTMLAttributes<HTMLElement> & {
  links?: FooterLink[];
  wordmark?: ReactNode;
  children?: ReactNode;
};

export function Footer({
  links = defaultLinks,
  wordmark,
  className,
  children,
  ...props
}: FooterProps) {
  return (
    <footer className={cn("bg-navy-950 text-paper-1", className)} {...props}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        {wordmark ?? <Logo inverted />}
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-paper-1 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {children}
        <p className="text-sm text-ink-400">© Landlords BC. Educational information, not legal advice.</p>
      </div>
    </footer>
  );
}
