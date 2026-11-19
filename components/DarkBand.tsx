import type { CSSProperties, ReactNode } from "react";

/** DarkBand — navy slab section wrapper with optional faint blueprint grid (design system: brand/DarkBand). */
type Props = { children: ReactNode; padding?: string; grid?: boolean; style?: CSSProperties; id?: string; className?: string };

export function DarkBand({ children, padding = "64px 24px", grid = false, style, id, className }: Props) {
  const gridBg: CSSProperties = grid
    ? {
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }
    : {};
  return (
    <section
      id={id}
      className={className}
      style={{
        position: "relative",
        background: "var(--color-primary)",
        color: "var(--color-on-ink)",
        padding,
        ...gridBg,
        ...style,
      }}
    >
      {children}
    </section>
  );
}
