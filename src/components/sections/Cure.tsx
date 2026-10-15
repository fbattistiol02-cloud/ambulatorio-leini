"use client";
import { services } from "@/content/experience";
import { Sketch, Arrow } from "../ui/Sketch";
export function Cure() {
  return (
    <section
      className="section services-section"
      id="cure"
      aria-labelledby="services-title"
      data-motion-scene
    >
      <div className="wrap">
        <div className="section-heading" data-reveal="title">
          <div>
            <p className="eyebrow">03 — LE CURE</p>
            <h2 id="services-title">
              Ogni cura comincia
              <br />
              <em>dal capire.</em>
            </h2>
          </div>
          <p>
            Esplora il percorso, trova le parole
            <br className="desktop-break" /> per le tue domande.
            <span className="small-note">
              Servizi illustrativi, da confermare con lo studio.
            </span>
          </p>
        </div>
        <div className="service-explorer" data-reveal>
          {services.map((service, i) => (
            <details
              className="service-item"
              name="services"
              key={service.id}
              open={i === 0}
            >
              <summary>
                <span className="service-index">0{i + 1}</span>
                <span>{service.title}</span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="service-detail">
                <div className="service-art">
                  <span className="service-orbit" aria-hidden="true" />
                  <Sketch kind={service.icon} />
                  <span>CONOSCERE È IL PRIMO PASSO</span>
                </div>
                <div>
                  <p className="eyebrow">IL PERCORSO</p>
                  <h3>{service.subtitle}</h3>
                  <p>{service.text}</p>
                  <p className="service-specific">{service.detail}</p>
                  <a
                    className="text-link"
                    href="#prepara-messaggio"
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent("leini-topic", { detail: service.id }),
                      )
                    }
                  >
                    Prepara una domanda <Arrow />
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
