"use client";
import { useEffect, useRef, type ReactNode } from "react";

export function MotionScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    function reset() {
      cancelAnimationFrame(frame);
      element!.style.removeProperty("--mx");
      element!.style.removeProperty("--my");
    }
    function move(event: PointerEvent) {
      if (motion.matches || !pointer.matches) return;
      const box = element!.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element!.style.setProperty("--mx", `${x * 12}px`);
        element!.style.setProperty("--my", `${y * 9}px`);
      });
    }
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    motion.addEventListener("change", reset);
    return () => {
      reset();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      motion.removeEventListener("change", reset);
    };
  }, []);
  return (
    <div className="motion-scene" ref={ref}>
      {children}
    </div>
  );
}

export function ScrollMotion() {
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    function setup() {
      observer?.disconnect();
      animations.forEach((a) => a.cancel());
      animations.clear();
      if (preference.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const animation = entry.target.animate(
              [
                { opacity: 0.55, transform: "translateY(22px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 650,
                easing: "cubic-bezier(.2,.7,.2,1)",
                fill: "none",
              },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
            observer?.unobserve(entry.target);
          }
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => observer?.observe(el));
    }
    setup();
    preference.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      animations.forEach((a) => a.cancel());
      preference.removeEventListener("change", setup);
    };
  }, []);
  return null;
}
