/**
 * Logo "B · il tratto": wordmark "Leinì." con il punto terracotta, un tratto
 * disegnato a mano sotto e la riga "AMBULATORIO VETERINARIO".
 * Si ridimensiona con il font-size del contenitore; i colori vengono da
 * --logo-accent (punto) e --logo-swash (tratto). Vedi .logo in globals.css.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo-word">
        Leinì<span className="logo-dot">.</span>
      </span>
      <svg
        className="logo-swash"
        viewBox="0 0 240 12"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M3 7C44 11 92 3 140 7S214 10 237 4"
          pathLength="1"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo-caps">AMBULATORIO VETERINARIO</span>
    </span>
  );
}
