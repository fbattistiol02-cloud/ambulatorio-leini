// Usage: node scripts/prepare-campaign.mjs /absolute/hero.png /absolute/touch.png /absolute/rest.png
import sharp from "sharp";
const inputs = process.argv.slice(2);
if (inputs.length !== 3)
  throw new Error("Provide hero, touch and rest source image paths.");
for (const [i, name] of ["hero", "touch", "rest"].entries()) {
  await sharp(inputs[i])
    .resize({ width: 1500, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`public/images/${name}-v2.webp`);
}
