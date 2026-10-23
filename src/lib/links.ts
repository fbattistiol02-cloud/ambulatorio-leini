import { site } from "@/content/site";
export const telHref = `tel:${site.phone.tel}`;
export const mobileTelHref = `tel:${site.mobile.tel}`;
export const mailHref = `mailto:${site.email}`;
export const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province})`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`;
