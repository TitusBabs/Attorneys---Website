import type { CSSProperties } from "react";

/** Shared layout values from the reference (sections.jsx `wrap` and `eyebrow`). */
export const wrap: CSSProperties = { maxWidth: "1160px", margin: "0 auto", padding: "0 24px" };

export const eyebrow: CSSProperties = {
  font: "var(--type-eyebrow)",
  letterSpacing: "var(--tracking-eyebrow)",
  textTransform: "uppercase",
  color: "var(--color-primary-bright)",
  marginBottom: "16px",
};

/** Logo files are 956×508; width attributes derived for each rendered height (prevents CLS). */
export const logoWidth = (height: number) => Math.round((height * 956) / 508);
