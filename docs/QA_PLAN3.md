# QA della versione 3 — 22 ottobre 2026

## Risultato e differenze

Hero con scena tridimensionale originale, blu #1757cf e accento lime #d8f58a. Asset dichiarato come illustrazione; logo autentico preservato. Quattro momenti nella homepage: hero, prestazioni con laparoscopia integrata, équipe essenziale, contatti e FAQ. Rimosse numerazioni, slogan duplicati e la sezione FAQ autonoma.

Una sola stylesheet attiva: globals.css riscritto e consolidato; editorial.css e il vecchio disegno lineare rimossi. Un solo font locale attivo (Hanken). Immagine WebP con alpha, caricamento responsive e preload; nessun WebGL o libreria di animazione aggiunto. Scena con ingresso CSS, risposta al puntatore su dispositivi adatti, e due rivelazioni di sezione con IntersectionObserver/WAAPI. Listener, observer, frame e animazioni puliti all’unmount e al cambio di preferenza.

## Confronto misurato

Testo HTML senza script/style, includendo risposte FAQ e footer: 409 parole nella build Piano 2, 252 nella versione 3, riduzione del 38,4%. È una misura riproducibile del contenuto renderizzato, non soltanto del testo visibile con accordion chiusi. Evidenze in `docs/design-v3/baseline.json` e `text-comparison.json`.

| Viewport | Altezza v2 | Altezza v3 | Larghezza documento v3 |
| --- | --- | --- | --- |
| 375 | 3597 | 2627 | 375 |
| 390 | 3604 | 2631 | 390 |
| 768 | 2410 | 1775 | 768 |
| 1440 | 2307 | 1985 | 1440 |

Homepage circa 27% più corta a 390 e 14% più corta a 1440. A 390 il pulsante della hero è ampiamente nella prima viewport. Dati completi delle cinque pagine alle quattro larghezze in `docs/screenshots/plan3/responsive.json`; nessun overflow e nessuna immagine rotta rilevati. Font effettivamente caricato controllato nelle misure.

## Verifiche concluse

- Lint senza warning, build e TypeScript superati. Cinque pagine prerenderizzate staticamente.
- Dieci coppie testuali della palette verificate: tutti i rapporti superiori a 4,5:1; bianco/blu 6,36:1 e testo/lime 10,74:1.
- HTTP 200 per tutte le pagine e gli asset principali, favicon, icona e OG. Un H1 per pagina, title pertinente e noindex,nofollow.
- Link interni e ID dei frammenti validi. Collegamento della scheda laparoscopia provato fino alla pagina di destinazione.
- Tel, mailto e Maps verificati senza effettuare chiamate o invii.
- FAQ aperta con Invio e richiusa con Spazio. Menu mobile chiuso con Escape e focus restituito al trigger.
- Risposta della scena a un puntatore reale verificata: variabili CSS aggiornate a spostamenti di pochi pixel e trasformazione applicata.
- Animazione CSS `scene-enter` applicata e completata in posizione naturale. Scorrimento reale verificato fino all’équipe; gli effetti di rivelazione sono previsti per le due sezioni identificate, senza nascondere il contenuto prima dell’attivazione.
- Nessun errore o warning di console rilevato nella navigazione finale.
- Hero e pagine secondarie ispezionate. Asset fotografico iniziale scartato a favore della seconda proposta scolpita. Scelta lime/pesca e prompt documentati in `docs/design-v3/DIREZIONE.md`.
- Robots blocca i crawler, sitemap vuota; structured data conserva solo i dati verificati, senza orari provvisori o rating.

## Limiti espliciti

Reduced motion è implementato sia in CSS (nessuna animazione/transizione) sia nei componenti client (niente risposta al puntatore, cancellazione degli effetti). Comportamento controllato nel codice; non è stata emulata la preferenza OS nel browser disponibile. I contenuti essenziali e le FAQ native sono presenti nell’HTML statico; non è stato disabilitato JavaScript nella UI del browser. Le caselle delle verifiche visive complete restano aperte nel piano con questa spiegazione.

Lighthouse non disponibile come comando nell’ambiente: audit non eseguito e nessun punteggio dichiarato. Nessun test su dispositivo fisico o audit completo screen reader. Nessuna promessa di conformità legale o di prestazioni sul campo.

## Asset e fotografie future

Immagine scelta copiata nel repository in `public/media/illustrations/companions-sculpture-v3.webp`; originale conservato nella cartella generated_images. Prima proposta ottimizzata archiviata in docs/design-v3, non usata dal sito. Ritratti reali aggiornabili in professionals[].photo. La galleria autorizzata resta predisposta dentro l’area équipe e non produce markup quando vuota.

Nessun deploy eseguito. Restano da confermare orari pomeridiani, legali/privacy, Instagram e dominio ufficiale. Il server di anteprima finale è sulla porta 3103; nel README è riportato anche il comando completo per riavviarlo.

## Correzione successiva richiesta dall’utente

