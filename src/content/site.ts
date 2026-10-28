/** Fonte unica: brief del cliente del 22 e 28 ottobre 2026. Vedi docs/REVISIONE_CLIENTE.md. */
export const site = {
  name: "Ambulatorio Veterinario Leinì",
  previewUrl: "https://ambulatorio-leini.vercel.app",
  address: {
    street: "Via San Francesco al Campo 24",
    postalCode: "10040",
    city: "Leinì",
    province: "TO",
  },
  phone: { display: "011 9981469", tel: "+390119981469" },
  mobile: { display: "347 6401966", tel: "+393476401966" },
  email: "av.leini@libero.it",
  hours: {
    weekday: "09:30–12:30",
    afternoon: "16:00–19:30",
    saturday: "09:30–12:30",
  },
  social: {
    instagram: { handle: "@ambu.vet.leini", url: "https://www.instagram.com/ambu.vet.leini/" as string | null },
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
    id: "medicina", title: "Visita e medicina", icon: "visit",
    text: "La visita clinica rappresenta la base del nostro lavoro e di tutte le branche specialistiche. Dalla raccolta dell'anamnesi alla valutazione dei segni clinici, fino ai risultati degli esami di laboratorio, ogni elemento contribuisce a formulare una diagnosi precisa e tempestiva.",
    services: ["Visite su appuntamento per cani, gatti e animali non convenzionali", "Applicazione microchip e registrazione in anagrafe", "Visite oculistiche", "Visite dermatologiche", "Medicina degli animali non convenzionali"],
    featured: false,
  },
  {
    id: "diagnostica", title: "Diagnostica", icon: "imaging",
    text: "Il nostro ambulatorio offre un servizio di diagnostica per immagini moderno e all'avanguardia, con un sistema radiologico digitale diretto di ultima generazione, un ecografo e un laboratorio interno per eseguire rapidamente i principali esami del sangue.",
    services: ["Radiologia digitale diretta", "Ecografia", "Laboratorio interno", "Principali esami ematici"],
    featured: false,
  },
  {
    id: "chirurgia", title: "Chirurgia e ricovero", icon: "care",
    text: "Presso il nostro ambulatorio vengono eseguiti interventi di chirurgia dei tessuti molli. Da alcuni anni è inoltre disponibile la chirurgia laparoscopica, una tecnica che consente di eseguire determinati interventi attraverso piccole incisioni.",
    services: ["Chirurgia dei tessuti molli", "Day hospital per terapie giornaliere", "Assistenza e ricovero postoperatorio secondo le necessità"],
    featured: false,
  },
  {
    id: "laparoscopia", title: "Chirurgia laparoscopica", icon: "surgery",
    text: "Una tecnica che consente di eseguire determinati interventi attraverso piccole incisioni. È disponibile in ambulatorio ed è una delle aree di interesse del Dott. Davide Boasso.",
    services: ["Chirurgia laparoscopica"], featured: true,
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
    id: "davide-boasso", photoKey: "boasso", name: "Dott. Davide Boasso",
    role: "Direttore sanitario", degree: "Laureato in Medicina veterinaria nel 2007.",
    bio: "Responsabile della struttura dal gennaio 2009. Le sue aree di interesse sono medicina interna, chirurgia dei tessuti molli, chirurgia laparoscopica e oftalmologia.",
    interests: "Medicina interna · Chirurgia · Oftalmologia",
    areas: ["Medicina interna", "Chirurgia dei tessuti molli", "Chirurgia laparoscopica", "Oftalmologia"],
    training: "Ha partecipato a diversi corsi di aggiornamento scientifico in Italia nelle proprie aree di interesse, in particolare in chirurgia. Ha seguito il percorso GPCert in oftalmologia e un corso specialistico di chirurgia laparoscopica a Cáceres, in Spagna.",
    personal: "Appassionato di ciclismo da sempre, è uno dei rappresentanti della squadra di calcio dei veterinari piemontesi.",
    qualification: null, photo: null as string | null,
  },
  {
    id: "erika-valieri", photoKey: "valieri", name: "Dott.ssa Erika Valieri",
    role: "Medico veterinario", degree: "Laureata in Medicina veterinaria nel 2015.",
    bio: "Si interessa di medicina interna, dermatologia, pronto soccorso, citologia e medicina degli animali non convenzionali. Nell’ambito della dermatologia ha conseguito il titolo GPCert Derm.",
    interests: "Medicina interna · Dermatologia · Animali non convenzionali",
    areas: ["Medicina interna", "Dermatologia", "Pronto soccorso", "Citologia", "Medicina degli animali non convenzionali"],
    training: "Ha seguito numerosi corsi di aggiornamento scientifico in Italia nelle sue aree di interesse.",
    personal: "Ama il trekking, la corsa e i viaggi.",
    qualification: null, photo: null as string | null,
  },
] as const;

export const faqs = [
  { question: "Come posso prenotare una visita?", answer: `Le visite sono su appuntamento telefonico. Chiama ${site.phone.display} oppure ${site.mobile.display}.` },
  { question: "Quali animali visitate?", answer: "Visitiamo cani, gatti e animali non convenzionali, su appuntamento." },
  { question: "Quali sono gli orari dell’ambulatorio?", answer: `Dal lunedì al venerdì: ${site.hours.weekday} e ${site.hours.afternoon}. Il sabato: ${site.hours.saturday}. Le visite si concordano per telefono.` },
  { question: "È presente un laboratorio per gli esami del sangue?", answer: "Sì, l’ambulatorio dispone di un laboratorio interno per i principali esami del sangue." },
  { question: "Effettuate interventi di chirurgia laparoscopica?", answer: "Sì, è una delle prestazioni disponibili in ambulatorio. Per informazioni puoi chiamarci e concordare una visita." },
  { question: "Dove si trova l’ambulatorio?", answer: `Siamo in ${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province}). Il collegamento a Google Maps apre le indicazioni.` },
  { question: "Come posso richiedere informazioni?", answer: `Puoi chiamare entrambi i nostri numeri oppure scrivere a ${site.email}, anche per richieste di ricette. Gli appuntamenti si prendono telefonicamente.` },
] as const;

/** Aggiungere solo immagini autentiche con autorizzazione documentata. Nessun modulo di invio. */
export type PatientPhoto = {
  src: string;
  alt: string;
  name?: string;
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
        title: "Visita e medicina",
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
        title: "Chirurgia e ricovero",
        text: "Interventi e terapie giornaliere.",
        icon: "care",
      },
    ],
  },
  team: {
    title: "Conosci i tuoi veterinari.",
    specialties: [
      "Direttore sanitario · Chirurgia laparoscopica",
      "Medico veterinario · Dermatologia",
    ],
  },
  faqs,
} as const;
