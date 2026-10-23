# Implementation Plan 3 — Ambulatorio Veterinario Leinì

Data: 22 ottobre 2026  
Stato: versione 3 implementata e pronta per revisione; verifiche eseguite e limiti documentati.

## 1. Obiettivo e feedback da rispettare

La versione 2 è stata giudicata troppo statica, piena di informazioni, confusionale, piatta e cromaticamente poco interessante. La nuova revisione deve risolvere questi problemi attraverso una direzione artistica più espressiva, una scena visiva forte, una riduzione sostanziale dei messaggi e movimento percepibile ma controllato.

Il medico continua a richiedere immediatezza, homepage breve, immagine professionale, colori più vivi, servizi e recapiti facili da trovare, appuntamenti esclusivamente telefonici. La qualità visiva non deve introdurre complessità nell’utilizzo o nella manutenzione.

La successiva richiesta “via coding ora” autorizza l’implementazione del piano.

## 2. Direzione: blu vivo, scena illustrata, pochi messaggi

La prima schermata deve avere un soggetto visivo protagonista e una gerarchia semplice. Evitare di ricostruire la versione 2 aggiungendo effetti alle stesse superfici e agli stessi testi.

### Scena protagonista

Creare un’illustrazione tridimensionale originale con un cane e un gatto: forme morbide, espressioni naturali, luce curata, materiali raffinati, profondità e composizione riconoscibile. Evitare aspetto da giocattolo economico, mascotte infantile, anatomia incoerente o immagine generica.

La scena è esplicitamente illustrativa: non rappresenta pazienti, medici, locali o risultati clinici. Non sostituisce né ridisegna il logo autentico. Mantenere questa distinzione nel testo alternativo, nei crediti e, se necessaria per evitare ambiguità, con una discreta dicitura visibile.

Produrre un’inquadratura desktop e un taglio mobile realmente studiato. Preferire un asset raster ottimizzato con sfondo trasparente, o pochi livelli separati se necessari per il movimento. Nessun requisito di WebGL o motore 3D: l’aspetto tridimensionale può essere ottenuto con un’immagine ben realizzata.

All’avvio della creazione usare la skill imagegen e seguirne il flusso. Controllare qualità, anatomia, bordi, trasparenza e ridimensionamento prima di integrare gli asset. Registrare prompt, provenienza e natura illustrativa. Non generare ritratti dei veterinari.

### Colori e tipografia

Blu più brillante, bianco pulito e un solo accento secondario. Confrontare visivamente una variante lime e una pesca; selezionare quella che rafforza l’illustrazione e mantiene coerenza con il logo blu/grigio-azzurro.

Usare campiture con un ruolo preciso: scena principale, pausa bianca, dettaglio cromatico. Evitare che tutti i blocchi abbiano lo stesso peso. Niente grandi superfici cupe o gradienti invadenti.

Scegliere una tipografia leggibile e riconoscibile; font locali e numero limitato di pesi. Titoli essenziali, descrizioni brevi, dimensioni e spaziature curate su desktop e mobile. Eliminare numerazioni puramente decorative e dettagli che competono con il contenuto.

## 3. Prima schermata: progettazione prima dell’estensione

Produrre due mockup rifiniti della stessa hero, uno desktop e uno mobile, prima di sviluppare il resto della homepage. Devono mostrare immagine, palette, tipografia, proporzioni, header e CTA vicini al risultato finale, non wireframe o semplici studi di impaginazione.

Contenuto proposto:

> Veterinaria a Leinì.
> Medicina, diagnostica e chirurgia.

Il nome completo **Ambulatorio Veterinario Leinì** resta riconoscibile nell’header. Nomi dei due medici in una sola riga discreta, con adattamento naturale su mobile. CTA principale: **Chiama per una visita**. Collegamento secondario: **Indicazioni**.

La scena degli animali deve attirare l’attenzione senza spingere identità e chiamata oltre il primo schermo mobile. Non aggiungere pannelli con slogan, una seconda grande firma del logo o descrizioni ripetute.

Valutare i mockup su: riconoscibilità, chiarezza, personalità, gerarchia, leggibilità e qualità dell’illustrazione. Se la hero non soddisfa questi criteri, correggerla prima di propagare il sistema visivo. Condividere i mockup come punto di revisione; non introdurre un obbligo di approvazione ulteriore se la futura richiesta autorizza già l’intera implementazione.

