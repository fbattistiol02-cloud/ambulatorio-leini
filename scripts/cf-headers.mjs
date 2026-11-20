// Scrive out/_headers: cache e sicurezza; noindex finché il sito non è indicizzabile.
import { writeFileSync } from "node:fs";
const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";
const common = [
  "  X-Content-Type-Options: nosniff",
  "  Referrer-Policy: strict-origin-when-cross-origin",
  ...(indexable ? [] : ["  X-Robots-Tag: noindex, nofollow"]),
];
const immutable = "  Cache-Control: public, max-age=31536000, immutable";
const rules = ["/*", ...common, "", "/_next/static/*", immutable, "", "/media/*", "  Cache-Control: public, max-age=2592000", ""];
writeFileSync("out/_headers", rules.join("\n"));
console.log(`_headers scritto (indicizzabile: ${indexable})`);
