import { patientPhotos, site } from "@/content/site";
import { PatientLightbox } from "./PatientLightbox";

const tiles = ["medicina", "diagnostica", "chirurgia", "laparoscopia"] as const;
function Paw() {
  return <svg viewBox="0 0 64 64" aria-hidden="true" fill="currentColor"><ellipse cx="18" cy="26" rx="5.5" ry="7.5" /><ellipse cx="32" cy="18" rx="5.5" ry="8" /><ellipse cx="46" cy="26" rx="5.5" ry="7.5" /><path d="M32 30c-9 0-17 9-17 16 0 6 5 8 10 7 4-1 5-2 7-2s3 1 7 2c5 1 10-1 10-7 0-7-8-16-17-16Z" /></svg>;
}

/** In produzione resta nascosta se non ci sono foto autorizzate; in anteprima mostra lo spazio esempio. */
export function PatientGallery() {
  const photos = patientPhotos.filter(photo => photo.authorized && photo.src);
  if (!photos.length && !site.demo) return null;
  return <section className="container v2-patients" data-reveal aria-labelledby="patients-title">
    <div className="v2-head">
      <div><p className="eyebrow">Gli ospiti più simpatici</p><h2 id="patients-title">I nostri piccoli <em>pazienti</em></h2></div>
      {!photos.length && <p className="v2-note">Spazio di esempio: qui compariranno le foto curiose dei pazienti, con l’autorizzazione dei proprietari, aggiornate man mano.</p>}
    </div>
    {photos.length
      ? <PatientLightbox photos={photos} />
      : <ul className="v2-patient-tiles" aria-label="Spazio per le foto dei pazienti (esempio)">{tiles.map((area, index) => <li key={area} data-area={area}><Paw /><span>Foto in arrivo</span><small>0{index + 1}</small></li>)}</ul>}
  </section>;
}
