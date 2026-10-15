/**
 * Fonte unica di dati e testi della demo.
 *
 * REGOLE (vedi IMPLEMENTATION_PLAN0.MD §2):
 * - qui dentro solo dati pubblici verificati, sintesi parafrasate di recensioni
 *   o testi proposti dichiarati come tali;
 * - ogni dato non confermato dallo studio ha `confirm: true` e viene
 *   segnalato nel footer;
 * - vietato inventare: biografie, titoli, anni di attività, prezzi,
 *   urgenze H24, visite a domicilio, numero di collaboratori.
 */

export type Slot = readonly [open: string, close: string];

export type OpeningDay = {
  /** 0 = domenica … 6 = sabato (come Date.getDay) */
  day: number;
  label: string;
  slots: readonly Slot[];
};

const weekday: readonly Slot[] = [
  ["09:30", "12:30"],
  ["16:00", "19:30"],
];

export const site = {
  name: "Ambulatorio Veterinario Leinì",
  doctor: {
    name: "Dott. Davide Boasso",
    role: "Titolare e direttore sanitario",
  },
  address: {
    street: "Via San Francesco al Campo 24",
    postalCode: "10040",
    city: "Leinì",
    province: "TO",
  },
  /** Numeri da directory pubbliche (Pagine Bianche/Gialle). */
  phone: { display: "011 998 1469", tel: "+390119981469", confirm: true },
  mobile: { display: "347 640 1966", tel: "+393476401966", confirm: true },
  email: "av.leini@libero.it",
  species: "Cani, gatti e piccoli animali",
  rating: {
    /** Da verificare su Google Maps prima della consegna. */
    label: "4,6 su Google",
    reviews: "oltre 60 recensioni",
    value: 4.6,
    confirm: true,
  },
  hours: {
    confirm: true,
    days: [
      { day: 1, label: "Lunedì", slots: weekday },
      { day: 2, label: "Martedì", slots: weekday },
      { day: 3, label: "Mercoledì", slots: weekday },
      { day: 4, label: "Giovedì", slots: weekday },
      { day: 5, label: "Venerdì", slots: weekday },
      { day: 6, label: "Sabato", slots: [["09:30", "12:30"]] },
      { day: 0, label: "Domenica", slots: [] },
    ] satisfies readonly OpeningDay[],
  },
} as const;

export const whatsappMessage =
  "Buongiorno, vorrei fissare una visita per il mio animale.";

/* ───────────────────────────── Copy ───────────────────────────── */

