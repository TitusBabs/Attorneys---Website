"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Stars } from "./Stars";
import { eyebrow, wrap } from "./styles";
import { reviews } from "@/content/home";

export function Reviews() {
  const data = reviews.items;
  const [start, setStart] = useState(0);
  const per = 3;
  const max = data.length - per;
  const clamp = (v: number) => Math.max(0, Math.min(max, v));
  const showNav = max > 0;
  const nav: ["chevronLeft" | "chevronRight", number][] = [
    ["chevronLeft", -1],
    ["chevronRight", 1],
  ];
  return (
    <section id="reviews" className="section-pad" style={{ background: "var(--color-canvas)", padding: "88px 0" }}>
      <div className="wrap" style={wrap}>
        <Reveal>
          <div className="reviews-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={eyebrow}>{reviews.kicker}</div>
              <h2 className="section-title" style={{ font: "var(--type-display-lg)", color: "var(--color-ink)", margin: "0", letterSpacing: "-0.5px" }}>{reviews.title}</h2>
            </div>
            <div style={{ display: showNav ? "flex" : "none", gap: "10px" }}>
              {nav.map(([ic, dir]) => (
                <button
                  key={ic}
                  onClick={() => setStart((s) => clamp(s + dir))}
                  aria-label={dir < 0 ? "Previous" : "Next"}
                  style={{ width: "48px", height: "48px", borderRadius: "var(--radius-pill)", border: "1px solid var(--color-steel)", background: "var(--color-canvas)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--color-ink)" }}
                >
                  <Icon name={ic} size={22} />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
        <div style={{ overflow: "hidden" }}>
          <div className="reviews-track" style={{ display: "flex", gap: "20px", transform: `translateX(calc(-${start} * (33.333% + 6.66px)))`, transition: "transform .5s var(--ease-standard)" }}>
            {data.map((d, i) => (
              <div key={i} className="review-card" style={{ flex: "0 0 calc(33.333% - 13.33px)", boxSizing: "border-box", background: "var(--color-paper)", border: "1px solid var(--color-hairline)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-soft)", padding: "26px", display: "flex", flexDirection: "column" }}>
                <Stars n={5} />
                <p style={{ font: "var(--type-body-lg)", fontSize: "17px", color: "var(--color-ink)", margin: "16px 0 22px", lineHeight: 1.45 }}>&ldquo;{d.q}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto" }}>
                  <span style={{ width: "44px", height: "44px", borderRadius: "var(--radius-sm)", background: d.color, color: "var(--color-on-ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", font: "var(--type-body-emphasis)", fontSize: "16px", flexShrink: 0 }}>{d.initials}</span>
                  <div>
                    <div style={{ font: "var(--type-body-emphasis)", color: "var(--color-ink)" }}>{d.name}</div>
                    <div style={{ font: "var(--type-caption-md)", color: "var(--color-graphite)" }}>{d.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
