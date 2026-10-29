import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/clinic/PageIntro";
import { PhotoSlot } from "@/components/clinic/PhotoSlot";
import { VisitCta } from "@/components/clinic/VisitCta";
import { IconArrowUpRight } from "@/components/ui/Icons";
export const metadata: Metadata = {
  title: "L’ambulatorio veterinario a Leinì",
  description:
    "Conosci l’Ambulatorio Veterinario Leinì, in Via San Francesco al Campo 24: visite, laboratorio interno, diagnostica, chirurgia e day hospital.",
};
export default function Ambulatorio() {
  return (
    <>
      <PageIntro
        eyebrow="L’ambulatorio"
        title={
          <>
            Il tuo veterinario di fiducia a <em>Leinì</em> dal 2009
          </>
        }
        description="In Via San Francesco al Campo 24, un ambulatorio per cani, gatti e animali non convenzionali. Il Dott. Davide Boasso gestisce la struttura dal gennaio 2009."
        photo="reception"
      />
      <div className="container">
        <section className="clinic-story">
          <div>
            <p className="eyebrow">Medicina, diagnostica e chirurgia</p>
            <h2>La visita è il punto di partenza.</h2>
            <p>
              Le visite cliniche si svolgono su appuntamento. All’attività di
              medicina si affiancano il laboratorio interno per gli esami del
              sangue, la radiologia digitale diretta, l’ecografia e la chirurgia.
            </p>
            <p>
              Il day hospital è dedicato alle terapie giornaliere o
              post-chirurgiche. La chirurgia laparoscopica è una delle
              principali aree di interesse del Dott. Boasso.
            </p>
            <Link className="text-link" href="/prestazioni">
              Esplora le prestazioni
              <IconArrowUpRight />
            </Link>
          </div>
          <PhotoSlot photo="visit" className="story-photo" />
        </section>
        <section className="spaces-section">
          <div className="section-top">
            <div>
              <p className="eyebrow">Dentro l’ambulatorio</p>
              <h2>
                Gli spazi.
                <br />
                Il lavoro <em>quotidiano.</em>
              </h2>
            </div>
          </div>
          <div className="spaces-grid">
            <PhotoSlot photo="laboratory" />
            <PhotoSlot photo="imaging" />
            <PhotoSlot photo="dayHospital" />
          </div>
        </section>
        <section className="clinic-story story-reverse">
          <PhotoSlot photo="team" className="story-photo" />
          <div>
            <p className="eyebrow">I professionisti</p>
            <h2>La nostra équipe</h2>
            <p>
              L’attività dell’ambulatorio è seguita dal direttore sanitario
              Dott. Davide Boasso insieme ai medici veterinari dell’équipe, con
              aree di interesse che comprendono medicina interna, chirurgia,
              oftalmologia, citologia e dermatologia.
            </p>
            <p>
              Per alcune prestazioni l’ambulatorio si avvale di specialisti
              esterni. Le collaborazioni sono indicate nella pagina delle
              prestazioni.
            </p>
            <Link href="/equipe" className="text-link">
              Conosci l’équipe
              <IconArrowUpRight />
            </Link>
          </div>
        </section>
      </div>
      <VisitCta />
    </>
  );
}
