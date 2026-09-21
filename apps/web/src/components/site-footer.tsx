import { Footer, LEGAL_DISCLAIMER, Logo } from "@lbc/ui";
import Link from "next/link";
import { footerNav } from "../content/nav.ts";

export function SiteFooter() {
  return (
    <Footer
      links={[...footerNav]}
      wordmark={
        <Link href="/">
          <Logo inverted />
        </Link>
      }
    >
      <p className="text-sm text-ink-400">{LEGAL_DISCLAIMER}</p>
    </Footer>
  );
}
