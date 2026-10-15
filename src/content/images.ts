import blur from "./images.generated.json";

/**
 * Registro delle immagini (foto stock, licenza Unsplash). Crediti in CREDITS.md.
 * I placeholder sfocati sono generati da scripts/optimize-images.mjs.
 */
export type ImageDef = {
  src: string | null;
  alt: string;
  /** object-position CSS per il punto focale */
  position?: string;
  /** placeholder sfocato (data URL) */
  blur?: string;
};

export const images = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Un golden retriever dal pelo dorato, in controluce al tramonto, guarda di lato con la bocca socchiusa.",
    position: "50% 50%",
    blur: blur.hero,
  },
  visita: {
    src: "/images/visita.jpg",
    alt: "Un gattino bianco viene ascoltato con lo stetoscopio durante una visita veterinaria, tenuto con delicatezza dalle mani del medico.",
    position: "42% 50%",
    blur: blur.visita,
  },
  closing: {
    src: "/images/closing.jpg",
    alt: "Un cucciolo di golden retriever dorme sereno con il muso appoggiato al pavimento.",
    position: "50% 50%",
    blur: blur.closing,
  },
} satisfies Record<string, ImageDef>;
