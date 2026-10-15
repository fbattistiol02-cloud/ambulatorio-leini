// Verifica contrasto WCAG delle coppie di colori del design system.
const lum = (hex) => {
  const c = hex.replace("#", "").match(/../g).map((x) => parseInt(x, 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};
const c = {
  paper: "#F3EEE5", paper2: "#EAE3D6", mist: "#DDE1DF", ink: "#1B222B",
  inkSoft: "#4A535C", hazel: "#A06A3F", hazelDeep: "#7A4B26", barolo: "#5E2631",
  night: "#141A21", white: "#FFFFFF", hazelLight: "#D9A877",
};
const pairs = [
  ["ink", "paper"], ["inkSoft", "paper"], ["inkSoft", "paper2"], ["ink", "mist"], ["inkSoft", "mist"],
  ["hazelDeep", "paper"], ["hazelDeep", "paper2"], ["hazel", "paper"],
  ["white", "hazel"], ["white", "hazelDeep"], ["paper", "night"], ["hazelLight", "night"],
  ["paper", "barolo"], ["barolo", "paper"], ["white", "ink"], ["paper", "ink"],
];
for (const [f, b] of pairs) {
  const r = ratio(c[f], c[b]);
  console.log(`${f.padEnd(10)} su ${b.padEnd(9)} ${r.toFixed(2).padStart(5)}  ${r >= 7 ? "AAA" : r >= 4.5 ? "AA" : r >= 3 ? "AA-large" : "FAIL"}`);
}
