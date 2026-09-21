import type { ReactNode } from "react";
import { monoFont } from "../../../lib/fonts-mono.ts";

export const metadata = {
  title: "Design system — Landlords BC",
  robots: { index: false, follow: false },
};

export default function InternalUiLayout({ children }: { children: ReactNode }) {
  return <div className={monoFont.variable}>{children}</div>;
}
