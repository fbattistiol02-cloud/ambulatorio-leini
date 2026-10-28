import { OpeningHours } from "./OpeningHours";
import Link from "next/link";
import { site, campaign } from "@/content/site";
import { IconArrowUpRight } from "@/components/ui/Icons";
import { mailHref, mapsHref, mobileTelHref, telHref } from "@/lib/links";
export function Contact({
  withFaq = false,
  compact = false,
}: {
  withFaq?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      id="contatti"
      className={`contact-section ${compact ? "contact-summary" : ""}`}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-grid">
          <div>
            <p className="eyebrow">Il prossimo passo / Contatti</p>
            <h2 id="contact-title">Parliamone.</h2>
            <p className="contact-intro">Visite su appuntamento telefonico.</p>
            <div className="phone-links">
              <a href={telHref}>{site.phone.display}</a>
              <a href={mobileTelHref}>
                {site.mobile.display}
                <IconArrowUpRight />
              </a>
            </div>
            <a className="email-link" href={mailHref}>
              {site.email}
            </a>
            <p className="contact-caption">
              Informazioni e richieste di ricette.
            </p>
          </div>
          <div className="contact-details">
            <address>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city} (
              {site.address.province})
            </address>
            <a
              href={mapsHref}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apri Google Maps
              <IconArrowUpRight />
            </a>
            <OpeningHours />
            {compact && (
              <Link href="/contatti" className="text-link contact-all">
                Contatti, orari e informazioni
                <IconArrowUpRight />
              </Link>
            )}
          </div>
        </div>
        {withFaq && (
          <div className="faq-strip">
            <div>
              <p className="eyebrow">Le informazioni utili</p>
              <h3>Prima della visita.</h3>
            </div>
            <div className="faq-list">
              {campaign.faqs.map((faq) => (
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
        )}
      </div>
    </section>
  );
}
