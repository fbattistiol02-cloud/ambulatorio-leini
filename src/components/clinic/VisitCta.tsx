import Link from "next/link";
import { IconArrowUpRight, IconPhone } from "@/components/ui/Icons";
import { telHref } from "@/lib/links";
export function VisitCta() {
  return (
    <aside className="visit-cta">
      <div className="container visit-cta-inner">
        <div>
          <p className="eyebrow">Su appuntamento</p>
          <h2>Organizziamo la tua visita.</h2>
          <p>Chiama l’ambulatorio per concordare giorno e ora.</p>
        </div>
        <div>
          <a className="button" href={telHref}>
            <IconPhone />
            Chiama l’ambulatorio
          </a>
          <Link className="text-link" href="/contatti">
            Contatti, orari e indicazioni
            <IconArrowUpRight />
          </Link>
        </div>
      </div>
    </aside>
  );
}
