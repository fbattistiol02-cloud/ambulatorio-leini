# La visita comincia da qui — 23 ottobre 2026

L’identità della demo si basa su due esperienze legate ai contenuti reali della struttura e un motivo grafico ispirato al marchio, implementati senza nuove dipendenze.

## Percorso dell’ambulatorio

Quattro tappe: ingresso, accoglienza, visita, strumenti e attività. Cambiano soggetto fotografico, titolo, racconto e link pertinente. La prima foto resta l’esterno/ingresso richiesto dal cliente. Le altre immagini sono ancora segnaposto espliciti, pronti per i file autentici nel registro `src/content/media.ts`.

È un percorso editoriale, non una ricostruzione architettonica o una planimetria. Nessun autoplay, modal obbligatorio, gesto touch esclusivo o blocco dello scorrimento. Selezione diretta tramite tab, avanzamento e ritorno; frecce sinistra/destra, Home ed End. Focus e selezione sono coordinati; breve stato annunciabile. Senza JavaScript resta visibile il primo contenuto con link ai contatti; le pagine complete restano raggiungibili dal menu e dalle sezioni successive.

## Aree di interesse dei medici

Selezione singola tramite radiogroup, con click, tastiera, frecce, Home/End. Il riepilogo collega la competenza ai medici pertinenti e alla pagina di approfondimento. Il cambio aggiorna testi, collegamenti e connessioni visive, mantenendo entrambi i profili leggibili.

| Area documentata | Professionista |
| --- | --- |
| Medicina interna | Davide Boasso ed Erika Valieri |
| Chirurgia laparoscopica | Davide Boasso |
| Chirurgia dei tessuti molli | Davide Boasso |
| Oftalmologia | Davide Boasso |
| Dermatologia | Erika Valieri, GPCert Derm |
| Citologia | Erika Valieri |

Le associazioni riprendono esclusivamente il brief. Non costituiscono un sistema di diagnosi o assegnazione automatica di visite. L’interesse per il pronto soccorso resta nel profilo completo della Dott.ssa Valieri e non viene trasformato in una promessa di servizio continuativo.

## Motivo grafico

I quattro ovali si ispirano ai cuscinetti del simbolo originale fornito. Il motivo SVG viene usato nei segnaposto e nei dettagli del percorso; non sostituisce o ridisegna il logo ufficiale, che rimane il raster estratto dal PDF. Nessuna nuova fotografia o illustrazione di persone/ambienti.

## Implementazione

- Dati e associazioni: `src/content/experience.ts`.
- Percorso: `VisitExperience.tsx`.
- Medici e aree di interesse: `ExpertiseAtlas.tsx`.
- Motivo: `ClinicTrace.tsx`.
- Stili isolati: `SignatureExperience.module.css`.
- Pagine Ambulatorio ed Équipe collegate alle rispettive esperienze in homepage.
- Componenti React renderizzati inizialmente sul server, stato locale senza chiamate API o raccolta di dati. Supporto CSS alla preferenza di movimento ridotto, nessun timer di avanzamento automatico.
