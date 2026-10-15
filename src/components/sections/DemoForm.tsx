"use client";

import { useState, type FormEvent } from "react";
import { copy } from "@/content/site";

const field =
  "w-full rounded-xl border border-ink/20 bg-paper-2/60 px-4 py-3 text-base text-ink placeholder:text-ink-soft/70 transition-colors focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-hazel-deep";

/** Modulo DIMOSTRATIVO: non invia nulla, mostra solo una conferma simulata. */
export function DemoForm() {
  const { form } = copy;
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="grid gap-10 rounded-[2rem] bg-paper p-7 text-ink lg:grid-cols-12 lg:p-12">
      <div className="lg:col-span-5">
        <h3 className="display-md">{form.title}</h3>
        <p className="mt-4 text-sm text-ink-soft">{form.note}</p>
      </div>

      <div className="lg:col-span-7">
        {sent ? (
          <p role="status" className="rounded-2xl bg-mist p-6 text-lg">
            {form.success}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              {form.fields.name}
              <input required name="name" autoComplete="name" className={`${field} mt-2`} />
            </label>
            <label className="block text-sm font-semibold">
              {form.fields.phone}
              <input required name="tel" type="tel" autoComplete="tel" inputMode="tel" className={`${field} mt-2`} />
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              {form.fields.animal}
              <input name="animal" className={`${field} mt-2`} />
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              {form.fields.message}
              <textarea name="message" rows={3} className={`${field} mt-2 resize-none`} />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                {form.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
