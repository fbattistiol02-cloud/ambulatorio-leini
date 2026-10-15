"use client";
import { useRef } from "react";
import { Arrow } from "../ui/Sketch";
import { MotionToggle } from "../ui/MotionToggle";
import { CallLink } from "../ui/CallLink";
const links = [
  ["#chiarezza", "L’approccio"],
  ["#cure", "Le cure"],
  ["#visita", "La visita"],
  ["#dove", "Dove siamo"],
] as const;
export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="brand">
          <span className="brand-symbol" aria-hidden="true">
            l<span>·</span>
          </span>
          <span>
            <small>AMBULATORIO VETERINARIO</small>
            <strong>
              Leinì<span className="brand-dot">.</span>
            </strong>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Principale">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <CallLink className="btn btn-primary header-cta" />
        <MotionToggle compact />
        <details
          ref={menu}
          className="mobile-menu"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeMenu();
              menu.current?.querySelector("summary")?.focus();
            }
          }}
        >
          <summary aria-label="Menu di navigazione">
            <span />
            <span />
          </summary>
          <nav aria-label="Navigazione mobile">
            <CallLink className="menu-call" onClick={closeMenu} />
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
                <Arrow diagonal />
              </a>
            ))}
            <a href="#prepara-messaggio" onClick={closeMenu}>
              Prepara un messaggio <Arrow />
            </a>
            <a href="#concept" onClick={closeMenu}>
              Il concept
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
