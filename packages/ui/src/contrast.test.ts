import { describe, expect, it } from "vitest";
import { contrastRatio, passesAa } from "./contrast.ts";
import { tokens } from "./tokens.ts";

const surfaces = {
  paper0: tokens.paper0,
  white: tokens.white,
} as const;

describe("PR-02 contrast table", () => {
  it("uses the specified paper-0 hex", () => {
    expect(tokens.paper0).toBe("#FFFCF8");
  });

  it("accent-800 passes small-text AA on paper and white", () => {
    for (const bg of Object.values(surfaces)) {
      const ratio = contrastRatio(tokens.accent800, bg);
      expect(passesAa(ratio, "small"), `accent-800 on ${bg} is ${ratio.toFixed(2)}:1`).toBe(
        true,
      );
    }
  });

  it("accent-700 passes large-text AA on paper and white", () => {
    for (const bg of Object.values(surfaces)) {
      const ratio = contrastRatio(tokens.accent700, bg);
      expect(passesAa(ratio, "large"), `accent-700 on ${bg} is ${ratio.toFixed(2)}:1`).toBe(
        true,
      );
    }
  });

  it("accent-600 passes large-text AA (buttons / display) on paper and white", () => {
    for (const bg of Object.values(surfaces)) {
      const ratio = contrastRatio(tokens.accent600, bg);
      expect(passesAa(ratio, "large"), `accent-600 on ${bg} is ${ratio.toFixed(2)}:1`).toBe(
        true,
      );
    }
  });

  it("white text on accent-600 passes small-text AA (solid buttons)", () => {
    const ratio = contrastRatio(tokens.white, tokens.accent600);
    expect(passesAa(ratio, "small"), `white on accent-600 is ${ratio.toFixed(2)}:1`).toBe(true);
  });

  it("white text on navy-900 passes small-text AA (primary buttons)", () => {
    const ratio = contrastRatio(tokens.white, tokens.navy900);
    expect(passesAa(ratio, "small"), `white on navy-900 is ${ratio.toFixed(2)}:1`).toBe(true);
  });

  it("danger, success, and warning pass small-text AA on paper and white", () => {
    const inks = [tokens.danger600, tokens.success700, tokens.warning700];
    for (const ink of inks) {
      for (const bg of Object.values(surfaces)) {
        const ratio = contrastRatio(ink, bg);
        expect(passesAa(ratio, "small"), `${ink} on ${bg} is ${ratio.toFixed(2)}:1`).toBe(true);
      }
    }
  });

  it("badge-gold is not small text on paper (decorative on navy only)", () => {
    const onPaper = contrastRatio(tokens.badgeGold, tokens.paper0);
    expect(
      passesAa(onPaper, "small"),
      `badge-gold on paper is ${onPaper.toFixed(2)}:1 — do not use as small text`,
    ).toBe(false);

    const onNavy = contrastRatio(tokens.badgeGold, tokens.navy950);
    expect(passesAa(onNavy, "large"), `badge-gold on navy-950 is ${onNavy.toFixed(2)}:1`).toBe(
      true,
    );
  });
});
