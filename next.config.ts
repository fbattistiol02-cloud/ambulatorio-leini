import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Sito interamente statico: pubblicato come file su Cloudflare (cartella "out").
  output: "export",
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
  // Le immagini sono già ottimizzate (WebP) in public/media.
  images: { unoptimized: true },
};
export default nextConfig;
