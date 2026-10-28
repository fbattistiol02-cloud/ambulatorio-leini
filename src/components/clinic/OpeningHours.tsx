import { site } from "@/content/site";

export function OpeningHours({ compact = false }: { compact?: boolean }) {
  const Heading = compact ? "h2" : "h3";
  return (
    <div className={`hours-block${compact ? " hours-quick" : ""}`}>
      <Heading>Orari dell’ambulatorio</Heading>
      <dl>
        <div><dt>Lunedì–Venerdì</dt><dd><span>{site.hours.weekday}</span><span>{site.hours.afternoon}</span></dd></div>
        <div><dt>Sabato</dt><dd>{site.hours.saturday}</dd></div>
      </dl>
    </div>
  );
}
