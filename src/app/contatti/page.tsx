import type { Metadata } from "next";
import { PageIntro } from "@/components/clinic/PageIntro";
import { Contact } from "@/components/clinic/Contact";
import { PhotoSlot } from "@/components/clinic/PhotoSlot";
import { faqs } from "@/content/site";
export const metadata: Metadata = {
  title: "Contatti, orari e indicazioni",
  description:
    "Ambulatorio Veterinario Leinì, Via San Francesco al Campo 24. Telefono 011 998 1469, cellulare 347 640 1966. Appuntamenti esclusivamente telefonici.",
};
export default function Contatti() {
  return (
    <>
      <PageIntro
        eyebrow="Contatti"
        title={
          <>
            Ci troviamo
            <br />a <em>Leinì.</em>
          </>
        }
        description="Per un appuntamento, chiamaci. Per informazioni e richieste di ricette puoi usare l’email. Qui trovi tutti i recapiti e le indicazioni per raggiungerci."
      />
      <Contact />
      <div className="container contact-arrival">
        <PhotoSlot photo="exterior" className="arrival-photo" />
        <div>
          <p className="eyebrow">Prima della visita</p>
          <h2>Domande frequenti</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
