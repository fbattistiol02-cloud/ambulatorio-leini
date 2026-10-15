// Genera public/og.jpg (1200x630) per le anteprime di condivisione.
import sharp from "sharp";

const W = 1200, H = 630, D = 470;
const circle = await sharp("public/images/hero.jpg")
  .resize(D, D)
  .composite([{
    input: Buffer.from(`<svg width="${D}" height="${D}"><circle cx="${D / 2}" cy="${D / 2}" r="${D / 2}" fill="#fff"/></svg>`),
    blend: "dest-in",
  }])
  .png()
  .toBuffer();

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="85%" cy="25%" r="60%">
      <stop offset="0" stop-color="#d9a877" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#f3eee5" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#f3eee5"/>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <circle cx="${W - 70 - D / 2}" cy="${H / 2}" r="${D / 2 + 14}" fill="none" stroke="#1b222b" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="2 8"/>
  <text x="80" y="120" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="4" fill="#7a4b26" font-weight="700">AMBULATORIO VETERINARIO · LEINÌ</text>
  <text font-family="Georgia, 'Times New Roman', serif" font-size="56" fill="#1b222b" letter-spacing="-1.5">
    <tspan x="80" y="255">Quando il tuo animale</tspan>
    <tspan x="80" y="325">non sta bene, meriti</tspan>
    <tspan x="80" y="395" font-style="italic" fill="#7a4b26">risposte chiare.</tspan>
  </text>
  <text x="80" y="520" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#4a535c">Cani, gatti e piccoli animali · Via San Francesco al Campo 24</text>
  <text x="80" y="560" font-family="Helvetica, Arial, sans-serif" font-size="18" fill="#4a535c" opacity="0.8">Anteprima dimostrativa</text>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: circle, left: W - 70 - D, top: Math.round((H - D) / 2) }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile("public/og.jpg");
console.log("public/og.jpg scritto");
