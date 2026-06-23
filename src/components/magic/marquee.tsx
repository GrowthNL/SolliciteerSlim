import { type ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** scroll direction */
  reverse?: boolean;
  /** slow = 45s, normal = 28s */
  speed?: "normal" | "slow";
  className?: string;
};

/**
 * Infinite horizontal scroller. Duplicates children so the loop is seamless.
 * Pauses on hover. Edges fade out via mask.
 */
export function Marquee({ children, reverse = false, speed = "normal", className = "" }: MarqueeProps) {
  const anim = reverse
    ? "animate-marquee-reverse"
    : speed === "slow"
      ? "animate-marquee-slow"
      : "animate-marquee";

  return (
    <div
      className={`pause-on-hover group relative flex overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className={`flex shrink-0 items-stretch gap-4 pr-4 ${anim}`}>{children}</div>
      <div className={`flex shrink-0 items-stretch gap-4 pr-4 ${anim}`} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
