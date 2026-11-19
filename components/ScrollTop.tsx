"use client";

import { useEffect, useState } from "react";

/** Back-to-top button: appears near the bottom of the page once scrolled past 400px. */
export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement;
      const nearBottom = window.innerHeight + window.scrollY >= d.scrollHeight - 600;
      setShow(nearBottom && window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ position: "fixed", right: "28px", bottom: "28px", zIndex: 60, width: "52px", height: "52px", borderRadius: "50%", border: "none", cursor: "pointer", background: "var(--color-primary-deep)", color: "var(--color-on-ink)", boxShadow: "var(--shadow-float)", display: "inline-flex", alignItems: "center", justifyContent: "center", opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(12px)", pointerEvents: show ? "auto" : "none", transition: "opacity 0.3s ease, transform 0.3s ease" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
