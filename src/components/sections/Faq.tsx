"use client";

import { useId, useState } from "react";
import { copy } from "@/content/site";
import { richTitle } from "@/lib/richTitle";
import { Reveal } from "../motion/Reveal";
import { SplitHeading } from "../motion/SplitHeading";

export function Faq() {
  const { faq } = copy;
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <section id="domande" className="section" aria-labelledby="faq-title">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="eyebrow">{faq.eyebrow}</p>
          <SplitHeading as="h2" className="display-lg mt-5">
            <span id="faq-title">{richTitle(faq.title)}</span>
          </SplitHeading>
          <p className="mt-6 text-sm text-ink-soft">{faq.draftNote}</p>
        </div>

        <Reveal className="lg:col-span-8">
          <ul className="border-b border-ink/15">
            {faq.items.map((it, i) => {
              const isOpen = open === i;
              const btnId = `${uid}-b${i}`;
              const panelId = `${uid}-p${i}`;
              return (
                <li key={it.q} className="border-t border-ink/15">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left lg:py-7"
                    >
                      <span className="display-md">{it.q}</span>
                      <span
                        aria-hidden
                        className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/25 transition-colors duration-300 group-hover:bg-ink group-hover:text-paper"
                      >
                        <span className="absolute h-px w-4 bg-current" />
                        <span
                          className={`absolute h-4 w-px bg-current transition-transform duration-500 [transition-timing-function:var(--ease-out)] ${isOpen ? "scale-y-0" : ""}`}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-[grid-template-rows] duration-500 [transition-timing-function:var(--ease-out)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 text-ink-soft">{it.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
