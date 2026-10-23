# Revisione editoriale — 23 ottobre 2026

Implementati nuova apertura, disegni SVG originali per laparoscopia/visite/laboratorio/day hospital, équipe senza selettore, FAQ compatte e pagine interne coordinate. Rimangono sette pagine. Fotografie autentiche ancora da ricevere; tutti i segnaposto sono espliciti.

## Verifiche
- Build di produzione, TypeScript e lint superati.
- 28 combinazioni pagina/viewport: 7 pagine a 375, 390, 768 e 1440 px; nessun overflow orizzontale o titolo/testo oltre il viewport.
- Un solo H1 per pagina; metadati e noindex/nofollow presenti.
- Tutti i collegamenti interni e frammenti, telefoni, email e destinazione Maps verificati via HTTP.
- Menu mobile: apertura, Escape, ritorno del focus al comando. FAQ aperta con Enter e risposta corretta.
- Nessun errore o warning console rilevato.
- Contrasti della palette verificati con lo script; immagini e asset HTTP 200.
- Corretti durante la verifica: sovrapposizione della didascalia dell’ingresso, titolo mobile senza separazione e spazio nella FAQ.

## Limiti
Nessuna fotografia reale disponibile per verificare i tagli definitivi. Lighthouse, screen reader reale, dispositivo fisico e preferenza di movimento a livello sistema non testati. Riduzione movimento predisposta in CSS e nel componente di animazione. Il riferimento estetico non costituisce una promessa di qualità soggettiva.

Evidenze: `docs/screenshots/editorial/qa.json` e schermate nella stessa cartella.

## Pubblicazione editoriale completata
- URL: https://ambulatorio-leini.vercel.app/?revision=editorial
- Deployment: dpl_8Z1YvpNzgzaCJqWbA5uMA6dnwKUj
- Target: production; stato READY; Next.js 16.4.1.
- Sorgenti locali con modifiche non committate; nessun nuovo commit/push.
- Verifica pubblica: pagine e asset HTTP 200 senza credenziali, nuova homepage presente, console senza errori.
