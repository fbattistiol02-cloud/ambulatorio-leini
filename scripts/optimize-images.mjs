// Ritaglia, ridimensiona e comprime le foto stock.
// Uso: node scripts/optimize-images.mjs assets-raw public/images
// Scrive anche src/content/images.generated.json (placeholder sfocati).
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const [rawDir = "assets-raw", outDir = "public/images"] = process.argv.slice(2);

// Ritagli (in pixel dell'originale 2400px) scelti guardando le foto.
const jobs = [
  { name: "hero", crop: { left: 790, top: 690, width: 1160, height: 1160 }, width: 1100 },
  { name: "visita", crop: { left: 500, top: 330, width: 1500, height: 900 }, width: 1400 },
  { name: "closing", crop: { left: 540, top: 0, width: 1225, height: 1225 }, width: 1100 },
];

await mkdir(outDir, { recursive: true });
const blur = {};

for (const j of jobs) {
  const input = path.join(rawDir, `${j.name}.jpg`);
  const out = path.join(outDir, `${j.name}.jpg`);
  const img = sharp(input).extract(j.crop).resize({ width: j.width });
  const info = await img
    .clone()
    .jpeg({ quality: 80, mozjpeg: true, progressive: true })
    .toFile(out);
  const tiny = await img.clone().resize(16).blur(1).jpeg({ quality: 50 }).toBuffer();
  blur[j.name] = `data:image/jpeg;base64,${tiny.toString("base64")}`;
  console.log(`${j.name}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
}

await writeFile("src/content/images.generated.json", JSON.stringify(blur, null, 2));
console.log("placeholder scritti in src/content/images.generated.json");
