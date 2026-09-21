import Link from "next/link";
import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";
import { newsItems } from "../../content/home.ts";

export const metadata = { title: "News" };

export default function NewsPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro title="News" lede="Organization updates. Every item shows a published date because tenancy rules change." />
        <ul className="mx-auto max-w-3xl divide-y divide-paper-2 px-6 pb-16">
          {newsItems.map((item) => (
            <li key={item.title} className="py-5">
              <p className="text-sm text-ink-400">Published {item.date}</p>
              <h2 className="mt-1 font-display text-2xl text-navy-900">{item.title}</h2>
              <p className="mt-2 text-ink-500">
                Full articles will live here as they are reviewed.{" "}
                <Link href="/about" className="text-accent-800">
                  About Landlords BC
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </main>
    </PublicShell>
  );
}
