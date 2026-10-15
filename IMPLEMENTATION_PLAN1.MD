# Implementation Plan 1 — Ambulatorio Veterinario Leinì

## Stato e obiettivo

- Data: 15 ottobre 2026.
- Stato: revisione del movimento completata e verificata localmente; verifiche esterne residue indicate sotto.
- Richiesta iniziale: pianificazione senza codice. Il 15/10/2026 l’utente ha autorizzato l’implementazione completa.
- Ambito della futura costruzione: tutte le proposte del brainstorming approvato, organizzate nelle fasi e nelle checklist seguenti.
- Contesto: demo gratuita da presentare a un potenziale cliente; fotografie, video, biografia e informazioni definitive dello studio non sono disponibili.

L’obiettivo è una demo di qualità visiva molto elevata, riconoscibile e facile da usare. La presentazione deve dimostrare sia una direzione creativa su misura sia un’utilità concreta per chi vuole contattare lo studio.

I tre elementi principali sono: una prima schermata memorabile, una breve animazione narrativa riconoscibile e un percorso di contatto interattivo. Tutte le altre sezioni devono avere la stessa cura e sostenere questi elementi.

## Come utilizzare la checklist

- Spuntare una voce soltanto dopo aver realizzato e verificato il risultato descritto.
- Mantenere separate attività realizzate, verifiche concluse e dipendenze ancora aperte.
- Annotare le decisioni che cambiano il piano nel registro in fondo al documento.
- I contenuti che richiedono informazioni dello studio non bloccano la demo: applicare il trattamento dimostrativo previsto e registrarne la futura sostituzione.
- Il completamento della demo non implica la sua pubblicazione né l’attivazione di invii reali.

## 1. Direzione creativa e vincoli

### Concept

Filo narrativo: **“Il loro mondo, nelle tue mani”**. È un concept di lavoro, non un titolo obbligatorio.

La storia attraversa tre momenti: legame tra persona e animale, attenzione durante la visita, chiarezza sul prossimo passo. La promessa comunicativa proposta dovrà essere validata dal medico prima di diventare comunicazione ufficiale.

Direzione scelta: **editoriale e affettiva**, arricchita da dettagli illustrati originali e da una breve sequenza cinematografica. Le alternative discusse nel brainstorming vengono integrate in questa identità; non si prevedono tre siti o tre temi separati.

| Componente | Direzione |
| --- | --- |
| Fotografia | Ritratti ravvicinati e dettagli del rapporto persona–animale |
| Colore | Evoluzione della palette avorio, nocciola e blu notte esistente |
| Tipografia | Gerarchia editoriale, titoli espressivi e testi pratici facilmente leggibili |
| Illustrazione | Segni sottili e pochi elementi originali, coerenti tra sezioni |
| Movimento | Una scena protagonista e transizioni brevi che chiariscono le interazioni |
| Composizione | Alternanza di immagini ampie, contenuti compatti e pause visive |

### Vincoli della demo

- Nessuna biografia, qualifica, disponibilità, recensione, statistica o prestazione inventata e presentata come reale.
- Nessuna fotografia generata o di repertorio deve essere attribuita allo studio, al suo personale o ai suoi pazienti.
- Nessuna diagnosi, interpretazione di sintomi o raccomandazione clinica nel percorso interattivo.
- Nessun invio di moduli o messaggi durante la simulazione; nessun calendario con disponibilità apparentemente reali.
- Conservare il `noindex` della demo. Rendere esplicite le funzionalità simulate nei punti in cui vengono utilizzate.
- Le informazioni non confermate devono essere trattate vicino al relativo contenuto, senza affidarsi soltanto a una nota nel footer.

### Checklist

- [x] Formalizzare una breve guida visiva con palette, tipografia, composizioni, fotografie e segni illustrati.
- [x] Definire gli elementi dell’identità attuale da conservare e quelli da ridisegnare.
- [x] Definire un unico stile di icone e illustrazioni.
- [x] Verificare che tutte le sezioni seguano la stessa direzione.

## 2. Analisi iniziale e gestione dei contenuti

La base esistente comprende hero, scena della chiarezza, recensioni, servizi, visita, profilo del medico, contatti, FAQ e chiusura. Sono già presenti animazioni, preferenze di movimento e contenuti dimostrativi.

Prima dell’implementazione rilevare lo stato effettivo del progetto: i dati e le misure descritti nel README non sostituiscono nuove verifiche.

