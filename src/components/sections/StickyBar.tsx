import { CallLink } from "../ui/CallLink";

export function StickyBar() {
  return (
    <nav className="mobile-bar" aria-label="Azioni rapide">
      <CallLink className="mobile-bar-primary">Chiama ora</CallLink>
      <a href="#prepara-messaggio">Prepara un messaggio →</a>
    </nav>
  );
}
