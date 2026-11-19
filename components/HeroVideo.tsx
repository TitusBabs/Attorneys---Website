"use client";

import { useRef, useState, type CSSProperties } from "react";
import { hero } from "@/content/home";

/** Vimeo film: plays silently on a loop; the first tap for sound restarts it from the top with audio. */
export function HeroVideo() {
  const [muted, setMuted] = useState(true);
  const [heard, setHeard] = useState(false);
  const vref = useRef<HTMLIFrameElement>(null);
  const vimeo = (method: string, value?: number | boolean) => {
    const f = vref.current;
    if (f && f.contentWindow)
      f.contentWindow.postMessage(JSON.stringify(value === undefined ? { method } : { method, value }), "https://player.vimeo.com");
  };
  const toggleSound = () => {
    if (muted) {
      if (!heard) {
        vimeo("setCurrentTime", 0);
        setHeard(true);
      }
      vimeo("setMuted", false);
      vimeo("setVolume", 1);
      setMuted(false);
    } else {
      vimeo("setMuted", true);
      vimeo("setVolume", 0);
      setMuted(true);
    }
    vimeo("play");
  };
  const tick = "2px solid var(--color-primary-bright)";
  const corners: [string, CSSProperties][] = [
    ["tl", { top: -8, left: -8, borderTop: tick, borderLeft: tick }],
    ["tr", { top: -8, right: -8, borderTop: tick, borderRight: tick }],
    ["bl", { bottom: -8, left: -8, borderBottom: tick, borderLeft: tick }],
    ["br", { bottom: -8, right: -8, borderBottom: tick, borderRight: tick }],
  ];
  return (
    <div style={{ position: "relative" }}>
      {corners.map(([k, s]) => (
        <span key={k} aria-hidden="true" style={{ position: "absolute", width: "30px", height: "30px", zIndex: 3, ...s }} />
      ))}
      <div style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-soft)", aspectRatio: "16 / 9", background: "var(--color-ink)" }}>
        <iframe
          ref={vref}
          title={hero.video.title}
          src={hero.video.src}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }}
        />
        <button
          onClick={toggleSound}
          aria-label={muted ? "Play with sound" : "Mute video"}
          aria-pressed={!muted}
          style={{ position: "absolute", left: "16px", bottom: "16px", zIndex: 4, display: "inline-flex", alignItems: "center", gap: "10px", padding: muted ? "10px 16px 10px 12px" : "10px", border: "none", cursor: "pointer", borderRadius: "var(--radius-pill)", background: muted ? "var(--color-primary)" : "rgba(15,22,38,0.55)", color: "#fff", font: "var(--type-caption-bold)", letterSpacing: "0.3px", boxShadow: muted ? "0 8px 30px rgba(15,22,38,0.35)" : "none", backdropFilter: "blur(4px)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            {muted ? <path d="m22 9-6 6M16 9l6 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />}
          </svg>
          {muted && <span>Tap to play with sound</span>}
        </button>
      </div>
    </div>
  );
}
