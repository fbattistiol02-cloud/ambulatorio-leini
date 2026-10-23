# Revisione cliente — 22 ottobre 2026

## Scelte applicate

Il progetto esistente è stato revisionato, mantenendo Next.js/React, font locali e icone lineari. Dal riferimento https://guerrierovet.it/ sono stati ricavati principi di navigazione esplicita, accesso ai servizi e FAQ; nessun testo, immagine o elemento proprietario è stato copiato. La demo esistente è stata esaminata anche nel browser.

Homepage ridotta a hero, informazioni rapide, quattro categorie di prestazioni, breve équipe, quattro FAQ e contatti. Due pagine secondarie raccolgono gli approfondimenti. Nessuna fotografia stock o sintetica viene mostrata. Il simbolo autentico sostituisce le fotografie nella composizione grafica e nei profili. Nessun ritratto fittizio, recensione o rating non verificato.

Eliminati il percorso di contatto dimostrativo, WhatsApp, modulo, scene animate, librerie GSAP/Lenis e testi illustrativi superati. Le chiamate e Maps sono disponibili anche dalla barra mobile fissa; spazio dedicato nel layout e safe area evitano che copra il footer.

## Fonti e asset

- Brief testuale fornito dal cliente in questa conversazione: recapiti, servizi, professionisti e priorità.
- PDF del biglietto: logo originale estratto dal raster incorporato (seconda pagina, primo oggetto immagine), ritagliato preservando simbolo, lettering, colori e proporzioni. File completo 390×430 px, simbolo 319×279 px. Non è disponibile un originale vettoriale; la resa è adatta agli ingombri attuali, ma per stampe o ingrandimenti serve SVG/PDF vettoriale o PNG ad alta risoluzione.
- QR Instagram fornito: handle @ambu.vet.leini leggibile. Il recupero diretto del profilo non ha consentito una verifica affidabile. Nessun link inventato o attivato; configurazione predisposta.
- I nomi e i vecchi numeri presenti nelle immagini del biglietto NON aggiornano i dati più recenti del brief. Il ritaglio del logo esclude i nomi precedenti e i recapiti.

## Prima del lancio — da confermare

1. **Orari**: la mail citata nel brief indica lunedì–venerdì 9:30–12:30 e sabato 9:30–12:30; il PDF aggiunge 16:00–19:30 nei feriali. La demo usa soltanto le mattine, segnala esplicitamente il carattere provvisorio e non calcola “aperto ora”. Confermare pomeriggi, domeniche ed eventuali chiusure; nessun orario nei dati strutturati.
2. **Reperibilità**: H24 non confermata. Nessuna promessa di pronto soccorso H24 o disponibilità continuativa. L’interesse professionale di Erika Valieri per il pronto soccorso non viene presentato come servizio H24 della struttura.
3. **Legali**: ragione sociale/titolare, partita IVA, riferimenti di iscrizione all’Ordine, autorizzazioni e altri dati professionali necessari. Non inventati e non mostrati come segnaposto nella homepage.
4. **Privacy**: validare il documento preparatorio `/privacy`, il titolare, i responsabili, hosting/log, basi giuridiche, conservazione e diritti. Nessun tracker, font esterno o mappa incorporata aggiunto. Non dichiarata conformità legale.
5. **Social**: verificare destinazione e titolarità del profilo Instagram prima di impostare l’URL. Eventuale profilo personale del medico solo se fornito.
6. **Dominio**: stabilire il dominio ufficiale. Aggiornare metadataBase, robots e sitemap solo dopo approvazione della pubblicazione. Attualmente staging con `noindex,nofollow`, robots Disallow e sitemap vuota. Questi controlli non sono un sistema di autenticazione.

## Materiali mancanti

- Foto reali dei due professionisti e degli ambienti, con diritti di utilizzo.
- Foto autentiche dei pazienti con autorizzazione alla pubblicazione; nessuna sezione vuota nel sito attuale.
- Originale vettoriale del logo, se disponibile.
- Dati legali e informativa validata.

## Aggiornamento foto

I ritratti si configurano in `professionals[].photo` nel file dati. La galleria legge `patientPhotos`: ogni record richiede `src`, `alt`, `name`, `authorized`. Impostare `authorized: true` solo dopo aver conservato l’autorizzazione. I file vanno nelle rispettive cartelle media. Nessun upload pubblico o CMS necessario.

La pubblicazione ufficiale resta subordinata all’approvazione dell’utente. Non è stata eseguita alcuna distribuzione, push o modifica dell’hosting.

## Seconda direzione implementata

Il piano 2 è stato sviluppato: hero tipografica senza logo ingrandito, illustrazione decorativa originale, laparoscopia con pagina dedicata, indice compatto dei servizi, équipe editoriale e contatti ridisegnati. Tre esplorazioni desktop/mobile sono conservate in `docs/design-v2/`. Il nuovo brief fotografico è in `docs/BRIEF_FOTOGRAFICO.md`. Verifiche e limiti in `docs/QA_PLAN2.md`. Le conferme pre-lancio sopra elencate restano valide.

## Versione 3

Nuova scena illustrata 3D con cane e gatto (non pazienti reali), palette blu/lime, movimento breve e homepage ridotta a quattro momenti. Testo ridotto del 38,4% rispetto al Piano 2, misurato sull’HTML con FAQ. I dati verificati restano invariati. Report in `docs/QA_PLAN3.md`; conferme pre-lancio precedenti ancora valide.

## Stato attuale — revisione visiva del 23 ottobre 2026

Questa sezione supera le descrizioni storiche delle direzioni precedenti. La demo ha sette pagine, segnaposto per undici soggetti autentici, apertura con ingresso/esterno, palette bianco caldo/blu/blu profondo senza lime e due font locali. La homepage evidenzia attività dal 2009, persone e competenze; tutti i servizi rimangono nelle pagine complete. Pubblicazione della demo tecnica su Vercel già approvata esplicitamente dall’utente. Restano da confermare i materiali e i dati per il sito ufficiale indicati sopra; nessuna fotografia reale è stata ancora fornita.
