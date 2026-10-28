# Revisione del 28 ottobre 2026

## Modifiche realizzate

La revisione mantiene il sito Next.js multipagina, il logo originale e lo sfondo approvato. Non ricostruisce il progetto. Le funzionalità richieste non introducono nuove dipendenze.

- Intestazione: denominazione più leggibile e compatta su mobile; logo originale mantenuto.
- Homepage: messaggio «Il tuo veterinario di fiducia a Leinì dal 2009», descrizione generale e orari completi prima delle fotografie su smartphone. Chiamata diretta a entrambi i numeri, email per informazioni/ricette e Maps.
- Orari unificati: lunedì–venerdì 09:30–12:30 e 16:00–19:30; sabato 09:30–12:30. Rimosse le indicazioni provvisorie. Nessun orario domenicale o festivo aggiunto.
- Prestazioni: Visita e medicina → Diagnostica → Chirurgia e ricovero → Chirurgia laparoscopica, sia in homepage sia nella pagina e nell’indice delle prestazioni. Descrizioni del cliente riportate integralmente negli approfondimenti. Quattro sfumature coordinate.
- Conservate microchip/anagrafe, oculistica, dermatologia e medicina degli animali non convenzionali. Specificati day hospital per terapie giornaliere e assistenza/ricovero postoperatorio secondo necessità, senza servizio H24.
- Laparoscopia: conservata la composizione illustrata, spostata dopo la chirurgia; pulsante richiesto, descrizione sulle piccole incisioni, pagina dedicata e contatto telefonico. Video predisposto ma assente finché non vengono forniti filmato autorizzato e sottotitoli.
- Collaborazioni esterne: elenco completo, espressamente distinto dall’attività del personale interno.
- Équipe: eliminati riferimenti numerici; identificativi e riferimenti fotografici indipendenti dall’ordine dell’elenco. Biografie, formazione e interessi personali aggiornati. GPCert oftalmologia descritto come percorso, senza attribuire un titolo conseguito. GPCert Derm nella biografia sulla dermatologia, senza badge sotto il nome. Cinque aree di Valieri nell’ordine richiesto.
- Sette FAQ a scomparsa, condivise da homepage e contatti.
- Galleria «I nostri piccoli pazienti»: griglia responsive, immagini ottimizzate da Next/Image, didascalie facoltative, ingrandimento, navigazione e chiusura da tastiera. Sezione completamente nascosta con elenco vuoto; nessun paziente fittizio.
- Dati strutturati aggiornati con indirizzo, entrambi i numeri e tre fasce orarie confermate; titoli SEO e gerarchia dei titoli verificati. Demo ancora non indicizzabile, come prima.

## Verifiche delle fonti

- CAP 10040 confermato sul [sito istituzionale del Comune di Leini](https://www.comune.leini.to.it/).
- [Instagram ufficiale](https://www.instagram.com/ambu.vet.leini/) verificato nel browser: profilo «Ambu.Vet.Leini (@ambu.vet.leini)», corrispondente al nome stampato nell’immagine QR fornita. Aggiunto solo un normale collegamento, senza feed incorporato o tracker. La decodifica automatica dell’immagine QR non è riuscita; il collegamento è stato verificato direttamente sulla pagina del profilo.
- Le informazioni professionali e sanitarie derivano dal report esplicito del cliente del 28 ottobre; nessuna nuova prestazione o promessa clinica aggiunta.

## Materiali ancora necessari

- Fotografie autentiche e autorizzate di ingresso, locali, personale, prestazioni e pazienti. I segnaposto dei locali/personale, già presenti nella demo e chiaramente etichettati «Fotografia da inserire», restano spazi di revisione. La galleria pazienti non mostra segnaposto.
- Eventuali video autentici della laparoscopia e sottotitoli verificati.
- Eventuale conferma del profilo Instagram personale del Dott. Boasso; attualmente non pubblicato.
- Per il lancio ufficiale, restano da completare i dati fiscali/professionali e l’informativa privacy già segnalati nel progetto. Noindex mantenuto per la demo.

Per aggiungere foto: salvare file ottimizzati in public/media, compilare src/alt nel catalogo src/content/media.ts e impostare authorized solo dopo verifica dell’autorizzazione. Per i pazienti usare patientPhotos in src/content/site.ts; name è una didascalia facoltativa. Nessun accesso di gestione necessario.

## Risultati dei test

- `npm run lint`: superato.
- `npm run build`: superato, inclusa verifica TypeScript e generazione delle pagine statiche.
- `python3 scripts/verify-content.py`: superato sulle sette pagine. Verifica H1 univoco, ID, collegamenti interni e ancore, alt, noindex, assenza di moduli/testi obsoleti, headline, ordine delle prestazioni, FAQ, contatti, ore e CAP nei dati strutturati, biografie e assenza della route di prova.
- `node scripts/contrast.mjs`: 26 combinazioni superate; contrasto minimo dei testi nelle nuove sezioni 4,75:1.
- Browser: sette pagine a 375, 390, 768 e 1440 px; nessun overflow orizzontale, un H1 per pagina e nessuna immagine rotta. Ulteriore controllo homepage a 320 px superato. Orari completi visibili prima delle fotografie.
- Tastiera: menu mobile con Enter/Escape; FAQ con Enter; galleria con apertura, cambio foto, didascalia opzionale, Escape, ripristino focus e scroll. Galleria provata solo con loghi esplicitamente etichettati come fixture, in una route locale rimossa prima della build finale.
- Nessun errore applicativo osservato. Gli avvisi LCP riguardavano i loghi usati nella fixture; il logo dell’intestazione ora viene caricato eager.
- Telefoni e mailto verificati come destinazioni, senza effettuare chiamate o inviare email. Maps verificato come URL con indirizzo completo, senza incorporare mappe/tracciamento.
- Nessun test di prestazioni Lighthouse o collaudo su dispositivi fisici: il controllo responsive è stato eseguito nel browser.

## CMS e problemi tecnici

Nessun CMS, Sanity, pannello, account, pagamento, prenotazione online o raccolta di dati sanitari. Conservati Vercel Web Analytics e Speed Insights, già aggiunti su GitHub tramite PR #1 e #2 prima di questa revisione. Integrati i relativi aggiornamenti di package.json e lockfile, senza aggiungere altri servizi o abbonamenti. La nota privacy è stata aggiornata per rifletterne la presenza.

Il compilatore SWC nativo mancava nell’installazione locale: ripristinato dal pacchetto ufficiale già previsto, versione 16.4.1. Build successiva completata. Nessun problema tecnico bloccante residuo nelle funzionalità implementate.
