# QA revisione V2 — 29 ottobre 2026

Verifica sul build di produzione locale (`next build` + `next start`) del branch `v2-revisione`.

## Esiti automatici
| Controllo | Esito |
|---|---|
| `npx eslint src` | nessun errore |
| `npm run build` | ✅ 13 pagine statiche generate |
| `python3 scripts/verify-content.py` | ✅ 7 pagine: un H1, ID unici, link e ancore, alt, noindex, nessun form, testi obsoleti assenti, FAQ (5 home / 8 contatti), segnaposto pazienti e curiosità presenti, schema con fasce 16:00–19:30 |
| `node scripts/contrast.mjs` | ✅ 51 combinazioni (inclusi i quattro colori d'area) |
| Responsive 320 / 375 / 390 / 768 / 1024 / 1440 × 7 pagine (42 prove) | ✅ nessun overflow orizzontale, un H1 per pagina, nessuna immagine rotta |
| Lighthouse mobile `/` | Performance **100** · Accessibilità **100** · Best Practices 96 · SEO 66 |
| Lighthouse desktop `/prestazioni` | Performance **100** · Accessibilità **100** · Best Practices 96 · SEO 66 |

Note sui Lighthouse: SEO 66 è dovuto al `noindex` voluto per l'anteprima (si sblocca al lancio). Best Practices 96 dipende dagli script Vercel Analytics/Speed Insights che in locale rispondono 404 (esistono solo su Vercel). Report in `docs/qa/v2/`.

## Lunghezza delle pagine (obiettivo: home ≤ 3,5× viewport desktop e ≤ 4,5× mobile)
| | Prima | Dopo |
|---|---|---|
| Home 1440×900 | ~6.660 px (7,4×) | **3.129 px (3,48×)** ✅ |
| Home 375×812 | ~5.225 px (6,4×) | **3.604 px (4,44×)** ✅ |

## Matrice richieste del cliente
| ID | Richiesta | Esito | Dove |
|---|---|---|---|
| R-01 | Sito meno lungo | ✅ | home dimezzata (vedi sopra) |
| R-02 | Colore più piacevole/vivo | ✅ | `v2.css` (palette per area, hero con sfumature) |
| R-03 | Diretto, con rimandi a finestre | ✅ | 4 card → `/prestazioni#id` |
| R-04 | Dati, Maps, Instagram | ✅ / ⚠️ | mappa su richiesta in `/contatti`; handle IG da confermare (M-04) |
| R-05 | Elenco prestazioni | ✅ | `serviceCategories` |
| R-06 | Collaborazioni esterne | ✅ | riga di chip in home, sezione in `/prestazioni` |
| R-07 | Bio dei due medici | ✅ | `professionals` |
| R-08 | Foto in arrivo | ⏳ | segnaposto progettati, flusso in `docs/BRIEF_FOTOGRAFICO.md` |
| R-09 | Logo del biglietto da visita | ⚠️ | da verificare sul PDF (M-05) |
| R-10 | Solo telefono, mail per ricette | ✅ | nessun form |
| R-11 | Riferimento collega, colore più vivo | ⚠️ | colore sì; sito della collega non verificato (M-06) |
| R-12 | FAQ | ✅ | 8 FAQ (5 in home) |
| R-13 | Foto pazienti | ✅ | sezione visibile in demo, nascosta in produzione se vuota (D-03) |
| R-14 | IG personale | ⏳ | non pubblicato finché non richiesto |
| R-15 | Scritta in alto più grande | ✅ | descrittore 11 → 20 px, "Leinì" 46 px, logo 64 px |
| R-16 | "Veterinario di fiducia dal 2009" | ✅ | hero |
| R-17 | Orari pomeriggio | ✅ | hero, contatti, FAQ, schema.org |
| R-18 | Colore diverso per finestra | ✅ | verde, ciano, corallo, blu |
| R-19 | Laparoscopia dopo chirurgia e ricovero | ✅ | ultima card / ultima sezione |
| R-20 | Non dire "2 medici" | ✅ | titoli e meta neutri; liste scalabili |
| R-21 | Didascalia Boasso | ✅ | `/equipe` |
| R-22 | Valieri: ordine aree, GPCert Derm nel testo | ✅ | `/equipe` + tutte le aree in home |
| R-23 | Finestra laparoscopia con foto e video | ✅ / ⏳ | modulo video + stato "in arrivo"; file da ricevere |
| R-24 | FAQ/curiosità | ✅ | sezione "Lo sapevi?" (bozza da validare, M-07) |
| R-25 | Collaborazioni: solo elenco | ✅ | |
| R-26 | Testi dettati | ✅ | alla lettera; rimosso "digitale" e "assistenza e ricovero postoperatorio" |
| R-27 | Autonomia futura | ✅ | fuori pacchetto; struttura in `docs/PREDISPOSIZIONE_CMS.md` |
| R-28 | Foto via WhatsApp | ✅ | flusso documentato |
| R-29 | Restare sul pacchetto base | ✅ | nessun CMS |

## Non verificato / da fare
- Tastiera su menu, FAQ, video e lightbox e `prefers-reduced-motion` non ricontrollati in questa revisione.
- Confronto del logo con il PDF del biglietto da visita; conferma handle Instagram; conferma WhatsApp (pulsante pronto ma disattivato: `site.whatsapp.enabled`).
- Revisione legale della formula pubblicitaria in hero.
- Screenshot "prima" non salvati; screenshot "dopo" in `docs/screenshots/v2/after/`.
- Deploy preview e invio al cliente.
