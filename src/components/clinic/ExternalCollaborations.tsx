import { externalServices } from "@/content/site";
export function ExternalCollaborations({ compact = false }: { compact?: boolean }) {
  return <section className={`external-section${compact ? " v2-collab" : ""}`} aria-labelledby="collaborazioni-title">
    <div><p className="eyebrow">Con colleghi specialisti</p><h2 id="collaborazioni-title">Collaborazioni <em>esterne</em></h2>
      {!compact && <p>Per queste prestazioni ci avvaliamo della collaborazione di colleghi specialisti. Per informazioni e appuntamenti, chiama l’ambulatorio.</p>}</div>
    <ul>{externalServices.map(service => <li key={service}>{service}</li>)}</ul>
  </section>;
}
