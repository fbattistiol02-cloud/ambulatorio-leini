# Verifica dell’identità interattiva — 23 ottobre 2026

## Controlli effettuati

- Build Next.js, TypeScript e lint superati.
- 12 coppie di colori per testi con rapporto minimo 5,43; due coppie per i bordi dei controlli con rapporto minimo 3,77, superiore alla soglia 3:1 per elementi grafici.
- 40 stati interattivi: quattro tappe e sei selezioni delle competenze, ciascuno a 375, 390, 768 e 1440 px. Nessun overflow o sovrapposizione delle didascalie.
- Associazioni di tutte le sei aree controllate alle quattro larghezze: Medicina interna → entrambi; Laparoscopia, Tessuti molli e Oftalmologia → Boasso; Dermatologia e Citologia → Valieri. Collegamenti pertinenti presenti.
- 24 controlli sulle altre sei pagine alle quattro larghezze: nessun overflow, un H1 per pagina.
- Percorso: avanzamento, selezione diretta, ritorno, frecce sinistra/destra, Home/End e disabilitazione di Indietro all’ingresso. Focus verificato; corretta la perdita di focus quando Indietro diventa disabilitato.
- Aree di interesse: selezione singola con radio button, frecce in entrambe le direzioni, Home/End, focus sincronizzato. Riepilogo e collegamenti cambiano insieme alla selezione.
- Annunci brevi predisposti tramite role=status; etichette e relazioni ARIA presenti nell’albero accessibile. Nessuna prova con lettore di schermo fisico.
- Nessun errore o warning console durante i controlli.
- Altezza mobile del percorso stabilizzata durante QA: 525 px a 375 e 529 px a 390 per tutte le tappe. Riepilogo dei medici stabile per tutte le selezioni. Riservata altezza anche all’intervallo tablet dopo un controllo aggiuntivo a 641 px.

## Limiti e materiali

Fotografie reali non disponibili: la demo mostra segnaposto espliciti. Il percorso non descrive la planimetria. Nessun dato clinico aggiunto oltre al brief, nessuna prenotazione automatica o raccolta dati. Nessuna nuova dipendenza. Il movimento ridotto è gestito in CSS; la preferenza del sistema operativo non è stata modificata per la prova. Lighthouse e touch fisico non verificati.

Demo non indicizzabile; dati legali e orari restano da confermare per il sito ufficiale. La pubblicazione della demo tecnica è già stata approvata dall’utente.

Verifica conclusiva: focus sul primo tab confermato dopo il ritorno all’ingresso. Il percorso mantiene altezza costante nelle quattro tappe a 375, 390, 641, 768 e 1440 px; immagini contenute nella propria colonna in tutti gli stati. Tutte le pagine HTTP 200, link e nuove ancore /#percorso e /#competenze validi, recapiti e noindex corretti. Evidenze e schermate in docs/screenshots/signature/.

Pubblicazione confermata su https://ambulatorio-leini.vercel.app, deploy dpl_C5TspEaRqdUpwmDqKRYQjTtd2b2q READY. Verifica pubblica senza autenticazione: sette pagine e asset HTTP 200, collegamenti corretti, quattro tab e sei radio presenti. Interazioni Accoglienza e Dermatologia provate anche sul dominio pubblico, senza errori console.
