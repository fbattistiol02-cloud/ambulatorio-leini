"use client";

import { useRef } from "react";
import { copy } from "@/content/site";
import { images } from "@/content/images";
import { richTitle } from "@/lib/richTitle";
import { gsap, ScrollTrigger, useGSAP } from "../motion/gsap";
import { useMotion } from "../motion/MotionProvider";
import { Parallax } from "../motion/Parallax";
import { SplitHeading } from "../motion/SplitHeading";
import { Photo } from "../ui/Photo";

export function Visita() {
  const root = useRef<HTMLElement>(null);
  const { ready, reduced } = useMotion();
  const { visita } = copy;

  useGSAP(
    () => {
      if (!ready || reduced || !root.current) return;
      const list = root.current.querySelector("[data-list]");
      const line = root.current.querySelector("[data-line]");
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]", root.current);
      const dots = gsap.utils.toArray<HTMLElement>("[data-dot]", root.current);

      gsap.set(steps, { autoAlpha: 0, y: 28 });
      gsap.set(dots, { scale: 0.6, backgroundColor: "transparent" });

      if (list && line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: list,
              start: "top 65%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          },
        );
      }

      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 68%",
          onEnter: () => {
            gsap.to(step, { autoAlpha: 1, y: 0, duration: 0.9, ease: "expo.out" });
            gsap.to(dots[i], {
              scale: 1,
              backgroundColor: "var(--hazel-deep)",
              duration: 0.6,
              ease: "back.out(2)",
            });
          },
          onLeaveBack: () => {
            gsap.to(step, { autoAlpha: 0, y: 28, duration: 0.5 });
            gsap.to(dots[i], {
              scale: 0.6,
              backgroundColor: "transparent",
              duration: 0.4,
            });
          },
        });
      });
    },
    { scope: root, dependencies: [ready, reduced] },
  );

  return (
    <section
      id="visita"
      ref={root}
      className="section bg-paper-2"
      aria-labelledby="visita-title"
    >
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:self-start lg:sticky lg:top-28">
          <p className="eyebrow">{visita.eyebrow}</p>
          <SplitHeading as="h2" className="display-lg mt-5">
            <span id="visita-title">{richTitle(visita.title)}</span>
          </SplitHeading>

          <div className="relative mt-10 aspect-[5/4] overflow-hidden rounded-[2rem] lg:mt-14">
            <Parallax amount={6}>
              <div className="relative h-full w-full">
                <Photo img={images.visita} sizes="(min-width: 1024px) 480px, 92vw" />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol data-list className="relative pl-10 md:pl-14">
            <span
              aria-hidden
              className="absolute bottom-2 left-[0.7rem] top-2 w-px bg-ink/15 md:left-[0.95rem]"
            >
              <span data-line className="absolute inset-0 origin-top bg-hazel-deep" />
            </span>

            {visita.steps.map((s) => (
              <li key={s.key} data-step className="relative pb-16 last:pb-0 lg:pb-24">
                <span
                  data-dot
                  aria-hidden
                  className="absolute -left-10 top-2 block h-3.5 w-3.5 rounded-full border-2 border-hazel-deep bg-hazel-deep md:-left-14 md:ml-[0.4rem]"
                />
                <p className="eyebrow">{s.label}</p>
                <h3 className="display-md mt-3">{s.title}</h3>
                <p className="mt-4 max-w-md text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
