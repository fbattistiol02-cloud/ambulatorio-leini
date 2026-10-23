# Implementation Plan 2 — Ambulatorio Veterinario Leinì

Data: 22 ottobre 2026  
Stato: implementazione completata per revisione; verifiche eseguite e limiti documentati.

## 1. Obiettivo e mandato

Portare il sito esistente a una qualità visiva distintiva attraverso una direzione artistica editoriale, contemporanea, luminosa e umana. La qualità deve emergere da composizione, gerarchie, tipografia, precisione delle interazioni e chiarezza delle informazioni.

Il medico richiede una homepage breve, poche informazioni iniziali e approfondimenti facilmente raggiungibili. Il visitatore deve riconoscere subito l’ambulatorio, la località, le prestazioni e il modo per chiamare. La chirurgia laparoscopica è una priorità esplicita.

Questo documento recepisce tutte le idee approvate nel brainstorming. La successiva richiesta dell’utente ha autorizzato l’implementazione. Checklist e registro sono stati aggiornati durante i passaggi di fase.

## 2. Base da preservare e problemi da risolvere

Mantenere Next.js/React, font locali se adatti alla nuova direzione, dati centralizzati, recapiti verificati, pagine statiche, FAQ native e accessibilità. Conservare le modifiche già presenti nel repository: non ripristinare la vecchia demo.

Superare i limiti della revisione attuale:

- Grande logo nella hero usato come riempitivo.
- Quattro schede uniformi dei servizi, con gerarchia troppo prevedibile.
- Laparoscopia ridotta a una scheda colorata.
- Équipe presentata soprattutto come elenco di nomi.
- Riquadri con il logo ripetuto in sostituzione dei ritratti.
- Composizione e tipografia ancora poco caratterizzanti.

Baseline indicativa già documentata: homepage circa 2.394 px a 1440 px, contro circa 7.951 px della demo precedente. La nuova direzione deve mantenere la sintesi raggiunta; eventuali aumenti di lunghezza devono avere una motivazione concreta.

## 3. Direzione artistica e prototipi

### Tre composizioni della prima schermata

Prima di estendere il design, realizzare tre proposte visive con identici contenuti e azioni:

1. **Editoriale:** gerarchia tipografica forte, asimmetria controllata, allineamenti precisi e spazio ben dosato. Direzione raccomandata.
2. **Calda:** forme più morbide, azzurri e accento caldo discreto, conservando autorevolezza e leggibilità.
3. **Precisione clinica:** griglia rigorosa, blu più intenso, dettagli grafici essenziali e organizzazione delle informazioni particolarmente netta.

Confrontarle su riconoscibilità, chiarezza immediata, personalità, leggibilità mobile, brevità e compatibilità con le future fotografie. Documentare la scelta. Se non emergono preferenze aggiuntive, sviluppare la direzione editoriale raccomandata senza introdurre un ulteriore obbligo di approvazione.

### Sistema visivo

Il logo autentico resta una firma riconoscibile nell’header. Derivare dai suoi due animali, dai due colori e dalle forme morbide un linguaggio coerente: coppie di campiture, curve controllate e piccoli dettagli. Non ridisegnare il marchio né ripeterlo come riempitivo.

Palette: blu intenso, azzurro minerale, bianco prevalente e accento caldo limitato. Verificare i contrasti degli stati normali, hover e focus. Evitare grandi superfici scure e gradienti invadenti.

Tipografia: sans serif con personalità, titoli compatti, ottima leggibilità e numeri telefonici evidenti. Rivalutare e ridurre il corsivo attuale. Riutilizzare i font locali se convincenti; eventuali alternative richiedono licenza e caricamento locale verificati. Definire scale responsive, larghezze di lettura, spaziature, bordi e raggi coerenti.

## 4. Architettura e contenuti

Percorso homepage:

**Identità e chiamata → Laparoscopia → Prestazioni → Équipe → FAQ e contatti.**

Rotte previste:

