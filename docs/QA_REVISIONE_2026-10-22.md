# Verifica della revisione — 22 ottobre 2026

## Esito

Build di produzione Next.js completata con successo, TypeScript incluso. Tutte le pagine sono prerenderizzate staticamente. `npm run lint`, `node scripts/contrast.mjs` e `git diff --check` superati. Il controllo cromatico copre 14 coppie testuali della palette attiva, tutte con rapporto almeno 4,5:1.

Verificata la build con `next start` in locale, non soltanto il server di sviluppo. HTTP 200 per `/`, `/prestazioni`, `/equipe`, `/privacy`, `/robots.txt`, `/sitemap.xml`, favicon, icona, OG e i due asset del logo.

## Flusso verificato

Il visitatore riconosce ambulatorio e località, esplora prestazioni ed équipe e raggiunge recapiti telefonici, email o Google Maps. Il sito non prevede backend, raccolta dati o prenotazioni: i confini verificati sono HTML statico → navigazione/accordion → destinazione dei collegamenti.

- Tutte le pagine hanno un solo H1 e title specifico; metadata `noindex,nofollow` presenti.
- Verificati tutti i link interni e gli ID dei frammenti nell’HTML generato.
- Verificato nel browser il passaggio dalla scheda laparoscopia a `/prestazioni#laparoscopia`.
- Verificati `tel:+390119981469`, `tel:+393476401966`, `mailto:av.leini@libero.it` e l’URL Maps con indirizzo completo. Non effettuate chiamate né inviati messaggi.
- FAQ: apertura con Invio e chiusura con Spazio. Testi delle risposte disponibili correttamente.
- Menu mobile: apertura, chiusura alla selezione di Contatti, chiusura con Escape e ritorno del focus al summary.
- Nessun warning o errore di console rilevato durante la navigazione della build finale.
- Nessuna immagine rotta rilevata; loghi effettivamente caricati e ispezionati.
- La galleria dei pazienti è assente finché non vengono aggiunte immagini autorizzate.
- Nessuna immagine della vecchia campagna, modulo dimostrativo, WhatsApp, disponibilità H24 o rating pubblicato.

## Responsive

Misure di larghezza del documento verificate sulla homepage e su tutte e tre le pagine secondarie:

| Viewport | Larghezza documento | Overflow orizzontale |
|---|---|---|
| 375 px | 375 px | Assente |
| 390 px | 390 px | Assente |
| 768 px | 768 px | Assente |
| 1440 px | 1440 px | Assente |

Homepage con FAQ chiuse: circa 3.537 px di altezza a 375, 3.541 px a 390, 2.488 px a 768 e 2.394 px a 1440. La demo pubblicata precedente misurava circa 7.951 px a 1440: riduzione indicativa del 70%. Le misure dipendono da font, viewport e stato degli accordion.

Ispezionate visivamente homepage desktop/mobile, contatti tablet, équipe mobile e prestazioni desktop. Corrette piccole imperfezioni del ritaglio del simbolo e della cornice del logo; l’asset del simbolo ha un nuovo percorso per evitare la cache dell’ottimizzatore delle immagini durante la revisione.

Screenshot salvati in `docs/screenshots/`:

- `anteprima.png`: prima schermata desktop.
- `home-desktop-1440.png`: homepage completa desktop.
- `home-mobile-390.png`: homepage completa mobile.
- `equipe-mobile-390.png`: équipe mobile.
- `prestazioni-desktop-1440.png`: prestazioni desktop.

Negli screenshot a pagina intera la barra mobile fissa può comparire all’altezza della prima viewport: è il comportamento della cattura, mentre nell’uso resta sul fondo dello schermo. Il layout riserva lo spazio necessario a fine pagina.

## Prestazioni e limiti

Font locali, pagine statiche, immagini locali ottimizzate da Next Image, un solo piccolo componente client per il menu e nessuna libreria di animazione caricata. GSAP e Lenis rimossi dalle dipendenze. CSS nativo senza loader Tailwind.

Non è stato eseguito un audit Lighthouse e non sono disponibili misure sul campo dei Core Web Vitals: nessun punteggio viene dichiarato. Il rispetto di reduced motion è implementato in CSS, senza animazioni automatiche; non è stato verificato cambiando le preferenze di sistema. Nessun test fisico su dispositivi o audit completo con screen reader.

## Pubblicazione

Nessun deploy, push o intervento sull’hosting. `robots.txt` vieta la scansione; sitemap intenzionalmente vuota. Prima del lancio servono le conferme in `docs/REVISIONE_CLIENTE.md`, approvazione dell’utente e configurazione del dominio ufficiale. La pagina privacy è preparatoria e non costituisce una dichiarazione di conformità.
