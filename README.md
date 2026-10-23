# Ambulatorio Veterinario Leinì

Demo multipagina del 22 ottobre 2026, basata sul brief del cliente. Next.js 16.4.1, React 19, CSS e font locali. Dominio tecnico: https://ambulatorio-leini.vercel.app. La demo mantiene noindex/nofollow e non sostituisce il sito ufficiale della clinica.

## Pagine

- `/`: presentazione, composizione fotografica, prestazioni, medici e contatti rapidi.
- `/ambulatorio`: struttura, ambienti, attività e professionisti.
- `/prestazioni`: tutte le prestazioni; collaborazioni esterne separate.
- `/equipe`: profili completi di Davide Boasso ed Erika Valieri.
- `/chirurgia-laparoscopica`: approfondimento sulla prestazione e contatto.
- `/contatti`: telefoni, email, indirizzo, orari provvisori, Maps e FAQ.
- `/privacy`: note della demo e dati ancora da completare per il sito ufficiale.

## Anteprima locale

Da qualsiasi cartella del Terminale:

```sh
cd /Users/utente/CODING/ambulatorio-leini
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3103
```

Aprire http://127.0.0.1:3103/ e lasciare il Terminale aperto. Se l’anteprima è già avviata, aprire direttamente l’URL. Per la versione ottimizzata, eseguire `npm run build`, poi `npm run start -- --hostname 127.0.0.1 --port 3103`.

## Aggiornamenti

Dati, recapiti, orari, servizi, medici e FAQ: `src/content/site.ts`. Undici soggetti fotografici configurati in `src/content/media.ts`: inserire il percorso della foto autentica e `authorized: true`. Tutti mostrano un segnaposto esplicito finché non è disponibile la fotografia. Foto dei pazienti facoltative in `patientPhotos`, solo se autorizzate; la galleria resta assente quando vuota. Dettagli in `docs/BRIEF_FOTOGRAFICO.md`.

Componenti attivi in `src/components/clinic/`, stile unico in `src/app/globals.css`. Movimento circoscritto in `MotionScene.tsx`, con supporto alla preferenza di movimento ridotto. Nessuna dipendenza di animazione esterna. Due font locali: Hanken Grotesk e Fraunces italic. Nessun modulo di prenotazione: appuntamenti esclusivamente telefonici, email per informazioni e ricette.

Logo estratto dal PDF del cliente, senza ridisegno, in `public/media/brand/`. Rigenerazione favicon e anteprima social: `node scripts/make-og.mjs`. Hero “Veterinario a Leinì.”, foto ingresso/esterno, palette blu e azzurro chiaro. Gli animali generati e le precedenti direzioni visive sono archiviati e non utilizzati nelle pagine attive.

Instagram inattivo fino alla verifica dell’URL. Orari provvisori segnalati; fascia pomeridiana da confermare. Dati legali e fotografie da completare per il sito ufficiale. Robots blocca i crawler, sitemap vuota finché non viene approvato il lancio sul dominio ufficiale.

## Verifiche e pubblicazione

```sh
npm run lint
node scripts/contrast.mjs
npm run build
```

Checklist aggiornata durante i lavori in `IMPLEMENTATION_PLAN3.MD`; QA e limiti in `docs/QA_PLAN3.md`. Registro pubblicazione in `docs/DEPLOY_VERCEL.md`. Il deploy usa i sorgenti locali: nessun push Git effettuato.

## Revisione visiva del 23 ottobre

CSS ricostruito, accenti tipografici editoriali, indirizzo integrato alla hero, servizi compatti e approfondimento su fondo blu profondo. Profili individuali affiancati nella home mobile, alternati nella pagina Équipe; galleria ambienti con inquadrature diverse. La pagina attiva è segnalata nella navigazione. In homepage recapiti sintetici; orari completi e FAQ sono in Contatti. Nessun “+” decorativo negli elenchi dei servizi. Checklist e QA aggiornati durante il lavoro.

## La visita comincia da qui

Il percorso fotografico interattivo ha quattro tappe selezionabili; l’atlante dei medici collega sei aree di interesse documentate ai rispettivi professionisti. Dati in `src/content/experience.ts`, componenti `VisitExperience` ed `ExpertiseAtlas`, stili in `SignatureExperience.module.css`. Il motivo SVG `ClinicTrace` riprende i quattro ovali del simbolo autentico senza modificare il logo. Dettagli e associazioni in `docs/IDENTITA_INTERATTIVA.md`.

### Revisione editoriale — 23 ottobre 2026
La homepage usa `EditorialHome.tsx`, `Editorial.module.css`, il nuovo `Hero.tsx` e le illustrazioni originali in `MedicalDrawing.tsx`. Il vecchio tour e il selettore delle competenze non vengono più renderizzati. `editorial.css` coordina le pagine interne. Fotografie: registro centralizzato `src/content/media.ts`; inserire solo asset autentici autorizzati. Report: `docs/QA_EDITORIALE.md`.
