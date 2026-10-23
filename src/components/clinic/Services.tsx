import Link from "next/link";
import { campaign } from "@/content/site";
import {
  IconArrowUpRight,
  IconImaging,
  IconSurgery,
  IconVisit,
} from "@/components/ui/Icons";
import { PhotoSlot } from "./PhotoSlot";
export function ServiceIcon({ type }: { type: string }) {
  if (type === "surgery") return <IconSurgery />;
  if (type === "imaging") return <IconImaging />;
  if (type === "care")
    return (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M10 13h24v23H10zM17 13V8h10v5M18 23h8m-4-4v8M6 36h32" />
      </svg>
    );
  return <IconVisit />;
}
export function ServicesPreview() {
  return (
    <section className="services-section" data-reveal>
      <div className="container">
        <div className="section-top">
          <div>
            <p className="eyebrow">Medicina, diagnostica, chirurgia</p>
            <h2>
              Le competenze.
              <br />I percorsi di <em>cura.</em>
            </h2>
          </div>
          <Link href="/prestazioni" className="text-link">
            Esplora tutte le prestazioni
            <IconArrowUpRight />
          </Link>
        </div>
        <div className="service-overview">
          {campaign.services.categories.map((item, i) => (
            <Link href={`/prestazioni#${item.id}`} key={item.id}>
              <span className="service-number">0{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <IconArrowUpRight />
            </Link>
          ))}
        </div>
      </div>
      <div className="lap-focus">
        <div className="container lap-focus-grid">
          <div className="lap-focus-copy">
            <p className="eyebrow">Un’area di interesse del Dott. Boasso</p>
            <h2>
              Chirurgia
              <br />
              <em>laparoscopica.</em>
            </h2>
            <p>
              Tra le prestazioni dell’ambulatorio, insieme alla chirurgia
              tradizionale e al day hospital per le terapie giornaliere o
              post-chirurgiche.
            </p>
            <Link href="/chirurgia-laparoscopica" className="text-link">
              Conosci la prestazione
              <IconArrowUpRight />
            </Link>
          </div>
          <PhotoSlot photo="laparoscopy" className="lap-focus-photo" />
        </div>
      </div>
    </section>
  );
}
