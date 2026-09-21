import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn.ts";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  error?: string;
};

export function Input({ label, error, id, className, ...props }: InputProps) {
  const inputId = id ?? (typeof label === "string" ? slug(label) : undefined);
  const errorId = inputId ? `${inputId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-navy-900">
        {label}
      </label>
      <input
        id={inputId}
        {...(error ? { "aria-invalid": true as const, "aria-describedby": errorId } : {})}
        className={cn(
          "min-h-12 w-full rounded-[12px] border bg-white px-4 text-base text-charcoal-900",
          "placeholder:text-ink-400",
          error ? "border-danger-600" : "border-paper-2",
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-danger-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
