"use client";
import { useState } from "react";
import { IconArrowUpRight, IconPin } from "@/components/ui/Icons";
import { addressLine, mapsHref } from "@/lib/links";

/** Mappa in modalità privacy: Google viene contattato solo dopo il clic dell'utente. */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`;
  return (
    <div className="v2-map">
      {loaded
        ? <iframe title="Mappa: Ambulatorio Veterinario Leinì, Via San Francesco al Campo 24" src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        : <div className="v2-map-facade">
            <IconPin />
            <p><strong>Via San Francesco al Campo 24</strong><br />10040 Leinì (TO)</p>
            <button type="button" className="button" onClick={() => setLoaded(true)}>Mostra la mappa</button>
            <small>Mostrando la mappa si carica un contenuto di Google.</small>
          </div>}
      <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="text-link">Apri su Google Maps<IconArrowUpRight /></a>
    </div>
  );
}
