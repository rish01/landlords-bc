import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn.ts";

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  action?: ReactNode;
};

export function EmptyState({ title, action, className, ...props }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 rounded-[12px] border border-paper-2 bg-white p-6",
        className,
      )}
      {...props}
    >
      <p className="text-base text-charcoal-700">{title}</p>
      {action}
    </div>
  );
}
