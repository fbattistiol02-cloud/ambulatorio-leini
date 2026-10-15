"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useMotionEffect } from "./useMotionEffect";

type SplitHeadingProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
};

/**
 * Titolo che si rivela riga per riga, con maschera. Ricalcola le righe
 * se cambia la larghezza o quando i font hanno finito di caricare.
 */
export function SplitHeading({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null);

  useMotionEffect(
    ({ gsap, SplitText }) => {
      const el = ref.current;
      if (!el) return;
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        linesClass: "split-line",
        onSplit: (self: { lines: Element[] }) =>
          gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.25,
            delay,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }),
      });
    },
    ref,
    [delay],
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
