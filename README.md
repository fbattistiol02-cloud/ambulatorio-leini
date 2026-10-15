# Ambulatorio Veterinario Leinì — concept v2

Demo gratuita, non ufficiale. Identità editoriale, immagini illustrative coordinate e percorso locale per preparare un messaggio. La CTA principale apre l’app per telefonare tramite `tel:`; il modulo secondario non invia richieste; servizi, specie, indirizzo, recapiti e orari sono da confermare. La pagina mantiene `noindex, nofollow`.

## Avvio

```sh
npm ci
npm run dev -- --port 3100
```

Per la build di produzione:

```sh
npm run lint
node scripts/contrast.mjs
npm run build
npm run start -- --port 3101
```

## Struttura

- `IMPLEMENTATION_PLAN1.MD`: piano, avanzamento e verifiche aperte.
- `docs/DESIGN_DIRECTION.md`: direzione creativa e trattamento delle informazioni.
- `docs/IMAGE_PROMPTS.md`: prompt e provenienza delle immagini generate.
- `docs/PRESENTAZIONE.md`: presentazione di circa 90 secondi.
- `docs/QA_REPORT.md`: risultati misurati e limiti delle verifiche.
- `src/content/experience.ts`: servizi illustrativi, visita e FAQ.
- `src/content/site.ts`: dati della demo originale, da validare; le vecchie copy non sono usate dalle nuove sezioni.
- `src/components/sections/ContactJourney.tsx`: selezioni, messaggio, modifica, copia e riavvio.
- `src/app/globals.css`: palette e composizioni responsive.
- `src/app/experience.css`: coreografia della hero, scena narrativa e transizioni.
- `src/components/motion/MotionDirector.tsx`: ingressi e profondità durante lo scroll, con pulizia degli effetti.
- `src/components/motion/PortraitScene.tsx`: profondità del ritratto al puntatore.
- `src/app/fonts/`: font locali e licenze, per build indipendenti da Google Fonts.

## Interazioni e accessibilità

Servizi, FAQ, note del concept e menu usano elementi `details` nativi. Il contatto guidato richiede JavaScript, mentre i contenuti essenziali restano nell’HTML. Il messaggio vive soltanto nello stato React della pagina e non usa storage o endpoint. Solo la preferenza di movimento è salvata localmente.

La hero entra per righe e rivela il ritratto; il sigillo ruota e la cornice respira mentre la sezione è visibile. Il ritratto risponde al puntatore su desktop. Una fascia tipografica e la profondità delle foto seguono lo scroll nativo. Nel metodo una scultura di filo evolve in tre capitoli con una scena sticky, senza bloccare lo scorrimento; su finestre basse torna nel flusso normale. Servizi, visita e contatto hanno transizioni e disegni progressivi.

Web Animations API, CSS e listener passivi limitano il lavoro alle scene visibili. La pagina non carica GSAP/Lenis/SplitText. Le animazioni sono presenti anche su mobile. La preferenza di sistema viene rispettata in assenza di una scelta locale; il pulsante nell’header e l’interruttore nel footer consentono di fermare o riattivare il movimento. La scelta viene conservata e sincronizzata tra le schede. Contenuti e azioni restano disponibili con movimento ridotto.

Le immagini v2 sono WebP locali. Per rigenerare la condivisione dopo aver cambiato la hero: `node scripts/make-og.mjs`. Per ottimizzare nuovi originali: `node scripts/prepare-campaign.mjs /path/hero.png /path/touch.png /path/rest.png`.

La versione pubblicata precedentemente su Vercel non viene aggiornata automaticamente da questi cambiamenti locali.
