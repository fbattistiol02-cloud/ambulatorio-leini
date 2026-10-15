"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "./gsap";
import { useMotion } from "./MotionProvider";

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
  const { ready, reduced } = useMotion();

  useGSAP(
    () => {
      if (!ready || reduced || !wrap.current || !inner.current) return;
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
    { scope: wrap, dependencies: [ready, reduced, amount] },
  );

  return (
    <div ref={wrap} className={`absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div ref={inner} className="absolute inset-[-12%]">
        {children}
      </div>
    </div>
  );
}
