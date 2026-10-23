# QA — Piano 2, 22 ottobre 2026

## Risultato

Nuova direzione editoriale realizzata: hero tipografica, disegno originale decorativo di cane e gatto, laparoscopia in evidenza e pagina dedicata, indice compatto dei servizi, profili testuali dei medici, contatti con telefono in maggiore evidenza, FAQ e microinterazioni sobrie. Nessuna fotografia fittizia o nuova promessa clinica. Dati e contenuti principali centralizzati.

Prodotti sei studi iniziali (tre direzioni, desktop e mobile) in `docs/design-v2/`. Scelta motivata in `SCELTA.md`. La checklist è stata aggiornata all’avvio e nel passaggio fra preparazione, confronto, homepage, approfondimenti e verifica.

## Verifiche eseguite

- Lint finale senza warning; build Next.js e controllo TypeScript superati. Tutte le pagine prerenderizzate.
- Contrasto delle 15 coppie testuali nello script aggiornato: tutti superiori a 4,5:1, inclusi pesca su blu, testo attenuato e superfici chiare.
- Verificate homepage, prestazioni, équipe, laparoscopia e privacy a 375, 390, 768 e 1440 px: larghezza documento uguale alla viewport e CSS effettivamente caricato.
- Homepage: circa 3.597 px a 375; 3.604 a 390; 2.410 a 768; 2.307 a 1440. Desktop precedente circa 2.394 px. A 375, lieve aumento rispetto ai precedenti 3.537 px dovuto alla sezione autonoma sulla laparoscopia e ai profili più informativi.
- Corretto un difetto visivo trovato durante l’ispezione: FAQ inizialmente su due colonne anche a 390, ora impilate correttamente. Ridotta la dimensione del titolo nel pannello illustrativo mobile per evitare interruzioni poco leggibili.
- FAQ aperta con Invio e richiusa con Spazio. Menu chiuso con Escape con focus restituito al trigger. Nessuna nuova logica di prenotazione.
- Collegamento della fascia laparoscopia verificato dal browser fino alla nuova pagina. Tutti i link interni e gli ID dei frammenti verificati via HTML della build.
- HTTP 200, un H1 e title pertinente per ogni pagina. `noindex,nofollow` conservato ovunque; robots blocca i crawler e sitemap resta vuota.
- Tel, mailto, Maps, favicon, icona, OG e loghi verificati via HTTP; nessuna chiamata né messaggio inviato.
- Nessun warning/errore di console rilevato sulla navigazione finale. Un caricamento senza stili durante la sostituzione della build in uso è stato risolto riavviando il server prima della verifica finale.
- Contenuti principali presenti nell’HTML statico, FAQ basate su details nativi; nessun JS necessario per leggere contenuti o avviare i collegamenti. Regole reduced-motion controllate nel CSS: disattivano animazioni e transizioni. Non effettuata emulazione del sistema operativo o disabilitazione JS nel browser.

## Limiti

Lighthouse non disponibile come comando nell’ambiente: audit non eseguito, nessun punteggio dichiarato. Nessun test con screen reader o dispositivo fisico. Foto reali, verifica Instagram, orari pomeridiani, dati legali e privacy rimangono le dipendenze documentate del lancio. Nessun deploy eseguito.

La pagina sulla laparoscopia riporta soltanto disponibilità, medico di riferimento e contatto; non inventa benefici, casistiche o procedure. Un disegno tecnico è stato valutato e omesso in assenza di validazione clinica. Il disegno decorativo della hero non rappresenta pazienti reali.

Screenshot finali in `docs/screenshots/plan2/`. Negli screenshot full-page la barra fissa può apparire all’altezza della prima viewport: durante l’uso rimane sul fondo dello schermo.
