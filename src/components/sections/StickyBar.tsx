"use client";

import { useEffect, useState } from "react";
import { telHref, whatsappHref } from "@/lib/links";
import { IconPhone, IconWhatsApp } from "../ui/Icons";

/** Barra fissa "Chiama / WhatsApp" su mobile, visibile dopo l'hero. */
export function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/90 px-4 pt-3 backdrop-blur-md transition-transform duration-500 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-3">
        <a href={telHref} tabIndex={show ? 0 : -1} className="btn btn-ghost !min-h-12">
          <IconPhone width={18} height={18} /> Chiama
        </a>
        <a
          href={whatsappHref}
          tabIndex={show ? 0 : -1}
          target="_blank"
          rel="noopener"
          className="btn btn-primary !min-h-12"
        >
          <IconWhatsApp width={18} height={18} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
