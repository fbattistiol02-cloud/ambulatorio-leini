import Link from "next/link";
import type { ReactNode } from "react";
import { PhotoSlot } from "./PhotoSlot";
import type { ClinicPhotoKey } from "@/content/media";
export function PageIntro({
  eyebrow,
  title,
  description,
  photo,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  photo?: ClinicPhotoKey;
}) {
  return (
    <div
      className={`container page-opening ${photo ? "page-opening-photo" : ""}`}
    >
      <div>
        <Link href="/" className="back-link">
          ← Home
        </Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-opening-lead">{description}</p>
      </div>
      {photo && (
        <PhotoSlot photo={photo} preload className="page-opening-image" />
      )}
    </div>
  );
}