### Checklist

- [x] Rileggere `AGENTS.md` e le istruzioni applicabili.
- [x] Prima di scrivere codice, leggere le guide pertinenti in `node_modules/next/dist/docs/`, come richiesto dal repository.
- [ ] Registrare schermate e comportamento attuale su desktop e mobile come riferimento.
- [ ] Rilevare navigazione, movimento, prestazioni e accessibilità della base attuale.
- [x] Inventariare testi, contatti, orari, servizi, rating, recensioni e immagini.
- [x] Distinguere contenuti verificati, proposte editoriali e dati ancora da confermare.
- [x] Controllare coerenza di ruoli e riferimenti al personale: i testi attuali citano sia il titolare sia una veterinaria e un team.
- [x] Verificare le fonti prima di mantenere rating e sintesi delle recensioni; in assenza di riscontro, ometterli dalla demo.
- [x] Non mostrare uno stato operativo “Aperto ora” basato su orari non confermati; usare un trattamento esplicitamente indicativo.
- [x] Ridurre ripetizioni e promesse troppo generiche, mantenendo comprensibili studio, località e azione successiva.

**Criterio di completamento:** ogni informazione visibile ha una fonte o un trattamento dimostrativo definito.

## 3. Prima schermata memorabile

Riprogettare la hero con un’immagine dominante, un titolo breve e una composizione editoriale asimmetrica. L’animale e il contatto con la persona devono essere il centro emotivo. Valutare un soggetto che esca parzialmente dalla cornice, mantenendo leggibilità e ordine.

Proposta di titolo da rifinire:

> Lui si fida di te.  
> Tu meriti risposte chiare.

Inserire una frase concreta per identificare ambulatorio, località e attività confermate. Rendere immediatamente raggiungibili percorso di contatto e recapiti con il trattamento previsto per la demo.

### Checklist

- [x] Definire composizione desktop con proporzioni, ritaglio fotografico e gerarchia dei contenuti.
- [x] Definire una composizione mobile dedicata, non una semplice riduzione del desktop.
- [x] Finalizzare titolo, testo di supporto e nomi delle azioni.
- [x] Realizzare un ingresso breve: fotografia, titolo e tratto illustrato coordinati.
- [x] Tenere contenuti e azioni disponibili senza attendere la fine dell’animazione.
- [x] Verificare leggibilità del testo e qualità dei ritagli su schermi differenti.
- [x] Controllare la prima schermata con movimento ridotto e senza JavaScript.
- [x] Rimuovere dalla hero le prove sociali che non possono essere confermate.

**Criterio di completamento:** dalla prima schermata si comprendono identità, località e prossimo passo; la composizione resta riconoscibile su desktop e telefono.

## 4. Collezione fotografica e linguaggio illustrato

Preparare tre immagini coordinate, selezionate da repertorio o generate appositamente. Privilegiare luce, temperatura cromatica e tagli compatibili, come in un unico servizio fotografico.

| Immagine | Funzione | Soggetto proposto |
| --- | --- | --- |
| Apertura | Attenzione e legame | Animale vigile e curioso, eventuale mano umana |
| Percorso | Vicinanza e fiducia | Dettaglio di mano, pelo e contatto |
| Chiusura | Serenità | Animale rilassato |

### Checklist

- [x] Definire un brief comune per tutte le immagini.
- [x] Selezionare o produrre tre immagini coerenti senza simulare ambienti o personale dello studio.
- [x] Verificare qualità, anatomia, dettagli delle mani e assenza di elementi visivi incoerenti.
- [x] Preparare ritagli desktop e mobile e definire i punti focali.
- [x] Ottimizzare formati, dimensioni e caricamento delle immagini.
- [x] Preparare testi alternativi pertinenti; mantenere decorative le immagini prive di contenuto informativo.
- [x] Aggiornare crediti, provenienza e indicazione delle immagini illustrative secondo gli asset effettivamente usati.
- [x] Creare un piccolo insieme di illustrazioni coerenti per animali, percorso e interazioni.

**Criterio di completamento:** gli asset formano una collezione visivamente unitaria e sono utilizzabili senza materiale autentico dello studio.

## 5. Animazione narrativa e continuità tra sezioni

Evolvere “Dalla preoccupazione alla chiarezza” attraverso un filo sottile: da piccolo intreccio a linea distesa, poi percorso della visita e infine cornice del contatto.

