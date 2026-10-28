import type { Metadata } from "next";
import Link from "next/link";
import { ExternalCollaborations } from "@/components/clinic/ExternalCollaborations";
import { serviceCategories } from "@/content/site";
import { VisitCta } from "@/components/clinic/VisitCta";
import { PageIntro } from "@/components/clinic/PageIntro";
import { PhotoSlot } from "@/components/clinic/PhotoSlot";
import { IconArrow, IconArrowUpRight } from "@/components/ui/Icons";
export const metadata: Metadata = {
  title: "Prestazioni veterinarie e chirurgia laparoscopica",
  description:
    "Visite, laboratorio interno, radiologia, ecografia e chirurgia laparoscopica a Leinì. Prestazioni in ambulatorio e collaborazioni specialistiche.",
};
export default function Prestazioni() {
  return (
    <>
      <PageIntro
        eyebrow="Le prestazioni"
        title={
          <>
            Medicina, diagnostica.
            <br />E <em>chirurgia.</em>
          </>
        }
        description="Le attività dell’ambulatorio per cani, gatti e animali non convenzionali. Dalla visita clinica agli esami, fino alle prestazioni chirurgiche."
      />
      <div className="container">
        <nav className="service-index" aria-label="Indice delle prestazioni">
          {serviceCategories.map((service) => (
            <a href={`#${service.id}`} key={service.id}>
              {service.title}
              <IconArrow />
            </a>
          ))}
        </nav>
        <div className="services-detail">
          {serviceCategories.map((service, i) => (
            <section
              id={service.id}
              key={service.id}
              className={`${service.featured ? "service-feature" : "service-row"} service-${service.id}`}
            >
              <div className="service-heading">
                <span className="section-counter">0{i + 1}</span>
                <p className="eyebrow">In ambulatorio</p>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                {service.featured && (
                  <Link href="/chirurgia-laparoscopica" className="text-link">
                    Scopri la chirurgia laparoscopica
                    <IconArrowUpRight />
                  </Link>
                )}
              </div>
              {!service.featured && (
                <ul className="service-items">
                  {service.services.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <PhotoSlot
                photo={
                  service.id === "laparoscopia"
                    ? "laparoscopy"
                    : service.id === "medicina"
                      ? "visit"
                      : service.id === "diagnostica"
                        ? "laboratory"
                        : "surgery"
                }
                className="service-photo"
              />
            </section>
          ))}
        </div>
        <ExternalCollaborations />
      </div>
      <VisitCta />
    </>
  );
}