Hero aggiornata a “Veterinario a Leinì.”. Animali rimossi e sostituiti da segnaposto esplicito per foto ingresso/esterno; il percorso futuro è `campaign.hero.exteriorImage`. Lime eliminato dagli stili attivi e dall’OG, sostituito con azzurro #e4edff. Build, lint e contrasto superati. Controllo browser a 390 e 1440: nessun overflow, nessuna immagine degli animali caricata e segnaposto leggibile. Screenshot: `hero-clinica-placeholder.png`. Le descrizioni precedenti della scena illustrata sono storiche e superate da questa richiesta.

## Revisione multipagina — 22 ottobre 2026

- Sette pagine: Home, Ambulatorio, Prestazioni, Équipe, Chirurgia laparoscopica, Contatti e Privacy.
- Due nuove pagine e navigazione completa; homepage ampliata con composizione di due immagini e sezione équipe fotografica. Undici soggetti fotografici distinti, configurati in un unico file. Nessuna fotografia autentica disponibile: segnaposto espliciti.
- Lint, build e TypeScript superati. Dieci coppie di contrasto del tema superate (rapporto minimo 5,40).
- Verificate tutte le sette pagine a 375, 390, 768 e 1440 px: nessun overflow orizzontale, un H1 per pagina. Homepage circa 4084 px a 390 e 3174 px a 1440: ampliamento richiesto rispetto alla versione essenziale precedente.
- Tutte le pagine HTTP 200; controllati link interni e frammenti, telefoni, email e Maps. Menu mobile aperto da tastiera, navigazione alla pagina Contatti e FAQ aperta con Invio. Nessun errore o warning nella console del browser durante questi controlli.
- Ispezionati visivamente homepage desktop, Ambulatorio mobile e Prestazioni desktop. Limiti precedenti su Lighthouse, preferenza OS reduced motion e dispositivi fisici restano validi; nessun nuovo punteggio dichiarato.
- Robots e metadata mantengono noindex/nofollow: il sito è una demo sul dominio tecnico Vercel. Conferme di orari, dati legali e fotografie ancora necessarie per il sito ufficiale della clinica; non bloccano la pubblicazione della demo esplicitamente autorizzata.

Verifica produzione completata il 23/10/2026: dominio stabile accessibile senza login, sette pagine e asset HTTP 200 senza autenticazione; collegamenti e metadata corretti. Screenshot pubblico in docs/screenshots/multipagina/pubblicato.png.

## Direzione visiva revisionata — 23 ottobre 2026

L’utente ha autorizzato la revisione dopo la diagnosi di genericità e ripetizione. Ricostruito il CSS attivo, introdotto Fraunces italic locale come accento accanto a Hanken. Nessuna libreria aggiunta. Palette bianco caldo, blu e blu profondo; nessun lime.

Nuova apertura con proporzioni più equilibrate e indirizzo integrato alla fotografia, racconto dal 2009, indice servizi compatto, fascia laparoscopia, ritratti individuali e contatti sintetici nella homepage. Servizi completi organizzati per righe con elenchi, équipe con profili alternati, galleria ambienti con dimensioni diverse. Segnaposto espliciti e centralizzati, nessuna fotografia inventata.

- Lint, TypeScript e build superati; 12 coppie di contrasto verificate sui colori attivi (rapporto minimo 5,43).
- Verificati un H1 e navigazione attiva nelle pagine. Nei servizi rimossi i simboli “+” non interattivi; riservati alle FAQ apribili.
- Homepage mobile compattata durante QA da 5141 a 4139 px (390 px), desktop da 4299 a 3602 px (1440 px), mantenendo sei soggetti fotografici. Queste misure descrivono il confronto tra iterazioni di questa revisione, non con la produzione precedente.
- Riscontrata e corretta una didascalia a tablet; controllo successivo ha rilevato che l’altezza minima alterava la larghezza della stessa figura. Corretto assegnando dimensioni esplicite nel solo intervallo tablet. Verifica mirata finale necessaria prima del deploy.
- Tutti i contenuti clinici e i recapiti restano nei dati originali. Demo noindex/nofollow. Gli asset fotografici reali restano da ricevere.

Limiti: nessuna misura Lighthouse e nessuna prova con lettore di schermo o dispositivo touch fisico. Il supporto al movimento ridotto è implementato sia in CSS sia negli effetti JavaScript; la preferenza del sistema operativo non è stata modificata per il test.

Verifica finale locale della direzione visiva: correzione tablet confermata a 641, 768 e 850 px senza overflow; nessuna sovrapposizione residua. Le altre pagine hanno superato la matrice 375/390/768/1440 px. FAQ con Invio, menu mobile, navigazione verso Équipe, chiusura automatica ed Escape con ritorno del focus verificati. Risposta al puntatore misurata sulla hero e reset all’uscita corretti. Nessun errore/warning console nei controlli. HTTP 200 su sette pagine, link e frammenti validi, recapiti corretti e noindex conservato. Screenshot in docs/screenshots/visual4/.

Revisione visiva pubblicata: dpl_25LHtvW9xyuT9zEocXePrZgve1HY READY. Verifica pubblica indipendente senza autenticazione superata su sette pagine e asset, collegamenti e nuova composizione presenti. Il browser mostra la revisione sul dominio stabile.
