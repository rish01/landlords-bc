"use client";

import { Button } from "@lbc/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { issueCategories } from "../content/issues.ts";

export function IssueSearch() {
  const router = useRouter();
  const [slug, setSlug] = useState("");

  return (
    <form
      className="flex flex-col gap-3 sm:flex-row sm:items-end"
      onSubmit={(event) => {
        event.preventDefault();
        router.push(slug ? `/guides/${slug}` : "/guides");
      }}
    >
      <div className="flex-1">
        <label htmlFor="issue-select" className="mb-1.5 block text-sm font-medium text-navy-900">
          What are you dealing with?
        </label>
        <select
          id="issue-select"
          value={slug}
          onChange={(event) => setSlug(event.target.value)}
          className="min-h-12 w-full rounded-[12px] border border-paper-2 bg-white px-4 text-base text-charcoal-900"
        >
          <option value="">Choose an issue</option>
          {issueCategories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit" variant="accent">
        See next steps
      </Button>
    </form>
  );
}
