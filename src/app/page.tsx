import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FocusScene } from "@/components/sections/FocusScene";
import { Cure } from "@/components/sections/Cure";
import { Visita } from "@/components/sections/Visita";
import { ContactJourney } from "@/components/sections/ContactJourney";
import { Dove } from "@/components/sections/Dove";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Footer } from "@/components/sections/Footer";
import { StickyBar } from "@/components/sections/StickyBar";
import { MotionDirector } from "@/components/motion/MotionDirector";
export default function Home() {
  return (
    <>
      <MotionDirector />
      <a href="#contenuto" className="skip-link">
        Vai al contenuto
      </a>
      <Header />
      <main id="contenuto">
        <Hero />
        <FocusScene />
        <Cure />
        <Visita />
        <ContactJourney />
        <Dove />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
