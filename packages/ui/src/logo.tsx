import { Slot } from "@radix-ui/react-slot";
import type { HTMLAttributes } from "react";
import { cn } from "./cn.ts";

export type LogoProps = HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
  inverted?: boolean;
};

export function Logo({ asChild = false, inverted = false, className, ...props }: LogoProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={cn(
        "inline-flex items-baseline gap-2 font-display text-xl tracking-tight",
        inverted ? "text-paper-0" : "text-navy-900",
        className,
      )}
      {...props}
    >
      <span aria-hidden className="inline-block size-2.5 translate-y-[-0.15em] rounded-sm bg-accent-600" />
      Landlords BC
    </Comp>
  );
}
