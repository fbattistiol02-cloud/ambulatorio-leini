import type { MetadataRoute } from "next";
// Staging: non annunciare la sitemap ai crawler. Noindex anche nei metadata HTML.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
