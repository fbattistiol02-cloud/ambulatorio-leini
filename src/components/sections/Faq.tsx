import { questions } from "@/content/experience";
export function Faq() {
  return (
    <section
      id="domande"
      className="section faq-section"
      aria-labelledby="faq-title"
    >
      <div className="wrap faq-grid">
        <div>
          <p className="eyebrow">QUALCHE RISPOSTA IN PIÙ</p>
          <h2 id="faq-title" data-reveal="title">
            I piccoli dubbi,
            <br />
            <em>prima di iniziare.</em>
          </h2>
        </div>
        <div>
          {questions.map(([q, a], i) => (
            <details className="faq-item" key={q} name="faq" open={i === 0}>
              <summary>
                {q}
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
