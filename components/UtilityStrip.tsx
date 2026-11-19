import type { CSSProperties, ReactNode } from "react";

/** UtilityStrip — the thin navy top-of-page bar, 36px (design system: navigation/UtilityStrip). */
type Props = { left?: ReactNode; right?: ReactNode; style?: CSSProperties; className?: string };

export function UtilityStrip({ left, right, style, className }: Props) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "36px",
        padding: "0 24px",
        background: "var(--color-ink)",
        color: "var(--color-on-ink)",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>{left}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>{right}</div>
    </div>
  );
}
