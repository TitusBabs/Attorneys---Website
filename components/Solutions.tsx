import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { wrap } from "./styles";
import { solutions } from "@/content/home";

export function Solutions() {
  return (
    <section id="solutions" style={{ background: "var(--color-cloud)", padding: "88px 0", borderTop: "1px solid var(--color-hairline)" }}>
      <div style={wrap}>
        <Reveal>
          <SectionHead kicker={solutions.kicker} title={solutions.title} sub={solutions.sub} />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {solutions.rows.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 90}>
              {/* hover lift + shadow live in globals.css (.pain-card) */}
              <div className="pain-card" style={{ height: "100%", boxSizing: "border-box", background: "var(--color-paper)", border: "1px solid var(--color-hairline)", borderRadius: "var(--radius-lg)", padding: "26px", display: "flex", flexDirection: "column" }}>
                <span style={{ width: "48px", height: "48px", borderRadius: "var(--radius-md)", background: "var(--color-primary-soft)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <Icon name={r.icon} size={24} color="var(--color-primary)" />
                </span>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", font: "var(--type-caption-bold)", letterSpacing: "0.4px", textTransform: "uppercase", color: "var(--color-error)", marginBottom: "8px" }}>
                  <Icon name="alertTriangle" size={14} color="var(--color-error)" /> The pain
                </div>
                <p style={{ font: "var(--type-body-emphasis)", color: "var(--color-ink)", margin: "0 0 16px" }}>{r.pain}</p>
                <div style={{ height: "1px", background: "var(--color-hairline)", margin: "0 0 16px" }} />
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", font: "var(--type-caption-bold)", letterSpacing: "0.4px", textTransform: "uppercase", color: "var(--color-success)", marginBottom: "8px" }}>
                  <Icon name="check" size={14} color="var(--color-success)" /> How we solve it
                </div>
                <p style={{ font: "var(--type-body-md)", color: "var(--color-charcoal)", margin: 0 }}>{r.fix}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
