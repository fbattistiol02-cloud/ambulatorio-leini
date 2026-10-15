import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";
import "./experience.css";

const fraunces = localFont({
  src: [
    {
      path: "./fonts/fraunces-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/fraunces-italic-latin.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});
const hanken = localFont({
  src: "./fonts/hanken-latin.woff2",
  weight: "100 900",
  variable: "--font-hanken",
  display: "swap",
});

const title = `${site.name} · Concept dimostrativo`;
const description =
  "Lui si fida di te. Tu meriti risposte chiare. Una proposta di esperienza per l’Ambulatorio Veterinario Leinì.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ambulatorio-leini.vercel.app"),
  title,
  description,
  // Demo: non deve comparire sui motori di ricerca finché non è un sito vero.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Leinì · Lui si fida di te. Concept dimostrativo.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f3eee5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
