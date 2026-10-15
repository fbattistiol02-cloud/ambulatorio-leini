"use client";

import { useRef } from "react";
import { copy } from "@/content/site";
import { gsap, useGSAP } from "../motion/gsap";
import { useMotion } from "../motion/MotionProvider";

/**
 * SCENA FIRMA — "dalla preoccupazione alla chiarezza".
 * La sezione resta ferma (pin) mentre lo scroll mette a fuoco, una alla volta,
 * le domande di chi ha un animale in difficoltà e le trasforma in risposte.
 * Senza JS o con movimento ridotto: tutto nitido, sezione normale.
 */
export function FocusScene() {
  const root = useRef<HTMLElement>(null);
  const { ready, reduced } = useMotion();
  const { focus } = copy;

  useGSAP(
    () => {
      if (!ready || reduced || !root.current) return;
      const mm = gsap.matchMedia();

      mm.add(
        { wide: "(min-width: 768px)", narrow: "(max-width: 767px)" },
        (ctx) => {
          const wide = Boolean(ctx.conditions?.wide);
          const q = gsap.utils.toArray<HTMLElement>("[data-q]", root.current);
          const a = gsap.utils.toArray<HTMLElement>("[data-a]", root.current);
          const n = gsap.utils.toArray<HTMLElement>("[data-n]", root.current);
          const ring = root.current!.querySelector("[data-ring]");
          const bar = root.current!.querySelector("[data-bar]");

          // stato iniziale: tutto fuori fuoco
          gsap.set(q, { filter: "blur(22px)", opacity: 0.3 });
          gsap.set(a, { autoAlpha: 0, y: 18 });
          gsap.set(n, { opacity: 0.35 });

          const step = 1.5;
          const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => `+=${Math.round(window.innerHeight * (wide ? 2.6 : 2.1))}`,
              scrub: 0.8,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          q.forEach((el, i) => {
            const t = i * step;
            tl.to(el, { filter: "blur(0px)", opacity: 1, duration: 1 }, t)
              .to(n[i], { opacity: 1, duration: 0.4 }, t)
              .to(a[i], { autoAlpha: 1, y: 0, duration: 0.8 }, t + 0.55);
            if (i > 0) {
              tl.to([q[i - 1], a[i - 1]], { opacity: 0.5, duration: 0.8 }, t);
            }
          });

          // epilogo: tutto torna nitido e pieno
          const end = q.length * step;
          tl.to([...q, ...a], { opacity: 1, duration: 0.8 }, end).to(
            {},
            { duration: 0.7 },
            end + 0.8,
          );

          if (ring) {
            tl.to(ring, { rotation: 120, ease: "none", duration: tl.duration() }, 0);
          }
          if (bar) {
            tl.fromTo(
              bar,
              { scaleY: 0 },
              { scaleY: 1, ease: "none", duration: tl.duration() },
              0,
            );
          }
        },
      );

      return () => mm.revert();
    },
    { scope: root, dependencies: [ready, reduced] },
  );

  return (
    <section
      id="chiarezza"
      ref={root}
      className="relative overflow-clip bg-night text-paper"
      aria-labelledby="focus-title"
    >
      {/* anello-obiettivo di sfondo */}
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-[22%] top-1/2 h-[120vmin] w-[120vmin] -translate-y-1/2 text-paper/10"
        fill="none"
      >
        <g data-ring style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="290" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
          <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="1" />
          <path d="M300 10A290 290 0 0 1 590 300" stroke="var(--hazel-light)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M300 590v-24M300 10v24M10 300h24M590 300h-24" stroke="currentColor" strokeWidth="2" />
        </g>
      </svg>

      <div className="wrap relative flex min-h-[100svh] flex-col justify-center py-24 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="eyebrow !text-hazel-light">{focus.eyebrow}</p>
            <h2
              id="focus-title"
              className="font-display mt-5"
              style={{
                fontSize: "clamp(1.9rem, 1.2rem + 2.2vw, 3.2rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 350,
              }}
            >
              Dalla preoccupazione
              <br />
              <em className="italic font-light text-hazel-light">alla chiarezza.</em>
            </h2>

            <div className="mt-8 hidden items-center gap-4 md:flex" aria-hidden>
              <span className="relative block h-24 w-px bg-paper/20">
                <span
                  data-bar
                  className="absolute inset-0 origin-top bg-hazel-light"
                />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-paper/60">
                Scorri
              </span>
            </div>
          </div>

          <ol className="md:col-span-8">
            {focus.steps.map((s, i) => (
              <li
                key={s.question}
                className="grid grid-cols-[2.2rem_1fr] gap-4 border-t border-paper/15 py-6 md:grid-cols-[3rem_1fr] md:py-8"
              >
                <span
                  data-n
                  className="font-display pt-2 text-sm text-hazel-light md:pt-3 md:text-base"
                >
                  0{i + 1}
                </span>
                <div>
                  <p
                    data-q
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.9rem, 1rem + 3.6vw, 4rem)",
                      lineHeight: 1.04,
                      letterSpacing: "-0.022em",
                      fontWeight: 350,
                    }}
                  >
                    {s.question}
                  </p>
                  <p
                    data-a
                    className="mt-3 max-w-xl text-[1.02rem] leading-relaxed text-paper/80 md:text-[1.15rem]"
                  >
                    {s.answer}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
