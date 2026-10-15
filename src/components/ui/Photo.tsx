import Image from "next/image";
import type { ImageDef } from "@/content/images";

type PhotoProps = {
  img: ImageDef;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Immagine a riempimento del contenitore (che deve essere `relative`).
 * Se la foto non è ancora disponibile mostra un segnaposto tonale.
 */
export function Photo({ img, sizes, priority, className = "" }: PhotoProps) {
  if (!img.src) {
    return (
      <div
        role="img"
        aria-label={img.alt}
        className={`photo-ph absolute inset-0 ${className}`}
      />
    );
  }
  return (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? "high" : undefined}
      placeholder={img.blur ? "blur" : "empty"}
      blurDataURL={img.blur}
      className={`object-cover ${className}`}
      style={{ objectPosition: img.position }}
    />
  );
}
