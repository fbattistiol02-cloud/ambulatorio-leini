"use client";
import { useState } from "react";
import { visitSteps } from "@/content/experience";
import { Photo } from "../ui/Photo";
import { images } from "@/content/images";
import { Sketch } from "../ui/Sketch";
export function Visita() {
  const [active, setActive] = useState(0);
  return (
    <section
      id="visita"
      className="section visit-section"
      aria-labelledby="visit-title"
      data-motion-scene
      data-visit={active}
    >
      <div className="wrap visit-grid">
        <div className="visit-image" data-reveal="image">
          <div className="visit-photo-depth">
            <Photo img={images.visita} sizes="(min-width: 900px) 45vw, 94vw" />
          </div>
          <div className="visit-photo-label" key={active} aria-hidden="true">
            <span>0{active + 1}</span>
            <em>{visitSteps[active].label}.</em>
          </div>
          <span className="image-note">
            Il valore di esserci · Immagine illustrativa
          </span>
        </div>
        <div className="visit-copy">
          <p className="eyebrow">04 — LA VISITA</p>
          <h2 id="visit-title" data-reveal="title">
            Un incontro.
            <br />
            <em>Tanti piccoli passi.</em>
          </h2>
          <p className="visit-intro">
            Sapere cosa aspettarsi è già un modo
            <br className="desktop-break" /> per sentirsi più tranquilli.
          </p>
          <div className="visit-tabs" aria-label="Le fasi della visita">
            <span
              className="visit-tab-line"
              style={{ transform: `translateX(${active * 100}%)` }}
              aria-hidden="true"
            />
            {visitSteps.map((s, i) => (
              <button
                key={s.label}
                type="button"
                aria-pressed={active === i}
                aria-controls={`visit-${i}`}
                onClick={() => setActive(i)}
              >
                <span>0{i + 1}</span>
                {s.label}
              </button>
            ))}
          </div>
          {visitSteps.map((s, i) => (
            <article
              className="visit-panel"
              key={s.label}
              id={`visit-${i}`}
              hidden={active !== i}
            >
              <Sketch kind={s.icon} />
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <em>{s.note}</em>
              </div>
            </article>
          ))}
          <p className="small-note">
            Un esempio di percorso, da validare con il medico.
          </p>
          <noscript>
            <p>
              {visitSteps
                .slice(1)
                .map((s) => `${s.label}: ${s.text}`)
                .join(" ")}
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}
