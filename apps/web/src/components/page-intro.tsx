import type { ReactNode } from "react";

export function PageIntro({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto w-full max-w-3xl px-6 pt-16 pb-8">
      <h1 className="font-display text-[40px] leading-tight text-navy-900 md:text-5xl">{title}</h1>
      {lede ? <p className="mt-4 text-lg text-ink-500">{lede}</p> : null}
      {children}
    </header>
  );
}
