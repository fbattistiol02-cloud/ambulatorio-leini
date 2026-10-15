type Kind = "dog" | "cat" | "other" | "listen" | "clarity" | "path";
const paths: Record<Kind, string> = {
  dog: "M34 49C22 38 19 61 25 77Q33 87 39 69M65 49C77 38 82 61 75 77Q67 86 61 69M35 54Q49 38 65 54L64 77Q51 94 36 77Z M42 62h1M57 62h1M46 73q4 5 8 0M50 77v5",
  cat: "M29 57L27 32L43 45Q50 42 57 45L73 32L71 59Q80 86 50 89Q20 85 29 57Z M37 62h3M60 62h3M46 72l4 4 4-4M50 76v6M20 70l16 4M18 81l18-2M64 74l16-4M64 79l18 2",
  other:
    "M39 50Q22 13 34 13Q44 16 48 46M54 47Q61 8 70 15Q77 23 63 52M35 53Q21 68 36 84Q50 96 68 83Q82 69 65 53M40 65h1M60 65h1M46 76q4 4 8 0",
  listen:
    "M24 73Q9 61 18 46Q25 37 34 45M25 66Q20 59 26 53M43 76C24 46 44 25 57 43C73 23 92 46 75 65L57 84Z M33 86Q18 82 13 73",
  clarity:
    "M21 54Q50 19 79 54Q50 88 21 54Z M62 54A12 12 0 1 1 38 54A12 12 0 1 1 62 54M50 17v8M82 28l-6 6M18 28l6 6M50 83v8",
  path: "M19 80C80 94 85 61 50 60C10 58 22 28 72 26M61 18l13 8-12 10M20 80h1",
};
export function Sketch({
  kind = "dog",
  className = "",
}: {
  kind?: Kind;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`sketch ${className}`}
    >
      <path d={paths[kind]} pathLength="1" />
    </svg>
  );
}
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18L18 6M6 6h12v12" : "M4 12h15M13 5l7 7-7 7"} />
    </svg>
  );
}
