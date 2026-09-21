/** WCAG 2.2 relative luminance and contrast ratio. */

function srgbChannel(byte: number): number {
  const s = byte / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

export function hexToRgb(hex: string): readonly [number, number, number] {
  const normalized = hex.replace("#", "").toUpperCase();
  if (!/^[0-9A-F]{6}$/.test(normalized)) {
    throw new Error(`Invalid hex colour: ${hex}`);
  }
  const n = Number.parseInt(normalized, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * srgbChannel(r) + 0.7152 * srgbChannel(g) + 0.0722 * srgbChannel(b);
}

export function contrastRatio(foreground: string, background: string): number {
  const l1 = relativeLuminance(foreground);
  const l2 = relativeLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function passesAa(ratio: number, kind: "small" | "large"): boolean {
  return kind === "small" ? ratio >= 4.5 : ratio >= 3;
}

export function formatRatio(ratio: number): string {
  return `${ratio.toFixed(2)}:1`;
}
