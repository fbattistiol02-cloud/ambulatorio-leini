import { Hero } from "@/components/clinic/Hero";
import { Contact } from "@/components/clinic/Contact";
import { ExternalCollaborations } from "@/components/clinic/ExternalCollaborations";
import { PatientGallery } from "@/components/clinic/PatientGallery";
import { ScrollMotion } from "@/components/clinic/MotionScene";
import { HomeFaq, HomeServices, HomeTeam } from "@/components/clinic/EditorialHome";

/** Home breve: orari e chiamata subito, quattro card colorate che rimandano alle finestre di dettaglio. */
export default function Home() {
  return (
    <>
      <ScrollMotion />
      <Hero />
      <HomeServices />
      <HomeTeam />
      <div className="container"><ExternalCollaborations compact /></div>
      <PatientGallery />
      <HomeFaq />
      <Contact compact />
    </>
  );
}
