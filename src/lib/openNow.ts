import { site } from "@/content/site";

export type OpenState = { open: boolean; label: string };

const DAYS = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
const toMin = (hhmm: string) => Number(hhmm.slice(0, 2)) * 60 + Number(hhmm.slice(3, 5));

/** Stato "aperto ora" calcolato sull'orario consueto, nel fuso Europe/Rome. Nessuna gestione di festività. */
export function openState(now: Date = new Date()): OpenState {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(now);
  const get = (type: string) => parts.find(p => p.type === type)?.value ?? "";
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  const today = site.schedule[weekday] ?? [];
  const current = today.find(([from, to]) => minutes >= toMin(from) && minutes < toMin(to));
  if (current) return { open: true, label: `Aperto ora · fino alle ${current[1]}` };
  const later = today.find(([from]) => minutes < toMin(from));
  if (later) return { open: false, label: `Chiuso ora · riapre alle ${later[0]}` };
  for (let i = 1; i <= 7; i++) {
    const day = (weekday + i) % 7;
    const slot = site.schedule[day]?.[0];
    if (slot) return { open: false, label: `Chiuso ora · riapre ${i === 1 ? "domani" : DAYS[day]} alle ${slot[0]}` };
  }
  return { open: false, label: "Chiuso ora" };
}
