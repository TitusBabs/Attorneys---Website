import { BookButton } from "./BookButton";
import { DarkBand } from "./DarkBand";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { wrap } from "./styles";
import { blueprint } from "@/content/home";

export function Blueprint() {
  return (
    <DarkBand grid id="blueprint" className="section-pad" padding="88px 0">
      <div className="wrap" style={wrap}>
        <Reveal>
          <SectionHead light kicker={blueprint.kicker} title={blueprint.title} sub={blueprint.sub} />
        </Reveal>
        <div className="blueprint-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
          {blueprint.steps.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="blueprint-card" style={{ position: "relative", height: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "var(--radius-lg)", padding: "26px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ font: "var(--type-price-md)", color: "var(--color-primary-bright)" }}>{s.n}</span>
                  <Icon name={s.icon} size={26} color="var(--color-primary-bright)" />
                </div>
                <div style={{ font: "var(--type-display-xs)", color: "var(--color-on-ink)", marginBottom: "10px" }}>{s.title}</div>
                <p style={{ font: "var(--type-body-md)", color: "var(--color-steel)", margin: 0 }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140} className="blueprint-cta" style={{ textAlign: "center", marginTop: "40px" }}>
          <BookButton variant="accent" iconRight={<Icon name="arrowRight" size={18} />}>
            {blueprint.cta}
          </BookButton>
        </Reveal>
      </div>
    </DarkBand>
  );
}
