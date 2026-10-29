# Fotografie per la nuova direzione editoriale

Ritratti coordinati dei due medici: stessa luce naturale morbida, sfondo reale ordinato, abbigliamento professionale; inquadrature verticali e orizzontali con margine per tagli responsive. Colori naturali, senza filtri marcati.

Ambienti: ingresso riconoscibile, sala visita, dettagli reali degli strumenti e dell’accoglienza. Escludere documenti, monitor con dati personali e persone non autorizzate. Non mettere in scena procedure cliniche inesatte.

Pazienti: immagini autentiche con autorizzazione documentata alla pubblicazione. Nessun nome completo del proprietario o dato clinico nella didascalia. Selezione piccola e coerente.

Consegnare originali ad alta risoluzione e indicazioni su autore, diritti e autorizzazioni. Aggiungere ritratti in `professionals[].photo`, fotografie autorizzate in `patientPhotos`, con testo alternativo descrittivo. Cartelle: `public/media/equipe/`, `ambulatorio/`, `pazienti/`. La galleria non viene mostrata senza fotografie con `authorized: true`.

La nuova composizione funziona già senza fotografie. Il disegno di cane e gatto è un’illustrazione decorativa originale, non un paziente né un sostituto del logo. L’illustrazione tecnica della laparoscopia è stata omessa: senza una revisione medica aggiungerebbe un dettaglio clinico non necessario.

## Versione 3

La hero impiega un’illustrazione 3D generata e dichiarata, non una foto dell’ambulatorio. Non sostituire il logo originale con questo asset. Per foto reali dei medici usare `professionals[].photo`, mantenendo diritti e autorizzazioni; la componente di galleria e i dati `patientPhotos` sono conservati per eventuale inserimento autorizzato nell’area équipe. Evitare di allungare nuovamente la homepage con una sezione fotografica separata.

## Revisione multipagina del 22 ottobre 2026

Configurazione unica: `src/content/media.ts`. Per ogni soggetto inserire il percorso locale `src` (preferibilmente file in `public/media/clinic/`) e impostare `authorized: true` dopo aver ricevuto la fotografia approvata. Il componente PhotoSlot usa Next Image, dimensioni responsive, spazio riservato e caricamento differito sotto la prima schermata. Nessuna foto autentica è stata ancora ricevuta.

| Chiave | Soggetto richiesto | Posizionamento |
| --- | --- | --- |
| exterior | Ingresso o esterno | Hero homepage, Contatti |
| reception | Accoglienza | Homepage, Ambulatorio |
| visit | Sala visita o attività autorizzata | Homepage, Ambulatorio, Prestazioni |
| team | Entrambi i medici insieme | Homepage, Ambulatorio |
| boasso | Ritratto Dott. Boasso | Équipe |
| valieri | Ritratto Dott.ssa Valieri | Équipe |
| laboratory | Laboratorio interno | Ambulatorio, Prestazioni |
| imaging | Radiologia o ecografia | Ambulatorio, Prestazioni |
| surgery | Ambiente o strumentazione chirurgica | Prestazioni, Laparoscopia |
| laparoscopy | Strumentazione laparoscopica | Prestazioni, Laparoscopia |
| dayHospital | Ambiente per terapie giornaliere | Ambulatorio, Laparoscopia |

Il precedente campo `campaign.hero.exteriorImage` e le foto nei profili restano compatibili; preferire la nuova configurazione centralizzata. Inserire soltanto foto autorizzate anche in quei campi. I segnaposto descrivono cosa fotografare e non simulano ambienti reali.

## Revisione V2 (29 ottobre 2026): segnaposto e flusso di consegna

I riquadri "La foto … arriverà qui" sono segnaposto progettati, colorati per area e dichiarati: non simulano fotografie reali.

Flusso: 1) il dottore invia le foto via WhatsApp (meglio in alta qualità); 2) si salvano fuori dal repository; 3) `node scripts/optimize-images.mjs`; 4) si copiano in `public/media/…`; 5) si compila `src/content/media.ts` (`src`, `alt`, `authorized: true` solo dopo consenso); 6) per i pazienti si aggiunge una voce a `patientPhotos` in `src/content/site.ts`.

Scatti da chiedere: ingresso/esterno (orizzontale), sala visita, laboratorio, radiologico/ecografo, day hospital, ritratto del Dott. Boasso, ritratto della Dott.ssa Valieri (verticali, luce naturale), foto dell'équipe, 4–6 foto curiose di pazienti con liberatoria dei proprietari. Nessun nome completo né dato clinico nelle didascalie.

Video laparoscopia: solo con sottotitoli italiani; impostare `laparoscopyVideo` in `src/content/media.ts` (`src`, `captions`, `poster`, `authorized`).
