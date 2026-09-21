import type { ReactNode } from "react";

export const metadata = {
  title: "Landlords BC",
  description: "Digital home for BC landlords.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
