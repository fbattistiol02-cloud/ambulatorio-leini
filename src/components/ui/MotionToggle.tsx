"use client";

import { useMotion } from "../motion/MotionProvider";

/** Interruttore "Riduci animazioni" (accessibilità). */
export function MotionToggle({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { reduced, toggle, ready } = useMotion();
  if (compact)
    return (
      <button
        type="button"
        onClick={toggle}
        className="motion-control"
        aria-label={
          ready && reduced
            ? "Attiva le animazioni"
            : "Metti in pausa le animazioni"
        }
        title={
          ready && reduced
            ? "Attiva le animazioni"
            : "Metti in pausa le animazioni"
        }
      >
        <svg
          viewBox="0 0 20 20"
          width="18"
          height="18"
          aria-hidden="true"
          fill="currentColor"
        >
          {ready && reduced ? (
            <path d="m6 3 11 7-11 7Z" />
          ) : (
            <path d="M5 3h3v14H5zm7 0h3v14h-3Z" />
          )}
        </svg>
      </button>
    );
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={ready ? reduced : false}
      className={`items-center gap-2 text-sm underline-offset-4 hover:underline ${className ?? "inline-flex"}`}
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
