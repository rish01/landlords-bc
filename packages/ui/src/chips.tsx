import type { HTMLAttributes } from "react";
import { cn } from "./cn.ts";

export type AccessLevel = "public" | "members";

const accessLabel: Record<AccessLevel, string> = {
  public: "Public",
  members: "Members",
};

export type AccessChipProps = HTMLAttributes<HTMLSpanElement> & {
  level: AccessLevel;
};

export function AccessChip({ level, className, ...props }: AccessChipProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full px-2.5 text-xs font-medium",
        level === "public"
          ? "bg-paper-1 text-navy-800"
          : "bg-accent-50 text-accent-800",
        className,
      )}
      {...props}
    >
      {accessLabel[level]}
    </span>
  );
}

export type DocKind = "official" | "template" | "educational" | "third_party";

const docKindLabel: Record<DocKind, string> = {
  official: "Official government form",
  template: "Organization template",
  educational: "Educational example",
  third_party: "Third-party",
};

const docKindClass: Record<DocKind, string> = {
  official: "bg-navy-900 text-white",
  template: "bg-accent-700 text-white",
  educational: "bg-charcoal-700 text-white",
  third_party: "border border-navy-800 bg-transparent text-navy-800",
};

export type DocKindChipProps = HTMLAttributes<HTMLSpanElement> & {
  kind: DocKind;
};

export function DocKindChip({ kind, className, ...props }: DocKindChipProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full px-2.5 text-xs font-medium",
        docKindClass[kind],
        className,
      )}
      {...props}
    >
      {docKindLabel[kind]}
    </span>
  );
}

export type BadgeGoldProps = HTMLAttributes<HTMLSpanElement> & {
  children: string;
};

/** Decorative only. Never use gold as small text on paper. */
export function BadgeGold({ className, children, ...props }: BadgeGoldProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full bg-navy-950 px-2.5 text-xs font-medium text-badge-gold",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
