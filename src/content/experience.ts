import type { ClinicPhotoKey } from "./media";
/** Percorso editoriale: non rappresenta la pianta o l’ordine fisico dei locali. */
export const visitChapters = [
  {
    id: "ingresso",
    label: "Ingresso",
    title: "La visita comincia da qui.",
    description:
      "Via San Francesco al Campo 24, a Leinì. Conosci l’ambulatorio, i suoi spazi e le attività prima di venirci a trovare.",
    photo: "exterior",
    next: "Entra nell’ambulatorio",
    link: "/contatti",
    linkLabel: "Indirizzo e indicazioni",
  },
  {
    id: "accoglienza",
    label: "Accoglienza",
    title: "Prima, ci conosciamo.",
    description:
      "Cani, gatti e animali non convenzionali. Le visite si concordano per telefono: indicaci la specie del tuo animale quando chiami.",
    photo: "reception",
    next: "Passa alla visita",
    link: "/contatti",
    linkLabel: "Come fissare un appuntamento",
  },
  {
    id: "visita",
    label: "La visita",
    title: "Le persone, al centro.",
    description:
      "Il Dott. Davide Boasso e la Dott.ssa Erika Valieri seguono l’attività dell’ambulatorio. Conosci i loro percorsi e le rispettive aree di interesse.",
    photo: "visit",
    next: "Scopri gli strumenti",
    link: "/equipe",
    linkLabel: "Conosci la nostra équipe",
  },
  {
    id: "strumenti",
    label: "Strumenti e attività",
    title: "Dalla visita agli approfondimenti.",
    description:
      "Laboratorio interno, radiologia diretta, ecografia e chirurgia. Nella pagina delle prestazioni trovi tutte le attività e le collaborazioni con specialisti esterni.",
    photo: "imaging",
    next: "Torna all’ingresso",
    link: "/prestazioni",
    linkLabel: "Esplora tutte le prestazioni",
  },
] as const satisfies readonly {
  id: string;
  label: string;
  title: string;
  description: string;
  photo: ClinicPhotoKey;
  next: string;
  link: string;
  linkLabel: string;
}[];
export const expertiseAreas = [
  {
    id: "interna",
    label: "Medicina interna",
    people: [0, 1],
    description:
      "Un’area di interesse condivisa dal Dott. Davide Boasso e dalla Dott.ssa Erika Valieri.",
    href: "/equipe",
    link: "I percorsi della nostra équipe",
  },
  {
    id: "laparoscopia",
    label: "Chirurgia laparoscopica",
    people: [0],
    description:
      "Una delle principali aree di interesse del Dott. Boasso e una prestazione disponibile nell’ambulatorio.",
    href: "/chirurgia-laparoscopica",
    link: "La chirurgia laparoscopica",
  },
  {
    id: "chirurgia",
    label: "Chirurgia dei tessuti molli",
    people: [0],
    description:
      "Tra gli interessi professionali del Dott. Boasso, insieme alla medicina interna, alla laparoscopia e all’oftalmologia.",
    href: "/prestazioni#chirurgia",
    link: "Chirurgia e day hospital",
  },
  {
    id: "oftalmologia",
    label: "Oftalmologia",
    people: [0],
    description:
      "Un’area di interesse del Dott. Boasso. Le visite oculistiche sono tra le prestazioni dell’ambulatorio.",
    href: "/prestazioni#medicina",
    link: "Visita e medicina",
  },
  {
    id: "dermatologia",
    label: "Dermatologia",
    people: [1],
    description:
      "Tra le aree di interesse della Dott.ssa Erika Valieri, che ha conseguito la qualifica GPCert Derm.",
    href: "/prestazioni#medicina",
    link: "Le visite dermatologiche",
  },
  {
    id: "citologia",
    label: "Citologia",
    people: [1],
    description:
      "Tra gli interessi professionali della Dott.ssa Erika Valieri, insieme alla dermatologia e alla medicina interna.",
    href: "/equipe#erika-valieri",
    link: "Il profilo di Erika Valieri",
  },
] as const;