| Percorso | Funzione |
| --- | --- |
| `/` | Presentazione breve e accesso immediato ai contatti |
| `/prestazioni` | Prestazioni complete, organizzate per necessità del visitatore |
| `/chirurgia-laparoscopica` | Approfondimento dedicato alla prestazione distintiva |
| `/equipe` | Profili e biografie dei due veterinari |
| `/#contatti` | Recapiti, indirizzo, orari e indicazioni |
| `/privacy` | Documento preparatorio da validare prima del lancio |

Preservare gli ancoraggi utili già esistenti, incluso `/prestazioni#laparoscopia`, inserendo un collegamento alla nuova pagina dedicata.

### Hero: identità e chiamata

Proposta di contenuto da comporre nelle tre varianti:

> Medicina e chirurgia veterinaria, a Leinì.
> Con il Dott. Davide Boasso e la Dott.ssa Erika Valieri.
> Visite per cani, gatti e animali non convenzionali.

CTA primaria: **Chiama per una visita**. Accesso immediato a indirizzo e indicazioni. Il nome completo dell’ambulatorio deve essere chiaramente riconoscibile. La composizione deve funzionare anche senza fotografie e senza un grande logo decorativo. Su smartphone le informazioni essenziali e la chiamata devono comparire presto, senza anteporre elementi ornamentali.

### Laparoscopia: sezione distintiva

Inserire subito dopo la hero una fascia breve e asimmetrica: titolo importante, poche righe e collegamento alla pagina dedicata. Eventuale piccolo disegno originale dello strumento o della tecnica, riconoscibile come illustrazione e verificato se rappresenta dettagli clinici. Ometterlo se non aggiunge chiarezza.

Contenuto iniziale verificato: disponibilità della chirurgia laparoscopica e relativo interesse professionale del Dott. Boasso. CTA: approfondimento e contatto telefonico. La pagina dedicata deve essere breve ma compiuta anche con queste sole informazioni. Non inventare procedure, specie ammesse, risultati, indicazioni o vantaggi clinici. Ampliare questi aspetti solo con testi validati dal medico.

### Prestazioni: indice compatto

Sostituire le quattro schede uniformi con un indice di tre categorie: **Visite e medicina**, **Diagnostica**, **Chirurgia e day hospital**. La laparoscopia mantiene il proprio rilievo nella sezione dedicata.

Desktop: righe ampie, separatori sottili, una descrizione breve e un dettaglio grafico coerente per categoria. Mobile: righe leggibili con aree di tocco comode e collegamenti espliciti. Le animazioni non devono nascondere informazioni o essere necessarie per capire le voci.

Nella pagina completa organizzare i servizi intorno a visita, esami, interventi e terapie giornaliere. Conservare tutte le prestazioni comunicate, senza aggiunte. Distinguere chiaramente le collaborazioni esterne: ecografie addominali, ecocardiografie, chirurgia ortopedica, endoscopie e neurologia. Non presentare gli specialisti esterni come membri fissi dell’équipe.

### Équipe: fiducia basata sui fatti

Creare due profili editoriali con nome, ruolo e competenze distintive subito leggibili:

- **Dott. Davide Boasso:** laureato nel 2007, direttore sanitario, gestisce la struttura dal gennaio 2009; medicina interna, chirurgia dei tessuti molli, laparoscopia e oftalmologia.
- **Dott.ssa Erika Valieri:** laureata nel 2015; citologia, dermatologia, pronto soccorso e medicina interna; qualifica GPCert Derm comunicata dal cliente.

Nella home usare sintesi brevi con accesso alle biografie. In assenza di fotografie far lavorare nomi, tipografia, gerarchia e spaziatura. Rimuovere i grandi riquadri con il logo ripetuto. Predisporre una composizione che accolga successivamente i ritratti autentici senza riprogettare i profili. L’interesse professionale per il pronto soccorso non equivale a un servizio H24 della struttura.

### FAQ e contatti

Mantenere massimo quattro FAQ pratiche e verificabili, con risposte brevi e accesso da tastiera. Curare tipografia, separatori e stati aperto/chiuso.

