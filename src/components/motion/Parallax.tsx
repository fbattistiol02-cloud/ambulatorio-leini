"use client";

import { useRef, type ReactNode } from "react";
import { useMotionEffect } from "./useMotionEffect";

/** Sposta il contenuto in verticale mentre scorri (solo transform). */
export function Parallax({
  children,
  amount = 9,
  className,
}: {
  children: ReactNode;
  /** percentuale di spostamento in alto e in basso */
  amount?: number;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useMotionEffect(
    ({ gsap }) => {
      if (!wrap.current || !inner.current) return;
      gsap.fromTo(
        inner.current,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    wrap,
    [amount],
  );

  return (
    <div ref={wrap} className={`absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div
        ref={inner}
        className="absolute"
        style={{ inset: `${-(amount + 2)}%` }}
      >
        {children}
      </div>
    </div>
  );
}
