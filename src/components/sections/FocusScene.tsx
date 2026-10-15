"use client";
import { useEffect, useRef, useState } from "react";
import { useMotion } from "../motion/MotionProvider";
import { Sketch } from "../ui/Sketch";

const steps = [
  {
    title: "Ascoltare.",
    text: "Le tue osservazioni, le sue abitudini, le domande che porti con te.",
    note: "Ogni storia comincia da una voce. La tua.",
    icon: "listen",
    label: "Il tuo racconto",
  },
  {
    title: "Comprendere.",
    text: "Dare un significato alle informazioni, con parole semplici.",
    note: "Fare spazio alle domande. Trovare chiarezza, insieme.",
    icon: "clarity",
    label: "Uno sguardo chiaro",
  },
  {
    title: "Accompagnare.",
    text: "Sapere qual è il prossimo passo, da concordare insieme.",
    note: "Un punto di partenza. Una direzione condivisa.",
    icon: "path",
    label: "Il prossimo passo",
  },
] as const;
const threads = [
  "M20 210C80 40 260 20 275 170S105 330 100 185S290 75 310 225S100 300 60 150S220 35 335 190",
  "M20 210C90 210 100 80 180 80S300 210 230 260S95 240 110 165S240 100 280 170S300 230 335 190",
  "M20 210C70 210 85 210 120 210S180 210 200 175S220 135 250 135S280 135 300 110S320 85 335 85",
];

export function FocusScene() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { ready, reduced } = useMotion();
  useEffect(() => {
    if (!ready) return;
    const section = root.current;
    if (!section) return;
    const articles = Array.from(
      section.querySelectorAll<HTMLElement>(".method-step"),
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      const anchor = innerHeight * 0.65;
      let nearest = 0;
      let distance = Infinity;
      articles.forEach((article, index) => {
        const bounds = article.getBoundingClientRect();
        const next = Math.abs(bounds.top + bounds.height * 0.45 - anchor);
        if (next < distance) {
          distance = next;
          nearest = index;
        }
      });
      setActive(nearest);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", schedule, { passive: true });
        schedule();
      } else window.removeEventListener("scroll", schedule);
    });
    observer.observe(section);
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [ready]);

  return (
    <section
      ref={root}
      className="method-section"
      id="chiarezza"
      aria-labelledby="method-title"
      data-motion-scene
      data-stage={active}
    >
      <div className="wrap method-layout">
        <div className="method-heading" data-reveal="title">
          <div>
            <p className="eyebrow light">02 — L’APPROCCIO</p>
            <h2 id="method-title">
              Dalla preoccupazione
              <br />
              <em>alla chiarezza.</em>
            </h2>
          </div>
          <p className="method-intro">
            Un filo che si scioglie.
            <br />
            Un passo che diventa chiaro.
            <span className="small-note">
              La nostra proposta di esperienza, da condividere con lo studio.
            </span>
          </p>
        </div>
        <div className="method-grid">
          <div className="method-art">
            <div className="thread-sculpture" aria-hidden="true">
              <div className="sculpture-orbit orbit-one" />
              <div className="sculpture-orbit orbit-two" />
              <span className="sculpture-mark">✳</span>
              <svg
                className="sculpture-thread"
                viewBox="0 0 360 340"
                fill="none"
              >
                {threads.map((path, i) => (
                  <path
                    key={path}
                    d={path}
                    pathLength="1"
                    className={active === i ? "active" : ""}
                  />
                ))}
              </svg>
              <div className="sculpture-core" key={active}>
                <Sketch kind={steps[active].icon} />
              </div>
              <span className="sculpture-coordinate">0{active + 1} / 03</span>
              <span className="sculpture-label" key={steps[active].label}>
                {steps[active].label}
              </span>
            </div>
            <div className="method-controls" aria-label="Esplora l’approccio">
              {steps.map((step, i) => (
                <button
                  key={step.title}
                  type="button"
                  aria-label={`0${i + 1} — ${step.title}`}
                  aria-pressed={active === i}
                  onClick={() => {
                    setActive(i);
                    root.current
                      ?.querySelectorAll<HTMLElement>(".method-step")
                      [
                        i
                      ]?.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "center" });
                  }}
                >
                  <span>0{i + 1}</span>
                  <span className="method-control-line" />
                </button>
              ))}
            </div>
          </div>
          <div className="method-list">
            {steps.map((step, i) => (
              <article
                key={step.title}
                className={`method-step ${active === i ? "is-active" : ""}`}
                id={`approccio-${i + 1}`}
              >
                <span className="method-big-number" aria-hidden="true">
                  0{i + 1}
                </span>
                <div className="method-step-copy">
                  <span className="eyebrow light">
                    IL FILO DELLA CURA / 0{i + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <em>{step.note}</em>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="method-outro" data-reveal="title">
          <span>Da un dubbio.</span>
          <span aria-hidden="true">↗</span>
          <em>A un passo avanti.</em>
        </div>
      </div>
    </section>
  );
}
