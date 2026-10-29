"use client";
import { useEffect, useState } from "react";
import { openState, type OpenState } from "@/lib/openNow";

/** Badge "Aperto ora": calcolato nel browser per evitare differenze tra server e client. */
export function OpenNow({ className = "" }: { className?: string }) {
  const [state, setState] = useState<OpenState | null>(null);
  useEffect(() => {
    const update = () => setState(openState());
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, []);
  if (!state) return <span className={`open-now ${className}`} aria-hidden="true" />;
  return (
    <span className={`open-now ${state.open ? "is-open" : "is-closed"} ${className}`} role="status">
      <i aria-hidden="true" />
      {state.label}
      <small>secondo l’orario consueto</small>
    </span>
  );
}