## 4. Homepage: quattro momenti

### 1 — Hero

Identità, località, scena illustrata, due medici e chiamata. Indicazioni facilmente raggiungibili. Eliminare i messaggi promozionali ripetuti della versione precedente.

### 2 — Prestazioni

Tre categorie immediate:

- Visite e medicina.
- Diagnostica.
- Chirurgia e day hospital.

Una descrizione brevissima per categoria e accesso alla pagina completa. Evitare sia la griglia uniforme di card sia l’indice eccessivamente testuale della versione 2. Progettare una composizione visiva compatta, con collegamenti espliciti e contenuti comprensibili senza hover.

Integrare qui la chirurgia laparoscopica con un trattamento distintivo: titolo, una frase e collegamento a `/chirurgia-laparoscopica`. Non creare un’ulteriore fascia autonoma che interrompa il ritmo della pagina.

La pagina dedicata conserva soltanto i contenuti verificati su disponibilità, interesse professionale del Dott. Boasso e contatto. Approfondimenti clinici aggiuntivi richiedono validazione del medico.

### 3 — I due medici

Due presentazioni essenziali: nome, ruolo e una competenza distintiva. Link alle biografie complete. Niente duplicazione delle biografie in homepage, riquadri vuoti, logo ripetuto o ritratti inventati.

Predisporre le future fotografie autentiche senza renderle necessarie alla qualità del layout attuale. Eventuale qualifica GPCert Derm della Dott.ssa Valieri presentata correttamente.

### 4 — Informazioni pratiche

Contatti telefonici, indirizzo e orari in un unico punto chiaramente leggibile. FAQ raccolte in un gruppo compatto dentro questa area, non in una quinta grande sezione introdotta da altri slogan.

Massimo quattro domande pratiche. Apertura da tastiera e touch. Email per informazioni e richieste di ricette; chiamate per appuntamenti. Barra mobile Chiama/Indicazioni rifinita, con safe area e spazio riservato nel documento.

Il footer chiude senza ripetere estesi elenchi di recapiti o aggiungere nuovi inviti all’azione.

### Regola di sottrazione

Ogni blocco deve avere uno scopo unico. Rimuovere frasi introduttive, richiami, numerazioni e CTA duplicati che non aiutano a capire o ad agire. Misurare il testo visibile della homepage rispetto alla versione 2, con obiettivo indicativo di riduzione del 30–40%, preservando i dati necessari e senza ridurre il carattere per farli entrare.

Confrontare anche lunghezza e densità visiva alle stesse viewport. L’illustrazione deve contribuire all’esperienza, non diventare un lungo elemento ornamentale su mobile.

## 5. Movimento e interazioni

Il movimento deve essere percepibile e coordinato, con pochi effetti ben realizzati:

- Entrata breve della scena illustrata, seguita da titolo e azioni con una sequenza essenziale.
- Risposta leggera dell’illustrazione al puntatore sui dispositivi con puntatore preciso.
- Pochi elementi rivelati o mossi durante lo scorrimento, senza ripetere lo stesso ingresso su ogni blocco.
- Hover e focus coerenti per link e pulsanti; menu e accordion con apertura controllata.

Indicazioni iniziali da verificare nel browser: ingresso complessivo inferiore a circa un secondo, feedback dei controlli intorno a 150–250 ms e spostamenti del puntatore di pochi pixel. Sono parametri di progetto da affinare, non obiettivi da applicare meccanicamente.

Nessuno scroll hijacking, caricatore artificiale o ritardo per raggiungere la CTA. L’HTML deve restare leggibile anche se JavaScript non parte. Non impostare contenuti essenziali nascosti in attesa di animazioni.

Su touch disattivare gli effetti dipendenti dal puntatore. Su `prefers-reduced-motion` usare una composizione ferma completa e disabilitare le trasformazioni non necessarie. Preferire CSS, transform/opacity e API native; introdurre librerie soltanto con motivazione concreta. Pulire listener e observer, evitare aggiornamenti React continui al movimento del mouse.

