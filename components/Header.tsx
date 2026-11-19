import { BookButton } from "./BookButton";
import { Icon } from "./Icon";
import { UtilityStrip } from "./UtilityStrip";
import { logoWidth } from "./styles";
import { site, hero } from "@/content/home";

export function Header() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30 }}>
      <UtilityStrip
        left={<span style={{ font: "var(--type-caption-md)", opacity: 0.85 }}></span>}
        right={
          <a href={site.phoneHref} style={{ color: "var(--color-on-ink)", font: "var(--type-caption-md)", textDecoration: "none", opacity: 0.9 }}>
            {site.phone}
          </a>
        }
      />
      <nav style={{ display: "flex", alignItems: "center", gap: "32px", height: "72px", padding: "0 32px", background: "var(--color-canvas)", borderBottom: "1px solid var(--color-hairline)" }}>
        <a href="#top" style={{ display: "inline-flex" }} aria-label="Blueprint Tax Advisors home">
          <img src="/assets/logo-mark.png" alt="Blueprint Tax Advisors" width={logoWidth(44)} height={44} style={{ height: "44px", width: "auto", display: "block" }} />
        </a>
        <div style={{ marginLeft: "auto" }}>
          <BookButton variant="primary" size="sm" iconRight={<Icon name="arrowRight" size={16} />}>
            {hero.primaryCta}
          </BookButton>
        </div>
      </nav>
    </header>
  );
}
