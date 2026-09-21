import { AccessChip, ResourceCard } from "@lbc/ui";
import Link from "next/link";
import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";
import { featuredResources } from "../../content/home.ts";

export const metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="Resource centre"
          lede="Guides, forms, and official government links for BC rental-property owners."
        />
        <div className="mx-auto grid max-w-5xl gap-4 px-6 pb-16 md:grid-cols-2">
          {featuredResources.map((item) => (
            <Link key={item.title} href={item.href} className="block h-full">
              <ResourceCard
                title={item.title}
                description={item.description}
                category={<span className="text-sm text-ink-500">{item.category}</span>}
                access={<AccessChip level={item.access} />}
                updated={item.updated}
              />
            </Link>
          ))}
        </div>
      </main>
    </PublicShell>
  );
}