## 6. Architettura, manutenzione e contenuti verificati

Preservare il repository e il lavoro esistente. Riutilizzare Next.js/React, dati centralizzati, link corretti e componenti validi. Leggere le guide pertinenti in `node_modules/next/dist/docs/` prima di intervenire, come richiesto da `AGENTS.md`.

Rotte:

| Percorso | Funzione |
| --- | --- |
| `/` | Homepage ridotta a quattro momenti |
| `/prestazioni` | Tutti i servizi, con distinzione delle collaborazioni esterne |
| `/chirurgia-laparoscopica` | Approfondimento verificato della prestazione |
| `/equipe` | Biografie complete |
| `/#contatti` | Destinazione stabile per informazioni pratiche |
| `/privacy` | Documento preparatorio da validare |

Conservare gli ancoraggi utili, incluso `/prestazioni#laparoscopia`. Applicare il nuovo sistema visivo anche alle pagine interne per evitare un cambio di stile dopo il primo clic. Nelle pagine interne dare priorità alla lettura e alla chiamata, con movimento più contenuto.

Centralizzare i testi modificabili in `src/content/site.ts`. Consolidare gli stili della nuova direzione invece di continuare ad accumulare override delle versioni precedenti; archiviare i riferimenti storici nei documenti, non nel CSS attivo. Tenere piccoli i componenti client dedicati al movimento.

Ottimizzare le immagini in formati moderni, con dimensioni e `sizes` corretti. Definire preload solo per l’asset principale realmente visibile e caricare in modo appropriato gli altri. Verificare peso, stabilità del layout e qualità a risoluzioni diverse.

Mantenere metadata specifici, favicon autentica, anteprima social coerente e structured data con soli fatti verificati. Nessun tracker o servizio esterno incorporato aggiunto. La demo conserva `noindex,nofollow`, robots di staging e sitemap non pubblicizzata.

## 7. Vincoli del cliente e dipendenze del lancio

- Logo autentico preservato; illustrazione distinta dall’identità ufficiale.
- Nessun booking, form dimostrativo, WhatsApp non autorizzato, account, chatbot, blog, shop o CMS complesso.
- Nessuna foto stock o sintetica presentata come paziente, medico o ambiente reale.
- Galleria pazienti assente senza foto autentiche autorizzate. Al loro arrivo rivalutare l’inserimento senza appesantire i quattro momenti della homepage.
- Collaborazioni esterne separate dai servizi interni e dall’équipe fissa.
- Orari mattutini provvisori: lunedì–venerdì e sabato 9:30–12:30. Fascia pomeridiana 16:00–19:30 da confermare. Nessun indicatore aperto ora basato su orari non validati.
- Nessuna disponibilità o promessa H24.
- Instagram `@ambu.vet.leini`: link soltanto dopo verifica della destinazione.
- Dati legali, privacy, riferimenti professionali e dominio ufficiale da validare prima del lancio.
- Nessuna pubblicazione in produzione senza approvazione esplicita dell’utente.

Le fotografie reali restano un possibile arricchimento futuro. La loro assenza non deve impedire di progettare una demo visivamente completa.

## 8. Checklist da aggiornare durante la futura build

### Regole di avanzamento

`[ ]` indica lavoro da svolgere; `[x]` indica lavoro completato e verificato. Aggiornare questo documento all’inizio della fase, al completamento di ciascun gruppo di attività e dopo ogni correzione significativa. Non compilare tutta la checklist soltanto alla fine.

Per un blocco lasciare la casella aperta e aggiungere `BLOCCATO: motivo e dipendenza`. Documentare test non eseguiti e decisioni di omissione. Non ereditare automaticamente gli esiti QA della versione 2.

**In corso:** Versione 3 pronta per revisione; limitazioni QA documentate.  
**Prossima attività:** completare la fase corrente e verificarne il risultato.  
**Blocchi:** nessuno per la build; conferme di lancio separate.

### Fase 0 — Preparazione

- [x] Registrare il feedback negativo sulla versione 2 e la nuova direzione proposta.
- [x] Definire architettura, checklist, criteri di accettazione e vincoli.
- [x] Rileggere brief, piano e conferme disponibili all’avvio della build.
- [x] Controllare stato Git e preservare modifiche esistenti.
- [x] Leggere le guide Next.js pertinenti e le skill necessarie.
- [x] Salvare baseline desktop/mobile, lunghezza e quantità di testo della versione 2.

