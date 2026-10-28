import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { mailHref } from "@/lib/links";
export const metadata: Metadata = {
  title: "Privacy e note legali dell’anteprima",
  description:
    "Informazioni sul funzionamento dell’anteprima dell’Ambulatorio Veterinario Leinì e sui contenuti da validare prima della pubblicazione.",
};
export default function Privacy() {
  return (
    <article className="container legal-page">
      <Link className="back-link" href="/">
        ← Torna alla home
      </Link>
      <p className="eyebrow">Anteprima per revisione</p>
      <h1>Privacy e note legali</h1>
      <p className="legal-notice">
        Documento preparatorio da completare e validare prima del lancio. Non
        costituisce l’informativa definitiva del sito ufficiale.
      </p>
      <h2>Come funziona questa anteprima</h2>
      <p>
        Il sito presenta l’ambulatorio e i suoi recapiti. Non contiene moduli di
        raccolta dati, sistemi di prenotazione, account o pubblicità.
        Sono presenti le integrazioni Vercel Web Analytics e Speed Insights;
        la loro configurazione deve essere considerata nell’informativa definitiva.
        I caratteri e le immagini
        utilizzati sono serviti dal sito.
      </p>
      <h2>Chiamate, email e collegamenti esterni</h2>
      <p>
        I pulsanti telefonici e l’indirizzo email aprono le applicazioni del
        dispositivo. Le richieste vengono gestite direttamente dall’ambulatorio.
        Google Maps si apre solo selezionando il relativo collegamento: non è
        presente una mappa incorporata. I servizi esterni applicano le proprie
        informative.
      </p>
      <h2>Dati tecnici dell’hosting</h2>
      <p>
        Il fornitore di hosting può trattare dati tecnici delle richieste, come
        indirizzo IP e log di accesso. Titolare, responsabili del trattamento,
        finalità, basi giuridiche, tempi di conservazione, trasferimenti e
        modalità per esercitare i diritti devono essere verificati e inseriti
        nell’informativa definitiva in base alla configurazione di
        pubblicazione.
      </p>
      <h2>Recapiti della struttura</h2>
      <p>
        {site.name}
        <br />
        Direttore sanitario: Dott. Davide Boasso
        <br />
        {site.address.street}, {site.address.postalCode} {site.address.city} (
        {site.address.province})<br />
        <a href={mailHref}>{site.email}</a>
      </p>
      <h2>Prima della pubblicazione</h2>
      <p>
        Occorre confermare il soggetto titolare e i dati fiscali, i riferimenti
        professionali e autorizzativi da pubblicare, l’informativa privacy e la
        configurazione effettiva di cookie, hosting e servizi esterni. Gli appuntamenti si concordano telefonicamente con l’ambulatorio.
      </p>
    </article>
  );
}
