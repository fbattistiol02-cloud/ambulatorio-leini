import { Closing } from "@/components/sections/Closing";
import { Cure } from "@/components/sections/Cure";
import { Dove } from "@/components/sections/Dove";
import { Faq } from "@/components/sections/Faq";
import { FocusScene } from "@/components/sections/FocusScene";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Medico } from "@/components/sections/Medico";
import { Proof } from "@/components/sections/Proof";
import { StickyBar } from "@/components/sections/StickyBar";
import { Visita } from "@/components/sections/Visita";

export default function Home() {
  return (
    <>
      <a href="#contenuto" className="skip-link">
        Vai al contenuto
      </a>
      <Header />
      <main id="contenuto">
        <Hero />
        <FocusScene />
        <Proof />
        <Cure />
        <Visita />
        <Medico />
        <Dove />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
