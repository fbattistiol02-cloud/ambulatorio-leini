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
