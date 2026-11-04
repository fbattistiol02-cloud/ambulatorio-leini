/** Foto autentiche da inserire. Impostare src e authorized dopo verifica dei diritti. */
export type ClinicPhoto = {
  src: string | null;
  /** Punto di messa a fuoco (CSS object-position) per i ritagli. */
  focus?: string;
  authorized: boolean;
  title: string;
  description: string;
  alt: string;
};
export const clinicPhotos = {
  exterior: {
    src: "/media/ambulatorio/ingresso.webp",
    focus: "50% 50%",
    authorized: true,
    title: "L’ingresso dell’ambulatorio",
    description: "Foto dell’ingresso o dell’esterno della clinica",
    alt: "Ingresso dell’Ambulatorio Veterinario Leinì in Via San Francesco al Campo 24",
  },
  reception: {
    src: "/media/ambulatorio/accoglienza.webp",
    focus: "50% 60%",
    authorized: true,
    title: "Gli spazi di accoglienza",
    description: "Foto degli ambienti in cui accogliamo animali e proprietari",
    alt: "Sala d’attesa dell’ambulatorio con sedie blu, acquario e orme sul pavimento",
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
    src: "/media/equipe/davide-boasso.webp",
    focus: "50% 30%",
    authorized: true,
    title: "Dott. Davide Boasso",
    description: "Ritratto professionale del direttore sanitario",
    alt: "Dott. Davide Boasso, direttore sanitario",
  },
  valieri: {
    src: "/media/equipe/erika-valieri.webp",
    focus: "50% 15%",
    authorized: true,
    title: "Dott.ssa Erika Valieri",
    description: "Ritratto professionale della Dott.ssa Valieri",
    alt: "Dott.ssa Erika Valieri, medico veterinario, con un cane",
  },
  laboratory: {
    src: "/media/diagnostica/laboratorio.webp",
    focus: "70% 50%",
    authorized: true,
    title: "Il laboratorio interno",
    description: "Foto della strumentazione per gli esami del sangue",
    alt: "Laboratorio interno: analizzatore ematologico Mindray, centrifuga e strumenti per gli esami del sangue",
  },
  imaging: {
    src: "/media/diagnostica/radiologia-sala.webp",
    focus: "50% 40%",
    authorized: true,
    title: "La diagnostica per immagini",
    description: "Foto delle attrezzature di radiologia o ecografia",
    alt: "Tavolo radiologico digitale Apogee con tubo radiogeno nella sala di radiologia",
  },
  surgery: {
    src: null,
    authorized: false,
    title: "La chirurgia",
    description: "Foto dell’ambiente o della strumentazione chirurgica",
    alt: "Ambiente utilizzato per la chirurgia veterinaria",
  },
  laparoscopy: {
    src: "/media/laparoscopia/sala-operatoria.webp",
    focus: "30% 35%",
    authorized: true,
    title: "La chirurgia laparoscopica",
    description:
      "Foto della strumentazione o del medico al lavoro, da autorizzare",
    alt: "Il Dott. Boasso durante un intervento di chirurgia laparoscopica, con il monitor che mostra l’immagine interna",
  },
  laparoscopyDetail: {
    src: "/media/laparoscopia/dettaglio-strumenti.webp",
    focus: "50% 55%",
    authorized: true,
    title: "Gli strumenti laparoscopici",
    description: "Telecamera e strumenti durante un intervento",
    alt: "Telecamera con guaina sterile e strumenti laparoscopici durante un intervento",
  },
  dayHospital: {
    src: "/media/ambulatorio/ricovero.webp",
    focus: "50% 45%",
    authorized: true,
    title: "Il day hospital",
    description: "Foto dell’ambiente utilizzato per le terapie giornaliere",
    alt: "Gatto riposa avvolto in una coperta rossa nell’area di ricovero del day hospital",
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

/** Radiografie fornite dal Dott. Boasso (nessun dato identificativo visibile). */
export const radiographs = [
  { src: "/media/diagnostica/rx-cranio.webp", alt: "Radiografia del cranio di un cane, proiezione laterale", name: "Cranio", authorized: true },
  { src: "/media/diagnostica/rx-bacino.webp", alt: "Radiografia del bacino e delle anche di un cane", name: "Bacino e anche", authorized: true },
  { src: "/media/diagnostica/rx-torace.webp", alt: "Radiografia del torace di un cane, proiezione laterale", name: "Torace", authorized: true },
];
