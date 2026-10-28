import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import { Footer, Header, MobileBar } from "@/components/clinic/Shell";
import "./globals.css";
import "./editorial.css";

const hanken = localFont({
  src: "./fonts/hanken-latin.woff2",
  weight: "100 900",
  variable: "--font-hanken",
  display: "swap",
});
const fraunces = localFont({
  src: "./fonts/fraunces-italic-latin.woff2",
  weight: "100 900",
  style: "italic",
  variable: "--font-display",
  display: "swap",
});
const description =
  "Ambulatorio Veterinario Leinì: visite, diagnostica, chirurgia e ricovero. Via San Francesco al Campo 24. Appuntamenti al numero 011 9981469.";
export const metadata: Metadata = {
  metadataBase: new URL(site.previewUrl),
  title: {
    default: `${site.name} | Dott. Davide Boasso`,
    template: `%s | ${site.name}`,
  },
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title: site.name,
    description,
    locale: "it_IT",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
    images: ["/og.jpg"],
  },
};
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: site.name,
  telephone: site.phone.tel,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    addressCountry: "IT",
  },
  url: site.previewUrl,
  contactPoint: [site.phone, site.mobile].map(phone => ({ "@type": "ContactPoint", telephone: phone.tel, contactType: "customer service" })),
  openingHoursSpecification: [
    ...[site.hours.weekday, site.hours.afternoon].map(time => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: time.split("–")[0], closes: time.split("–")[1],
    })),
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: site.hours.saturday.split("–")[0], closes: site.hours.saturday.split("–")[1] },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${hanken.variable} ${fraunces.variable}`}>
      <body>
        <a href="#contenuto" className="skip-link">
          Vai al contenuto
        </a>
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
        <MobileBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
