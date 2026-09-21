/** Runtime token values. Keep in sync with styles.css :root. */

export const tokens = {
  paper0: "#FFFCF8",
  paper1: "#F6F2EB",
  paper2: "#E8E2D8",
  white: "#FFFFFF",
  navy950: "#071221",
  navy900: "#0B1F3A",
  navy800: "#132C4E",
  navy700: "#1C3E68",
  charcoal900: "#1A1C1E",
  charcoal700: "#3A3D42",
  ink500: "#5C6168",
  ink400: "#7A8088",
  accent800: "#0A5854",
  accent700: "#0C6B66",
  accent600: "#0E7C77",
  accent100: "#E3F4F3",
  accent50: "#F2FAF9",
  danger600: "#B42318",
  success700: "#027A48",
  warning700: "#B54708",
  info700: "#1C3E68",
  badgeGold: "#A67C2D",
} as const;

export type TokenName = keyof typeof tokens;
