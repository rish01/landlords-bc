import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn.ts";

export type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "cta";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  asChild?: boolean;
  children: ReactNode;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-800 border border-transparent",
  secondary:
    "bg-paper-0 text-navy-900 border border-navy-900 hover:bg-paper-1",
  accent:
    "bg-accent-600 text-white hover:bg-accent-700 border border-transparent",
  ghost: "bg-transparent text-navy-800 hover:bg-paper-1 border border-transparent",
  cta: "bg-navy-900 text-white hover:bg-navy-800 border border-transparent uppercase tracking-[0.04em] text-sm",
};

export function Button({
  variant = "primary",
  asChild = false,
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      {...(asChild ? {} : { type })}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[12px] px-5",
        "min-h-12 text-base font-medium",
        "transition-[transform,box-shadow,background-color] duration-150 ease-out",
        "disabled:pointer-events-none disabled:opacity-50",
        variantClass[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
