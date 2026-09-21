import { StubPage, stubRobots } from "../../components/stub-page.tsx";

export const metadata = { title: "Community", robots: stubRobots };

export default function CommunityPage() {
  return (
    <StubPage
      title="A professional community for BC landlords"
      lede="Ask questions, follow topics, and learn from peers without publishing tenant identities."
      points={[
        "Moderated discussion. Harassment, doxxing, and tenant-shaming are prohibited.",
        "You may post anonymously to other members. Moderators still know who you are.",
        "The member community is not indexed by search engines.",
      ]}
    />
  );
}
