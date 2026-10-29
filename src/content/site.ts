/**
 * Fonte unica: brief del cliente del 22 e 28 ottobre 2026 (vedi docs/REVISIONE_CLIENTE.md).
 * Regola: nessun testo, titolo o servizio che il dottore non abbia scritto lui.
 * Tutti i contenuti qui sotto sono dati: per aggiungere un collaboratore, una FAQ,
 * una curiosità o una foto basta aggiungere una voce alla lista corrispondente
 * (struttura pronta per un eventuale CMS, vedi docs/PREDISPOSIZIONE_CMS.md).
 */
export const site = {
  name: "Ambulatorio Veterinario Leinì",
  previewUrl: "https://ambulatorio-leini.vercel.app",
  /** true finché il sito è un'anteprima: mostra gli spazi esempio per le foto. */
  demo: true,
  address: {
    street: "Via San Francesco al Campo 24",
    postalCode: "10040",
    city: "Leinì",
    province: "TO",
  },
  phone: { display: "011 9981469", tel: "+390119981469" },
  mobile: { display: "347 6401966", tel: "+393476401966" },
  /** Mostrare il pulsante WhatsApp SOLO dopo conferma del dottore (M-03). */
  whatsapp: { enabled: false, tel: "393476401966" },
  email: "av.leini@libero.it",
  hours: {
    weekday: "09:30–12:30",
    afternoon: "16:00–19:30",
    saturday: "09:30–12:30",
  },
  /** Fasce orarie per il badge "Aperto ora": 0 = domenica … 6 = sabato. */
  schedule: {
    1: [["09:30", "12:30"], ["16:00", "19:30"]],
    2: [["09:30", "12:30"], ["16:00", "19:30"]],
    3: [["09:30", "12:30"], ["16:00", "19:30"]],
    4: [["09:30", "12:30"], ["16:00", "19:30"]],
    5: [["09:30", "12:30"], ["16:00", "19:30"]],
    6: [["09:30", "12:30"]],
  } as Record<number, string[][]>,
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

export type AreaId = "medicina" | "diagnostica" | "chirurgia" | "laparoscopia";

/** Testi dettati dal dottore (email del 28 ottobre), riportati alla lettera. */
export const serviceCategories = [
  {
    id: "medicina", area: "medicina", title: "Visita e medicina", icon: "visit",
    text: "La visita clinica rappresenta la base del nostro lavoro e di tutte le branche specialistiche. Dalla raccolta dell’anamnesi ai segni clinici, fino ai risultati degli esami di laboratorio, al fine di ottenere una diagnosi precisa e in tempi rapidi.",
    services: ["Visite su appuntamento per cani, gatti e animali non convenzionali", "Applicazione microchip e registrazione in anagrafe", "Visite oculistiche", "Visite dermatologiche specialistiche", "Medicina degli animali non convenzionali"],
    featured: false,
  },
  {
    id: "diagnostica", area: "diagnostica", title: "Diagnostica", icon: "imaging",
    text: "Il nostro centro offre un servizio di diagnostica per immagini moderno e all’avanguardia, che comprende un radiologico diretto di ultima generazione, un ecografo e un laboratorio interno per effettuare in tempi rapidi i principali esami del sangue.",
    services: ["Radiologico diretto", "Ecografo", "Laboratorio interno per esami del sangue"],
    featured: false,
  },
  {
    id: "chirurgia", area: "chirurgia", title: "Chirurgia e ricovero", icon: "care",
    text: "Presso la nostra struttura viene eseguita tutta la parte della chirurgia dei tessuti molli. Da qualche anno c’è inoltre la possibilità della chirurgia laparoscopica.",
    services: ["Chirurgia tradizionale", "Day hospital per terapie giornaliere o post-chirurgiche"],
    featured: false,
  },
  {
    id: "laparoscopia", area: "laparoscopia", title: "Chirurgia laparoscopica", icon: "surgery",
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

/** Aggiungere un collaboratore = aggiungere una voce qui, il layout si adatta. */
export const professionals = [
  {
    id: "davide-boasso", photoKey: "boasso", name: "Dott. Davide Boasso",
    role: "Direttore sanitario", degree: "Laureato in Medicina veterinaria nel 2007.",
    bio: "Responsabile della struttura dal gennaio 2009. Le sue aree di interesse sono medicina interna, chirurgia dei tessuti molli, chirurgia laparoscopica e oftalmologia.",
    areas: ["Medicina interna", "Chirurgia dei tessuti molli", "Chirurgia laparoscopica", "Oftalmologia"],
    training: "Ha partecipato a diversi corsi di aggiornamento scientifico in Italia nelle proprie aree di interesse, in particolare in chirurgia. Ha seguito il percorso GPCert in oftalmologia e un corso specialistico di chirurgia laparoscopica a Cáceres, in Spagna.",
    personal: "Appassionato di ciclismo da sempre, è uno dei rappresentanti della squadra di calcio dei veterinari piemontesi.",
    photo: null as string | null,
  },
  {
    id: "erika-valieri", photoKey: "valieri", name: "Dott.ssa Erika Valieri",
    role: "Medico veterinario", degree: "Laureata in Medicina veterinaria nel 2015.",
    bio: "Si interessa di medicina interna, dermatologia, pronto soccorso, citologia e medicina degli animali non convenzionali. Nell’ambito della dermatologia ha conseguito il titolo GPCert Derm.",
    areas: ["Medicina interna", "Dermatologia", "Pronto soccorso", "Citologia", "Medicina degli animali non convenzionali"],
    training: "Ha seguito diversi corsi di aggiornamento scientifico in Italia nelle sue aree di interesse.",
    personal: "Ama il trekking, la corsa e i viaggi.",
    photo: null as string | null,
  },
] as const;

export const faqs = [
  { question: "Come posso prenotare una visita?", answer: `Le visite sono su appuntamento telefonico. Chiama ${site.phone.display} oppure ${site.mobile.display}.` },
  { question: "Quali animali visitate?", answer: "Visitiamo cani, gatti e animali non convenzionali, su appuntamento." },
  { question: "Quali sono gli orari dell’ambulatorio?", answer: `Dal lunedì al venerdì: ${site.hours.weekday} e ${site.hours.afternoon}. Il sabato: ${site.hours.saturday}. Le visite si concordano per telefono.` },
  { question: "È presente un laboratorio per gli esami del sangue?", answer: "Sì, l’ambulatorio dispone di un laboratorio interno per effettuare in tempi rapidi i principali esami del sangue." },
  { question: "Effettuate interventi di chirurgia laparoscopica?", answer: "Sì, è una delle prestazioni disponibili in ambulatorio. Per informazioni puoi chiamarci e concordare una visita." },
  { question: "Applicate il microchip?", answer: "Sì, in ambulatorio si applica il microchip e si effettua la registrazione in anagrafe." },
  { question: "Dove si trova l’ambulatorio?", answer: `Siamo in ${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province}). Il collegamento a Google Maps apre le indicazioni.` },
  { question: "Come posso richiedere informazioni?", answer: `Puoi chiamare entrambi i nostri numeri oppure scrivere a ${site.email}, anche per richieste di ricette. Gli appuntamenti si prendono telefonicamente.` },
] as const;

/**
 * "Lo sapevi?": brevi curiosità ricavate SOLO dalle informazioni date dal dottore.
 * Bozza da validare con lui (M-07): possono essere sostituite da sue curiosità.
 */
export const curiosita = [
  { title: "Il microchip si applica qui", text: "In ambulatorio si applica il microchip e si registra l’animale all’anagrafe." },
  { title: "Esami del sangue in tempi rapidi", text: "Il laboratorio interno permette di eseguire sul posto i principali esami del sangue." },
  { title: "Non solo cani e gatti", text: "Si visitano su appuntamento anche gli animali non convenzionali." },
  { title: "Day hospital", text: "È possibile il day hospital per le terapie giornaliere o dopo un intervento chirurgico." },
] as const;

/** Foto autentiche con autorizzazione documentata dei proprietari. Nessun nome completo né dato clinico. */
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
  },
  services: {
    title: "Le cure, da vicino.",
    categories: [
      { id: "medicina", area: "medicina", title: "Visita e medicina", text: "Cani, gatti e animali non convenzionali.", icon: "visit" },
      { id: "diagnostica", area: "diagnostica", title: "Diagnostica", text: "Laboratorio, radiologico ed ecografo.", icon: "imaging" },
      { id: "chirurgia", area: "chirurgia", title: "Chirurgia e ricovero", text: "Interventi e terapie giornaliere.", icon: "care" },
      { id: "laparoscopia", area: "laparoscopia", title: "Chirurgia laparoscopica", text: "Piccole incisioni, in ambulatorio.", icon: "surgery" },
    ],
  },
  faqs,
} as const;