### Fase 1 — Illustrazione e hero

- [x] Definire il brief visivo di cane e gatto, materiali, luce e inquadratura.
- [x] Generare e selezionare l’illustrazione con la skill imagegen.
- [x] Verificare anatomia, qualità, trasparenza e tagli responsive.
- [x] Registrare provenienza, prompt e natura illustrativa.
- [x] Confrontare accento lime e pesca con il logo originale.
- [x] Definire palette accessibile, scala tipografica e spaziature.
- [x] Produrre mockup rifiniti della hero desktop e mobile.
- [x] Verificare che nome, località e chiamata siano subito comprensibili.
- [x] Correggere il mockup finché immagine e composizione sostengono la direzione.
- [x] Registrare la scelta visiva prima di estenderla al resto della homepage.

### Fase 2 — Homepage essenziale

- [x] Implementare header e hero con la scena illustrata.
- [x] Eliminare pannello di slogan, numerazioni e messaggi ripetuti della versione 2.
- [x] Progettare tre categorie di prestazioni brevi e immediatamente esplorabili.
- [x] Integrare la laparoscopia nelle prestazioni con un trattamento distintivo.
- [x] Ridurre l’équipe a nome, ruolo, competenza e approfondimento.
- [x] Accorpare contatti, orari e FAQ in un’area pratica compatta.
- [x] Rifinire barra mobile, footer e destinazione `#contatti`.
- [x] Misurare testo, densità e lunghezza rispetto alla baseline.
- [x] Verificare che la galleria resti assente senza foto autorizzate.

### Fase 3 — Movimento

- [x] Coordinare ingresso di scena, titolo e azioni senza nascondere contenuti essenziali.
- [x] Implementare una risposta leggera al puntatore solo sui dispositivi adatti.
- [x] Aggiungere pochi effetti di scorrimento con un ruolo preciso.
- [x] Rifinire feedback di link, pulsanti, menu e accordion.
- [ ] Verificare la composizione ferma con reduced motion.
- [ ] Verificare comportamento touch e contenuti essenziali senza JavaScript.
- [x] Controllare pulizia degli effetti e assenza di lavoro continuo non necessario.

### Fase 4 — Coerenza e prestazioni

- [x] Applicare il sistema visivo a prestazioni, équipe, laparoscopia e privacy.
- [x] Preservare dati, distinzione degli specialisti esterni e ancoraggi esistenti.
- [x] Consolidare CSS e rimuovere gli override superati dal percorso attivo.
- [x] Centralizzare i testi modificabili e verificare tutti i recapiti.
- [x] Ottimizzare asset, formati, dimensioni, caricamento e font.
- [x] Aggiornare anteprima social e metadata mantenendo la protezione di staging.
- [x] Aggiornare istruzioni media e documentare inserimento delle future foto reali.

### Fase 5 — QA e consegna

- [x] Superare lint, TypeScript e build di produzione.
- [x] Verificare tutte le pagine a 375, 390, 768 e 1440 px.
- [x] Ispezionare screenshot finali desktop e mobile.
- [x] Controllare overflow, ritagli, densità, barra fissa e stabilità del caricamento.
- [x] Verificare contrasti, tastiera, focus, menu e FAQ.
- [ ] Verificare movimento reale nel browser e modalità ridotta, documentando eventuali limiti.
- [x] Verificare collegamenti interni, ancore, telefoni, email e Maps senza invii o chiamate.
- [x] Controllare console, richieste fallite e asset mancanti.
- [x] Verificare metadata, structured data, robots e sitemap di staging.
- [ ] Eseguire Lighthouse se disponibile, con condizioni e limiti registrati.
- [x] Confrontare il risultato con i problemi indicati dall’utente: staticità, eccesso di testo, confusione e piattezza.
- [x] Aggiornare README, crediti, note cliente e rapporto QA con gli esiti effettivi.
- [x] Salvare screenshot e istruzioni di avvio complete di cartella e porta.
- [x] Verificare l’URL consegnato durante l’anteprima; chiarire se richiede l’avvio del server e non presentare un server spento come anteprima disponibile.
- [x] Consegnare la revisione senza pubblicare in produzione.

