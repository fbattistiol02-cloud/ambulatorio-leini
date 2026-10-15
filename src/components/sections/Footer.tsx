import { Logo } from "../ui/Logo";
import { MotionToggle } from "../ui/MotionToggle";
export function Footer() {
  return (
    <footer className="site-footer" id="concept">
      <div className="wrap">
        <div className="footer-top">
          <a href="#top" className="footer-brand">
            <Logo />
          </a>
          <p>
            Un nuovo sguardo sulla cura.
            <br />
            <span>Concept per l’Ambulatorio Veterinario Leinì.</span>
          </p>
          <a className="text-link" href="#top">
            Torna all’inizio ↑
          </a>
        </div>
        <details className="concept-details">
          <summary>
            Una proposta, pensata con cura. <span>Scopri il concept +</span>
          </summary>
          <div>
            <p>
              Questa è una demo gratuita e non è il sito ufficiale dello studio.
              Identità visiva, testi e percorsi sono proposte progettuali da
              condividere con il medico.
            </p>
            <p>
              Immagini generate a scopo illustrativo: non ritraggono persone,
              pazienti o ambienti dello studio. Servizi, specie trattate,
              indirizzo, recapiti e orari devono essere confermati.
            </p>
            <p>
              Il modulo dimostrativo non raccoglie né invia dati. Il messaggio
              rimane nella pagina e viene cancellato ricaricandola. Solo la
              preferenza sulle animazioni può essere salvata nel browser.
            </p>
          </div>
        </details>
        <div className="footer-bottom">
          <span>© 2026 · Concept dimostrativo</span>
          <MotionToggle />
        </div>
      </div>
    </footer>
  );
}
