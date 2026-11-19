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
  title: "Chirurgia laparoscopica e mininvasiva a Leinì",
  description:
    "Chirurgia mininvasiva veterinaria a Leinì: come funziona e quali vantaggi può offrire negli interventi per cui è indicata. Una prestazione del Dott. Davide Boasso.",
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
      <section className="container v2-mini" data-area="laparoscopia" aria-labelledby="mini-title">
        <div className="v2-mini-copy">
          <p className="eyebrow">Chirurgia mininvasiva</p>
          <h2 id="mini-title">Cosa rappresenta la chirurgia mininvasiva <em>veterinaria?</em></h2>
          <p>La laparoscopia è un’evoluzione della chirurgia veterinaria.</p>
          <p>Attraverso piccole incisioni e con l’aiuto di una telecamera, il chirurgo osserva in dettaglio l’area di intervento e può lavorare con precisione.</p>
        </div>
        <div className="v2-mini-media"><PhotoSlot photo="laparoscopy" className="v2-mini-photo" preload /><p className="v2-photo-note">Lo strumentario per la laparoscopia</p></div>
        <div className="v2-benefits">
          <article><span aria-hidden="true">01</span><h3>Incisioni ridotte</h3><p>Negli interventi per cui è indicata, la laparoscopia permette di operare attraverso incisioni più piccole.</p></article>
          <article><span aria-hidden="true">02</span><h3>Visualizzazione dettagliata</h3><p>L’immagine sul monitor aiuta a distinguere le strutture e, in alcuni interventi, a limitare la manipolazione degli organi</p></article>
        </div>
        <div className="v2-outcome">
          <div>
            <h3>Recupero e comfort</h3>
            <p>Quando la tecnica è adatta, può contribuire a ridurre il dolore postoperatorio e favorire una degenza più breve e un recupero più rapido. La gestione del dolore dipende dall’intervento e dalle condizioni dell’animale.</p>
          </div>
          <PhotoSlot photo="laparoscopyInstruments" className="v2-outcome-photo lap-instruments" />
        </div>
      </section>
      <div className="container">
        {laparoscopyVideo.authorized && laparoscopyVideo.src && (
          <section className="lap-video v2-video" aria-labelledby="video-title">
            <h2 id="video-title">La laparoscopia, da vicino</h2>
            <video controls playsInline preload="none" aria-labelledby="video-title" poster={laparoscopyVideo.poster ?? undefined}>
              <source src={laparoscopyVideo.src} />
              {laparoscopyVideo.captions && <track kind="captions" src={laparoscopyVideo.captions} srcLang="it" label="Italiano" default />}
            </video>
          </section>
        )}
        <section className="v2-steps" aria-labelledby="steps-title">
          <p className="eyebrow">Come si procede</p>
          <h2 id="steps-title">Dalla telefonata <em>alla visita</em></h2>
          <ol>
            <li><span>1</span><p>Chiami l’ambulatorio e fissi una visita.</p></li>
            <li><span>2</span><p>Il Dott. Boasso valuta il caso.</p></li>
            <li><span>3</span><p>Se la laparoscopia è indicata, ti spiega come procedere.</p></li>
          </ol>
        </section>
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
              Chiama per informazioni
            </a>
          </div>
        </section>
        <Link href="/prestazioni" className="text-link all-services-link">
          Esplora tutte le prestazioni
          <IconArrowUpRight />
        </Link>
      </div>
      <VisitCta />
    </>
  );
}