### Conferme di lancio — separate dalla build

- [ ] Confermare orari e fascia pomeridiana.
- [ ] Ottenere dati legali e informativa privacy validata.
- [ ] Verificare il collegamento Instagram prima di attivarlo.
- [ ] Documentare autorizzazioni di eventuali fotografie reali da pubblicare.
- [ ] Definire dominio e configurazione finale dell’indicizzazione.
- [ ] Ottenere approvazione alla pubblicazione in produzione.

## 9. Criteri di accettazione

1. La prima schermata è memorabile grazie alla qualità della scena e della composizione, con nome, località e chiamata subito chiari.
2. La homepage ha quattro momenti comprensibili e meno testo visibile, senza accumulo di slogan o CTA ripetute.
3. Il movimento è percepibile, fluido e funzionale; la versione ferma è completa.
4. La laparoscopia emerge dentro le prestazioni e porta a un approfondimento accurato.
5. Le pagine interne appartengono allo stesso sistema visivo e rendono facile leggere e contattare.
6. L’illustrazione non viene confusa con una fotografia autentica o con un nuovo logo.
7. Il sito rimane responsive, accessibile nelle verifiche svolte, veloce e semplice da aggiornare.
8. Checklist, decisioni ed evidenze sono aggiornate durante il lavoro; limiti e conferme mancanti sono espliciti.

## 10. Registro avanzamento

| Data | Fase / stato | Lavoro e decisioni | Evidenza | Prossimo passo |
| --- | --- | --- | --- | --- |
| 22/10/2026 | Piano pronto | Recepite critica alla versione 2 e nuova direzione: scena illustrata, blu vivo, meno contenuti e movimento | Creato `IMPLEMENTATION_PLAN3.MD`; nessuna implementazione avviata | Alla richiesta di build: baseline, illustrazione e mockup della hero |

Durante la build aggiungere righe per ogni fase, decisione significativa, verifica e correzione osservata. Mantenere aggiornati anche “In corso”, “Prossima attività” e le caselle pertinenti.

| 22/10/2026 | Aggiornamento in corso | Fase 1: generazione della scena e composizione della hero | Checklist aggiornata durante il lavoro | Proseguire la fase |

| 22/10/2026 | Aggiornamento in corso | Fase 1: hero pronta per integrare la scena; CSS consolidato | Checklist aggiornata durante il lavoro | Proseguire la fase |

| 22/10/2026 | Aggiornamento in corso | Fase 1: iterazione asset e verifica della hero nel browser | Checklist aggiornata durante il lavoro | Proseguire la fase |

| 22/10/2026 | Aggiornamento in corso | Fase 2: asset scelto, homepage essenziale e movimento implementati | Checklist aggiornata durante il lavoro | Proseguire la fase |

| 22/10/2026 | Aggiornamento in corso | Fase 4: stili consolidati, font e immagini ottimizzati, avvio QA | Checklist aggiornata durante il lavoro | Proseguire la fase |

| 22/10/2026 | Aggiornamento in corso | Fase 5: build e lint superati, verifiche browser finali | Checklist aggiornata durante il lavoro | Proseguire la fase |

| 22/10/2026 | Aggiornamento in corso | Fase 5: hero validata desktop/mobile, test responsive e interazioni | Checklist aggiornata durante il lavoro | Proseguire la fase |

| 22/10/2026 | Aggiornamento in corso | Fase 5: controlli superati, documentazione e consegna | Checklist aggiornata durante il lavoro | Proseguire la fase |

| 22/10/2026 | Aggiornamento in corso | Versione 3 pronta per revisione; limitazioni QA documentate | Checklist aggiornata durante il lavoro | Proseguire la fase |

## Esito della build

