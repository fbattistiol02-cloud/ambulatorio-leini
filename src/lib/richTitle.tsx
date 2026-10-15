import type { ReactNode } from "react";

/** Converte "testo *enfasi* testo" in testo con <em class="em">. */
export function richTitle(text: string): ReactNode[] {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") ? (
      <em key={i} className="em">
        {part.slice(1, -1)}
      </em>
    ) : (
      part
    ),
  );
}
