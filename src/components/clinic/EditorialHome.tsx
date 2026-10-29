import Link from "next/link";
import { campaign, curiosita, professionals } from "@/content/site";
import { IconArrowUpRight } from "@/components/ui/Icons";
import { PhotoSlot } from "./PhotoSlot";
import { MedicalDrawing } from "./MedicalDrawing";
import styles from "./Editorial.module.css";

/** Pagina dedicata: banda illustrata della laparoscopia (usata su /chirurgia-laparoscopica). */
export function LaparoscopyFeature({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={styles.laparoscopy} data-reveal aria-labelledby="laparoscopia-title">
      <div className={`container ${styles.lapGrid}`}>
        <div className={styles.instrument}>
          <span className={styles.drawingLabel}>Lo sguardo, il dettaglio.</span>
          <MedicalDrawing />
          <span className={styles.drawingCaption}>Illustrazione editoriale · laparoscopio</span>
        </div>
        <div className={styles.lapCopy}>
          <p className="eyebrow">Un’area di interesse del Dott. Boasso</p>
          <h2 id="laparoscopia-title">Chirurgia<br /><em>laparoscopica.</em></h2>
          <p>Una tecnica che consente di eseguire determinati interventi attraverso piccole incisioni. Disponibile nel nostro ambulatorio.</p>
          <Link href={standalone ? "/equipe#davide-boasso" : "/chirurgia-laparoscopica"} className="text-link">{standalone ? "Conosci il medico" : "Scopri la chirurgia laparoscopica"}<IconArrowUpRight /></Link>
          <div className={styles.lapDetail}><PhotoSlot photo="laparoscopy" /><p>Gli strumenti.<br />Le persone.<br /><em>Il lavoro quotidiano.</em></p></div>
        </div>
      </div>
    </section>
  );
}

const drawing = { medicina: "visit", diagnostica: "lab", chirurgia: "care", laparoscopia: "lap" } as const;

/** Quattro card colorate, nell'ordine chiesto dal dottore: la laparoscopia è l'ultima. */
export function HomeServices() {
  return (
    <section className="container v2-services" data-reveal aria-labelledby="prestazioni-title">
      <div className="v2-head">
        <div><p className="eyebrow">Le prestazioni</p><h2 id="prestazioni-title">Accanto a loro.<br /><em>In ogni cura.</em></h2></div>
        <Link href="/prestazioni" className="text-link">Tutte le prestazioni<IconArrowUpRight /></Link>
      </div>
      <div className="v2-cards">
        {campaign.services.categories.map((item, index) => (
          <Link href={`/prestazioni#${item.id}`} className="v2-card" data-area={item.area} key={item.id}>
            <span className="v2-card-num">0{index + 1}</span>
            <MedicalDrawing kind={drawing[item.area]} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="v2-card-go">Scopri<IconArrowUpRight /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/** Équipe compatta: scala a qualsiasi numero di persone, mostra tutte le aree di interesse. */
export function HomeTeam() {
  return (
    <section className="container v2-team" id="competenze" data-reveal aria-labelledby="team-title">
      <div className="v2-team-intro">
        <p className="eyebrow">Le persone, prima di tutto</p>
        <h2 id="team-title">La nostra <em>équipe</em></h2>
        <p>Conosci i medici dell’ambulatorio, la loro formazione e le aree di interesse.</p>
        <Link href="/equipe" className="text-link">Conosci l’équipe<IconArrowUpRight /></Link>
      </div>
      <div className="v2-people">
        {professionals.map((person) => (
          <article className="v2-person" key={person.id}>
            <Link href={`/equipe#${person.id}`} aria-label={`Conosci ${person.name}`} className="v2-person-photo">
              <PhotoSlot photo={person.photoKey} srcOverride={person.photo} />
            </Link>
            <div>
              <p className="v2-role">{person.role}</p>
              <h3>{person.name}</h3>
              <ul className="v2-chips">{person.areas.map(area => <li key={area}>{area}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Domande frequenti (le prime) e curiosità, affiancate per non allungare la pagina. */
export function HomeFaq({ limit = 5 }: { limit?: number }) {
  return (
    <section className="container v2-faq" data-reveal aria-labelledby="faq-title">
      <div>
        <p className="eyebrow">Le cose da sapere</p>
        <h2 id="faq-title">Domande <em>frequenti</em></h2>
        <div className="faq-list">
          {campaign.faqs.slice(0, limit).map(faq => (
            <details key={faq.question}><summary>{faq.question}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>
          ))}
        </div>
        <Link href="/contatti#domande" className="text-link">Tutte le domande<IconArrowUpRight /></Link>
      </div>
      <aside className="v2-curiosita" aria-labelledby="curiosita-title">
        <p className="eyebrow">Lo sapevi?</p>
        <h2 id="curiosita-title">Curiosità</h2>
        <ul>{curiosita.map(item => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ul>
      </aside>
    </section>
  );
}
