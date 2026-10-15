// Genera l'icona per iPhone (src/app/apple-icon.png, 180x180, a tutto campo).
// L'icona del browser è src/app/icon.svg (cerchio oliva con "L" disegnata + punto sabbia).
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#535f48"/>
  <path d="M24 14 18 42Q17.4 45.6 21 45.6H35" fill="none" stroke="#f5f1e9" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="45" cy="43.6" r="3.6" fill="#d8b394"/>
</svg>`;
await sharp(Buffer.from(svg), { density: 600 }).resize(180, 180).png().toFile("src/app/apple-icon.png");
await sharp(Buffer.from(svg.replace('<rect width="64" height="64" fill="#535f48"/>', '<circle cx="32" cy="32" r="32" fill="#535f48"/>')), { density: 600 }).resize(512, 512).png().toFile("/private/tmp/claude-501/icon-preview.png");
console.log("apple-icon.png scritto");
