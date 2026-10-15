/** Illustrative campaign generated with ImageGen. See docs/IMAGE_PROMPTS.md. */
export type ImageDef = {
  src: string | null;
  alt: string;
  position?: string;
  blur?: string;
};
export const images = {
  hero: {
    src: "/images/hero-v2.webp",
    alt: "Ritratto illustrativo di un golden retriever, con una mano appoggiata delicatamente sotto il muso.",
    position: "50% 45%",
  },
  visita: {
    src: "/images/touch-v2.webp",
    alt: "Un gatto si abbandona a una carezza, con gli occhi chiusi. Immagine illustrativa.",
    position: "50% 50%",
  },
  closing: {
    src: "/images/rest-v2.webp",
    alt: "Un golden retriever riposa con il muso sulle zampe. Immagine illustrativa.",
    position: "50% 55%",
  },
} satisfies Record<string, ImageDef>;