- Asset originale generato, prima versione fotografica scartata, seconda versione scolpita integrata con alpha. Confronto cromatico e mockup in `docs/design-v3/`.
- Homepage in quattro momenti, 252 parole contro 409 della build precedente (-38,4%). Altezza a 390: 2631 px contro 3604; a 1440: 1985 contro 2307.
- Un solo foglio di stile attivo e un solo font locale. Nessuna dipendenza di animazione aggiunta. Nuova anteprima social coerente.
- Build, TypeScript, lint, contrasti, collegamenti, FAQ/menu da tastiera e cinque pagine alle quattro viewport verificati.
- Risposta reale al puntatore e ingresso CSS verificati; preferenza OS reduced motion e touch reale non emulati. Regole e cleanup verificati nel codice, contenuto presente nell’HTML statico. Le corrispondenti caselle di verifica completa restano aperte con il limite esplicito.
- Lighthouse non disponibile: nessun punteggio dichiarato.
- Report: `docs/QA_PLAN3.md`. Server finale locale su `http://127.0.0.1:3103/`, mantenuto disponibile per la revisione. Le conferme di lancio restano aperte. Nessuna pubblicazione effettuata.

## Correzione richiesta: fotografia della struttura e palette

- [x] Sostituita la coppia illustrata con un segnaposto per l’immagine dell’ingresso o dell’esterno della clinica.
- [x] Titolo aggiornato a “Veterinario a Leinì.”
- [x] Eliminato il lime da tutti gli stili attivi, inclusi badge, hover e qualifiche. Sostituito con azzurro chiaro.
- [x] Aggiornata anche l’anteprima social: nessun animale o accento lime.
- [x] Predisposto `campaign.hero.exteriorImage` nel file dati per inserire la foto autentica.
- [x] Build, lint e contrasti superati dopo la correzione.

Questa richiesta supera la precedente scelta di scena illustrata e palette lime. Gli asset generati e le note precedenti restano soltanto come archivio del lavoro.

## Revisione multipagina richiesta e autorizzazione alla pubblicazione

L’utente conferma esplicitamente la sostituzione della produzione su ambulatorio-leini.vercel.app e richiede un sito più ricco, realmente multipagina e con numerosi spazi fotografici. Questa richiesta supera l’obiettivo di massima sottrazione della homepage del Piano 3.

Completato: revisione multipagina pubblicata e verificata sul dominio pubblico.

- [x] Ricevuta conferma alla sostituzione della produzione.
- [x] Riesaminati tutti i dati del cliente e i contenuti esistenti.
- [x] Creare pagine Ambulatorio e Contatti e inserirle nella navigazione.
- [x] Ampliare la homepage con presentazione della struttura e composizione fotografica.
- [x] Distribuire tutti i servizi e i profili completi nelle pagine pertinenti.
- [x] Predisporre almeno dieci fotografie distinte con configurazione centralizzata.
- [x] Verificare link, build e comportamento desktop/mobile.
- [x] Pubblicare la revisione sul progetto Vercel già verificato.
- [x] Verificare il dominio pubblico senza accesso Vercel.

Foto reali non ancora ricevute: segnaposto espliciti con soggetto richiesto. Nessun ritratto inventato né fotografia di repertorio presentata come ambulatorio. Nessun ulteriore consenso di pubblicazione da richiedere: autorizzazione esplicita già ricevuta in questa conversazione.

Avanzamento: create sette pagine complessive, navigazione completa e undici soggetti fotografici; in corso rifinitura responsive e verifica prima della pubblicazione.

Verifica completata: sette pagine alle quattro viewport, link e ancore validi, menu e FAQ da tastiera, build/lint/contrasti superati. Pubblicazione in corso sulla produzione già autorizzata.

Esito finale, 23/10/2026: produzione READY su https://ambulatorio-leini.vercel.app. Tutte le sette pagine e gli asset verificati HTTP 200 senza credenziali o bypass; link, ancore e noindex corretti. Sito aperto nel browser senza login Vercel. Screenshot in docs/screenshots/multipagina/pubblicato.png. Le fotografie autentiche restano da ricevere.

## Revisione della direzione visiva — 23 ottobre 2026

Richiesta: risolvere la sensazione di sito generico, il ritmo ripetitivo e la gerarchia fotografica debole. Autorizzato il coding; la precedente autorizzazione alla pubblicazione sul progetto Vercel rimane valida.

Completato: direzione visiva revisionata, verificata e pubblicata.

