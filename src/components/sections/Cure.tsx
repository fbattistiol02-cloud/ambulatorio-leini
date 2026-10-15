import { copy } from "@/content/site";
import { richTitle } from "@/lib/richTitle";
import { whatsappFor } from "@/lib/links";
import { Reveal } from "../motion/Reveal";
import { SplitHeading } from "../motion/SplitHeading";
import { IconArrow, IconImaging, IconSurgery, IconVisit } from "../ui/Icons";

const icons = {
  visite: IconVisit,
  chirurgia: IconSurgery,
  diagnostica: IconImaging,
} as const;

export function Cure() {
  const { cure } = copy;
  return (
    <section id="cure" className="section" aria-labelledby="cure-title">
      <div className="wrap">
        <p className="eyebrow">{cure.eyebrow}</p>
        <SplitHeading as="h2" className="display-lg mt-5 max-w-3xl">
          <span id="cure-title">{richTitle(cure.title)}</span>
        </SplitHeading>

        <Reveal stagger={0.14} className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
          {cure.items.map((it, i) => {
            const Icon = icons[it.key];
            return (
              <article
                key={it.key}
                className="group relative flex min-h-[24rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-paper-2 p-8 transition-colors duration-500 hover:bg-ink hover:text-paper focus-within:bg-ink focus-within:text-paper lg:min-h-[30rem] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <Icon className="text-hazel-deep transition-colors duration-500 group-hover:text-hazel-light group-focus-within:text-hazel-light" />
                  <span className="font-display text-sm text-ink-soft transition-colors duration-500 group-hover:text-paper/60">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="display-md">{it.title}</h3>
                  <p className="mt-4 max-w-sm text-ink-soft transition-colors duration-500 group-hover:text-paper/75 group-focus-within:text-paper/75">
                    {it.text}
                  </p>
                  <a
                    href={whatsappFor(it.title)}
                    target="_blank"
                    rel="noopener"
                    className="mt-8 inline-flex items-center gap-2 font-semibold after:absolute after:inset-0 after:content-['']"
                  >
                    {it.cta}
                    <IconArrow className="transition-transform duration-500 group-hover:translate-x-1.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
