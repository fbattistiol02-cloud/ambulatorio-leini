import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FocusScene } from "@/components/sections/FocusScene";
import { StickyBar } from "@/components/sections/StickyBar";

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
      </main>
      <StickyBar />
    </>
  );
}
