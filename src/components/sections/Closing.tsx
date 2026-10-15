import { Photo } from "../ui/Photo";
import { images } from "@/content/images";
import { Arrow } from "../ui/Sketch";
import { CallLink } from "../ui/CallLink";
export function Closing() {
  return (
    <section
      className="closing-section"
      aria-labelledby="closing-title"
      data-motion-scene
    >
      <div className="wrap closing-grid">
        <div>
          <p className="eyebrow light">IL LORO MONDO, NELLE TUE MANI</p>
          <h2 id="closing-title" data-reveal="title">
            Per lui, sei casa.
            <br />
            <em>Partiamo da qui.</em>
          </h2>
          <div className="closing-actions">
            <CallLink className="btn btn-light" />
            <a className="text-link" href="#prepara-messaggio">
              Preferisci scrivere? <Arrow />
            </a>
          </div>
        </div>
        <div className="closing-photo" data-reveal="image">
          <Photo img={images.closing} sizes="(min-width: 900px) 45vw, 94vw" />
          <span className="image-note">Immagine illustrativa</span>
        </div>
      </div>
    </section>
  );
}
