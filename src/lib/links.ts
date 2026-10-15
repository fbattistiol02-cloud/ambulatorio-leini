import { site, whatsappMessage } from "@/content/site";

export const telHref = `tel:${site.phone.tel}`;
export const mobileTelHref = `tel:${site.mobile.tel}`;
export const whatsappHref = `https://wa.me/${site.mobile.tel.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;
export const mailHref = `mailto:${site.email}`;

const q = encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city} ${site.address.province}`,
);
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${q}`;

export const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province})`;

/** WhatsApp con un messaggio precompilato su un argomento specifico. */
export const whatsappFor = (topic: string) =>
  `https://wa.me/${site.mobile.tel.replace("+", "")}?text=${encodeURIComponent(
    `Buongiorno, vorrei avere informazioni su: ${topic}.`,
  )}`;
