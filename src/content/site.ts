/** Fonte unica: brief del cliente del 22 ottobre 2026. Vedi docs/REVISIONE_CLIENTE.md. */
export const site = {
  name: "Ambulatorio Veterinario Leinì",
  previewUrl: "https://ambulatorio-leini.vercel.app",
  address: {
    street: "Via San Francesco al Campo 24",
    postalCode: "10040",
    city: "Leinì",
    province: "TO",
  },
  phone: { display: "011 998 1469", tel: "+390119981469" },
  mobile: { display: "347 640 1966", tel: "+393476401966" },
  email: "av.leini@libero.it",
  hours: {
    weekday: "9:30–12:30",
    saturday: "9:30–12:30",
    provisional: true,
    note: "Orari provvisori: chiama per confermare. La fascia pomeridiana è in attesa di verifica.",
  },
  social: {
    instagram: { handle: "@ambu.vet.leini", url: null as string | null },
    doctorInstagram: null as string | null,
  },
} as const;

export const navigation = [
  { href: "/ambulatorio", label: "L’ambulatorio" },
  { href: "/prestazioni", label: "Prestazioni" },
  { href: "/equipe", label: "Équipe" },
  { href: "/contatti", label: "Contatti" },
] as const;

export const serviceCategories = [
  {
    id: "laparoscopia",
    title: "Chirurgia laparoscopica",
    icon: "surgery",
    text: "Una delle principali aree di interesse del Dott. Boasso.",
    services: ["Chirurgia laparoscopica"],
    featured: true,
  },
  {
    id: "medicina",
    title: "Visite e medicina",
    icon: "visit",
    text: "Per cani, gatti e animali non convenzionali, su appuntamento.",
    services: [
      "Visite cliniche per cani, gatti e animali non convenzionali",
      "Applicazione microchip e registrazione in anagrafe",
      "Visite oculistiche",
      "Visite dermatologiche specialistiche",
    ],
    featured: false,
  },
  {
    id: "diagnostica",
    title: "Diagnostica",
    icon: "imaging",
    text: "Esami del sangue, radiologia diretta ed ecografia.",
    services: [
      "Laboratorio interno per esami del sangue",
      "Radiologia diretta",
      "Ecografia",
    ],
    featured: false,
  },
  {
    id: "chirurgia",
    title: "Chirurgia e day hospital",
    icon: "care",
    text: "Chirurgia tradizionale e terapie giornaliere o post-chirurgiche.",
    services: [
      "Chirurgia tradizionale",
      "Day hospital per terapie giornaliere o post-chirurgiche",
    ],
    featured: false,
  },
] as const;

export const externalServices = [
  "Ecografie addominali",
  "Ecocardiografie",
  "Chirurgia ortopedica",
  "Endoscopie",
  "Neurologia",
];

export const professionals = [
  {
    name: "Dott. Davide Boasso",
    role: "Direttore sanitario",
    degree: "Laureato in Medicina veterinaria nel 2007.",
    bio: "Gestisce l’ambulatorio dal gennaio 2009. Si interessa principalmente di medicina interna, chirurgia dei tessuti molli, chirurgia laparoscopica e oftalmologia.",
    interests: "Medicina interna · Chirurgia · Oftalmologia",
    qualification: null,
    photo: null as string | null,
  },
  {
    name: "Dott.ssa Erika Valieri",
    role: "Medico veterinario",
    degree: "Laureata in Medicina veterinaria nel 2015.",
    bio: "Le sue aree di interesse sono citologia, dermatologia, pronto soccorso e medicina interna.",
    interests: "Citologia · Dermatologia · Medicina interna",
    qualification: "GPCert Derm",
    photo: null as string | null,
  },
] as const;

export const faqs = [
  {
    question: "Come fisso una visita?",
    answer:
      "Gli appuntamenti si concordano esclusivamente per telefono. Chiama lo 011 998 1469 oppure il 347 640 1966.",
  },
  {
    question: "Quali animali visitate?",
    answer:
      "Visitiamo cani, gatti e animali non convenzionali. Quando chiami per l’appuntamento, indicaci la specie del tuo animale.",
  },
  {
    question: "Posso scrivere per informazioni o ricette?",
    answer:
      "Sì, per informazioni e richieste di ricette puoi scrivere a av.leini@libero.it. Per fissare una visita, chiamaci.",
  },
  {
    question: "Dove si trova l’ambulatorio?",
    answer:
      "Siamo in Via San Francesco al Campo 24, 10040 Leinì (TO). Il pulsante Indicazioni apre Google Maps.",
  },
] as const;

/** Aggiungere solo immagini autentiche con autorizzazione documentata. Nessun modulo di invio. */
export type PatientPhoto = {
  src: string;
  alt: string;
  name: string;
  authorized: boolean;
};
export const patientPhotos: PatientPhoto[] = [];

export const campaign = {
  hero: {
    exteriorImage: null as string | null,
    subtitle: "Medicina, diagnostica e chirurgia.",
    doctors: "Dott. Davide Boasso · Dott.ssa Erika Valieri",
  },
  services: {
    title: "Le cure, da vicino.",
    lap: "Chirurgia laparoscopica",
    lapDescription: "In ambulatorio, con il Dott. Davide Boasso.",
    categories: [
      {
        id: "medicina",
        title: "Visite e medicina",
        text: "Cani, gatti e animali non convenzionali.",
        icon: "visit",
      },
      {
        id: "diagnostica",
        title: "Diagnostica",
        text: "Laboratorio, radiologia ed ecografia.",
        icon: "imaging",
      },
      {
        id: "chirurgia",
        title: "Chirurgia e day hospital",
        text: "Interventi e terapie giornaliere.",
        icon: "care",
      },
    ],
  },
  team: {
    title: "Conosci i tuoi veterinari.",
    specialties: [
      "Direttore sanitario · Chirurgia laparoscopica",
      "Medico veterinario · Dermatologia · GPCert Derm",
    ],
  },
  faqs: [
    {
      question: "Come prendo appuntamento?",
      answer:
        "Chiama lo 011 998 1469 o il 347 640 1966. Gli appuntamenti si fissano per telefono.",
    },
    {
      question: "Quali animali visitate?",
      answer:
        "Cani, gatti e animali non convenzionali. Indicaci la specie quando chiami.",
    },
    {
      question: "Per cosa posso usare l’email?",
      answer: "Per informazioni e richieste di ricette: av.leini@libero.it.",
    },
  ],
} as const;
