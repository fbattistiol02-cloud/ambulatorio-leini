import type { MetadataRoute } from "next";
import { site } from "@/content/site";
export const dynamic = "force-static";
const routes = ["", "/ambulatorio", "/prestazioni", "/chirurgia-laparoscopica", "/equipe", "/contatti", "/privacy"];
/** Vuota finché il sito non è indicizzabile (NEXT_PUBLIC_INDEXABLE=true sul dominio definitivo). */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.indexable) return [];
  return routes.map(route => ({ url: `${site.url}${route}`, changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
