import sharp from "sharp";

const background = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#faf9f5"/><path d="M800 0h400v630H800a250 250 0 0 1 0-630" fill="#e5edf1"/><g fill="none" stroke="#8fa8b7" stroke-width="1"><circle cx="970" cy="295" r="190"/><circle cx="970" cy="295" r="145" stroke-dasharray="2 9"/><path d="M740 295h460M970 65v460"/></g><text x="75" y="100" font-family="Arial,sans-serif" font-size="16" letter-spacing="2" fill="#236183">AMBULATORIO VETERINARIO LEINÌ</text><text x="70" y="255" font-family="Georgia,serif" font-size="98" fill="#203e50">Veterinario</text><text x="70" y="360" font-family="Georgia,serif" font-style="italic" font-size="108" fill="#236183">a Leinì.</text><text x="75" y="445" font-family="Georgia,serif" font-size="32" fill="#203e50">La cura, da vicino.</text><path d="M75 510h1050" stroke="#c0d0da"/><text x="75" y="558" font-family="Arial,sans-serif" font-size="20" fill="#536473">Via San Francesco al Campo 24, Leinì</text><text x="1120" y="558" text-anchor="end" font-family="Arial,sans-serif" font-size="20" fill="#236183">011 998 1469</text></svg>`);
await sharp(background).jpeg({quality:90}).toFile("public/og.jpg");
// Unico simbolo autentico anche per favicon e icona di condivisione.
await sharp("public/media/brand/simbolo.png")
  .resize(64, 64, { fit: "contain", background: "#ffffff" })
  .png()
  .toFile("src/app/icon.png");
const icon = await sharp("public/media/brand/simbolo.png")
  .resize(32, 32, { fit: "contain", background: "#ffffff" })
  .ensureAlpha()
  .png()
  .toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 32;
header[7] = 32;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(icon.length, 14);
header.writeUInt32LE(22, 18);
const { writeFile } = await import("node:fs/promises");
await writeFile("src/app/favicon.ico", Buffer.concat([header, icon]));
console.log("OG, favicon e icona aggiornati dal logo originale.");
