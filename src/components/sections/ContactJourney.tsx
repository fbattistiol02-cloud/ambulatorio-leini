"use client";
import { useEffect, useRef, useState } from "react";
import { Sketch, Arrow } from "../ui/Sketch";
import { services } from "@/content/experience";
import { CallLink } from "../ui/CallLink";
const animals = [
  { id: "dog", label: "Un cane", phrase: "il mio cane" },
  { id: "cat", label: "Un gatto", phrase: "il mio gatto" },
  { id: "other", label: "Un altro animale", phrase: "il mio animale" },
] as const;
const reasons = ["Una prima visita", "Un controllo", "Informazioni"] as const;
export function ContactJourney() {
  const [step, setStep] = useState(0);
  const [animal, setAnimal] = useState("");
  const [reason, setReason] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [status, setStatus] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);
  function focusHeading() {
    requestAnimationFrame(() =>
      heading.current?.focus({ preventScroll: true }),
    );
  }
  function go(next: number) {
    setStep(next);
    setStatus("");
    focusHeading();
  }
  useEffect(() => {
    const onTopic = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      const service = services.find((s) => s.id === id);
      if (service) {
        setTopic(service.topic);
        setReason("Informazioni");
        setStep(0);
        setStatus("");
      }
    };
    window.addEventListener("leini-topic", onTopic);
    return () => window.removeEventListener("leini-topic", onTopic);
  }, []);
  function preview() {
    const nextSignature = [animal, reason, topic].join("|");
    if (signature !== nextSignature) {
      const pet =
        animals.find((a) => a.id === animal)?.phrase ?? "il mio animale";
      const subject = topic
        ? `informazioni su ${topic} per ${pet}`
        : reason === "Una prima visita"
          ? `informazioni per una prima visita per ${pet}`
          : reason === "Un controllo"
            ? `informazioni per un controllo per ${pet}`
            : `alcune informazioni per ${pet}`;
      setMessage(
        `Buongiorno, vorrei ${subject}.${animal === "other" ? " Trattate anche questa tipologia di animale?" : ""} Come possiamo concordare il prossimo passo?`,
      );
      setSignature(nextSignature);
    }
    go(2);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus("Messaggio copiato. Nessuna richiesta è stata inviata.");
    } catch {
      textarea.current?.focus();
      textarea.current?.select();
      setStatus(
        "Copia non disponibile: il testo è selezionato. Usa il comando Copia del tuo dispositivo.",
      );
    }
  }
  function reset() {
    setAnimal("");
    setReason("");
    setTopic("");
    setMessage("");
    setSignature("");
    go(0);
  }
  return (
    <section
      id="primo-contatto"
      className="section contact-section"
      aria-labelledby="contact-title"
      data-motion-scene
    >
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">05 — COMINCIAMO DA QUI</p>
          <h2 id="contact-title" data-reveal="title">
            Cominciamo
            <br />
            <em>da una telefonata.</em>
          </h2>
          <p>
            Per informazioni e per concordare il prossimo passo, puoi chiamare
            lo studio.
          </p>
          <CallLink className="btn btn-primary contact-call" />
          <p className="contact-alternative">
            Preferisci scrivere? Il percorso guidato ti aiuta a preparare un
            messaggio.
          </p>
          <div className="contact-illustration" key={animal || "welcome"}>
            <Sketch
              kind={
                animal === "cat" ? "cat" : animal === "other" ? "other" : "dog"
              }
            />
            <span>
              Ogni storia è diversa.
              <br />
              <em>Cominciamo dalla vostra.</em>
            </span>
          </div>
          <a className="text-link" href="#dove">
            Cerchi indirizzo e recapiti? <Arrow diagonal />
          </a>
        </div>
        <div
          id="prepara-messaggio"
          className="journey"
          data-reveal
          data-step={step}
        >
          <div className="journey-top">
            <span className="eyebrow">PREFERISCI SCRIVERE?</span>
            <span className="demo-pill">Prova la demo</span>
          </div>
          <ol className="journey-progress" aria-label="Avanzamento">
            {["Il tuo animale", "Il motivo", "Il messaggio"].map((s, i) => (
              <li key={s} aria-current={i === step ? "step" : undefined}>
                <span>{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <h3 ref={heading} tabIndex={-1} className="journey-heading">
            {step === 0
              ? "Chi ci presenti?"
              : step === 1
                ? "Da dove cominciamo?"
                : "Le tue parole, pronte."}
          </h3>
          {topic && (
            <p className="topic-note">
              Argomento: {topic}{" "}
              <button
                onClick={() => {
                  setTopic("");
                  if (step === 2) go(1);
                }}
                type="button"
                aria-label="Rimuovi argomento"
              >
                ×
              </button>
            </p>
          )}
          {step === 0 && (
            <div className="journey-stage" key="animal">
              <fieldset>
                <legend className="sr-only">Scegli il tuo animale</legend>
                <div className="animal-choices">
                  {animals.map((a) => (
                    <label
                      key={a.id}
                      className={`animal-choice ${animal === a.id ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="animal"
                        value={a.id}
                        checked={animal === a.id}
                        onChange={() => setAnimal(a.id)}
                      />
                      <Sketch kind={a.id} />
                      <span>{a.label}</span>
                      <span className="choice-dot" aria-hidden="true" />
                    </label>
                  ))}
                </div>
              </fieldset>
              <p className="field-hint">
                Per altri animali prepariamo una domanda sulle specie trattate.
              </p>
              <div className="journey-actions">
                <span className="small-note">
                  Nessun dato personale richiesto.
                </span>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!animal}
                  onClick={() => go(1)}
                >
                  Continua <Arrow />
                </button>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="journey-stage" key="reason">
              <fieldset className="reason-choices">
                <legend className="sr-only">
                  Scegli il motivo del contatto
                </legend>
                {reasons.map((r) => (
                  <label key={r} className={reason === r ? "selected" : ""}>
                    <input
                      type="radio"
                      name="reason"
                      checked={reason === r}
                      onChange={() => {
                        setReason(r);
                        if (r !== "Informazioni") setTopic("");
                      }}
                    />
                    <span>{r}</span>
                    <span className="choice-dot" aria-hidden="true" />
                  </label>
                ))}
              </fieldset>
              <div className="journey-actions">
                <button
                  className="back-link"
                  type="button"
                  onClick={() => go(0)}
                >
                  ← Indietro
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  disabled={!reason}
                  onClick={preview}
                >
                  Vedi il messaggio <Arrow />
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="journey-stage" key="message">
              <label htmlFor="contact-message" className="field-label">
                Puoi modificarlo come preferisci.
              </label>
              <textarea
                ref={textarea}
                id="contact-message"
                value={message}
                rows={5}
                maxLength={2000}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setStatus("");
                }}
              />
              <div className="journey-actions">
                <button
                  className="back-link"
                  type="button"
                  onClick={() => go(1)}
                >
                  ← Modifica le scelte
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  disabled={!message.trim()}
                  onClick={copy}
                >
                  Copia il messaggio <Arrow />
                </button>
              </div>
              <button className="restart-link" type="button" onClick={reset}>
                Ricomincia da capo
              </button>
            </div>
          )}
          <p className="copy-status" role="status">
            {status}
          </p>
          <p className="journey-disclaimer">
            Solo una prova: il messaggio resta in questa pagina, non viene
            salvato né inviato. Il canale WhatsApp sarà attivato dopo la
            conferma dello studio.
          </p>
          <noscript>
            <p>
              Per comporre il messaggio guidato è necessario JavaScript.
              Indirizzo, recapiti e informazioni sulla demo restano disponibili
              qui sotto.
            </p>
          </noscript>
        </div>
      </div>
    </section>
  );
}
