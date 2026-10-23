import Image from "next/image";
import { clinicPhotos, type ClinicPhotoKey } from "@/content/media";
/** Gli spazi riservati non simulano fotografie della clinica. */
export function PhotoSlot({ photo, className = "", preload = false, srcOverride }: {
  photo: ClinicPhotoKey; className?: string; preload?: boolean; srcOverride?: string | null;
}) {
  const item = clinicPhotos[photo];
  const src = srcOverride || (item.authorized ? item.src : null);
  return <figure className={`photo-slot photo-${photo} ${className} ${src ? "has-photo" : "awaiting-photo"}`}>
    {src ? <Image src={src} alt={item.alt} fill sizes="(max-width:640px) 92vw, (max-width:1000px) 50vw, 760px" preload={preload} /> : <div className="photo-reserved">
      <svg viewBox="0 0 80 80" aria-hidden="true" fill="none"><path d="M9 27V9h18m26 0h18v18m0 26v18H53m-26 0H9V53" /><circle cx="40" cy="40" r="15" /><path d="M35 40h10m-5-5v10" /></svg>
      <span>{photo === "exterior" ? "Foto dell’ingresso o dell’esterno della clinica" : item.title}<small>Fotografia da inserire</small></span>
    </div>}
    <figcaption>{item.title}</figcaption>
  </figure>;
}
