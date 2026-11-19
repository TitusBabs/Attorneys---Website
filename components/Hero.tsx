import { BookButton } from "./BookButton";
import { Button } from "./Button";
import { HeroVideo } from "./HeroVideo";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { wrap } from "./styles";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section id="top" className="hero" style={{ background: "var(--color-canvas)", padding: "64px 0 84px", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--color-hairline) 1px, transparent 1px), linear-gradient(90deg, var(--color-hairline) 1px, transparent 1px)", backgroundSize: "64px 64px", opacity: 0.5, maskImage: "radial-gradient(ellipse 70% 60% at 70% 30%, #000, transparent)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 70% 30%, #000, transparent)" }}
      />
      <div className="wrap hero-grid" style={{ ...wrap, position: "relative", display: "grid", gridTemplateColumns: "1fr 1.02fr", gap: "56px", alignItems: "center" }}>
        <Reveal>
          <div className="hero-kicker" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "6px 14px", borderRadius: "var(--radius-pill)", color: "#0A5CFF", font: "var(--type-caption-bold)", letterSpacing: "0.3px", marginBottom: "22px" }}>
            <Icon name="scale" size={16} color="#0A5CFF" /> {hero.kicker}
          </div>
          <h1 className="hero-title" style={{ font: "var(--type-display-xxl)", fontSize: "68px", lineHeight: 1.03, color: "var(--color-ink)", margin: "0 0 22px", letterSpacing: "-0.4px", fontVariantLigatures: "none" }}>
            {hero.title}
          </h1>
          <p className="hero-sub" style={{ font: "var(--type-body-lg)", color: "var(--color-charcoal)", margin: "0 0 26px", maxWidth: "500px" }}>{hero.sub}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "grid", gap: "12px" }}>
            {hero.bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", font: "var(--type-body-md)", color: "var(--color-ink)" }}>
                <Icon name="check" size={20} color="var(--color-primary-bright)" style={{ flex: "0 0 auto", marginTop: "2px" }} /> {b}
              </li>
            ))}
          </ul>
          <div className="hero-ctas" style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <BookButton variant="primary" iconRight={<Icon name="arrowRight" size={18} />}>
              {hero.primaryCta}
            </BookButton>
            <Button variant="outline-ink" href="#solutions">
              {hero.secondaryCta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <HeroVideo />
        </Reveal>
      </div>
    </section>
  );
}
