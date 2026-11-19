"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/** Scroll reveal: fade + 24px rise when 15% of the block enters the viewport. */
export function Reveal({ children, delay = 0, style, className }: { children: ReactNode; delay?: number; style?: CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            setVis(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .6s var(--ease-standard) ${delay}ms, transform .6s var(--ease-standard) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
