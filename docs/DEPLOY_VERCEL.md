# Deploy Vercel — 22 ottobre 2026

Progetto esistente: ambulatorio-leini (`prj_trsAAn79XdhLcE18lLR97OHMtVxK`). Team: fbattistiol02-1760s-projects. Upload dei sorgenti locali, incluse le modifiche non committate; nessun push Git effettuato.

Deploy di anteprima: `dpl_52jSJkRL5Ap6dVH6D6Jy8iJAEAzB`.

URL: https://ambulatorio-leini-5aitquy0c-fbattistiol02-1760s-projects.vercel.app

Stato finale: READY. Protetto da Vercel Authentication. Verifica autenticata HTTP 200 con CLI; controllati titolo Veterinario, segnaposto ingresso/esterno, noindex e assenza di asset animali e accento lime nell’HTML.

La connessione MCP vedeva il progetto ma non disponeva dell’accesso al team. Usata la CLI ufficiale con scope e progetto espliciti, dopo verifica del progetto e dei domini. Dominio esistente: ambulatorio-leini.vercel.app.

Il tentativo di sostituire il deploy di produzione è stato rifiutato dal controllo automatico per mancanza di autorizzazione esplicita alla sostituzione della produzione. È stata completata l’alternativa di anteprima, senza modificare la versione del dominio esistente. Per aggiornare quel dominio occorre conferma esplicita dell’utente.

`.vercelignore` aggiornato per escludere documenti interni, piani e script non necessari alla build. Nessuna protezione del progetto disabilitata; nessun segreto inserito nei sorgenti o nel documento.

## Pubblicazione multipagina completata

L’utente ha confermato esplicitamente la sostituzione della produzione, poi richiesto una revisione multipagina più ricca. Pubblicata la revisione dopo build, lint, TypeScript, contrasti e controlli responsive.

- Deploy: `dpl_AMmYnuPBjTnZf6onvmb8f6k3zDKp`, stato READY, target production.
- URL pubblico stabile: https://ambulatorio-leini.vercel.app
- URL univoco: https://ambulatorio-leini-52ngbuog4-fbattistiol02-1760s-projects.vercel.app
- Verifica finale del 23/10/2026: sette pagine HTTP 200 senza credenziali o bypass; link interni, frammenti, telefoni, email, Maps e asset corretti. Browser pubblico aperto senza login Vercel.
- Nessuna protezione del progetto disabilitata. Il dominio stabile di produzione è accessibile pubblicamente; l’URL univoco può mantenere la protezione Vercel.
- Demo ancora noindex/nofollow. Undici soggetti fotografici predisposti, fotografie reali non ricevute.
- Il primo controllo finale non era stato eseguito per esaurimento temporaneo del servizio di approvazione; ripetuto con approvazione regolare il giorno successivo, superato.

Screenshot: docs/screenshots/multipagina/pubblicato.png. Checklist multipagina completata durante il lavoro in IMPLEMENTATION_PLAN3.MD. Nessun push Git effettuato.

## Revisione visiva pubblicata — 23 ottobre 2026

Deploy `dpl_25LHtvW9xyuT9zEocXePrZgve1HY`, READY, target production. URL stabile: https://ambulatorio-leini.vercel.app. URL univoco: https://ambulatorio-leini-nqvyjmzq4-fbattistiol02-1760s-projects.vercel.app. Sorgenti locali con modifiche non committate, HEAD Git a8555142d8e079980b96831e726e3765e20681fa; nessun push Git.

Nuovo sistema visivo, tipografia, apertura, composizione delle fotografie, homepage e pagine interne. Build/lint/TypeScript e contrasti superati. Verifica finale indipendente senza autenticazione: sette pagine HTTP 200, link e ancore validi, recapiti corretti, noindex/nofollow conservati. Confermata nell’HTML la nuova hero-v4, i profili individuali e i contatti sintetici. Dominio pubblico aperto nel browser; nessuna protezione Vercel disabilitata. Screenshot in docs/screenshots/visual4/.

## Identità interattiva pubblicata — 23 ottobre 2026

Deploy `dpl_C5TspEaRqdUpwmDqKRYQjTtd2b2q`, READY, target production. URL stabile: https://ambulatorio-leini.vercel.app. URL univoco: https://ambulatorio-leini-3a1kizj6u-fbattistiol02-1760s-projects.vercel.app. Sorgenti locali, nessun push Git.

Percorso Ingresso/Accoglienza/Visita/Strumenti, selettore di sei aree di interesse e motivo ispirato al marchio. HTTP 200 pubblico senza autenticazione su sette pagine e asset; ancore e recapiti validi, noindex conservato. Confermata presenza dei quattro tab e dei sei controlli nell’HTML. Nel browser pubblico provati ingresso in Accoglienza e selezione Dermatologia con Valieri e GPCert Derm. Nessun errore console. Nessuna protezione del progetto disabilitata.

QA in docs/QA_IDENTITA_INTERATTIVA.md, screenshot in docs/screenshots/signature/. Fotografie autentiche ancora da ricevere.

## Pubblicazione editoriale completata
- URL: https://ambulatorio-leini.vercel.app/?revision=editorial
- Deployment: dpl_8Z1YvpNzgzaCJqWbA5uMA6dnwKUj
- Target: production; stato READY; Next.js 16.4.1.
- Sorgenti locali con modifiche non committate; nessun nuovo commit/push.
- Verifica pubblica: pagine e asset HTTP 200 senza credenziali, nuova homepage presente, console senza errori.
