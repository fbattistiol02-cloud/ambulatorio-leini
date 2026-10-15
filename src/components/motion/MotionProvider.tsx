"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

type MotionState = {
  /** true quando la preferenza (sistema o interruttore) è stata letta */
  ready: boolean;
  /** true se bisogna ridurre/eliminare il movimento */
  reduced: boolean;
  toggle: () => void;
};

const MotionContext = createContext<MotionState>({
  ready: false,
  reduced: false,
  toggle: () => {},
});

export const useMotion = () => useContext(MotionContext);

const STORAGE_KEY = "leini-motion";

function readStored(): "reduced" | "full" | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "reduced" || v === "full" ? v : null;
  } catch {
    return null;
  }
}

function writeStored(v: "reduced" | "full") {
  try {
    window.localStorage.setItem(STORAGE_KEY, v);
  } catch {
    /* storage non disponibile: la preferenza vale solo per la sessione */
  }
}

/**
 * Legge la preferenza di movimento, gestisce lo scroll fluido (Lenis)
 * sincronizzato con ScrollTrigger e l'attributo data-motion su <html>.
 * Con movimento ridotto: nessuno scroll fluido, nessuna animazione,
 * la pagina resta completa e leggibile.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  // 1) preferenza iniziale: scelta salvata > impostazione di sistema
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stored = readStored();
    setReduced(stored ? stored === "reduced" : mq.matches);
    setReady(true);

    const onChange = (e: MediaQueryListEvent) => {
      if (!readStored()) setReduced(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // 2) attributo su <html> (usato dal CSS per spegnere le transizioni)
  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.motion = reduced ? "reduced" : "full";
  }, [ready, reduced]);

  // 3) scroll fluido + ancore
  useEffect(() => {
    if (!ready) return;

    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time) => lenis!.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.4 });
      } else {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    // Ricalcola i trigger quando font e immagini hanno finito di caricare
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, [ready, reduced]);

  const toggle = useCallback(() => {
    setReduced((prev) => {
      const next = !prev;
      writeStored(next ? "reduced" : "full");
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ ready, reduced, toggle }),
    [ready, reduced, toggle],
  );

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}
