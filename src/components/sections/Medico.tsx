import { copy, site } from "@/content/site";
import { Reveal } from "../motion/Reveal";

export function Medico() {
  const { medico } = copy;
  const initials = "DB";
  return (
    <section id="medico" className="section overflow-clip" aria-labelledby="medico-title">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <svg
              aria-hidden
              viewBox="0 0 200 200"
              className="spin-slow absolute inset-0 h-full w-full text-ink/30"
              fill="none"
            >
              <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 5" />
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            <div className="absolute inset-[9%] grid place-items-center rounded-full bg-ink text-paper">
              <span
                className="font-display"
                style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)", fontWeight: 300, letterSpacing: "-0.03em" }}
                aria-hidden
              >
                {initials}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" stagger={0.1}>
          <p className="eyebrow">{medico.eyebrow}</p>
          <h2 id="medico-title" className="display-lg mt-5">
            {site.doctor.name}
          </h2>
          <p className="mt-3 text-lg text-ink-soft">{site.doctor.role}</p>

          <div className="mt-10 rounded-[1.75rem] border border-dashed border-ink/30 p-7 lg:p-9">
            <span className="inline-block rounded-full bg-hazel-deep px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white">
              Da completare insieme
            </span>
            <h3 className="display-md mt-5">{medico.placeholderTitle}</h3>
            <p className="mt-3 max-w-lg text-ink-soft">{medico.placeholderText}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
