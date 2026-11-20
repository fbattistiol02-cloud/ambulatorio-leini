import type { MetadataRoute } from "next";
import { site } from "@/content/site";
export const dynamic = "force-static";
/** Con NEXT_PUBLIC_INDEXABLE=true (dominio definitivo) i motori di ricerca sono ammessi; altrimenti no. */
export default function robots(): MetadataRoute.Robots {
  if (!site.indexable) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
