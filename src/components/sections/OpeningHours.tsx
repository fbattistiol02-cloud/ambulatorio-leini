"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { getOpenStatus, romeNow, type OpenStatus } from "@/lib/openStatus";

/** Orari con badge "Aperto ora / Chiuso" calcolato nel fuso di Roma (solo client: nessun mismatch di idratazione). */
export function OpeningHours() {
  const [status, setStatus] = useState<OpenStatus | null>(null);
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      setStatus(getOpenStatus());
      setToday(romeNow().day);
    };
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div>
      <div className="flex min-h-9 items-center gap-3" aria-live="polite">
        {status && (
          <>
            <span
              aria-hidden
              className={`h-2.5 w-2.5 rounded-full ${status.open ? "bg-[#2e7d4e]" : "bg-ink-soft/60"}`}
              style={status.open ? { animation: "pulse-dot 2s infinite" } : undefined}
            />
            <span className="font-semibold">{status.label}</span>
            {status.detail && <span className="text-ink-soft">· {status.detail}</span>}
          </>
        )}
      </div>

      <table className="mt-4 w-full text-[0.98rem]">
        <caption className="sr-only">Orari di apertura</caption>
        <tbody>
          {site.hours.days.map((d) => (
            <tr
              key={d.day}
              className={`border-t border-ink/15 ${today === d.day ? "font-semibold text-ink" : "text-ink-soft"}`}
            >
              <th scope="row" className="py-3 pr-4 text-left font-[inherit]">
                {d.label}
              </th>
              <td className="py-3 text-right">
                {d.slots.length ? d.slots.map(([a, b]) => `${a}–${b}`).join("  ·  ") : "Chiuso"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-xs text-ink-soft">Orari da confermare con lo studio.</p>
    </div>
  );
}
