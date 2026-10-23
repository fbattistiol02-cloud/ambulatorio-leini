import Link from "next/link";
import { campaign, professionals } from "@/content/site";
import { IconArrowUpRight } from "@/components/ui/Icons";
import { PhotoSlot } from "./PhotoSlot";
import { MedicalDrawing } from "./MedicalDrawing";
import styles from "./Editorial.module.css";
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
          <p>Una delle prestazioni del nostro ambulatorio. Una delle principali aree di interesse del Dott. Davide Boasso.</p>
          <Link href={standalone ? "/equipe#davide-boasso" : "/chirurgia-laparoscopica"} className="text-link">{standalone ? "Conosci il medico" : "Scopri la laparoscopia"}<IconArrowUpRight /></Link>
          <div className={styles.lapDetail}><PhotoSlot photo="laparoscopy" /><p>Gli strumenti.<br />Le persone.<br /><em>Il lavoro quotidiano.</em></p></div>
        </div>
      </div>
    </section>
  );
}
export function EditorialServices() {
  return (
    <section className={`container ${styles.services}`} data-reveal>
      <div className={styles.sectionHead}><div><p className="eyebrow">Le prestazioni</p><h2>Accanto a loro.<br /><em>In ogni cura.</em></h2></div><Link href="/prestazioni" className="text-link">Tutte le prestazioni<IconArrowUpRight /></Link></div>
      <div className={styles.servicesGrid}>{campaign.services.categories.map((item, index) => (
        <Link href={`/prestazioni#${item.id}`} className={styles.service} key={item.id}>
          <span className={styles.serviceKicker}>0{index + 1}<IconArrowUpRight /></span>
          <MedicalDrawing kind={index === 0 ? "visit" : index === 1 ? "lab" : "care"} />
          <h3>{item.title}</h3><p>{item.text}</p>
        </Link>
      ))}</div>
    </section>
  );
}
export function EditorialTeam() {
  return (
    <section className={`container ${styles.team}`} id="competenze" data-reveal>
      <div className={styles.teamIntro}><p className="eyebrow">Le persone, prima di tutto</p><h2>Piacere,<br />i tuoi <em>veterinari.</em></h2><p>Davide Boasso ed Erika Valieri. Due percorsi professionali, nella quotidianità dello stesso ambulatorio.</p><Link href="/equipe" className="text-link">Conosci l’équipe<IconArrowUpRight /></Link></div>
      <div className={styles.portraits}>{professionals.map((person, i) => <article className={styles.person} key={person.name}>
        <Link href={`/equipe#${i === 0 ? "davide-boasso" : "erika-valieri"}`} aria-label={`Conosci ${person.name}`}><PhotoSlot photo={i === 0 ? "boasso" : "valieri"} srcOverride={person.photo} className={styles.portrait} /></Link>
        <p className={styles.personRole}>{person.qualification || person.role}</p><h3>{person.name}</h3><p className={styles.personInterests}>{person.interests}</p>
      </article>)}</div>
    </section>
  );
}
export function EditorialFaq() {
  return (
    <section className={`container ${styles.faq}`} data-reveal><div><p className="eyebrow">Le cose da sapere</p><h2>Prima di <br /><em>incontrarci.</em></h2></div><div className="faq-list">{campaign.faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
  );
}
