import Image from "next/image";
import Link from "next/link";
import { MainNavigation } from "@/components/clinic/MainNavigation";
import { MobileMenu } from "@/components/clinic/MobileMenu";
import { site } from "@/content/site";
import { IconArrowUpRight, IconPhone, IconPin } from "@/components/ui/Icons";
import { mapsHref, telHref } from "@/lib/links";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} — Home`}>
      <Image src="/media/brand/simbolo.png" alt="" loading="eager" width={58} height={51} />
      <span>
        <span className="brand-descriptor">Ambulatorio Veterinario</span>
        <strong>
          Leinì<span className="brand-dot">.</span>
        </strong>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <MainNavigation />
        <a href={telHref} className="button header-call">
          <IconPhone />
          <span>
            Chiama<span className="header-number">&nbsp;{site.phone.display}</span>
          </span>
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          © 2026 {site.name}
          <small>Direttore sanitario: Dott. Davide Boasso</small>
        </span>
        <div>
          <Link href="/ambulatorio">L’ambulatorio</Link>
          <Link href="/prestazioni">Prestazioni</Link>
          <Link href="/equipe">Équipe</Link>
          <Link href="/contatti">Contatti</Link>
          <Link href="/privacy">Privacy e note legali</Link>
          {site.social.instagram.url && (
            <a
              href={site.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
              <IconArrowUpRight />
            </a>
          )}
          <span className="preview-label">Anteprima</span>
        </div>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="Contatti rapidi">
      <a href={telHref}>
        <IconPhone />
        Chiama
      </a>
      <a href={mapsHref} target="_blank" rel="noopener noreferrer">
        <IconPin />
        Indicazioni
      </a>
    </nav>
  );
}
