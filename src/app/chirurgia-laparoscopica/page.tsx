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
    "Chirurgia mininvasiva veterinaria a Leinì: incisioni ridotte, minor trauma ai tessuti, degenza più breve e recupero più veloce. Una prestazione del Dott. Davide Boasso.",
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
          <p>Rappresenta un progresso tecnologico nella cura e nella chirurgia degli animali.</p>
          <p>Questo approccio minimizza il trauma ai tessuti interessati e permette al tempo stesso una visualizzazione ad alta precisione, consentendo al chirurgo di operare con estrema accuratezza e riducendo al minimo l’impatto sul paziente.</p>
        </div>
        <PhotoSlot photo="laparoscopy" className="v2-mini-photo" preload />
        <div className="v2-benefits">
          <article><span aria-hidden="true">01</span><h3>Incisioni ridotte</h3><p>rispetto alle tecniche chirurgiche tradizionali</p></article>
          <article><span aria-hidden="true">02</span><h3>Minor manipolazione degli organi</h3><p>meno impatto sul paziente</p></article>
        </div>
        <div className="v2-outcome">
          <div>
            <h3>Cosa si ottiene?</h3>
            <ul>
              <li><strong>Degenza post-operatoria più breve</strong> rispetto alla chirurgia tradizionale.</li>
              <li><strong>Recupero più veloce:</strong> i pazienti tornano rapidamente alla loro normale routine.</li>
              <li><strong>Meno dolore</strong> e, di conseguenza, un minore utilizzo di farmaci.</li>
            </ul>
          </div>
          <PhotoSlot photo="dayHospital" className="v2-outcome-photo" />
        </div>
      </section>
      <div className="container">
        <section className="lap-video v2-video" aria-labelledby="video-title">
          <div className="v2-head"><div><p className="eyebrow">Approfondimento</p><h2 id="video-title">La laparoscopia, <em>da vicino</em></h2></div></div>
          {laparoscopyVideo.authorized && laparoscopyVideo.src && laparoscopyVideo.captions
            ? <video controls preload="none" aria-label="La chirurgia laparoscopica in ambulatorio" poster={laparoscopyVideo.poster ?? undefined}>
                <source src={laparoscopyVideo.src} />
                <track kind="captions" src={laparoscopyVideo.captions} srcLang="it" label="Italiano" default />
              </video>
            : <div className="v2-video-soon" data-area="laparoscopia">
                <svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="32" cy="32" r="26" /><path d="M26 22v20l17-10Z" fill="currentColor" fillOpacity=".15" /></svg>
                <p><strong>Il video di un intervento laparoscopico arriverà qui.</strong><br />Appena il Dott. Boasso lo avrà disponibile.</p>
              </div>}
        </section>
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
              Chiama l’ambulatorio
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
