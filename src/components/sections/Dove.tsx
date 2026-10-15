import { site } from "@/content/site";
import { Arrow } from "../ui/Sketch";
import { CallLink } from "../ui/CallLink";
export function Dove() {
  return (
    <section
      id="dove"
      className="section location-section"
      aria-labelledby="location-title"
      data-motion-scene
    >
      <div className="wrap location-grid">
        <div>
          <p className="eyebrow">06 — VICINO A TE</p>
          <h2 id="location-title" data-reveal="title">
            Ci trovi
            <br />
            <em>a Leinì.</em>
          </h2>
          <p className="location-address">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city} · Torino
          </p>
          <p className="small-note">
            Indirizzo e recapiti da confermare con lo studio.
          </p>
          <a
            className="text-link"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.address.street}, ${site.address.city}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verifica l’indirizzo su Maps <Arrow diagonal />
          </a>
          <div className="contact-details">
            <div>
              <span>TELEFONO · DA CONFERMARE</span>
              <p>
                <CallLink className="phone-number">
                  {site.phone.display}
                </CallLink>
              </p>
            </div>
            <div>
              <span>EMAIL · DA CONFERMARE</span>
              <p>{site.email}</p>
            </div>
          </div>
          <p className="small-note">
            Il numero apre l’app per telefonare. Il modulo e l’email non inviano
            richieste da questa anteprima.
          </p>
        </div>
        <div className="location-card" data-reveal>
          <div className="local-art" aria-hidden="true">
            <svg viewBox="0 0 600 260" fill="none">
              <path
                className="map-road"
                d="M-30 220L210 120L370 -20M150 300L260 130L620 50M-20 30L280 130L650 230M430 -20L420 310"
              />
              <path
                className="map-lane"
                d="M-30 220L210 120L370 -20M150 300L260 130L620 50M-20 30L280 130L650 230M430 -20L420 310"
              />
              <circle cx="275" cy="128" r="42" className="map-halo" />
              <circle cx="275" cy="128" r="10" className="map-dot" />
              <text x="303" y="135">
                Leinì
              </text>
            </svg>
            <span>Illustrazione del territorio · non è una mappa stradale</span>
          </div>
          <div className="hours">
            <div className="hours-title">
              <h3>Il tempo per incontrarsi.</h3>
              <span className="demo-pill">Orari indicativi</span>
            </div>
            <table>
              <caption className="sr-only">
                Orari indicativi da confermare
              </caption>
              <tbody>
                <tr>
                  <th scope="row">Lunedì — Venerdì</th>
                  <td>
                    09:30 — 12:30
                    <br />
                    16:00 — 19:30
                  </td>
                </tr>
                <tr>
                  <th scope="row">Sabato</th>
                  <td>09:30 — 12:30</td>
                </tr>
                <tr>
                  <th scope="row">Domenica</th>
                  <td>Chiuso</td>
                </tr>
              </tbody>
            </table>
            <p className="small-note">
              Da verificare prima di recarsi allo studio. Questi orari non
              indicano disponibilità di appuntamenti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
