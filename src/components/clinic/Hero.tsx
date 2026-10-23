import Link from "next/link";
import { IconArrowUpRight, IconPhone, IconPin } from "@/components/ui/Icons";
import { mapsHref, telHref } from "@/lib/links";
import { campaign, site } from "@/content/site";
import { PhotoSlot } from "./PhotoSlot";
import styles from "./Editorial.module.css";
export function Hero() {
  return (
    <section className={styles.hero} id="percorso">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">Ambulatorio Veterinario Leinì</p>
          <h1>Veterinario<br />a <em>Leinì.</em></h1>
          <p className={styles.motto}>La cura, da vicino.</p>
          <p className={styles.lead}>Medicina, diagnostica e chirurgia per cani, gatti e animali non convenzionali.</p>
          <div className={styles.actions}>
            <a href={telHref} className="button"><IconPhone />Chiama per una visita</a>
            <a href={mapsHref} className="text-link" target="_blank" rel="noopener noreferrer">Come raggiungerci<IconArrowUpRight /></a>
          </div>
          <p className={styles.appointment}>Ci incontriamo su appuntamento telefonico.</p>
        </div>
        <div className={styles.heroVisual}>
          <span className={styles.marginNote}>Il tuo ambulatorio, a Leinì</span>
          <PhotoSlot photo="exterior" preload srcOverride={campaign.hero.exteriorImage} className={styles.exterior} />
          <div className={styles.detailFrame}><PhotoSlot photo="visit" className={styles.detailPhoto} /></div>
          <div className={styles.photoFoot}><span>01 / Gli spazi</span><Link href="/ambulatorio">Conosci l’ambulatorio<IconArrowUpRight /></Link></div>
        </div>
      </div>
      <div className={`container ${styles.locationStrip}`}>
        <a href={mapsHref} target="_blank" rel="noopener noreferrer"><IconPin />{site.address.street}<span>Leinì · Torino</span><IconArrowUpRight /></a>
        <p><span>Dal 2009</span> con il Dott. Davide Boasso</p>
      </div>
    </section>
  );
}
