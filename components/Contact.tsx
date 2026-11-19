import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { logoWidth, wrap } from "./styles";
import { contact, site } from "@/content/home";

export function Contact() {
  const lines: ["phone" | "messageCircle", string][] = [
    ["phone", site.phone],
    ["messageCircle", site.email],
  ];
  return (
    <section id="contact" style={{ background: "var(--color-ink-deep)", color: "var(--color-on-ink)", padding: "88px 0 0" }}>
      <div style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start", paddingBottom: "72px" }}>
        <Reveal>
          <img src="/assets/logo-mark-white.png" alt="Blueprint Tax Advisors" width={logoWidth(64)} height={64} style={{ height: "64px", width: "auto", display: "block", marginBottom: "28px" }} />
          <h2 style={{ font: "var(--type-display-lg)", color: "var(--color-on-ink)", margin: "0 0 18px", letterSpacing: "-0.5px" }}>{contact.title}</h2>
          <p style={{ font: "var(--type-body-lg)", color: "var(--color-steel)", margin: "0 0 28px", maxWidth: "440px" }}>{contact.sub}</p>
          <div style={{ display: "grid", gap: "16px" }}>
            {lines.map(([ic, t], i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", font: "var(--type-body-md)", color: "var(--color-on-ink)" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,0.08)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={ic} size={20} color="var(--color-primary-bright)" />
                </span>
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "72px" }}>
            {contact.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,0.08)", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s" }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="var(--color-primary-bright)">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ background: "var(--color-paper)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-float)", padding: "12px", overflow: "hidden" }}>
            <iframe src={contact.calendly.src} title={contact.calendly.title} loading="lazy" style={{ width: "100%", height: "660px", border: 0, borderRadius: "var(--radius-lg)", display: "block" }} />
          </div>
        </Reveal>
      </div>
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ ...wrap, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", padding: "24px" }}>
          <img src="/assets/logo-mark-white.png" alt="Blueprint Tax Advisors" width={logoWidth(34)} height={34} style={{ height: "34px", width: "auto", display: "block" }} />
          <span style={{ font: "var(--type-caption-sm)", color: "var(--color-graphite)" }}>{contact.copyright}</span>
        </div>
      </footer>
    </section>
  );
}
