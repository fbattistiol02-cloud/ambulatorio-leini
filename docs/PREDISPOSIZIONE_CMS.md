# Predisposizione CMS (non costruito: opzione successiva)

Il CMS (es. Sanity) è un'opzione successiva. Oggi tutti i contenuti sono dati tipizzati, senza testi cablati nei componenti.

| Contenuto | File / export | Futuro schema |
|---|---|---|
| Dati ambulatorio, orari, contatti, interruttori (`demo`, `whatsapp`) | `src/content/site.ts` → `site` | documento singolo "Impostazioni" |
| Prestazioni (4 aree, testi dettati, elenco) | `serviceCategories`, `campaign.services` | lista "Prestazione" con campo `area` (colore) |
| Collaborazioni esterne | `externalServices` | lista di stringhe |
| Équipe | `professionals[]` | lista "Persona": ruolo, laurea, bio, aree, formazione, hobby, foto |
| FAQ | `faqs[]` | lista "Domanda/Risposta" |
| Curiosità | `curiosita[]` | lista "Curiosità" |
| Foto pazienti | `patientPhotos[]` (con `authorized`) | lista "Foto paziente" con consenso obbligatorio |
| Foto ambulatorio | `src/content/media.ts` → `clinicPhotos` | lista di immagini per soggetto |
| Video laparoscopia | `laparoscopyVideo` | file + sottotitoli + poster |

Regole da mantenere nel CMS: foto paziente pubblicabile solo con `authorized: true`; video solo con sottotitoli; nessun testo clinico senza revisione del dottore.
