import { copy, site } from "@/content/site";
import { richTitle } from "@/lib/richTitle";
import { CountUp } from "../motion/CountUp";
import { Reveal } from "../motion/Reveal";
import { SplitHeading } from "../motion/SplitHeading";
import { IconStar } from "../ui/Icons";

export function Proof() {
  const { proof } = copy;
  return (
    <section id="prove" className="section bg-mist" aria-labelledby="proof-title">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow">{proof.eyebrow}</p>
          <SplitHeading as="h2" className="display-lg mt-5">
            <span id="proof-title">{richTitle(proof.title)}</span>
          </SplitHeading>

          <Reveal className="mt-14">
            <div className="flex items-end gap-5">
              <CountUp
                to={site.rating.value}
                className="font-display text-[clamp(5.5rem,13vw,9.5rem)] font-light leading-[0.82] tracking-tight"
              />
              <div className="pb-2">
                <div className="flex gap-0.5 text-hazel-deep" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} width={20} height={20} />
                  ))}
                </div>
                <p className="mt-2 text-[0.95rem] leading-snug text-ink-soft">
                  su Google
                  <br />
                  {site.rating.reviews}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-ink-soft">
              {proof.note} <span className="whitespace-nowrap">(Punteggio da verificare.)</span>
            </p>
          </Reveal>
        </div>

        <Reveal as="ol" stagger={0.12} className="lg:col-span-7">
          {proof.items.map((it, i) => (
            <li
              key={it.key}
              className="group grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/15 py-8 first:border-t-0 first:pt-0 lg:py-10"
            >
              <span className="font-display pt-1 text-hazel-deep">0{i + 1}</span>
              <div className="transition-transform duration-500 [transition-timing-function:var(--ease-out)] group-hover:translate-x-2">
                <h3 className="display-md">{it.title}</h3>
                <p className="mt-3 max-w-xl text-ink-soft">{it.text}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
