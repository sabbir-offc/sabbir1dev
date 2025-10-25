"use client";

import { useEffect, useRef } from "react";

export default function TechMarquee({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const list = [...items, ...items];

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !ref.current) return;
    const el = ref.current;
    let rafId: number;
    let x = 0;
    const tick = () => {
      x -= 0.6; 
      el.style.transform = `translateX(${x}px)`;
      if (Math.abs(x) > el.scrollWidth / 2) x = 0;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="overflow-hidden py-8 md:py-10">
      <div className="relative">
        <div ref={ref} className="flex min-w-max gap-4 will-change-transform">
          {list.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
            >
              {label}
            </span>
          ))}
        </div>
        {/* subtle mask edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-card to-transparent" />
      </div>
    </div>
  );
}