La scena principale racconta tre passaggi proposti: **ti ascoltiamo → comprendiamo insieme → definiamo il prossimo passo**. Il filo accompagna il racconto senza attraversare testi o controlli in modo disturbante.

### Checklist

- [x] Disegnare lo storyboard del filo e della scena principale prima dell’implementazione.
- [x] Definire un numero limitato di transizioni riutilizzabili per titoli, pannelli e controlli.
- [x] Ridurre la durata della sezione attualmente bloccata durante lo scroll.
- [x] Progettare per mobile una sequenza verticale naturale, senza lunghi blocchi dello scorrimento.
- [x] Collegare visivamente metodo, percorso della visita e contatto.
- [x] Mantenere navigazione e collegamenti alle sezioni diretti e prevedibili.
- [x] Evitare che pulsanti importanti si spostino durante l’interazione.
- [x] Preparare uno stato statico completo per movimento ridotto e assenza di JavaScript.
- [x] Verificare scorrimento rapido, cambio di direzione, ridimensionamento e ritorno alle sezioni.

**Criterio di completamento:** il movimento sostiene una storia comprensibile e non ritarda l’accesso a informazioni o contatti.

## 6. Percorso interattivo “Prepariamo il tuo primo contatto”

Realizzare una simulazione organizzativa breve, con un riepilogo modificabile. Non richiede un account, una prenotazione reale o dati personali per essere provata.

Percorso previsto:

1. Animale: cane, gatto o altro. La scelta “altro” serve a formulare una domanda e non implica che lo studio tratti tutte le specie.
2. Motivo del contatto: prima visita, controllo o informazioni.
3. Riepilogo: messaggio composto dalle scelte, modificabile e copiabile.

Esempio:

> Buongiorno, vorrei informazioni per una prima visita per il mio gatto. Come possiamo concordare un appuntamento?

Ogni scelta aggiorna un’illustrazione discreta e rende chiaro il passo successivo. Il collegamento reale a WhatsApp resta una futura attivazione, subordinata alla conferma del canale; la demo permette anteprima e copia.

### Checklist

- [x] Progettare stati iniziali, selezioni, ritorno al passo precedente, riepilogo e riavvio.
- [x] Scrivere etichette e testi brevi, comprensibili e non clinici.
- [x] Mostrare avanzamento e selezioni effettuate.
- [x] Consentire modifica delle scelte senza perdere inutilmente il lavoro.
- [x] Consentire modifica e copia del messaggio finale, con conferma accessibile della copia.
- [x] Prevedere un’alternativa chiara se la copia negli appunti non è disponibile.
- [x] Rendere sempre raggiungibili i contatti senza obbligare a completare il percorso.
- [x] Dichiarare vicino al riepilogo che nessuna richiesta viene inviata.
- [x] Non conservare né trasmettere i contenuti inseriti durante la simulazione.
- [x] Sostituire o integrare il modulo dimostrativo esistente, evitando due percorsi concorrenti.
- [x] Verificare tutte le combinazioni previste, il ritorno indietro e il riavvio.
- [ ] Verificare tastiera, focus, lettura delle selezioni e aggiornamenti con tecnologie assistive.

**Criterio di completamento:** chi prova la demo riesce a ottenere e copiare un messaggio pertinente; non può scambiare il risultato per una richiesta inviata o una prenotazione confermata.

## 7. Servizi esplorabili e percorso della visita

### Servizi

Sostituire le grandi schede uniformi con un elenco compatto e un pannello di dettaglio su desktop. Su mobile usare sezioni espandibili leggibili e facili da toccare.

Ogni voce risponde a tre domande: di cosa si tratta, come si svolge il percorso nei limiti delle informazioni disponibili, come chiedere informazioni. Mostrare pochi esempi completi; rendere esplicito quando l’offerta è proposta e deve essere confermata.

### Visita

Evolvere “Prima, durante, dopo” in un percorso selezionabile. Cambiano testo, dettaglio illustrato e indicatore di avanzamento. L’utente mantiene il controllo della progressione.

### Checklist