Il telefono deve avere una gerarchia visiva forte. Accostare indirizzo, orari e indicazioni in una composizione compatta. Barra mobile raffinata con **Chiama** e **Indicazioni**, safe area e spazio riservato a fondo pagina. Avvertenza sugli orari provvisori leggibile ma non dominante.

Recapiti invariati:

- Via San Francesco al Campo 24, 10040 Leinì (TO).
- `tel:+390119981469` e `tel:+393476401966`.
- `mailto:av.leini@libero.it` per informazioni e richieste di ricette.
- Appuntamenti esclusivamente telefonici.

### Fotografie e media futuri

Mantenere la galleria dei pazienti completamente nascosta finché non sono disponibili immagini autentiche autorizzate. Quando presenti, usarle come piccola selezione editoriale, senza trasformare la homepage in una galleria lunga.

Preparare un breve brief fotografico per professionisti e ambienti: luce coerente, colori naturali, tagli desktop/mobile, ritratti coordinati, ingressi e dettagli reali dell’ambulatorio. Documentare diritti e autorizzazioni. Nessuna fotografia sintetica presentata come reale. Richiedere il logo vettoriale originale se disponibile, senza farne una condizione per proseguire.

## 5. Interazioni e qualità tecnica

- Menu mobile con apertura breve, chiusura alla selezione ed Escape, gestione corretta del focus e utilizzo intuitivo.
- Link con movimento minimo della freccia e cambio cromatico discreto.
- Accordion compatti; animazione facoltativa e mai necessaria per accedere al contenuto.
- Coerenza tra homepage e pagine di approfondimento: stesso sistema di titoli, navigazione, contatti e ritorno.
- Nessuna coreografia lunga, scroll hijacking o attesa artificiale.
- Rispettare `prefers-reduced-motion`; contenuti subito leggibili e layout stabile durante il caricamento.
- Immagini dimensionate correttamente, caricamento appropriato e font performanti. Nessuna nuova libreria pesante per effetti ottenibili con CSS.
- Dati e contenuti aggiornabili in `src/content/site.ts`; componenti condivisi in `src/components/clinic/`.
- Metadata pertinenti per ogni pagina, favicon e anteprima social coerenti con l’identità. Structured data soltanto con fatti verificati.
- Conservare `noindex,nofollow`, blocco crawler e sitemap di staging; non attivare indicizzazione automatica della nuova pagina.
- Prima di modificare codice Next.js leggere le guide pertinenti in `node_modules/next/dist/docs/`, secondo `AGENTS.md`.

## 6. Vincoli e conferme prima del lancio

Gli orari mattutini della mail restano provvisori: lunedì–venerdì e sabato 9:30–12:30. La fascia 16:00–19:30 del biglietto richiede conferma. Nessun indicatore “aperto ora” né orario non confermato nei dati strutturati.

Nessuna promessa di reperibilità o pronto soccorso H24. Instagram `@ambu.vet.leini`: attivare il link solo dopo verifica della destinazione. Profilo personale del medico solo se fornito.

Privacy, dati fiscali, riferimenti professionali e autorizzativi devono essere completati e validati. Nessun tracker, mappa incorporata o raccolta dati aggiunto. Nessuna dichiarazione di conformità legale non verificata.

Nessun blog, shop, chatbot, account, booking, dashboard o CMS complesso. Nessuna pubblicazione ufficiale in produzione senza approvazione dell’utente. Le informazioni mancanti devono essere registrate nei documenti di revisione, senza segnaposto nella homepage.

## 7. Checklist operativa da aggiornare durante la build

### Regole di tracciamento

- `[ ]` = da eseguire; `[x]` = completato e verificato.
- Segnalare l’attività corrente nel campo “In corso”. Per un blocco usare la nota `BLOCCATO: motivo / dato necessario`, lasciando la casella aperta.
- Aggiornare il piano all’inizio di ogni fase, alla chiusura di ogni gruppo di attività e quando emerge un problema o cambia una decisione.
- Per ogni fase completata registrare file o artefatti modificati, verifica effettuata ed eventuali limiti nel registro avanzamento.
- Non segnare come completati test non eseguiti, contenuti non validati o materiali soltanto predisposti. Le verifiche della precedente revisione non sostituiscono quelle della nuova build.

