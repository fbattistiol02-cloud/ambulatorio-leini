import Image from "next/image";
import { clinicPhotos, type ClinicPhotoKey } from "@/content/media";
import type { AreaId } from "@/content/site";

const areaOf: Partial<Record<ClinicPhotoKey, AreaId>> = {
  visit: "medicina", reception: "medicina",
  laboratory: "diagnostica", imaging: "diagnostica",
  surgery: "chirurgia", dayHospital: "chirurgia",
  laparoscopy: "laparoscopia",
};
const message: Record<ClinicPhotoKey, string> = {
  exterior: "La foto dell’ingresso arriverà qui",
  reception: "La foto dell’accoglienza arriverà qui",
  visit: "La foto della sala visita arriverà qui",
  team: "La foto dell’équipe arriverà qui",
  boasso: "Il ritratto arriverà qui",
  valieri: "Il ritratto arriverà qui",
  laboratory: "La foto del laboratorio arriverà qui",
  imaging: "La foto della diagnostica arriverà qui",
  surgery: "La foto della sala chirurgica arriverà qui",
  laparoscopy: "La foto della laparoscopia arriverà qui",
  dayHospital: "La foto del day hospital arriverà qui",
};
/** Gli spazi riservati non simulano fotografie della clinica: sono segnaposto progettati e dichiarati. */
export function PhotoSlot({ photo, className = "", preload = false, srcOverride }: {
  photo: ClinicPhotoKey; className?: string; preload?: boolean; srcOverride?: string | null;
}) {
  const item = clinicPhotos[photo];
  const src = srcOverride || (item.authorized ? item.src : null);
  const area = areaOf[photo];
  return <figure data-area={area} className={`photo-slot photo-${photo} ${className} ${src ? "has-photo" : "awaiting-photo"}`}>
    {src ? <Image src={src} alt={item.alt} fill sizes="(max-width:640px) 92vw, (max-width:1000px) 50vw, 760px" preload={preload} /> : <div className="photo-reserved">
      <svg viewBox="0 0 80 80" aria-hidden="true" fill="none"><path d="M9 27V9h18m26 0h18v18m0 26v18H53m-26 0H9V53" /><circle cx="40" cy="40" r="15" /><path d="M35 40h10m-5-5v10" /></svg>
      <span>{message[photo]}<small>{item.title}</small></span>
    </div>}
    <figcaption>{item.title}</figcaption>
  </figure>;
}
