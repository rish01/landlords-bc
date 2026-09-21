import { IBM_Plex_Mono } from "next/font/google";

/**
 * IBM Plex Mono — Canadian-designed.
 * Import only from /cases/*, /membership/manage, /admin/*, and /internal/ui.
 * Do not import this module from the root layout or public marketing pages.
 */
export const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
  preload: false,
});
