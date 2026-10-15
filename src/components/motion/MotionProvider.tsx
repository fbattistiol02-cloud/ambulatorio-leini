"use client";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
type MotionState = { ready: boolean; reduced: boolean; toggle: () => void };
const MotionContext = createContext<MotionState>({
  ready: false,
  reduced: false,
  toggle: () => {},
});
export const useMotion = () => useContext(MotionContext);
const KEY = "leini-motion";
let sessionPreference: boolean | undefined;
function snapshot() {
  if (sessionPreference !== undefined) return sessionPreference;
  try {
    const value = localStorage.getItem(KEY);
    if (value === "reduced" || value === "full") return value === "reduced";
  } catch {}
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  const onStorage = (event: StorageEvent) => {
    if (event.key === KEY || event.key === null) {
      sessionPreference = undefined;
      callback();
    }
  };
  mq.addEventListener("change", callback);
  window.addEventListener("leini-motion-change", callback);
  window.addEventListener("storage", onStorage);
  return () => {
    mq.removeEventListener("change", callback);
    window.removeEventListener("leini-motion-change", callback);
    window.removeEventListener("storage", onStorage);
  };
}
const subscribeReady = () => () => {};
const clientReady = () => true;
const serverFalse = () => false;
function toggle() {
  sessionPreference = !snapshot();
  try {
    localStorage.setItem(KEY, sessionPreference ? "reduced" : "full");
  } catch {}
  window.dispatchEvent(new Event("leini-motion-change"));
}
/** Native scrolling; system preference and a local accessibility toggle. */
export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(subscribe, snapshot, serverFalse);
  const ready = useSyncExternalStore(subscribeReady, clientReady, serverFalse);
  useEffect(() => {
    if (ready)
      document.documentElement.dataset.motion = reduced ? "reduced" : "full";
  }, [ready, reduced]);
  const value = useMemo(() => ({ ready, reduced, toggle }), [ready, reduced]);
  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}
