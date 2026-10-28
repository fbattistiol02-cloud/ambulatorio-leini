# Revisione del cliente — 28 ottobre 2026

Obiettivo: aggiornare il sito esistente mantenendo la direzione visiva approvata. Nessun CMS, pannello, prenotazione online o servizio a pagamento.

## Checklist di lavoro
- [x] Analizzare codice, componenti e asset esistenti; leggere le guide Next pertinenti.
- [x] Verificare CAP 10040 sul sito istituzionale del Comune: https://www.comune.leini.to.it/.
- [x] Centralizzare orari confermati, contatti, descrizioni e ordine delle quattro prestazioni (punti 2–10).
- [x] Aggiornare biografie, formazione e interessi; rendere équipe estensibile (12–14).
- [x] Rendere intestazione leggibile, informazioni immediate e palette coordinata (1, 4, 19).
- [x] Aggiornare homepage sintetica, collaborazioni esterne e sette FAQ (11, 15, 21).
- [x] Mantenere approfondimento laparoscopia e predisporre video autorizzati (9).
- [x] Predisporre galleria responsive con ingrandimento, nascosta senza foto autorizzate (16–17).
- [x] Verificare Instagram; lasciare disattivati i profili non confermati (18).
- [x] Aggiornare SEO, dati strutturati e accessibilità (20).
- [x] Verificare compilazione, lint, contenuti e collegamenti.
- [x] Verificare desktop, smartphone, tastiera e galleria.
- [x] Preparare rapporto finale con materiali mancanti e limiti; verificare assenza CMS (22–23).

## Regole di pubblicazione
La produzione non viene modificata prima delle verifiche finali. Le fotografie cliniche e dei pazienti devono essere autentiche e autorizzate; non sono presenti foto approvate nel catalogo attuale. Il marchio originale viene mantenuto. La demo resta non indicizzabile finché non sono completati i dati per il lancio definitivo.

## Riscontri durante il lavoro
- Instagram ufficiale verificato nel browser il 28 ottobre: titolo «Ambu.Vet.Leini (@ambu.vet.leini)», corrispondente al nome nel QR fornito. Attivato solo il collegamento, senza incorporare contenuti o tracker. Profilo personale ancora disattivato.
- Ripristinato il binario SWC ufficiale 16.4.1 mancante da node_modules; nessuna dipendenza o versione modificata.

- Prima verifica responsive: 7 pagine × 4 larghezze (375, 390, 768, 1440 px), nessun overflow e un solo H1 per pagina. Menu e FAQ utilizzabili da tastiera. Galleria provata con loghi come fixture locali: apertura, cambio immagine, didascalia facoltativa, Escape, ritorno del focus e ripristino scroll corretti. Route temporanea rimossa prima della build finale.

- Build finale, TypeScript, lint, verifica HTML e 26 controlli di contrasto superati. Rapporto: docs/REVISIONE_28_OTTOBRE_2026.md.
