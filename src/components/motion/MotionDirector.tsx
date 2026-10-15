"use client";

import { useEffect } from "react";
import { useMotion } from "./MotionProvider";

/** One scroll listener, active scenes only, and no hidden server-rendered content. */
export function MotionDirector() {
  const { ready, reduced } = useMotion();

  useEffect(() => {
    if (!ready || reduced) return;
    const animations = new Set<Animation>();
    const visible = new Set<HTMLElement>();
    const scenes = document.querySelectorAll<HTMLElement>(
      "[data-motion-scene]",
    );
    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const progress = document.querySelector<HTMLElement>(".reading-progress");
    let frame = 0;

    const draw = () => {
      frame = 0;
      const viewport = window.innerHeight;
      for (const scene of visible) {
        const bounds = scene.getBoundingClientRect();
        const position = Math.max(
          0,
          Math.min(1, (viewport - bounds.top) / (viewport + bounds.height)),
        );
        scene.style.setProperty("--scene-progress", position.toFixed(4));
        scene.style.setProperty(
          "--scene-shift",
          `${((position - 0.5) * 90).toFixed(2)}px`,
        );
        scene.style.setProperty(
          "--ribbon-shift",
          `${(-position * 230).toFixed(2)}px`,
        );
      }
      if (progress) {
        const length = document.documentElement.scrollHeight - viewport;
        progress.style.transform = `scaleX(${length > 0 ? window.scrollY / length : 0})`;
      }
    };
    const requestDraw = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const sceneObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const scene = entry.target as HTMLElement;
        scene.dataset.inView = String(entry.isIntersecting);
        if (entry.isIntersecting) visible.add(scene);
        else visible.delete(scene);
      });
      requestDraw();
    });
    scenes.forEach((scene) => sceneObserver.observe(scene));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          revealObserver.unobserve(element);
          // Never replay an entrance above the viewport on a restored page.
          if (entry.boundingClientRect.bottom < 80) return;
          const isImage = element.dataset.reveal === "image";
          const isTitle = element.dataset.reveal === "title";
          const animation = element.animate(
            isImage
              ? [
                  {
                    clipPath: "inset(12% 7% 12% 7% round 35%)",
                    transform: "translateY(50px) scale(.94)",
                  },
                  {
                    clipPath: "inset(0% 0% 0% 0% round 0%)",
                    transform: "translateY(0) scale(1)",
                  },
                ]
              : [
                  {
                    opacity: 0.15,
                    transform: `translateY(${isTitle ? 55 : 35}px)${isTitle ? " rotate(2deg)" : ""}`,
                  },
                  { opacity: 1, transform: "translateY(0) rotate(0deg)" },
                ],
            {
              duration: isImage ? 1300 : 950,
              delay: Number(element.dataset.delay ?? 0),
              easing: "cubic-bezier(.16,1,.3,1)",
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((element) => revealObserver.observe(element));

    window.addEventListener("scroll", requestDraw, { passive: true });
    window.addEventListener("resize", requestDraw);
    requestDraw();
    return () => {
      sceneObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", requestDraw);
      window.removeEventListener("resize", requestDraw);
      cancelAnimationFrame(frame);
      animations.forEach((animation) => animation.cancel());
      scenes.forEach((scene) => {
        delete scene.dataset.inView;
        ["--scene-progress", "--scene-shift", "--ribbon-shift"].forEach(
          (property) => scene.style.removeProperty(property),
        );
      });
      progress?.style.removeProperty("transform");
    };
  }, [ready, reduced]);

  return <div className="reading-progress" aria-hidden="true" />;
}
