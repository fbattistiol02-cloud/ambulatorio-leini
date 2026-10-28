import type { Metadata } from "next";
import { PhotoSlot } from "@/components/clinic/PhotoSlot";
import { PageIntro } from "@/components/clinic/PageIntro";
import { professionals, site } from "@/content/site";
import { VisitCta } from "@/components/clinic/VisitCta";

export const metadata: Metadata = {
  title: "Équipe: Davide Boasso ed Erika Valieri",
  description:
    "Conosci il Dott. Davide Boasso, direttore sanitario dell’Ambulatorio Veterinario Leinì, e la Dott.ssa Erika Valieri, GPCert Derm.",
};
export default function Equipe() {
  return (
    <>
      <PageIntro
        eyebrow="L’équipe"
        title={
          <>
            La nostra <em>équipe</em>
          </>
        }
        description="Il Dott. Davide Boasso e la Dott.ssa Erika Valieri: conosci i medici veterinari, la loro formazione e le rispettive aree di interesse."
      />
      <div className="container">
        <div className="professional-list">
          {professionals.map((person, index) => (
            <article
              className={`professional profile-with-portrait profile-${index + 1}`}
              id={person.id}
              key={person.name}
            >
              <PhotoSlot
                photo={person.photoKey}
                srcOverride={person.photo}
                className="portrait-photo"
              />
              <div className="professional-copy">
                <span className="profile-index">
                  0{index + 1} / Il percorso
                </span>
                <p className="eyebrow">{person.role}</p>
                <h2>{person.name}</h2>

                <p className="degree">{person.degree}</p>
                <p>{person.bio}</p>
                <h3>Aree di interesse</h3>
                <ul className="profile-areas">{person.areas.map(area => <li key={area}>{area}</li>)}</ul>
                <h3>Formazione e aggiornamento</h3><p>{person.training}</p>
                <h3>Fuori dall’ambulatorio</h3><p>{person.personal}</p>
                {person.id === "davide-boasso" &&
                  site.social.doctorInstagram && (
                    <a
                      href={site.social.doctorInstagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Profilo Instagram
                    </a>
                  )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <VisitCta />
    </>
  );
}
