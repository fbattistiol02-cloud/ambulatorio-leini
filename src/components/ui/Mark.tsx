/** Marchio: un obiettivo che mette a fuoco (anello + punto). */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width="34"
      height="34"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle cx="20" cy="20" r="17.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <circle cx="20" cy="20" r="4.2" fill="var(--hazel-deep)" />
      <path d="M20 0.8v4M20 35.2v4M0.8 20h4M35.2 20h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
