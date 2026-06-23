"use client";

import { useEffect, useRef, useState } from "react";

type NumberTickerProps = {
  /** Target value to count up to */
  value: number;
  /** Text prefix, e.g. "€" */
  prefix?: string;
  /** Text suffix, e.g. "%" or "k+" */
  suffix?: string;
  /** Decimals to show */
  decimals?: number;
  /** Animation duration in ms */
  duration?: number;
  className?: string;
};

/**
 * Counts up from 0 to `value` once it scrolls into view.
 * Great for trust stats (users, scores, percentages).
 */
export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
  className = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduce) {
        setDisplay(value);
        return;
      }

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplay(value * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const formatted = display.toLocaleString("nl-NL", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
