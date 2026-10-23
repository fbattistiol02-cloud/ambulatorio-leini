import Image from "next/image";
import { patientPhotos } from "@/content/site";

export function PatientGallery() {
  const photos = patientPhotos.filter((photo) => photo.authorized);
  if (!photos.length) return null;
  return (
    <section className="section patient-section">
      <div className="container">
        <p className="eyebrow">I nostri pazienti</p>
        <h2>Piccoli incontri, grandi legami.</h2>
        <div className="patient-grid">
          {photos.map((photo) => (
            <figure key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={480}
                sizes="(max-width: 640px) 90vw, 30vw"
              />
              <figcaption>{photo.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
