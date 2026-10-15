# Verifica della demo v2 — revisione del movimento

Data: 15 ottobre 2026. Build locale di produzione, Next.js 16.4.1. Nessuna pubblicazione eseguita.

## Risultati misurati

Lighthouse 12.8.2, Chrome headless locale, impostazioni mobile predefinite e preset desktop. Sono misure di laboratorio di una singola esecuzione finale per profilo, non dati di utenti reali. Configurazione, ambiente e risultati della revisione sono conservati in `docs/qa/motion-mobile.json` e `docs/qa/motion-desktop.json`. I file senza prefisso `motion-` documentano la prima implementazione.

| Controllo | Mobile | Desktop |
| --- | --- | --- |
| Performance | 93 | 100 |
| Accessibilità automatica | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 63 | 63 |
| First Contentful Paint | 0,8 s | 0,3 s |
| Largest Contentful Paint | 3,2 s | 0,7 s |
| Total Blocking Time | 20 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |

Il `noindex, nofollow` è deliberato per la demo ed è rilevato dall’audit SEO. Il punteggio di accessibilità non sostituisce una prova manuale con lettore di schermo. La LCP mobile rimane migliorabile, pur avendo superato l’obiettivo di performance previsto dal piano.

Questi audit includono le nuove animazioni anche su mobile, il sigillo, la scena narrativa e le transizioni. L’audit intermedio mobile era 92; il risultato finale è 93, una variazione di laboratorio che non viene attribuita a un miglioramento specifico del codice. Non è disponibile una baseline locale della vecchia versione misurata nelle stesse condizioni.

## Verifiche concluse

- `npm run lint`: superato.
- `npm run build`: superato, TypeScript e prerendering inclusi. Font serviti localmente, nessun download da Google Fonts necessario.
- `git diff --check`: superato.
- `node scripts/contrast.mjs`: 10 coppie principali superano 4,5:1; rapporto minimo 4,88:1.
- Browser: tutte le 9 combinazioni animale × motivo, riavvio, modifica e ritorno indietro sono stati verificati nell’implementazione iniziale. Nella revisione del movimento è stata riprovata la combinazione gatto × prima visita, con focus sul riepilogo e riavvio corretto.
- Il messaggio modificato manualmente rimane intatto quando si torna alle scelte senza cambiarle.
- Copia del messaggio verificata con stato di conferma. Il fallback in caso di appunti non disponibili è implementato, ma non è stato forzato nel browser.
- Passaggio da “Diagnostica” al percorso: argomento ricevuto e messaggio contestuale verificato.
- Fasi Prima/Durante/Dopo: selezione e contenuti verificati.
- Menu mobile: apertura, chiusura con Escape e focus sul controllo di apertura verificati.
- Tastiera: radio selezionabili con spazio e frecce; avanzamento con Invio; focus sul titolo del passo successivo.
- Barra mobile nascosta durante il focus nella textarea; nessun overflow durante la scrittura.
- Controllati DOM e geometrie a 360, 390, 768, 1280 e 1440 CSS px: nessun overflow orizzontale o titolo/controllo fuori dalla finestra.
- Ispezione visiva della nuova hero desktop, del racconto centrale desktop/mobile e delle geometrie a 360, 390, 768, 1280 e 1440 CSS px. Schermate aggiornate: `docs/qa/motion-desktop.jpg` e `docs/qa/motion-mobile.jpg`.
- Pausa dall’header verificata: titoli, sigillo e pannelli hanno `animation-name: none`, la fotografia torna statica e i contenuti rimangono disponibili. Conservazione al ricaricamento e successiva riattivazione verificate. La variante di sistema è implementata; non è stata cambiata la preferenza del sistema operativo.
- Tutte le ancore hanno una destinazione esistente. La verifica iniziale non prevedeva link telefonici attivi. Con la successiva richiesta dell’utente i link `tel:` sono stati attivati; `mailto:` e `wa.me` restano assenti.
- Metadati di condivisione assoluti e `noindex, nofollow` verificati nel DOM.
- Contenuti essenziali, indirizzo, recapiti, orari e fallback `noscript` verificati nell’HTML prerenderizzato. Accordion e menu sono nativi.
- Nessun errore applicativo osservato. I warning iniziali di metadataBase e di sviluppo sono stati risolti o riguardavano il solo Fast Refresh; build finale pulita.
- Nessun endpoint di invio; percorso in memoria locale React. Non sono richiesti dati personali e nessun messaggio viene salvato automaticamente.

## Limiti e verifiche ancora aperte

- Non sono state conservate schermate iniziali desktop/mobile né misure locali comparabili della vecchia versione. La baseline è descrittiva nei documenti e nei sorgenti precedenti.
- Nessun iPhone o telefono Android fisico disponibile: i controlli responsive sono simulazioni di dimensioni, non certificazioni Safari iOS / Chrome Android.
- Navigazione e struttura accessibile controllate tramite tastiera, albero di accessibilità e Lighthouse; resta una prova con lettore di schermo reale.
- Il reflow alle dimensioni previste è verificato; non è stata eseguita una prova distinta dello zoom del browser al 200%.
- Il rallentamento mobile è quello simulato da Lighthouse; non è stata eseguita una sessione manuale su rete mobile reale.
- Indirizzo e recapiti non verificati con lo studio. Il collegamento Maps apre una ricerca testuale dell’indirizzo riportato, non un segnaposto di posizione dichiarato verificato.
- Nessuna misurazione di campo o promessa di risultati commerciali.

## Materiale di presentazione

`docs/PRESENTAZIONE.md` contiene il percorso di circa 90 secondi. Le interazioni della scaletta sono state provate senza invii reali; la durata è indicativa, non una prova cronometrata su telefono fisico.

Immagini generate con ImageGen e salvate nel progetto: `public/images/hero-v2.webp`, `public/images/touch-v2.webp`, `public/images/rest-v2.webp`. Prompt in `docs/IMAGE_PROMPTS.md`. Nessuna immagine rappresenta lo studio.

## Evidenze specifiche del movimento

- La preferenza locale era rimasta su “ridotto” dopo il QA precedente; è stata riattivata e l’anteprima viene consegnata con `data-motion="full"`. Rimossa anche la regola che disattivava l’ingresso della hero su mobile.
- Hero: `headline-rise` attivo; sigillo in esecuzione quando la sezione è visibile. Profondità fotografica e fascia tipografica dipendono dallo scroll nativo.
- Racconto: i controlli portano ai capitoli 02/03, aggiornano `aria-pressed`, illustrazione e tracciato. Il capitolo centrale è stato osservato con scena sticky a 115 px su desktop; a 390×844 la scena rimane sotto l’header. Su finestre basse torna nel flusso per lasciare spazio alla lettura.
- Servizi: Diagnostica apre il pannello corretto con disegno progressivo. Visita: Durante e Dopo cambiano contenuto e stato fotografico. Contatto: passaggi con `panel-sweep`, focus sul titolo e messaggio coerente.
- Corretti i nomi accessibili dei controlli 01/02/03 e aumentato il contrasto della numerazione dopo i rilievi intermedi. Audit finale: nessuna violazione automatica di accessibilità.
- Nessun errore applicativo nella console durante i percorsi provati. Animazioni Web Animations annullate alla pausa; loop decorativi sospesi quando la sezione esce dallo schermo.
- L’anteprima viene lasciata all’inizio, senza selezioni di prova e con le dimensioni del browser ripristinate.
