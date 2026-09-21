import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

/** Display: Fraunces, variable, SOFT 50 via CSS font-variation-settings. */
export const displayFont = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

/** UI / body. Public pages load only this + Fraunces. */
export const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
