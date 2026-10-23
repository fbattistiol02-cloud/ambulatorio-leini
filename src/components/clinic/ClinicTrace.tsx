/** Motivo dei quattro ovali ispirato ai cuscinetti del marchio. Non è un nuovo logo. */
export function ClinicTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 280"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse
        cx="46"
        cy="128"
        rx="36"
        ry="47"
        transform="rotate(-19 46 128)"
      />
      <ellipse cx="113" cy="52" rx="37" ry="46" transform="rotate(-9 113 52)" />
      <ellipse cx="203" cy="52" rx="37" ry="46" transform="rotate(10 203 52)" />
      <ellipse
        cx="274"
        cy="128"
        rx="37"
        ry="47"
        transform="rotate(20 274 128)"
      />
      <path d="M46 181C69 235 115 260 160 260C206 260 253 235 274 181" />
      <path d="M113 110C109 159 134 190 160 204C186 190 211 159 203 110" />
    </svg>
  );
}