**In corso:** Revisione pronta: implementazione e verifiche concluse.  
**Blocchi:** fotografie e conferme del lancio; nessun blocco per la build.

### Fase 0 — Preparazione

- [x] Raccogliere nel piano tutte le idee approvate.
- [x] Includere vincoli, conferme, verifiche e regole di aggiornamento durante il lavoro.
- [x] Rileggere brief e documenti cliente prima di iniziare la build.
- [x] Verificare lo stato Git e preservare tutte le modifiche già presenti.
- [x] Leggere le guide Next.js pertinenti.
- [x] Rilevare screenshot e misure della versione iniziale alle larghezze di confronto.

### Fase 1 — Direzione artistica

- [x] Produrre le tre composizioni della prima schermata con contenuti identici.
- [x] Confrontare le proposte anche su mobile.
- [x] Registrare direzione scelta e motivazioni.
- [x] Definire palette, contrasti, tipografia, spaziature e componenti base.
- [x] Definire uso del logo e dettagli grafici derivati dall’identità.

### Fase 2 — Homepage e navigazione

- [x] Ridisegnare header e firma del marchio.
- [x] Realizzare la hero tipografica con identità, località e CTA subito leggibili.
- [x] Rendere indirizzo e indicazioni facilmente raggiungibili.
- [x] Eliminare il grande logo decorativo della hero.
- [x] Introdurre la fascia distintiva della laparoscopia.
- [x] Sostituire le quattro card con l’indice compatto delle prestazioni.
- [x] Ridisegnare il teaser équipe con ruoli e competenze distintive.
- [x] Rifinire FAQ e composizione dei contatti.
- [x] Rifinire footer e barra mobile con safe area.
- [x] Verificare che la homepage mantenga la brevità richiesta.

### Fase 3 — Approfondimenti e contenuti

- [x] Creare `/chirurgia-laparoscopica` con soli contenuti verificati.
- [x] Conservare l’ancora esistente e collegarla alla nuova pagina.
- [x] Riorganizzare `/prestazioni` per visita, esami, interventi e terapie.
- [x] Verificare completezza delle prestazioni e distinzione dei collaboratori esterni.
- [x] Ridisegnare `/equipe` con profili editoriali e biografie accurate.
- [x] Rimuovere i riquadri con il logo ripetuto e predisporre l’inserimento dei ritratti.
- [x] Centralizzare i contenuti modificabili e controllare tutti i recapiti.
- [x] Aggiornare metadata e collegamenti della nuova architettura mantenendo lo staging non indicizzabile.

### Fase 4 — Media e interazioni

- [x] Preparare il brief fotografico per medici, ambienti e pazienti.
- [x] Verificare che la galleria sia assente senza foto autorizzate.
- [x] Documentare come inserire foto, didascalie e autorizzazioni.
- [x] Valutare l’illustrazione della laparoscopia e realizzarla solo se utile e accurata.
- [x] Rifinire menu mobile, chiusura, focus e tastiera.
- [x] Applicare microinterazioni coerenti a link e accordion.
- [x] Verificare comportamento con movimento ridotto e contenuti essenziali senza JavaScript.
- [x] Controllare stabilità del layout, caricamento immagini e font.

### Fase 5 — Verifica e consegna

- [x] Eseguire lint e build con TypeScript.
- [x] Verificare homepage e pagine secondarie a 375, 390, 768 e 1440 px.
- [x] Ispezionare screenshot desktop e mobile, correggendo le imperfezioni osservate.
- [x] Controllare overflow, testi tagliati, menu, barra fissa e immagini.
- [x] Verificare tastiera, focus visibile, FAQ e contrasti.
- [x] Verificare rotte, frammenti, telefono, email e Maps senza effettuare chiamate o invii.
- [x] Controllare console, richieste fallite e asset mancanti.
- [x] Verificare metadata, structured data, robots e sitemap di staging.
- [ ] Eseguire un audit Lighthouse se disponibile; registrare condizioni, risultati e limiti senza inventare punteggi.
- [x] Confrontare lunghezza e chiarezza della homepage con la baseline.
- [x] Aggiornare README, note cliente e rapporto QA con gli esiti effettivi.
- [x] Salvare screenshot finali e fornire istruzioni per l’anteprima.
- [x] Consegnare la revisione senza pubblicare in produzione.

