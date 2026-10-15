import { site } from "@/content/site";

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const WEEKDAY: Record<string, number> = {
  Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
};

/** Giorno e minuti correnti nel fuso di Roma, indipendenti dal fuso del visitatore. */
export function romeNow(date: Date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  return {
    day: WEEKDAY[get("weekday")] ?? 0,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

export type OpenStatus = { open: boolean; label: string; detail: string };

export function getOpenStatus(date: Date = new Date()): OpenStatus {
  const { day, minutes } = romeNow(date);
  const today = site.hours.days.find((d) => d.day === day)!;

  for (const [open, close] of today.slots) {
    if (minutes >= toMin(open) && minutes < toMin(close)) {
      return { open: true, label: "Aperto ora", detail: `Fino alle ${close}` };
    }
  }

  const later = today.slots.find(([open]) => toMin(open) > minutes);
  if (later) {
    return { open: false, label: "Chiuso ora", detail: `Riapre oggi alle ${later[0]}` };
  }

  for (let i = 1; i <= 7; i++) {
    const nextDay = site.hours.days.find((d) => d.day === (day + i) % 7)!;
    if (nextDay.slots.length) {
      const when = i === 1 ? "domani" : nextDay.label.toLowerCase();
      return {
        open: false,
        label: "Chiuso ora",
        detail: `Riapre ${when} alle ${nextDay.slots[0][0]}`,
      };
    }
  }
  return { open: false, label: "Chiuso ora", detail: "" };
}
