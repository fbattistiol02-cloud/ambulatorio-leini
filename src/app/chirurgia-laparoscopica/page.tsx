import { laparoscopyVideo } from "@/content/media";
import { LaparoscopyFeature } from "@/components/clinic/EditorialHome";
import type { Metadata } from "next";
import Link from "next/link";
import { VisitCta } from "@/components/clinic/VisitCta";
import { PageIntro } from "@/components/clinic/PageIntro";
import { PhotoSlot } from "@/components/clinic/PhotoSlot";
import { IconArrowUpRight, IconPhone } from "@/components/ui/Icons";
import { telHref } from "@/lib/links";
export const metadata: Metadata = {
  title: "Chirurgia laparoscopica a Leinì",
  description:
    "La chirurgia laparoscopica è tra le prestazioni dell’Ambulatorio Veterinario Leinì e le aree di interesse del Dott. Davide Boasso. Informazioni per telefono.",
};
export default function Laparoscopia() {
  return (
    <>
      <PageIntro
        eyebrow="Chirurgia · In ambulatorio"
        title={
          <>
            Chirurgia
            <br />
            <em>laparoscopica.</em>
          </>
        }
        description="Una prestazione dell’ambulatorio e una delle principali aree di interesse del Dott. Davide Boasso."
      />
      <LaparoscopyFeature standalone />
      <div className="container">
        {laparoscopyVideo.authorized && laparoscopyVideo.src && laparoscopyVideo.captions && <section className="lap-video" aria-label="Approfondimento video sulla chirurgia laparoscopica">
          <video controls preload="none" aria-label="La chirurgia laparoscopica in ambulatorio">
            <source src={laparoscopyVideo.src} />
            <track kind="captions" src={laparoscopyVideo.captions} srcLang="it" label="Italiano" default />
          </video>
        </section>}
        <section className="lap-detail-editorial">
          <div>
            <p className="eyebrow">Il medico</p>
            <h2>Dott. Davide Boasso</h2>
            <p>
              Direttore sanitario, laureato nel 2007, gestisce la struttura dal
              gennaio 2009. Tra le sue principali aree di interesse: chirurgia
              dei tessuti molli, chirurgia laparoscopica, medicina interna e
              oftalmologia.
            </p>
            <Link href="/equipe" className="text-link">
              Conosci il medico
              <IconArrowUpRight />
            </Link>
          </div>
          <div>
            <p className="eyebrow">Il primo contatto</p>
            <h2>Parliamone al telefono.</h2>
            <p>
              Per informazioni sulla prestazione e per concordare una visita,
              chiama l’ambulatorio. Gli appuntamenti si fissano esclusivamente
              per telefono.
            </p>
            <a href={telHref} className="button">
              <IconPhone />
              Chiama l’ambulatorio
            </a>
          </div>
        </section>
        <div className="lap-photo-pair">
          <PhotoSlot photo="surgery" />
          <PhotoSlot photo="dayHospital" />
        </div>
        <Link href="/prestazioni" className="text-link all-services-link">
          Esplora tutte le prestazioni
          <IconArrowUpRight />
        </Link>
      </div>
      <VisitCta />
    </>
  );
}
