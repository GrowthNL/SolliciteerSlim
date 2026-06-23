"use client";

import { useEffect, useRef, useState } from "react";

type ScoreRingProps = {
  /** target score 0-100 */
  score: number;
  /** pixel size of the ring */
  size?: number;
  label?: string;
  sublabel?: string;
};

/**
 * Animated circular progress ring that draws + counts up when scrolled into view.
 * Used to visualize an ATS score — strong trust/conversion signal.
 */
export function ScoreRing({ score, size = 160, label = "ATS-score", sublabel }: ScoreRingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

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
        setProgress(score);
        setCount(score);
        return;
      }

      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setProgress(score * eased);
        setCount(Math.round(score * eased));
        if (p < 1) requestAnimationFrame(tick);
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
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [score]);

  const ringColor = score >= 70 ? "#C6F24E" : score >= 40 ? "#FB5B36" : "#FB5B36";

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E3DA"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={ringColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-black tracking-tight text-[#111113]">{count}</span>
        <span className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-[#9A9A92]">
          {label}
        </span>
        {sublabel && <span className="mt-0.5 text-[10px] text-[#9A9A92]">{sublabel}</span>}
      </div>
    </div>
  );
}