- [x] Riletti i componenti, i contenuti del cliente e le guide Next.js locali pertinenti.
- [x] Ricostruire il sistema visivo in un unico CSS, senza sovrapporre un’altra serie di correzioni alla versione precedente.
- [x] Ridisegnare apertura, segnaposto e gerarchia fotografica con soggetti autentici ancora da ricevere.
- [x] Dare ritmo alla homepage con informazioni distintive, prestazioni e persone.
- [x] Differenziare composizione di Prestazioni, Équipe, Ambulatorio e Contatti.
- [x] Eliminare falsi controlli e ridondanze; rifinire navigazione, focus e movimento ridotto.
- [x] Verificare build, contenuti, contrasti, collegamenti e comportamento responsive nel browser.
- [x] Pubblicare la revisione e verificare il dominio pubblico.

Vincoli: titolo “Veterinario a Leinì.”, nessun lime, nessuna foto inventata, nessuna promessa clinica o disponibilità non confermata. Tutti i servizi e i recapiti rimangono disponibili nelle pagine pertinenti.

Avanzamento 23/10: ricostruiti Hero, PhotoSlot, homepage e indice delle prestazioni. Aggiunti ritratti individuali in homepage, fascia laparoscopia e composizioni specifiche per le pagine interne. Rimossi i “+” dai servizi non interattivi. In corso consolidamento del CSS e verifica visiva.

Avanzamento: lint, TypeScript e build già superati sulla nuova direzione. In corso controllo visivo e interazioni nel browser.

Correzioni durante QA: ritratti affiancati su mobile, contatti homepage sintetici con rimando alla pagina completa, ridotte altezze fotografiche desktop, corretta sovrapposizione didascalia a tablet. Due font locali, nessuna nuova dipendenza.

QA completata: sette pagine a 375/390/768/1440 px e correzione tablet verificata anche a 641 e 850 px. Nessun overflow residuo. Menu, Escape con ripristino focus, FAQ e movimento al puntatore verificati. Tutti i link e i recapiti validi, nessun errore console rilevato. Build/lint/contrasti superati; screenshot salvati in docs/screenshots/visual4/.

Pubblicazione finale: dpl_25LHtvW9xyuT9zEocXePrZgve1HY, stato READY, https://ambulatorio-leini.vercel.app. Verificata la nuova composizione nell’HTML pubblico e tutte le sette pagine HTTP 200 senza credenziali o bypass. Demo aperta nel browser. Fotografie autentiche ancora da ricevere; limiti QA esplicitati nel rapporto.

## Identità interattiva “La visita comincia da qui” — 23 ottobre 2026

L’utente autorizza l’implementazione della proposta: ingresso esplorabile, competenze dei due medici e segno grafico ricavato dal marchio. La precedente autorizzazione agli aggiornamenti della demo pubblica resta valida.

Completato: esperienze interattive implementate, verificate e pubblicate.

- [x] Riesaminato il marchio originale e verificati i contenuti disponibili; lette le guide Next.js per componenti interattivi.
- [x] Costruire il percorso Ingresso → Accoglienza → Visita → Strumenti senza inventare una planimetria.
- [x] Collegare le aree di interesse documentate ai due medici con un’interazione originale.
- [x] Ricavare dai quattro cuscinetti del simbolo un motivo grafico coerente, mantenendo il logo originale invariato.
- [x] Integrare le esperienze nella homepage e nelle pagine pertinenti, riducendo le ripetizioni.
- [x] Verificare selezione, tastiera, focus, annunci, link e comportamento responsive.
- [x] Superare build, lint, controlli dei contenuti e dei colori; salvare screenshot.
- [x] Aggiornare la demo pubblica e verificarla senza autenticazione.

Fotografie autentiche ancora non ricevute: tutti gli spazi restano dichiarati. Nessuna ricostruzione architettonica, diagnosi automatica, promessa clinica o disponibilità non confermata. Nessun autoplay, blocco dello scorrimento o libreria di animazione aggiunta.

Avanzamento: implementate le quattro tappe e le sei aree di interesse con relativi medici; creato il motivo SVG ispirato al simbolo e sostituiti i segnaposto geometrici generici. Homepage integrata, pagine Ambulatorio/Équipe collegate alle esperienze. In corso prove delle interazioni e rifinitura responsive.

