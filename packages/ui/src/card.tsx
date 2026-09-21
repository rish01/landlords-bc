import { Slot } from "@radix-ui/react-slot";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn.ts";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  children: ReactNode;
};

export function Card({ asChild = false, className, children, ...props }: CardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(
        "rounded-[12px] bg-white p-6 shadow-[var(--shadow-card)]",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export type ActionCardProps = HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
  icon: ReactNode;
  title: string;
  description: string;
};

export function ActionCard({
  asChild = false,
  icon,
  title,
  description,
  className,
  ...props
}: ActionCardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(
        "group flex h-full flex-col rounded-[12px] bg-white p-6 text-left shadow-[var(--shadow-card)]",
        "transition-transform duration-150 ease-out hover:-translate-y-0.5",
        "min-h-[11.5rem] md:aspect-[1/1.15]",
        className,
      )}
      {...props}
    >
      <span className="mb-4 flex size-12 items-center justify-center rounded-[12px] bg-accent-50 text-accent-800">
        {icon}
      </span>
      <span className="font-display text-xl text-navy-900">{title}</span>
      <span className="mt-2 text-base text-ink-500">{description}</span>
    </Comp>
  );
}

export type ResourceCardProps = HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
  title: string;
  description: string;
  category: ReactNode;
  access: ReactNode;
  updated: string;
};

export function ResourceCard({
  asChild = false,
  title,
  description,
  category,
  access,
  updated,
  className,
  ...props
}: ResourceCardProps) {
  const Comp = asChild ? Slot : "article";
  return (
    <Comp
      className={cn(
        "flex h-full flex-col rounded-[12px] bg-white p-6 shadow-[var(--shadow-card)]",
        "transition-transform duration-150 ease-out hover:-translate-y-0.5",
        className,
      )}
      {...props}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {category}
        {access}
      </div>
      <h3 className="font-display text-xl text-navy-900">{title}</h3>
      <p className="mt-2 line-clamp-2 text-base text-ink-500">{description}</p>
      <p className="mt-auto pt-4 text-sm text-ink-400">Updated {updated}</p>
    </Comp>
  );
}
