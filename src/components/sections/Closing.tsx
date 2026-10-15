import { copy } from "@/content/site";
import { images } from "@/content/images";
import { telHref, whatsappHref } from "@/lib/links";
import { richTitle } from "@/lib/richTitle";
import { Magnetic } from "../ui/Magnetic";
import { Parallax } from "../motion/Parallax";
import { Reveal } from "../motion/Reveal";
import { SplitHeading } from "../motion/SplitHeading";
import { Photo } from "../ui/Photo";
import { IconPhone, IconWhatsApp } from "../ui/Icons";
import { DemoForm } from "./DemoForm";

export function Closing() {
  const { closing } = copy;
  return (
    <section
      id="contatti"
      className="on-dark relative overflow-clip bg-night text-paper"
      aria-labelledby="closing-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 55% at 85% 20%, rgb(160 106 63 / 0.35), transparent 70%)",
        }}
      />
      <div className="wrap relative section">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SplitHeading as="h2" className="display-xl">
              <span id="closing-title">{richTitle(closing.title)}</span>
            </SplitHeading>
            <Reveal className="mt-8">
              <p className="max-w-xl text-lg text-paper/75">{closing.lead}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Magnetic>
                  <a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-light w-full sm:w-auto">
                    <IconWhatsApp /> {closing.ctaPrimary}
                  </a>
                </Magnetic>
                <a href={telHref} className="btn btn-outline-light w-full sm:w-auto">
                  <IconPhone /> {closing.ctaSecondary}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <div className="relative aspect-square">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Parallax amount={6}>
                  <div className="relative h-full w-full">
                    <Photo img={images.closing} sizes="(min-width: 1024px) 440px, 80vw" />
                  </div>
                </Parallax>
              </div>
              <svg aria-hidden viewBox="0 0 200 200" className="spin-slow absolute -inset-[7%] h-[114%] w-[114%] text-paper/25" fill="none">
                <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 5" />
              </svg>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20 lg:mt-28">
          <DemoForm />
        </Reveal>
      </div>
    </section>
  );
}
