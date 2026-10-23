"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { expertiseAreas } from "@/content/experience";
import { professionals } from "@/content/site";
import { PhotoSlot } from "./PhotoSlot";
import { IconArrowUpRight } from "@/components/ui/Icons";
import styles from "./SignatureExperience.module.css";
export function ExpertiseAtlas() {
  const [active, setActive] = useState(0);
  const controls = useRef<(HTMLButtonElement | null)[]>([]);
  const area = expertiseAreas[active];
  const related = (index: number) =>
    (area.people as readonly number[]).includes(index);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | undefined;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % expertiseAreas.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index - 1 + expertiseAreas.length) % expertiseAreas.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = expertiseAreas.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      setActive(next);
      controls.current[next]?.focus();
    }
  }
  return (
    <section className={styles.expertise} id="competenze">
      <div className="container">
        <div className={styles.expertiseHeading}>
          <div>
            <p className="eyebrow">Boasso & Valieri / Le aree di interesse</p>
            <h2>
              Due sguardi.
              <br />
              Un’unica <em>équipe.</em>
            </h2>
          </div>
          <p>Seleziona un’area e conosci i medici che se ne interessano.</p>
        </div>
        <div className={styles.atlasGrid}>
          <div
            className={styles.areaList}
            role="radiogroup"
            aria-label="Aree di interesse dei medici"
          >
            {expertiseAreas.map((item, index) => (
              <button
                key={item.id}
                id={`expertise-tab-${index}`}
                ref={(el) => {
                  controls.current[index] = el;
                }}
                role="radio"
                type="button"
                aria-checked={active === index}
                aria-controls="expertise-panel"
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => navigate(event, index)}
              >
                <span className={styles.areaDot} aria-hidden="true" />
                <span>{item.label}</span>
                <span className={styles.areaArrow} aria-hidden="true">
                  ↗
                </span>
              </button>
            ))}
          </div>
          <div
            className={styles.atlasPanel}
            id="expertise-panel"
            role="region"
            aria-labelledby={`expertise-tab-${active}`}
            tabIndex={0}
          >
            <div className={styles.areaDescription}>
              <p key={area.id}>{area.description}</p>
              <Link href={area.href}>
                {area.link}
                <IconArrowUpRight />
              </Link>
            </div>
            <div className={styles.doctorConnection} aria-hidden="true">
              <svg viewBox="0 0 700 55" preserveAspectRatio="none">
                <path
                  className={related(0) ? styles.connected : ""}
                  d="M350 0C350 30 175 0 175 52"
                />
                <path
                  className={related(1) ? styles.connected : ""}
                  d="M350 0C350 30 525 0 525 52"
                />
              </svg>
              <span className={styles.connectionOrigin} />
            </div>
            <div className={styles.atlasPeople}>
              {professionals.map((person, index) => (
                <article
                  className={`${styles.atlasPerson} ${related(index) ? styles.related : ""}`}
                  key={person.name}
                >
                  <div className={styles.relatedLabel}>
                    <span aria-hidden="true" />
                    {related(index)
                      ? "Area di interesse"
                      : "Il profilo professionale"}
                  </div>
                  <Link
                    href={`/equipe#${index === 0 ? "davide-boasso" : "erika-valieri"}`}
                    aria-label={`Conosci ${person.name}`}
                  >
                    <PhotoSlot
                      photo={index === 0 ? "boasso" : "valieri"}
                      srcOverride={person.photo}
                      className={styles.atlasPortrait}
                    />
                  </Link>
                  <p className={styles.doctorRole}>
                    {person.qualification || person.role}
                  </p>
                  <h3>
                    <Link
                      href={`/equipe#${index === 0 ? "davide-boasso" : "erika-valieri"}`}
                    >
                      {person.name}
                      <IconArrowUpRight />
                    </Link>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.liveStatus} role="status">
          {area.label}:{" "}
          {professionals
            .filter((_, index) => related(index))
            .map((person) => person.name)
            .join(" e ")}
          .
        </p>
      </div>
    </section>
  );
}