export const copy = {
  nav: [
    { href: "#chiarezza", label: "Il metodo" },
    { href: "#cure", label: "Le cure" },
    { href: "#visita", label: "La visita" },
    { href: "#dove", label: "Dove siamo" },
    { href: "#domande", label: "Domande" },
  ],

  hero: {
    eyebrow: "Ambulatorio veterinario · Leinì (TO)",
    // L'ultima riga è l'enfasi (corsivo + tratto disegnato a mano)
    titleLines: ["Quando il tuo animale", "non sta bene, meriti", "risposte chiare."],
    lead: "Cani, gatti e piccoli animali visitati con calma, ascolto e parole semplici. Così sai sempre cosa succede e quale sarà il prossimo passo.",
    ctaPrimary: "Scrivici su WhatsApp",
    ctaSecondary: "Chiama lo studio",
  },

  focus: {
    eyebrow: "Il nostro modo di lavorare",
    title: "Dalla preoccupazione alla chiarezza.",
    steps: [
      {
        question: "Cos’ha?",
        answer:
          "Ti spieghiamo cosa abbiamo trovato, in parole semplici e senza gergo.",
      },
      {
        question: "È grave?",
        answer:
          "Ti diciamo con sincerità quanto è seria la situazione, cosa è urgente e cosa può aspettare.",
      },
      {
        question: "E adesso cosa facciamo?",
        answer:
          "Ti lasciamo un piano chiaro: cure, tempi e controlli. Sai sempre qual è il prossimo passo.",
      },
    ],
  },

  proof: {
    eyebrow: "Cosa raccontano le persone",
    title: "La chiarezza si vede da chi torna.",
    note: "Sintesi parafrasata delle recensioni pubbliche su Google.",
    items: [
      {
        key: "chiarezza",
        title: "Spiegazioni che si capiscono",
        text: "Chi ci ha scelto parla di una veterinaria e di un team che spiegano con calma e rispondono a ogni domanda.",
      },
      {
        key: "casi",
        title: "Competenza sui casi difficili",
        text: "Problemi difficili da diagnosticare, affrontati con metodo e preparazione, anche nelle cure più lunghe.",
      },
      {
        key: "continuita",
        title: "Un riferimento nel tempo",
        text: "C’è chi affida qui il proprio gatto da oltre dieci anni: la fiducia si costruisce visita dopo visita.",
      },
      {
        key: "disponibilita",
        title: "Persone sempre disponibili",
        text: "Un team giovane, aggiornato e raggiungibile quando serve un parere.",
      },
    ],
  },

  cure: {
    eyebrow: "Le cure",
    title: "Tutto quello che serve, spiegato bene.",
    items: [
      {
        key: "visite",
        title: "Visite e medicina generale",
        text: "Visite di controllo, valutazione clinica e prevenzione per cani, gatti e piccoli animali.",
        cta: "Chiedi informazioni",
      },
      {
        key: "chirurgia",
        title: "Chirurgia",
        text: "Interventi chirurgici affrontati con calma: prima ti spieghiamo cosa succede, poi come sarà il decorso.",
        cta: "Chiedi informazioni",
      },
      {
        key: "diagnostica",
        title: "Diagnostica per immagini",
        text: "Esami per arrivare a una diagnosi più precisa e a una cura mirata.",
        cta: "Chiedi informazioni",
      },
    ],
  },

  visita: {
    eyebrow: "La visita",
    title: "Che cosa succede, passo dopo passo.",
    steps: [
      {
        key: "prima",
        label: "Prima",
        title: "Ci racconti cosa succede",
        text: "Chiami o scrivi su WhatsApp: ascoltiamo la situazione e fissiamo insieme giorno e ora.",
      },
      {
        key: "durante",
        label: "Durante",
        title: "Visitiamo con calma",
        text: "Ti spieghiamo ciò che vediamo mentre lo vediamo, così non resti con dubbi.",
      },
      {
        key: "dopo",
        label: "Dopo",
        title: "Esci con un piano chiaro",
        text: "Cosa fare a casa, quando tornare e come contattarci se hai bisogno di un chiarimento.",
      },
    ],
  },

  medico: {
    eyebrow: "Il medico",
    placeholderTitle: "Il tuo profilo, scritto con te.",
    placeholderText:
      "Formazione, esperienze e filosofia di cura del dottore: la parte più umana del sito, da completare insieme con le sue parole.",
  },

  dove: {
    eyebrow: "Dove siamo",
    title: "Facile da trovare, facile da contattare.",
    mapCta: "Apri indicazioni",
    contactCta: "Chiama lo studio",
  },

  faq: {
    eyebrow: "Domande frequenti",
    title: "Le risposte che cercavi.",
    draftNote: "Bozza di testi: da validare con il dottore.",
    items: [
      {
        q: "Come prendo un appuntamento?",
        a: "Chiama lo studio o scrivi su WhatsApp: ti rispondiamo per fissare giorno e ora della visita.",
      },
      {
        q: "Cosa devo portare alla prima visita?",
        a: "Il libretto sanitario o i documenti dell’animale, gli esami già fatti e l’elenco di eventuali farmaci. Se non hai nulla di tutto questo, vieni lo stesso: partiamo da ciò che c’è.",
      },
      {
        q: "Quali animali visitate?",
        a: "Cani, gatti e piccoli animali.",
      },
      {
        q: "Quali sono gli orari?",
        a: "Dal lunedì al venerdì 9:30–12:30 e 16:00–19:30, il sabato 9:30–12:30. La domenica lo studio è chiuso.",
      },
      {
        q: "E se è un’urgenza?",
        a: "Se il tuo animale sta molto male, chiama subito lo studio negli orari di apertura. Fuori orario rivolgiti al pronto soccorso veterinario più vicino.",
      },
    ],
  },

  closing: {
    title: "Il tuo animale ha bisogno di risposte?",
    lead: "Cominciamo da una telefonata o da un messaggio.",
    ctaPrimary: "Scrivici su WhatsApp",
    ctaSecondary: "Chiama lo studio",
  },

  form: {
    title: "Preferisci che ti ricontattiamo noi?",
    note: "Modulo dimostrativo: in questa anteprima non invia nessuna richiesta.",
    fields: {
      name: "Il tuo nome",
      phone: "Telefono",
      animal: "Il tuo animale (cane, gatto…)",
      message: "Raccontaci in breve cosa succede",
    },
    submit: "Richiedi un appuntamento",
    success:
      "Grazie! In una versione attiva, ti ricontatteremmo al più presto. Questa è un’anteprima dimostrativa.",
  },

  footer: {
    demo: "Anteprima dimostrativa",
    confirm:
      "Dati, orari e testi da confermare con lo studio. Il punteggio e le recensioni sono una sintesi di fonti pubbliche.",
    images: "Le immagini sono di repertorio e non ritraggono animali o persone dello studio.",
  },
} as const;

/** Elenco dei dati ancora da confermare, mostrato nel footer. */
export const toConfirm = [
  site.phone.confirm && "telefono",
  site.mobile.confirm && "cellulare/WhatsApp",
  site.hours.confirm && "orari",
  site.rating.confirm && "punteggio Google",
].filter(Boolean) as string[];
