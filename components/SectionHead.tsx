import { eyebrow } from "./styles";

type Props = { kicker: string; title: string; sub?: string; center?: boolean; light?: boolean };

export function SectionHead({ kicker, title, sub, center = true, light = false }: Props) {
  return (
    <div style={{ textAlign: center ? "center" : "left", maxWidth: center ? "720px" : "none", margin: center ? "0 auto 48px" : "0 0 40px" }}>
      <div style={eyebrow}>{kicker}</div>
      <h2 style={{ font: "var(--type-display-lg)", color: light ? "var(--color-on-ink)" : "var(--color-ink)", margin: 0, letterSpacing: "-0.5px" }}>{title}</h2>
      {sub && (
        <p style={{ font: "var(--type-body-lg)", color: light ? "var(--color-steel)" : "var(--color-charcoal)", margin: "18px auto 0", maxWidth: "620px" }}>{sub}</p>
      )}
    </div>
  );
}