### Dipendenze del lancio — non bloccano la progettazione

- [ ] Confermare gli orari, inclusa la fascia pomeridiana.
- [ ] Ricevere e autorizzare eventuali fotografie da pubblicare.
- [ ] Verificare il link Instagram prima di attivarlo.
- [ ] Ottenere dati legali e informativa privacy validata.
- [ ] Definire il dominio ufficiale e la configurazione finale dell’indicizzazione.
- [ ] Ottenere l’approvazione esplicita alla pubblicazione in produzione.

## 8. Criteri di accettazione

La nuova versione è pronta per la revisione cliente quando:

1. La composizione ha una personalità riconoscibile e funziona senza fotografie o riempitivi.
2. Nome, località, ambito delle prestazioni e chiamata sono immediatamente comprensibili anche su smartphone.
3. La laparoscopia ha una presenza autonoma e un approfondimento dedicato.
4. Prestazioni ed équipe valorizzano le informazioni disponibili con testi brevi e accurati.
5. Nessuna sezione vuota, immagine fittizia, promessa clinica o servizio non confermato è pubblicato.
6. Navigazione, contatti e FAQ funzionano e sono accessibili; le microinterazioni restano sobrie.
7. Build, lint, controlli responsive e verifiche principali sono completati e documentati.
8. Il cliente può valutare una proposta completa, mentre le conferme necessarie al lancio sono raccolte separatamente.

## 9. Registro avanzamento

| Data | Fase / stato | Lavoro e decisioni | Evidenza / verifica | Prossimo passo |
| --- | --- | --- | --- | --- |
| 22/10/2026 | Piano pronto | Recepite tutte le proposte approvate; definite fasi, checklist e vincoli | Creato `IMPLEMENTATION_PLAN2.MD`; nuova implementazione non avviata | Alla partenza della build: preparazione e tre composizioni visive |

Aggiungere una riga a ogni passaggio di fase o decisione significativa. Mantenere aggiornati anche “In corso”, “Prossima attività” e le relative caselle.

- Aggiornamento in corso: Fase 1: confronto delle tre composizioni.

- Aggiornamento in corso: Fase 2: homepage editoriale e gerarchie.

- Aggiornamento in corso: Fase 3: approfondimenti e profili editoriali.

- Aggiornamento in corso: Fase 4: rifiniture e avvio verifica.

- Aggiornamento in corso: Fase 5: verifiche della build e responsive.

- Aggiornamento in corso: Fase 5: corretto accordion mobile, verifica interazioni.

- Aggiornamento in corso: Fase 5: verifiche superate, documentazione e screenshot.

- Aggiornamento in corso: Revisione pronta: implementazione e verifiche concluse.

## Chiusura della revisione

| Fase | Evidenza |
| --- | --- |
| Preparazione | Stato Git e documenti esaminati; preservato il lavoro precedente |
| Direzione | Sei studi SVG/PNG e confronto in `docs/design-v2/SCELTA.md` |
| Homepage | Nuova hero, illustrazione originale, fascia laparoscopia, indice servizi e profili informativi |
| Approfondimenti | Nuova rotta laparoscopia; équipe senza riquadri fotografici sostitutivi; ancore conservate |
| Verifica | Build e lint finali superati; 5 pagine × 4 larghezze; smoke HTTP e controlli tastiera |
| Consegna | README, brief fotografico, `docs/QA_PLAN2.md` e screenshot finali aggiornati |

Lighthouse: comando non disponibile, audit non eseguito; la relativa casella resta aperta. Reduced motion e funzionamento senza JS verificati attraverso CSS e HTML statico; nessuna emulazione della preferenza OS o disabilitazione JS nel browser. Foto, Instagram, orari e legali rimangono conferme di lancio. Nessuna pubblicazione effettuata.
