/**
 * Caricamento "pigro" delle librerie di animazione.
 * GSAP, ScrollTrigger, SplitText e Lenis (~140 KB) non fanno parte del
 * caricamento iniziale: arrivano a browser libero, in un file a parte.
 */
export type Motion = {
  gsap: (typeof import("gsap"))["gsap"];
  ScrollTrigger: (typeof import("gsap/ScrollTrigger"))["ScrollTrigger"];
  SplitText: (typeof import("gsap/SplitText"))["SplitText"];
  Lenis: (typeof import("lenis"))["default"];
};

let promise: Promise<Motion> | null = null;

export function loadMotion(): Promise<Motion> {
  promise ??= (async () => {
    const [{ gsap }, { ScrollTrigger }, { SplitText }, { default: Lenis }] =
      await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
        import("lenis"),
      ]);
    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.defaults({ ease: "power3.out" });
    ScrollTrigger.config({ ignoreMobileResize: true });
    return { gsap, ScrollTrigger, SplitText, Lenis };
  })();
  return promise;
}

/**
 * Coda di inizializzazione: una attività alla volta, cedendo il controllo al
 * browser tra l'una e l'altra, così nessun blocco lungo sul thread principale.
 * Quando la coda si svuota ricalcola le posizioni di ScrollTrigger.
 */
const queue: Array<() => void> = [];
let running = false;

function run() {
  const job = queue.shift();
  if (!job) {
    running = false;
    promise?.then((m) => m.ScrollTrigger.refresh());
    return;
  }
  try {
    job();
  } catch (error) {
    console.error(error);
  }
  setTimeout(run, 0);
}

export function enqueue(job: () => void) {
  queue.push(job);
  if (!running) {
    running = true;
    setTimeout(run, 0);
  }
}