- [x] Definire servizi confermati e servizi eventualmente illustrati come proposta.
- [x] Scrivere i contenuti brevi di ciascun servizio senza aggiungere capacità cliniche non verificate.
- [x] Progettare elenco e pannello desktop, con una voce iniziale utile.
- [x] Progettare e verificare le sezioni espandibili mobile.
- [x] Collegare ogni richiesta di informazioni al percorso con il contesto pertinente.
- [x] Progettare le tre fasi della visita con testi e dettagli illustrati coordinati.
- [x] Rendere selezione e progressione utilizzabili con tastiera e touch.
- [x] Mantenere disponibili i contenuti anche senza animazioni.

**Criterio di completamento:** servizi e visita sono esplorabili con pochi gesti, senza occupare spazio sproporzionato rispetto alle informazioni.

## 8. Mobile, contatti e navigazione

### Checklist

- [x] Ridisegnare il menu e la gerarchia delle azioni in funzione del nuovo percorso.
- [x] Preparare una barra inferiore compatta con azione principale e accesso ai contatti.
- [x] Evitare sovrapposizioni tra barra, contenuti, tastiera virtuale e aree di sicurezza del dispositivo.
- [x] Rendere orari e indicazioni rapidamente raggiungibili e indicarne lo stato di verifica.
- [ ] Verificare mappa, indirizzo e destinazioni dei collegamenti prima di mantenerli attivi.
- [x] Controllare tutti i collegamenti telefonici e WhatsApp già presenti, applicando un trattamento coerente ai recapiti non confermati.
- [x] Progettare eventuali pannelli con chiusura evidente, gestione corretta del focus e ritorno al controllo di apertura.
- [x] Mantenere testi leggibili, aree di tocco adeguate e azioni comprensibili senza hover.
- [x] Verificare menu e collegamenti interni in presenza dell’intestazione fissa.
- [x] Verificare telefono verticale e orizzontale, tablet e desktop.

**Criterio di completamento:** l’esperienza mobile ha la stessa cura del desktop e consente di raggiungere percorso, contatti e indicazioni senza attraversare tutta la pagina.

## 9. Demo compiuta e presentazione al cliente

Rimuovere dal percorso principale la sezione “Il tuo profilo, scritto con te”. Il profilo del medico sarà introdotto con materiali autentici. Conservare questa esigenza tra le dipendenze per la versione reale, senza lasciare una sezione visivamente incompleta.

Ordine narrativo di riferimento, da affinare durante la composizione: hero → accesso rapido al percorso → metodo → servizi → visita → contatti e indicazioni → FAQ → chiusura. Le recensioni entrano soltanto se verificabili e realmente utili al racconto.

### Checklist

- [x] Eliminare dal percorso pubblico i segnaposto che fanno percepire il sito come incompleto.
- [x] Inserire un’indicazione discreta “Concept dimostrativo” e una nota consultabile su contenuti, immagini e simulazioni.
- [x] Mantenere le indicazioni essenziali sullo stato dimostrativo anche vicino alle interazioni pertinenti.
- [x] Rivedere FAQ, chiusura e footer per allinearli al nuovo percorso.
- [x] Verificare la coerenza del tono e rimuovere ripetizioni tra sezioni.
- [x] Preparare un’immagine di anteprima del link coerente con la nuova hero.
- [x] Aggiornare titolo e descrizione di condivisione senza suggerire che il sito sia già ufficiale.
- [x] Conservare il `noindex` e verificare che non venga rimosso incidentalmente.
- [x] Preparare una scaletta dimostrativa di circa 90 secondi: apertura, scena narrativa, simulazione del contatto, versione mobile.
- [x] Provare la scaletta senza inviare messaggi o richieste reali.

**Criterio di completamento:** la demo appare completa come proposta progettuale e trasparente sul proprio stato.

## 10. Sequenza di realizzazione e dipendenze

| Fase | Attività | Dipendenze | Risultato atteso |
| --- | --- | --- | --- |
| A | Analisi e inventario dei contenuti | Avvio della futura implementazione | Base verificata e trattamento dei dati definito |
| B | Direzione creativa, testi e storyboard | A | Composizioni desktop/mobile e racconto coerenti |
| C | Fotografie e illustrazioni | B | Collezione pronta e ottimizzata |
| D | Hero, gerarchie e struttura della pagina | B, C | Impatto iniziale e navigazione definiti |
| E | Percorso di contatto, servizi e visita | B, D | Interazioni dimostrabili e complete |
| F | Scena narrativa e transizioni | D, E | Movimento integrato nei percorsi reali |
| G | Mobile, contenuti finali e condivisione | D, E, F | Esperienza coerente e presentabile |
| H | Verifiche e prova di presentazione | Tutte le precedenti | Demo pronta da mostrare |

