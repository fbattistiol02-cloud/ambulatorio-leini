import { copy, site, toConfirm } from "@/content/site";
import { addressLine, mailHref, telHref } from "@/lib/links";
import { Mark } from "../ui/Mark";
import { MotionToggle } from "../ui/MotionToggle";

export function Footer() {
  const { footer } = copy;
  return (
    <footer className="bg-night pb-28 text-paper md:pb-10">
      <div className="wrap border-t border-paper/15 pt-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Mark className="text-paper" />
              <span className="font-display text-2xl">{site.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-paper/70">{addressLine}</p>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow !text-hazel-light">Contatti</h2>
            <ul className="mt-4 space-y-2 text-paper/80">
              <li>
                <a href={telHref} className="link-u">{site.phone.display}</a>
              </li>
              <li>
                <a href={mailHref} className="link-u">{site.email}</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="eyebrow !text-hazel-light">{footer.demo}</h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              {footer.confirm}
              {toConfirm.length > 0 && (
                <> Da confermare: {toConfirm.join(", ")}.</>
              )}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">{footer.images}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/15 py-6 text-sm text-paper/60 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {site.name} · {footer.demo}</span>
          <MotionToggle className="text-paper/80" />
        </div>
      </div>
    </footer>
  );
}
