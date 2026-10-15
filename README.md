# Ambulatorio Veterinario Leinì · demo landing page

Anteprima dimostrativa del sito per il Dott. Davide Boasso (Leinì, TO).
Next.js (App Router) + TypeScript + Tailwind v4 + GSAP/ScrollTrigger + Lenis.

> **Stato:** demo. Dati, orari e testi sono da confermare con lo studio. Il sito è
> `noindex` finché non diventa un sito vero. Piano e registro delle decisioni:
> [IMPLEMENTATION_PLAN0.MD](IMPLEMENTATION_PLAN0.MD).

## Avvio

```bash
npm install
npm run dev -- -p 3100      # sviluppo
npm run build && npm start  # produzione
```

## Dove si cambia cosa

| Cosa | Dove |
|---|---|
| Dati dello studio (indirizzo, telefoni, orari, rating) e **tutta la copy** | `src/content/site.ts` |
| Dati non confermati | flag `confirm: true` in `site.ts` (compaiono nel footer) |
| Immagini (percorsi, testo alternativo, punto focale) | `src/content/images.ts` |
| Colori, font, spaziature | `src/app/globals.css` (token in `:root`) |
| Link telefono/WhatsApp/mappa | `src/lib/links.ts` |
| Orari "Aperto ora / Chiuso" | `src/lib/openStatus.ts` (fuso Europe/Rome) |
| Animazioni | `src/components/motion/*` e sezioni in `src/components/sections/*` |

### Cambiare una foto

1. Metti l'originale in `assets-raw/<nome>.jpg` (cartella non versionata).
2. Regola il ritaglio in `scripts/optimize-images.mjs`.
3. `node scripts/optimize-images.mjs assets-raw public/images`
4. Aggiorna `CREDITS.md` e il testo alternativo in `images.ts`.
5. Se cambia l'hero: `node scripts/make-og.mjs` rigenera l'anteprima di condivisione.

### Contrasti

`node scripts/contrast.mjs` verifica le coppie di colori (WCAG).

## Movimento e accessibilità

- Scroll fluido (Lenis) e animazioni si spengono con `prefers-reduced-motion`
  **o** con l'interruttore "Riduci le animazioni" (footer; salvato nel browser).
  Con il movimento ridotto la pagina è completa: nessun blur, nessun pin.
- Hero animato solo con CSS: il contenuto non dipende da JavaScript.
- La scena "Dalla preoccupazione alla chiarezza" è la sezione pinnata
  (`FocusScene.tsx`): durata dello scroll e ritmo sono nel timeline in cima al file.

## Misure (build di produzione, Lighthouse)

| | Performance | Accessibilità | Best practices | SEO |
|---|---|---|---|---|
| Desktop | 99 | 100 | 100 | 63* |
| Mobile (simulato, CPU ×4) | 82 | 100 | 100 | 63* |
| Mobile (throttling reale) | ~89 | — | — | — |

\* Il SEO è basso solo per il `noindex` voluto sulla demo. In produzione vera:
togliere `robots` da `src/app/layout.tsx`.

## Note

- Foto di repertorio Unsplash, vedi `CREDITS.md`. Non ritraggono animali o persone dello studio.
- Il modulo di contatto è dimostrativo: non invia nulla.
- Pubblicata su Vercel: https://ambulatorio-leini.vercel.app (`noindex`). Ripubblicare: `npx vercel deploy --prod --yes`.
