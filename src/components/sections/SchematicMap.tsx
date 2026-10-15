"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { gsap, useGSAP } from "../motion/gsap";
import { useMotion } from "../motion/MotionProvider";

/** Mappa schematica (non in scala): strade che si disegnano e un segnaposto. */
export function SchematicMap() {
  const ref = useRef<SVGSVGElement>(null);
  const { ready, reduced } = useMotion();

  useGSAP(
    () => {
      if (!ready || reduced || !ref.current) return;
      const paths = gsap.utils.toArray<SVGPathElement>(".road", ref.current);
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
      gsap.from(".pin", {
        y: -40,
        autoAlpha: 0,
        duration: 1,
        ease: "bounce.out",
        delay: 1,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    },
    { scope: ref, dependencies: [ready, reduced] },
  );

  return (
    <figure className="relative overflow-hidden rounded-[2rem] bg-paper">
      <svg
        ref={ref}
        viewBox="0 0 600 520"
        className="h-auto w-full"
        role="img"
        aria-label={`Mappa schematica con la posizione dell’ambulatorio in ${site.address.street}`}
        fill="none"
      >
        <path d="M-20 430 C 120 380, 200 470, 340 400 S 560 330, 640 360" stroke="var(--mist)" strokeWidth="46" strokeLinecap="round" />
        <g stroke="var(--ink)" strokeOpacity="0.28" strokeLinecap="round">
          <path className="road" d="M-10 120 H 610" strokeWidth="3" />
          <path className="road" d="M-10 250 C 150 250, 250 210, 610 215" strokeWidth="6" />
          <path className="road" d="M120 -10 V 530" strokeWidth="3" />
          <path className="road" d="M300 -10 C 300 120, 320 200, 300 530" strokeWidth="6" />
          <path className="road" d="M480 -10 V 530" strokeWidth="3" />
          <path className="road" d="M-10 340 H 610" strokeWidth="2" />
          <path className="road" d="M210 -10 V 250" strokeWidth="2" />
          <path className="road" d="M390 215 V 530" strokeWidth="2" />
        </g>
        <g className="pin" style={{ transformOrigin: "300px 238px" }}>
          <circle cx="300" cy="232" r="26" fill="var(--hazel-deep)" opacity="0.15">
            <animate attributeName="r" values="18;38;18" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <path
            d="M300 258s-22-19-22-35a22 22 0 0 1 44 0c0 16-22 35-22 35Z"
            fill="var(--ink)"
          />
          <circle cx="300" cy="223" r="8" fill="var(--paper)" />
        </g>
      </svg>
      <figcaption className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-soft">
        <span className="rounded-full bg-paper/90 px-3 py-1.5 font-semibold text-ink backdrop-blur">
          {site.address.street}
        </span>
        <span>Mappa schematica, non in scala</span>
      </figcaption>
    </figure>
  );
}
