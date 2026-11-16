import Image from "next/image";
import { clinicPhotos, type ClinicPhoto, type ClinicPhotoKey } from "@/content/media";
import type { AreaId } from "@/content/site";

const areaOf: Partial<Record<ClinicPhotoKey, AreaId>> = {
  visit: "medicina", reception: "medicina",
  laboratory: "diagnostica", imaging: "diagnostica",
  surgery: "chirurgia", dayHospital: "chirurgia",
  laparoscopy: "laparoscopia", laparoscopyDetail: "laparoscopia",
};
export function PhotoSlot({ photo, className = "", preload = false, srcOverride }: {
  photo: ClinicPhotoKey; className?: string; preload?: boolean; srcOverride?: string | null;
}) {
  const item: ClinicPhoto = clinicPhotos[photo];
  const src = srcOverride || (item.authorized ? item.src : null);
  const area = areaOf[photo];
  if (!src) return null;
  return <figure data-area={area} className={`photo-slot photo-${photo} ${className} has-photo`}>
    <Image src={src} alt={item.alt} fill sizes="(max-width:640px) 92vw, (max-width:1000px) 50vw, 760px" preload={preload} style={item.focus ? { objectPosition: item.focus } : undefined} />
    <figcaption>{item.title}</figcaption>
  </figure>;
}