Priorità di attenzione: hero e immagini; percorso di contatto; scena narrativa; qualità mobile; servizi e visita; rifinitura completa e presentazione. L’ordine serve a concentrare il lavoro, non a escludere parti approvate.

### Checklist delle fasi

- [ ] Fase A completata e verificata.
- [x] Fase B completata e verificata.
- [x] Fase C completata e verificata.
- [x] Fase D completata e verificata.
- [x] Fase E completata e verificata.
- [x] Fase F completata e verificata.
- [x] Fase G completata e verificata.
- [ ] Fase H completata e verificata.

## 11. Verifica finale e criteri di accettazione

### Qualità visiva

- [x] Confrontare tutte le sezioni su larghezze rappresentative, incluse 360, 390, 768, 1280 e 1440 px.
- [x] Verificare ritagli, spaziature, interruzioni dei titoli, allineamenti e continuità tra sezioni.
- [x] Verificare assenza di overflow orizzontale e contenuti tagliati.
- [x] Verificare che immagini e illustrazioni abbiano qualità e stile omogenei.

### Interazione e accessibilità

- [ ] Provare il percorso completo con mouse, tastiera e touch.
- [x] Verificare ordine del focus, focus visibile, etichette, annunci degli aggiornamenti e chiusura dei pannelli.
- [ ] Controllare contrasto, zoom al 200% e preferenze di movimento ridotto.
- [x] Verificare che contenuti essenziali e contatti restino disponibili senza JavaScript.
- [x] Controllare menu, FAQ, servizi, fasi della visita, riepilogo modificabile e copia del messaggio.
- [x] Verificare che nessuna simulazione invii dati o mostri una falsa conferma di appuntamento.
- [x] Provare Safari su iOS e Chrome su Android quando disponibili; annotare esplicitamente eventuali verifiche solo simulate.

### Prestazioni e stabilità

- [x] Eseguire lint e build previsti dal progetto e correggere gli errori pertinenti.
- [x] Verificare assenza di errori applicativi nella console durante i percorsi principali.
- [x] Controllare caricamento su rete rallentata e stabilità della composizione prima dell’arrivo delle immagini.
- [ ] Confrontare prestazioni e accessibilità con la base rilevata, usando condizioni comparabili.
- [x] Usare Lighthouse mobile ≥ 90 come obiettivo di laboratorio e documentare eventuali scostamenti, senza trattarlo come prova unica della qualità.
- [x] Controllare che animazioni e asset non provochino scatti evidenti o ritardi nelle azioni principali.
- [x] Registrare risultati, limiti delle verifiche e problemi ancora aperti.

### Pronta per la presentazione

- [x] Tutte le funzionalità previste sono complete oppure hanno un blocco documentato e visibile nel registro.
- [x] Nessun problema aperto impedisce la presentazione o rende ingannevoli i contenuti.
- [x] La demo si può presentare in circa 90 secondi, anche su telefono.
- [x] Il riepilogo finale distingue chiaramente lavoro completato, verifiche effettuate e informazioni necessarie per una versione reale.

## 12. Materiali necessari soltanto per una futura versione reale

Queste dipendenze non devono essere simulate come fatti acquisiti nella demo.

- Identità, ruolo, biografia e qualifiche del medico.
- Fotografie autentiche di professionisti e ambienti, se disponibili.
- Servizi e specie effettivamente trattati.
- Recapiti, uso di WhatsApp, orari e modalità reali di contatto.
- Eventuali recensioni con fonti controllate.
- Processo effettivo di gestione delle richieste e relative informazioni sul trattamento dei dati.
- Decisione su pubblicazione ufficiale e attivazione degli invii.

## Registro di avanzamento e decisioni

| Data | Fase | Decisione o risultato | Verifica / attività residua |
| --- | --- | --- | --- |
| 15/10/2026 | Pianificazione | Creato il piano con tutte le proposte approvate e le checklist | Nessuna implementazione iniziata; frontend invariato |


| 15/10/2026 | B–E | Direzione documentata, nuova struttura, servizi e FAQ nativi, percorso locale in tre passaggi | In corso integrazione immagini e verifica browser; checklist QA ancora aperta |

## Esito della costruzione — 15/10/2026

