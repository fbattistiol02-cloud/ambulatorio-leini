import { Photo } from "../ui/Photo";
import { images } from "@/content/images";
import { Arrow } from "../ui/Sketch";
import { PortraitScene } from "../motion/PortraitScene";
import { CallLink } from "../ui/CallLink";
export function Hero() {
  return (
    <section id="top" className="hero" data-motion-scene>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <a className="concept-badge" href="#concept">
            <span /> Un nuovo sguardo sulla cura · Concept
          </a>
          <p className="eyebrow hero-eyebrow">
            LEINÌ, TORINO — AMBULATORIO VETERINARIO
          </p>
          <h1 aria-label="Lui si fida di te. Tu meriti risposte chiare.">
            <span className="hero-line" aria-hidden="true">
              <span>Lui si fida</span>
            </span>
            <span className="hero-line" aria-hidden="true">
              <span>
                di te<span className="hero-period">.</span>
              </span>
            </span>
            <em aria-hidden="true">
              <span className="hero-line">
                <span>Tu meriti</span>
              </span>
              <span className="hero-line">
                <span>risposte chiare.</span>
              </span>
            </em>
          </h1>
          <p className="hero-lead">
            Il loro mondo passa dalle nostre mani.
            <br />
            La cura comincia con l’ascolto, continua con la chiarezza.
          </p>
          <div className="hero-actions">
            <CallLink className="btn btn-primary" />
            <a href="#prepara-messaggio" className="text-link">
              Prepara un messaggio <Arrow />
            </a>
          </div>
          <p className="hero-location">
            <span aria-hidden="true">↗</span> Una proposta dedicata
            all’Ambulatorio Veterinario Leinì
          </p>
        </div>
        <PortraitScene>
          <div className="portrait-halo" aria-hidden="true" />
          <div className="hero-photo">
            <Photo
              img={images.hero}
              sizes="(min-width: 1000px) 48vw, 94vw"
              priority
            />
          </div>
          <div className="bond-seal" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path
                  id="bond-circle"
                  d="M60,60m-44,0a44,44 0 1,1 88,0a44,44 0 1,1 -88,0"
                />
              </defs>
              <text>
                <textPath href="#bond-circle" textLength="276">
                  UN PICCOLO GESTO · UN GRANDE LEGAME ·{" "}
                </textPath>
              </text>
            </svg>
            <span>✳</span>
          </div>
          <span className="vertical-note">
            PICCOLI GESTI. UN LEGAME GRANDE.
          </span>
          <svg
            className="hero-thread"
            viewBox="0 0 500 600"
            fill="none"
            aria-hidden="true"
          >
            <path d="M460 20C570 220 350 160 390 350S160 640 40 500C-40 390 100 390 100 470S20 540 2 580" />
          </svg>
          <div className="photo-caption">
            <span className="caption-star" aria-hidden="true">
              ✳
            </span>
            <p>
              Per te è parte della famiglia.
              <br />
              <em>Da qui comincia tutto.</em>
            </p>
          </div>
          <span className="image-note">Immagine illustrativa</span>
        </PortraitScene>
      </div>
      <div className="story-ribbon" aria-hidden="true" data-motion-scene>
        <div className="ribbon-track">
          <span>Un legame.</span>
          <i>✳</i>
          <em>Una cura.</em>
          <i>✳</i>
          <span>Una storia.</span>
          <i>✳</i>
          <em>La vostra.</em>
          <i>✳</i>
        </div>
      </div>
      <div className="wrap hero-bottom">
        <span>IL LORO MONDO, NELLE TUE MANI</span>
        <a href="#chiarezza">
          Un passo alla volta <span aria-hidden="true">↓</span>
        </a>
        <span>01 — IL LEGAME</span>
      </div>
    </section>
  );
}
