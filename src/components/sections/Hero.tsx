import { copy, site } from "@/content/site";
import { images } from "@/content/images";
import { telHref, whatsappHref } from "@/lib/links";
import { Magnetic } from "../ui/Magnetic";
import { Parallax } from "../motion/Parallax";
import { Photo } from "../ui/Photo";
import { IconPhone, IconStar, IconWhatsApp } from "../ui/Icons";

export function Hero() {
  const { hero } = copy;
  const lastIndex = hero.titleLines.length - 1;

  return (
    <section
      id="top"
      className="relative overflow-clip bg-paper pb-20 pt-[calc(72px+2.5rem)] lg:pb-28 lg:pt-[calc(72px+4.5rem)]"
    >
      {/* nebbia di sfondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 88% 30%, rgb(217 168 119 / 0.38), transparent 70%), radial-gradient(45% 50% at 0% 100%, rgb(221 225 223 / 0.9), transparent 70%)",
        }}
      />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* ───── testo ───── */}
        <div className="relative z-10 lg:col-span-8">
          <p className="eyebrow hero-in" style={{ "--i": 0 } as React.CSSProperties}>
            {hero.eyebrow}
          </p>

          <h1
            className="font-display mt-6"
            style={{
              fontSize: "clamp(2rem, 1.1rem + 4vw, 4.8rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.028em",
              fontWeight: 350,
            }}
          >
            {hero.titleLines.map((line, i) => (
              <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
                <span
                  className="hero-line"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {i === lastIndex ? (
                    <span className="relative inline-block">
                      <em className="em">{line}</em>
                      <svg
                        aria-hidden
                        viewBox="0 0 400 16"
                        preserveAspectRatio="none"
                        className="absolute -bottom-[0.05em] left-0 h-[0.22em] w-full text-hazel"
                        fill="none"
                      >
                        <path
                          className="draw-line"
                          d="M3 11 C 55 3, 120 14, 200 8 S 340 4, 397 9"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p className="lead hero-in mt-9" style={{ "--i": 4 } as React.CSSProperties}>
            {hero.lead}
          </p>

          <div
            className="hero-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--i": 5 } as React.CSSProperties}
          >
            <Magnetic>
              <a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-primary w-full sm:w-auto">
                <IconWhatsApp /> {hero.ctaPrimary}
              </a>
            </Magnetic>
            <a href={telHref} className="btn btn-ghost w-full sm:w-auto">
              <IconPhone /> {hero.ctaSecondary}
            </a>
          </div>

          <div
            className="hero-in mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-ink-soft"
            style={{ "--i": 6 } as React.CSSProperties}
          >
            <span className="flex items-center gap-0.5 text-hazel" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} width={17} height={17} />
              ))}
            </span>
            <span>
              <strong className="font-semibold text-ink">{site.rating.label}</strong> ·{" "}
              {site.rating.reviews}
            </span>
          </div>
        </div>

        {/* ───── obiettivo con foto ───── */}
        <div className="relative mx-auto w-full max-w-[26rem] lg:col-span-4 lg:max-w-none">
          <div className="relative aspect-square">
            {/* anelli */}
            <svg
              aria-hidden
              viewBox="0 0 200 200"
              className="spin-slow absolute -inset-[9%] h-[118%] w-[118%] text-ink/25"
              fill="none"
            >
              <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 5" />
              <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            <div className="absolute inset-0 overflow-hidden rounded-full bg-paper-2 shadow-[0_40px_80px_-30px_rgb(27_34_43/0.45)]">
              <div className="hero-focus absolute inset-0">
                <Parallax amount={4}>
                  <div className="relative h-full w-full">
                    <Photo
                      img={images.hero}
                      sizes="(min-width: 1024px) 420px, 90vw"
                      priority
                    />
                  </div>
                </Parallax>
              </div>
            </div>

            <div
              className="hero-in absolute -left-2 bottom-[8%] rounded-full bg-paper px-4 py-2 text-[0.82rem] font-semibold shadow-[0_10px_30px_-10px_rgb(27_34_43/0.35)] sm:-left-6"
              style={{ "--i": 7 } as React.CSSProperties}
            >
              {site.species}
            </div>
          </div>
        </div>
      </div>

      {/* indicatore di scorrimento */}
      <div
        aria-hidden
        className="hero-in absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft lg:flex"
        style={{ "--i": 9 } as React.CSSProperties}
      >
        Scorri
        <span className="block h-10 w-px overflow-hidden bg-line">
          <span
            className="block h-full w-full bg-ink"
            style={{ animation: "scroll-cue 2.2s var(--ease-in-out) infinite" }}
          />
        </span>
      </div>
    </section>
  );
}