QA in corso: 40 stati interattivi verificati a 375/390/768/1440 px, più 24 controlli sulle pagine interne: nessun overflow o sovrapposizione. Associazioni Boasso/Valieri corrette. Riservata un’altezza maggiore al pannello mobile per evitare variazioni di 18 px tra le tappe; riepilogo delle competenze stabile in tutte le selezioni.

Rifinitura di accessibilità: tornando dalla seconda tappa all’ingresso, il focus passa alla prima scheda prima che il comando Indietro venga disabilitato. Evitata la perdita di focus sul documento. Frecce, Home/End e associazioni delle 24 selezioni area/medici verificate nel browser.

Verifica finale completata: immagini contenute e pannelli stabili anche a 641 px; nuova build/lint/contrasti superati; ancore e recapiti verificati via HTTP. Schermate salvate per ingresso desktop, selezione Dermatologia e homepage mobile. In corso pubblicazione della demo già autorizzata.

Pubblicazione completata: dpl_C5TspEaRqdUpwmDqKRYQjTtd2b2q, READY su https://ambulatorio-leini.vercel.app. Sette pagine HTTP 200 senza autenticazione; quattro tab e sei aree presenti nell’HTML pubblico. Provati nel browser pubblico avanzamento verso Accoglienza e selezione Dermatologia; riepilogo corretto per Valieri, nessun errore console.

## Direzione editoriale «La cura, da vicino» — 23 ottobre 2026

Il cliente respinge la direzione interattiva. Riferimento estetico: demo Leonardo da Vinci; nessun asset o testo copiato. Autorizzato il coding e mantenuta l’autorizzazione agli aggiornamenti della demo.

- [x] Riletti brief, sito di riferimento, dati e documentazione Next.js.
- [x] Ricomporre l’apertura e semplificare i segnaposto fotografici.
- [x] Realizzare illustrazioni originali degli strumenti e sezione laparoscopia.
- [x] Presentare direttamente i medici, ripristinare FAQ e mantenere tutti gli approfondimenti.
- [x] Uniformare pagine interne, tipografia, colori e movimento.
- [x] Verificare build, lint, responsive, collegamenti, tastiera e contrasti.
- [x] Pubblicare e verificare la demo pubblica.

Avvio: scelta la direzione fotografica/editoriale proposta nel brainstorming. Nessuna foto autentica ricevuta; nessuna ricostruzione di ambienti o ritratti inventati.

Avanzamento: nuova apertura, quattro illustrazioni SVG originali, sezione laparoscopia, profili diretti e FAQ implementati. Rimossi dal percorso pubblico i due selettori. In corso rifinitura visiva delle sette pagine e controlli responsive.

QA visiva: corretti una didascalia coperta dalla foto sovrapposta e un ritorno a capo del titolo mobile. Verificata la scena illustrata. In corso il controllo delle sette pagine e della navigazione.

Verifiche completate: 28 combinazioni pagina/viewport senza overflow, menu e FAQ da tastiera, link/ancore/recapiti validi, console pulita. Build/lint/contrasti superati. In corso pubblicazione sullo stesso progetto Vercel autorizzato.

Pubblicata la revisione editoriale: dpl_8Z1YvpNzgzaCJqWbA5uMA6dnwKUj, READY, https://ambulatorio-leini.vercel.app/?revision=editorial. Dominio pubblico verificato senza autenticazione; nuovo disegno presente, selettori precedenti assenti, console pulita. Screenshot pubblico in docs/screenshots/editorial/pubblicato-desktop.png.

## Logo senza riquadro bianco — 23 ottobre 2026
- [x] Verificato il simbolo originale: sfondo bianco incorporato nel raster.
- [x] Applicata fusione multiply al solo simbolo nell’intestazione per eliminare visivamente il bianco sul fondo chiaro, preservando il file originale. La prova di scontorno generativo non è stata integrata perché modificava i bordi.
- [x] Verificare e pubblicare la correzione.

Logo: build superata; dpl_2CdJkhPGtP9h8jZ81UABeGu8YSLy READY. Verificato sul dominio pubblico il simbolo originale senza riquadro, mix-blend-mode multiply attivo. Il PNG originale resta invariato; effetto di trasparenza visiva nell’intestazione chiara.
