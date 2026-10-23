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
            Due medici.
            <br />
            Un’unica <em>équipe.</em>
          </>
        }
        description="Il Dott. Davide Boasso e la Dott.ssa Erika Valieri: conosci i medici veterinari, la loro formazione e le rispettive aree di interesse."
      />
      <div className="container">
        <div className="professional-list">
          {professionals.map((person, index) => (
            <article
              className={`professional profile-with-portrait profile-${index + 1}`}
              id={index === 0 ? "davide-boasso" : "erika-valieri"}
              key={person.name}
            >
              <PhotoSlot
                photo={index === 0 ? "boasso" : "valieri"}
                srcOverride={person.photo}
                className="portrait-photo"
              />
              <div className="professional-copy">
                <span className="profile-index">
                  0{index + 1} / Il percorso
                </span>
                <p className="eyebrow">{person.role}</p>
                <h2>{person.name}</h2>
                {person.qualification && (
                  <span className="qualification">{person.qualification}</span>
                )}
                <p className="degree">{person.degree}</p>
                <p>{person.bio}</p>
                <p className="interests">{person.interests}</p>
                {person.name === professionals[0].name &&
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
