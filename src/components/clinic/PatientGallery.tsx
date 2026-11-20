import { patientPhotos } from "@/content/site";
import { PatientLightbox } from "./PatientLightbox";

/** Mostrata solo quando ci sono foto autorizzate dai proprietari. */
export function PatientGallery() {
  const photos = patientPhotos.filter(photo => photo.authorized && photo.src);
  if (!photos.length) return null;
  return <section className="container v2-patients" data-reveal aria-labelledby="patients-title">
    <div className="v2-head">
      <div><p className="eyebrow">Gli ospiti più simpatici</p><h2 id="patients-title">I nostri piccoli <em>pazienti</em></h2></div>
    </div>
    <PatientLightbox photos={photos} />
  </section>;
}
