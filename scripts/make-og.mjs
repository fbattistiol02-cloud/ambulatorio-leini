import sharp from "sharp";
const portrait = await sharp("public/images/hero-v2.webp")
  .resize(470, 630, { fit: "cover" })
  .toBuffer();
const svg = Buffer.from(
  `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f5f1e9"/><text x="65" y="90" fill="#535f48" font-family="Arial" font-size="15" letter-spacing="3">AMBULATORIO VETERINARIO · LEINÌ</text><text x="60" y="228" fill="#252b27" font-family="Georgia" font-size="76">Lui si fida di te.</text><text x="60" y="325" fill="#535f48" font-family="Georgia" font-style="italic" font-size="65">Tu meriti</text><text x="60" y="405" fill="#535f48" font-family="Georgia" font-style="italic" font-size="65">risposte chiare.</text><path d="M65 470C230 490 400 450 645 480" fill="none" stroke="#8d4f36"/><text x="65" y="552" fill="#5e645d" font-family="Arial" font-size="18">Il loro mondo, nelle tue mani.</text><text x="65" y="590" fill="#5e645d" font-family="Arial" font-size="13">CONCEPT DIMOSTRATIVO · IMMAGINE ILLUSTRATIVA</text></svg>`,
);
await sharp(svg)
  .composite([{ input: portrait, left: 730, top: 0 }])
  .jpeg({ quality: 88 })
  .toFile("public/og.jpg");
