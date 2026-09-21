import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer.tsx";
import { SiteHeader } from "./site-header.tsx";

export function PublicShell({
  children,
  overlayHero = false,
}: {
  children: ReactNode;
  overlayHero?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-paper-0">
      <SiteHeader overlay={overlayHero} />
      <div className={overlayHero ? "" : "flex flex-1 flex-col"}>{children}</div>
      <SiteFooter />
    </div>
  );
}
