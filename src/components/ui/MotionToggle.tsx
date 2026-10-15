"use client";

import { useMotion } from "../motion/MotionProvider";

/** Interruttore "Riduci animazioni" (accessibilità). */
export function MotionToggle({ className }: { className?: string }) {
  const { reduced, toggle, ready } = useMotion();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={ready ? reduced : false}
      className={`inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline ${className ?? ""}`}
    >
      <span
        aria-hidden
        className={`inline-block h-4 w-7 rounded-full border border-current p-[2px] transition-colors ${reduced ? "bg-current" : ""}`}
      >
        <span
          className={`block h-2.5 w-2.5 rounded-full bg-current transition-transform ${reduced ? "translate-x-3 !bg-[var(--paper)]" : ""}`}
        />
      </span>
      Riduci le animazioni
    </button>
  );
}
