"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "./gsap";
import { useMotion } from "./MotionProvider";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  /** anima i figli diretti uno dopo l'altro invece del blocco intero */
  stagger?: number;
};

/**
 * Rivelazione allo scroll. Il contenuto è visibile di base: l'animazione
 * parte solo se il movimento è attivo e si ferma una volta sola.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  y = 32,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const { ready, reduced } = useMotion();

  useGSAP(
    () => {
      if (!ready || reduced || !ref.current) return;
      const targets = stagger ? Array.from(ref.current.children) : ref.current;
      gsap.from(targets, {
        autoAlpha: 0,
        y,
        duration: 1.1,
        delay,
        stagger: stagger ?? 0,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [ready, reduced] },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
