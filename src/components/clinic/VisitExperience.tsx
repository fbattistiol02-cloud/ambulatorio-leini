"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { visitChapters } from "@/content/experience";
import { campaign } from "@/content/site";
import { PhotoSlot } from "./PhotoSlot";
import { IconArrowUpRight } from "@/components/ui/Icons";
import styles from "./SignatureExperience.module.css";
export function VisitExperience({ instance = "home" }: { instance?: string }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const chapter = visitChapters[active];
  function select(index: number, focus = false) {
    setActive(index);
    if (focus) tabs.current[index]?.focus();
  }
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | undefined;
    if (event.key === "ArrowRight") next = (index + 1) % visitChapters.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + visitChapters.length) % visitChapters.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = visitChapters.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      select(next, true);
    }
  }
  return (
    <div className={styles.visit}>
      <div
        className={styles.visitTabs}
        role="tablist"
        aria-label="Conosci l’ambulatorio"
      >
        <div className={styles.visitTrack} aria-hidden="true" />
        {visitChapters.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => {
              tabs.current[index] = el;
            }}
            id={`${instance}-visit-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls={`${instance}-visit-panel`}
            tabIndex={active === index ? 0 : -1}
            onKeyDown={(event) => navigate(event, index)}
            onClick={() => select(index)}
          >
            <span className={styles.pad}>
              <span>0{index + 1}</span>
            </span>
            <span className={styles.tabLabel}>{item.label}</span>
          </button>
        ))}
      </div>
      <div
        className={styles.visitPanel}
        role="tabpanel"
        id={`${instance}-visit-panel`}
        aria-labelledby={`${instance}-visit-tab-${active}`}
        tabIndex={0}
      >
        <div className={styles.visitMedia} key={`image-${chapter.id}`}>
          <PhotoSlot
            photo={chapter.photo}
            srcOverride={active === 0 ? campaign.hero.exteriorImage : undefined}
            preload={active === 0 && instance === "home"}
            className={styles.visitImage}
          />
          <span className={styles.chapterNumber} aria-hidden="true">
            0{active + 1}
          </span>
        </div>
        <div className={styles.visitStory}>
          <p className={styles.chapterKicker}>
            Dentro l’ambulatorio <span>0{active + 1} / 04</span>
          </p>
          <div key={chapter.id} className={styles.chapterCopy}>
            <h2>{chapter.title}</h2>
            <p>{chapter.description}</p>
          </div>
          <div className={styles.visitActions}>
            <button
              className={styles.enterButton}
              type="button"
              onClick={() => select((active + 1) % visitChapters.length)}
            >
              {chapter.next}
              <span aria-hidden="true">→</span>
            </button>
            <div className={styles.visitLinks}>
              <button
                type="button"
                disabled={active === 0}
                onClick={() => select(active - 1, active === 1)}
                aria-label="Tappa precedente"
              >
                ←
              </button>
              <Link href={chapter.link}>
                {chapter.linkLabel}
                <IconArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.liveStatus} role="status">
        Tappa {active + 1} di 4: {chapter.label}.
      </p>
    </div>
  );
}
