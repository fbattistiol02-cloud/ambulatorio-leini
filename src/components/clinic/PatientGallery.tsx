import { patientPhotos } from "@/content/site";
import { PatientLightbox } from "./PatientLightbox";
export function PatientGallery() {
  const photos = patientPhotos.filter(photo => photo.authorized && photo.src);
  if (!photos.length) return null;
  return <section className="section patient-section" aria-labelledby="patients-title">
    <div className="container"><h2 id="patients-title">I nostri piccoli pazienti</h2><PatientLightbox photos={photos} /></div>
  </section>;
}
