"use client";

import { useRef, type ReactNode } from "react";
import { useMotion } from "./MotionProvider";

export function PortraitScene({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const { ready, reduced } = useMotion();
  function reset() {
    root.current?.style.setProperty("--pointer-x", "0px");
    root.current?.style.setProperty("--pointer-y", "0px");
    root.current?.style.setProperty("--pointer-rotate", "0deg");
  }
  return (
    <div
      ref={root}
      className="hero-visual"
      onPointerMove={(event) => {
        if (!ready || reduced || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        event.currentTarget.style.setProperty("--pointer-x", `${x * 24}px`);
        event.currentTarget.style.setProperty("--pointer-y", `${y * 16}px`);
        event.currentTarget.style.setProperty(
          "--pointer-rotate",
          `${x * 3}deg`,
        );
      }}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
