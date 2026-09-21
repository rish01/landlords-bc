import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn.ts";

export type CalloutVariant = "disclaimer" | "info" | "warning";

export type CalloutProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CalloutVariant;
  children: ReactNode;
};

const variantClass: Record<CalloutVariant, string> = {
  disclaimer: "border-l-accent-700 bg-accent-50 text-charcoal-700",
  info: "border-l-navy-700 bg-paper-1 text-charcoal-700",
  warning: "border-l-warning-700 bg-paper-1 text-charcoal-700",
};

export function Callout({
  variant = "disclaimer",
  className,
  children,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "border-l-4 px-4 py-3 text-sm leading-5",
        variantClass[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export const LEGAL_DISCLAIMER =
  "This is general information for BC rental-property owners, not legal advice. Rules change. Check official sources or a qualified professional.";
