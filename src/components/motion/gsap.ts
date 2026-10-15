import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Registrazione unica dei plugin (sicura in SSR: solo nel browser).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
  gsap.defaults({ ease: "power3.out" });
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
