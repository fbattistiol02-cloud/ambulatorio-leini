"use client";

import { useEffect, useState } from "react";
import { site, copy } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/links";
import { Magnetic } from "../ui/Magnetic";
import { Mark } from "../ui/Mark";
import { MotionToggle } from "../ui/MotionToggle";
import { IconPhone, IconWhatsApp } from "../ui/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-line bg-paper/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name}, torna in cima`}>
          <Mark />
          <span className="leading-none">
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Ambulatorio veterinario
            </span>
            <span className="font-display mt-1 block text-[1.45rem] tracking-tight">
              Leinì
            </span>
          </span>
        </a>

        <nav aria-label="Principale" className="hidden items-center gap-8 text-[0.95rem] xl:flex">
          {copy.nav.map((item) => (
            <a key={item.href} href={item.href} className="link-u py-1">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MotionToggle className="hidden whitespace-nowrap text-ink-soft 2xl:inline-flex" />
          <a
            href={telHref}
            className="btn btn-ghost hidden !min-h-11 whitespace-nowrap !px-4 text-[0.95rem] sm:inline-flex"
          >
            <IconPhone width={18} height={18} />
            <span className="hidden md:inline">{site.phone.display}</span>
            <span className="md:hidden">Chiama</span>
          </a>
          <Magnetic className="hidden sm:inline-block">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener"
              className="btn btn-primary !min-h-11 whitespace-nowrap !px-5 text-[0.95rem]"
            >
              <IconWhatsApp width={18} height={18} />
              WhatsApp
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
