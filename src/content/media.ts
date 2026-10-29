/** Foto autentiche da inserire. Impostare src e authorized dopo verifica dei diritti. */
export type ClinicPhoto = {
  src: string | null;
  authorized: boolean;
  title: string;
  description: string;
  alt: string;
};
export const clinicPhotos = {
  exterior: {
    src: null,
    authorized: false,
    title: "L’ingresso dell’ambulatorio",
    description: "Foto dell’ingresso o dell’esterno della clinica",
    alt: "Ingresso dell’Ambulatorio Veterinario Leinì in Via San Francesco al Campo 24",
  },
  reception: {
    src: null,
    authorized: false,
    title: "Gli spazi di accoglienza",
    description: "Foto degli ambienti in cui accogliamo animali e proprietari",
    alt: "Spazi di accoglienza dell’ambulatorio",
  },
  visit: {
    src: null,
    authorized: false,
    title: "La visita",
    description:
      "Foto di una sala visita o di un momento di lavoro autorizzato",
    alt: "Ambiente dedicato alle visite veterinarie",
  },
  team: {
    src: null,
    authorized: false,
    title: "I medici dell’ambulatorio",
    description: "Foto del Dott. Boasso e della Dott.ssa Valieri insieme",
    alt: "Dott. Davide Boasso e Dott.ssa Erika Valieri nell’ambulatorio",
  },
  boasso: {
    src: null,
    authorized: false,
    title: "Dott. Davide Boasso",
    description: "Ritratto professionale del direttore sanitario",
    alt: "Dott. Davide Boasso, direttore sanitario",
  },
  valieri: {
    src: null,
    authorized: false,
    title: "Dott.ssa Erika Valieri",
    description: "Ritratto professionale della Dott.ssa Valieri",
    alt: "Dott.ssa Erika Valieri, medico veterinario",
  },
  laboratory: {
    src: null,
    authorized: false,
    title: "Il laboratorio interno",
    description: "Foto della strumentazione per gli esami del sangue",
    alt: "Laboratorio interno dell’ambulatorio",
  },
  imaging: {
    src: null,
    authorized: false,
    title: "La diagnostica per immagini",
    description: "Foto delle attrezzature di radiologia o ecografia",
    alt: "Attrezzature per la diagnostica per immagini",
  },
  surgery: {
    src: null,
    authorized: false,
    title: "La chirurgia",
    description: "Foto dell’ambiente o della strumentazione chirurgica",
    alt: "Ambiente utilizzato per la chirurgia veterinaria",
  },
  laparoscopy: {
    src: null,
    authorized: false,
    title: "La chirurgia laparoscopica",
    description:
      "Foto della strumentazione o del medico al lavoro, da autorizzare",
    alt: "Strumentazione per la chirurgia laparoscopica dell’ambulatorio",
  },
  dayHospital: {
    src: null,
    authorized: false,
    title: "Il day hospital",
    description: "Foto dell’ambiente utilizzato per le terapie giornaliere",
    alt: "Ambiente utilizzato per il day hospital veterinario",
  },
} satisfies Record<string, ClinicPhoto>;
export type ClinicPhotoKey = keyof typeof clinicPhotos;

/** Attivare solo con video autentico autorizzato e sottotitoli italiani verificati. */
export const laparoscopyVideo: {
  src: string | null;
  captions: string | null;
  poster: string | null;
  authorized: boolean;
} = { src: null, captions: null, poster: null, authorized: false };
