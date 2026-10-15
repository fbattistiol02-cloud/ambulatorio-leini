import { copy, site } from "@/content/site";
import { addressLine, mailHref, mapsHref, telHref } from "@/lib/links";
import { richTitle } from "@/lib/richTitle";
import { Magnetic } from "../ui/Magnetic";
import { Reveal } from "../motion/Reveal";
import { SplitHeading } from "../motion/SplitHeading";
import { IconArrowUpRight, IconMail, IconPhone, IconPin } from "../ui/Icons";
import { OpeningHours } from "./OpeningHours";
import { SchematicMap } from "./SchematicMap";

export function Dove() {
  const { dove } = copy;
  return (
    <section id="dove" className="section bg-mist" aria-labelledby="dove-title">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="eyebrow">{dove.eyebrow}</p>
          <SplitHeading as="h2" className="display-lg mt-5">
            <span id="dove-title">{richTitle(dove.title)}</span>
          </SplitHeading>

          <Reveal className="mt-10" stagger={0.1}>
            <p className="flex items-start gap-3 text-lg">
              <IconPin className="mt-1 shrink-0 text-hazel-deep" />
              <span>{addressLine}</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <a href={mapsHref} target="_blank" rel="noopener" className="btn btn-primary w-full sm:w-auto">
                  {dove.mapCta} <IconArrowUpRight />
                </a>
              </Magnetic>
              <a href={telHref} className="btn btn-ghost w-full sm:w-auto">
                <IconPhone /> {site.phone.display}
              </a>
            </div>
            <p className="mt-6 flex items-center gap-3 text-ink-soft">
              <IconMail width={18} height={18} />
              <a href={mailHref} className="link-u">
                {site.email}
              </a>
            </p>
            <div className="mt-12">
              <OpeningHours />
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6 lg:pt-6">
          <SchematicMap />
        </Reveal>
      </div>
    </section>
  );
}
