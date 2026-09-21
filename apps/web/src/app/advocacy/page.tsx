import { StubPage, stubRobots } from "../../components/stub-page.tsx";

export const metadata = { title: "Advocacy", robots: stubRobots };

export default function AdvocacyPage() {
  return (
    <StubPage
      title="Advocacy that is constructive"
      lede="Report issues so we can see province-wide patterns. We speak from evidence, not from naming anyone."
      points={[
        "Anonymous categorized submissions. Identity is not shown on the public site.",
        "Aggregates for staff, never a public list of members or tenants.",
        "Current editorial focus: clearer access to official tenancy process information.",
      ]}
    />
  );
}
