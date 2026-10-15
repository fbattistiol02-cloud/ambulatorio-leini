"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "../motion/gsap";
import { useMotion } from "../motion/MotionProvider";

/**
 * Attrae leggermente l'elemento verso il cursore. Solo con puntatore
 * preciso (mouse) e movimento attivo; su touch non fa nulla.
 */
export function Magnetic({
  children,
  strength = 0.28,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ready, reduced } = useMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!ready || reduced || !el) return;
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
        return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        gsap.set(el, { x: 0, y: 0 });
      };
    },
    { scope: ref, dependencies: [ready, reduced, strength] },
  );

  return (
    <span ref={ref} className={className ?? "inline-block"}>
      {children}
    </span>
  );
}
