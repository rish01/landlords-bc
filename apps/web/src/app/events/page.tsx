import { StubPage, stubRobots } from "../../components/stub-page.tsx";

export const metadata = { title: "Events", robots: stubRobots };

export default function EventsPage() {
  return (
    <StubPage
      title="Education events for BC landlords"
      lede="Workshops and briefings on tenancy process, records, and municipal rules."
      points={[
        "Member registration when the events calendar opens.",
        "Online and in-person sessions across the province.",
        "No sales-pitch webinars disguised as education.",
      ]}
    />
  );
}
