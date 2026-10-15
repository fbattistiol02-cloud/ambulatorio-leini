"use client";

import { useEffect, type DependencyList, type RefObject } from "react";
import { enqueue, loadMotion, type Motion } from "./loader";
import { useMotion } from "./MotionProvider";

/**
 * Esegue `setup` quando il movimento è attivo, dopo aver caricato le librerie.
 * Ogni animazione creata dentro `setup` viene annullata in automatico al
 * cambio di dipendenze, alla preferenza "riduci animazioni" o allo smontaggio.
 * Se `setup` restituisce una funzione, viene chiamata in pulizia.
 */
export function useMotionEffect(
  setup: (m: Motion) => void | (() => void),
  scope: RefObject<Element | null> | null,
  deps: DependencyList = [],
) {
  const { ready, reduced } = useMotion();

  useEffect(() => {
    if (!ready || reduced) return;
    let dead = false;
    let ctx: { revert: () => void } | null = null;

    loadMotion().then((m) =>
      enqueue(() => {
        if (dead) return;
        ctx = m.gsap.context(() => setup(m), scope?.current ?? undefined);
      }),
    );

    return () => {
      dead = true;
      ctx?.revert();
    };
    // `setup` cambia a ogni render: l'elenco di dipendenze lo decide il chiamante.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, reduced, ...deps]);
}
