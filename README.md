# Ambulatorio Veterinario Leinì

Sito dell'Ambulatorio Veterinario Leinì. Next.js 16.4.1 (export statico), React 19, CSS e font locali. Hosting: Cloudflare Workers (static assets).

## Pagine

- `/`: presentazione, prestazioni, medici e contatti rapidi.
- `/ambulatorio`: struttura, ambienti, attività e professionisti.
- `/prestazioni`: tutte le prestazioni; collaborazioni esterne separate.
- `/equipe`: profili di Davide Boasso ed Erika Valieri.
- `/chirurgia-laparoscopica`: approfondimento sulla prestazione e contatto.
- `/contatti`: telefoni, email, indirizzo, orari, Maps e FAQ.
- `/privacy`: privacy e note legali.

## Sviluppo locale

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3103
```

## Contenuti

Dati, recapiti, orari, servizi, medici e FAQ: `src/content/site.ts`. Fotografie: registro `src/content/media.ts` (percorso del file e `authorized: true`; senza foto autorizzata il riquadro non viene mostrato). Logo in `public/media/brand/`. Nessun modulo di prenotazione: appuntamenti telefonici, email per informazioni e ricette.

## Build e pubblicazione (Cloudflare)

Il sito è un export statico (`out/`) servito da Cloudflare Workers.

```sh
npm run build:cf     # next build + out/_headers
npm run deploy:cf    # build + wrangler deploy
```

Variabili di build:

- `NEXT_PUBLIC_SITE_URL`: URL pubblico (canonical, Open Graph, sitemap).
- `NEXT_PUBLIC_INDEXABLE`: `true` solo sul dominio definitivo. Se assente o diverso da `true`, il sito è `noindex` (meta robots, `robots.txt` e header `X-Robots-Tag`).

Collegamento del dominio definitivo: in Cloudflare, Workers & Pages → `ambulatorio-leini` → Settings → Domains & Routes → Add → Custom domain. Poi ricompilare con `NEXT_PUBLIC_SITE_URL=https://<dominio>` e `NEXT_PUBLIC_INDEXABLE=true` e ripubblicare.