Tutte le funzionalità della demo sono implementate. Checklist aggiornata durante costruzione e verifiche; **le voci ancora aperte non sono state dichiarate completate**. Le fasi A e H restano formalmente aperte per la baseline iniziale non misurata e le prove su dispositivi/tecnologie assistive reali. Nessuna di queste voci nasconde una funzionalità mancante.

- Baseline: ispezione descrittiva eseguita; non sono disponibili screenshot iniziali e misure locali comparabili.
- Interazione: 9 combinazioni, copia, modifica, riavvio, contesto del servizio, menu, tastiera e focus verificati. Prove touch e lettore di schermo su hardware reale ancora da eseguire.
- Reflow: 360, 390, 768, 1280 e 1440 CSS px senza overflow. Contrasti verificati; zoom 200% non provato separatamente.
- Dati dello studio: non verificati. Recensioni rimosse; servizi e orari esplicitamente indicativi; Maps apre una ricerca e non dichiara una posizione verificata.
- Lighthouse finale: mobile 93/100/100 e desktop 100/100/100 (performance/accessibilità/buone pratiche). CLS 0 in entrambi. SEO 63 con noindex intenzionale.
- Lint, TypeScript, build e controllo del diff superati. Nessuna pubblicazione eseguita.
- Dettagli ed evidenze: [report QA](docs/QA_REPORT.md), [schermate e misure](docs/qa/), [scaletta](docs/PRESENTAZIONE.md).

| Data | Fase | Decisione o risultato | Verifica / attività residua |
| --- | --- | --- | --- |
| 15/10/2026 | C–G | Immagini originali illustrative integrate; font locali; interazioni, mobile, condivisione e animazioni completati | Foto e composizione ispezionate, 9 combinazioni provate |
| 15/10/2026 | H | Build e lint superati; audit mobile 93, desktop 100; accessibilità automatica 100 | Restano le verifiche esterne specificate nel report, senza blocchi funzionali locali |

## Revisione del movimento — feedback del 15/10/2026

La prima implementazione è risultata troppo statica. La preferenza locale di movimento ridotto era rimasta attiva dopo il QA; inoltre una regola mobile disattivava le animazioni della hero. I punteggi Lighthouse sopra descrivono la versione precedente a questa revisione.

- [x] Individuare e correggere le cause delle animazioni assenti nell’anteprima.
- [x] Hero: ingresso dei titoli per righe, ritratto con profondità, sigillo animato e cornice organica.
- [x] Aggiungere tipografia che si muove durante lo scroll e ingressi visibili delle sezioni.
- [x] Trasformare l’approccio in una scena illustrata che evolve in tre capitoli durante lo scroll.
- [x] Animare i cambi di servizio, fase della visita e passaggio del contatto.
- [x] Rendere la pausa delle animazioni raggiungibile anche dall’header.
- [x] Verificare la resa desktop e mobile, il movimento attivo e la variante ridotta.
- [x] Rieseguire lint e build; aggiornare le evidenze QA senza riutilizzare i punteggi precedenti.
- [x] Lasciare l’anteprima aperta all’inizio della pagina, con le animazioni attive.

Esito della revisione: lint e build superati; controlli responsive a 360/390/768/1280/1440 CSS px senza overflow; pausa, ripresa, persistenza e principali transizioni provate. Lighthouse finale con movimento attivo: **mobile 93/100/100, desktop 100/100/100**, CLS 0. Nuove evidenze nei file `docs/qa/motion-*` e nel report QA. Restano aperte le prove su hardware e tecnologie assistive reali già indicate nel piano.

## Priorità del contatto — chiamata diretta

Su richiesta dell’utente la telefonata diventa la CTA principale. Il modulo rimane un’alternativa per chi preferisce preparare un messaggio. Il recapito continua a provenire da `site.phone` ed è indicato come da confermare; il link `tel:` è attivo, mentre il modulo resta una simulazione locale.

- [x] Chiamata in evidenza in hero, header desktop, menu e barra mobile.
- [x] Chiamata principale anche nella sezione contatto e nella chiusura; numero cliccabile nei recapiti.
- [x] Messaggio come azione secondaria con collegamenti diretti al percorso guidato.
- [x] Allineare FAQ e note al funzionamento della chiamata e del modulo.
- [ ] Verificare gerarchia desktop/mobile, collegamenti telefonici e accesso al modulo.
- [ ] Eseguire lint e build.
