import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { site } from "@/content/site";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} · Risposte chiare per il tuo animale`;
const description =
  "Cani, gatti e piccoli animali visitati con calma, ascolto e parole semplici. Ambulatorio veterinario a Leinì (TO).";

export const metadata: Metadata = {
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
        alt: "Ambulatorio Veterinario Leinì: quando il tuo animale non sta bene, meriti risposte chiare.",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#f3eee5",
  width: "device-width",
  initialScale: 1,
};

// Solo dati verificati (vedi tabella fonte-di-verità nel piano).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: site.name,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    addressCountry: "IT",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
