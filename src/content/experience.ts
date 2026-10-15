export const services = [
  {
    id: "visita",
    title: "Visite e prevenzione",
    subtitle: "Conoscersi, prima di tutto.",
    text: "Un incontro dedicato al tuo animale e alle domande che vuoi fare. Il punto di partenza per parlare del suo benessere.",
    detail:
      "Nel percorso proposto: ascolto delle tue osservazioni, visita e spiegazione dei passi successivi.",
    topic: "visite e prevenzione",
    icon: "listen",
  },
  {
    id: "diagnostica",
    title: "Diagnostica",
    subtitle: "Capire, un passo alla volta.",
    text: "Quando servono approfondimenti, poter comprendere il motivo di un esame aiuta ad affrontarlo con maggiore consapevolezza.",
    detail:
      "Gli esami disponibili e le modalità di esecuzione saranno confermati con lo studio.",
    topic: "diagnostica",
    icon: "clarity",
  },
  {
    id: "chirurgia",
    title: "Percorsi chirurgici",
    subtitle: "Ogni domanda ha il suo spazio.",
    text: "Preparazione, intervento e ritorno a casa: un percorso da conoscere e discutere con il veterinario.",
    detail:
      "Prestazioni, preparazione e controlli dipendono dal caso e devono essere concordati con il medico.",
    topic: "percorsi chirurgici",
    icon: "path",
  },
] as const;
export const visitSteps = [
  {
    label: "Prima",
    title: "Si comincia ascoltando.",
    text: "Un primo contatto per raccontare chi è il tuo animale e chiedere come organizzare la visita.",
    note: "Le tue domande sono un buon punto di partenza.",
    icon: "listen",
  },
  {
    label: "Durante",
    title: "Spazio per capire.",
    text: "Un incontro in cui osservazioni e spiegazioni aiutano a comprendere il percorso proposto dal veterinario.",
    note: "Parole semplici, attenzione ai dettagli.",
    icon: "clarity",
  },
  {
    label: "Dopo",
    title: "Un prossimo passo chiaro.",
    text: "Indicazioni e controlli da concordare con il medico, per sapere come proseguire dopo la visita.",
    note: "La chiarezza continua anche fuori dallo studio.",
    icon: "path",
  },
] as const;
export const questions = [
  [
    "Come posso preparare un primo contatto?",
    "Puoi chiamare lo studio con il pulsante dedicato. Se preferisci scrivere, il percorso guidato ti aiuta a comporre un messaggio da modificare e copiare: questa demo non lo invia e non prenota appuntamenti.",
  ],
  [
    "Posso già prenotare da questo sito?",
    "Il pulsante Chiama lo studio apre l’app per telefonare al recapito riportato, ancora da confermare con lo studio. Il sito è una demo: il modulo non invia richieste e non conferma prenotazioni. Modalità e disponibilità vanno concordate direttamente con lo studio.",
  ],
  [
    "Quali animali e servizi comprende la proposta?",
    "Cani e gatti guidano il racconto visivo. Le specie trattate e i servizi effettivamente disponibili devono essere confermati dallo studio. Per altri animali, il percorso prepara una richiesta di informazioni.",
  ],
  [
    "Gli orari sono già confermati?",
    "No. Gli orari riportati sono indicativi e da verificare con lo studio. Non indicano la disponibilità di appuntamenti.",
  ],
  [
    "Le fotografie ritraggono lo studio?",
    "No. Sono immagini illustrative generate per questo concept e non rappresentano ambienti, professionisti o pazienti dello studio.",
  ],
] as const;
