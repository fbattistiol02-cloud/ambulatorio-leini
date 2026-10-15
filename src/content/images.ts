/**
 * Registro delle immagini. `src: null` mostra un segnaposto elegante
 * finché le foto stock non sono state approvate (Gate G1).
 * Crediti in CREDITS.md.
 */
export type ImageDef = {
  src: string | null;
  alt: string;
  /** object-position CSS per il punto focale */
  position?: string;
  /** placeholder sfocato (data URL) generato da scripts/optimize-images */
  blur?: string;
};

export const images = {
  hero: {
    src: null,
    alt: "Un cane dal pelo chiaro guarda l’obiettivo con occhi attenti, in una luce calda.",
    position: "50% 35%",
  },
  visita: {
    src: null,
    alt: "Un gatto tranquillo durante una visita veterinaria.",
    position: "50% 40%",
  },
  closing: {
    src: null,
    alt: "Un cane che riposa serenamente su un morbido tappeto.",
    position: "50% 50%",
  },
} satisfies Record<string, ImageDef>;
