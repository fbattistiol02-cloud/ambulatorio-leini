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
import { loadMotion } from "./loader";

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

    // L'hero si anima solo con CSS: il resto del movimento può partire quando
    // il browser è a riposo, senza pesare su caricamento e primo input.
    const start = () => setReady(true);
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId: number | undefined;
    let timer: number | undefined;
    const kickoff = () => {
      if (w.requestIdleCallback) idleId = w.requestIdleCallback(start, { timeout: 1500 });
      else timer = window.setTimeout(start, 300);
    };
    if (document.readyState === "complete") kickoff();
    else window.addEventListener("load", kickoff, { once: true });

    const onChange = (e: MediaQueryListEvent) => {
      if (!readStored()) setReduced(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("load", kickoff);
      if (idleId !== undefined) w.cancelIdleCallback?.(idleId);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  // 2) attributo su <html> (usato dal CSS per spegnere le transizioni)
  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.motion = reduced ? "reduced" : "full";
  }, [ready, reduced]);

  // 3) scroll fluido (librerie caricate a parte) + ancore
  useEffect(() => {
    if (!ready) return;

    let dead = false;
    let lenis: { scrollTo: (t: HTMLElement, o: object) => void; destroy: () => void } | null = null;
    let tick: ((time: number) => void) | null = null;
    let removeTick: (() => void) | null = null;

    const refresh = () => {
      loadMotion().then((m) => m.ScrollTrigger.refresh());
    };

    if (!reduced) {
      loadMotion().then((m) => {
        if (dead) return;
        const instance = new m.Lenis({
          duration: 1.15,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        instance.on("scroll", m.ScrollTrigger.update);
        tick = (time: number) => instance.raf(time * 1000);
        m.gsap.ticker.add(tick);
        m.gsap.ticker.lagSmoothing(0);
        removeTick = () => m.gsap.ticker.remove(tick!);
        lenis = instance;
      });
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
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(() => {
      if (!dead) refresh();
    });

    return () => {
      dead = true;
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      removeTick?.();
      (lenis as { destroy: () => void } | null)?.destroy();
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
