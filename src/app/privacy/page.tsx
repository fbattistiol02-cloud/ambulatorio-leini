import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { mailHref } from "@/lib/links";
export const metadata: Metadata = {
  title: "Privacy e note legali",
  description:
    "Informazioni su dati, collegamenti esterni e recapiti del sito dell’Ambulatorio Veterinario Leinì.",
};
export default function Privacy() {
  return (
    <article className="container legal-page">
      <Link className="back-link" href="/">
        ← Torna alla home
      </Link>
      <p className="eyebrow">Informazioni sul sito</p>
      <h1>Privacy e note legali</h1>
      <h2>Come funziona il sito</h2>
      <p>
        Il sito presenta l’ambulatorio e i suoi recapiti. Non contiene moduli di
        raccolta dati, sistemi di prenotazione, account o pubblicità, e non
        utilizza cookie di profilazione né strumenti di analisi del traffico. I
        caratteri e le immagini utilizzati sono serviti dal sito stesso.
      </p>
      <h2>Chiamate, email e collegamenti esterni</h2>
      <p>
        I pulsanti telefonici e l’indirizzo email aprono le applicazioni del
        dispositivo. Le richieste vengono gestite direttamente dall’ambulatorio.
        La mappa della pagina Contatti si carica solo dopo aver premuto
        «Mostra la mappa»: fino a quel momento il sito non contatta Google.
        Anche il collegamento a Google Maps si apre solo se selezionato. I
        servizi esterni applicano le proprie informative.
      </p>
      <h2>Dati tecnici dell’hosting</h2>
      <p>
        Il fornitore di hosting può trattare dati tecnici delle richieste, come
        indirizzo IP e log di accesso, necessari al funzionamento e alla
        sicurezza del sito. Per informazioni sul trattamento dei dati e per
        esercitare i propri diritti è possibile rivolgersi all’ambulatorio ai
        recapiti indicati qui sotto.
      </p>
      <h2>Recapiti della struttura</h2>
      <p>
        {site.name}
        <br />
        Titolare e direttore sanitario: {site.legal.holder}
        <br />
        Partita IVA {site.legal.vat}
        <br />
        {site.address.street}, {site.address.postalCode} {site.address.city} (
        {site.address.province})<br />
        <a href={mailHref}>{site.email}</a>
        <br />
        PEC: <a href={`mailto:${site.legal.pec}`}>{site.legal.pec}</a>
      </p>
      <p>Gli appuntamenti si concordano telefonicamente con l’ambulatorio.</p>
    </article>
  );
}
