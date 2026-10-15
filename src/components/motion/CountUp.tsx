"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "./gsap";
import { useMotion } from "./MotionProvider";

const fmt = (v: number, decimals: number) =>
  v.toLocaleString("it-IT", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/** Numero che sale fino al valore finale quando entra in vista. */
export function CountUp({
  to,
  decimals = 1,
  className,
}: {
  to: number;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ready, reduced } = useMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!ready || reduced || !el) return;
      const o = { v: 0 };
      el.textContent = fmt(0, decimals);
      gsap.to(o, {
        v: to,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = fmt(o.v, decimals);
        },
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
      return () => {
        el.textContent = fmt(to, decimals);
      };
    },
    { scope: ref, dependencies: [ready, reduced, to, decimals] },
  );

  return (
    <span ref={ref} className={className}>
      {fmt(to, decimals)}
    </span>
  );
}
