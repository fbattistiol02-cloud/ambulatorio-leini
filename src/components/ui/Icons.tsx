import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconWhatsApp = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 11.6A8 8 0 0 1 8.2 18.6L4 20l1.4-4A8 8 0 1 1 20 11.6Z" />
    <path d="M9.2 8.6c.2-.4.5-.4.8-.4l.5 1.2c.1.3 0 .5-.2.7l-.4.5c.6 1.2 1.6 2.1 2.8 2.7l.5-.5c.2-.2.5-.3.7-.2l1.2.6c.1.3 0 .8-.4 1.1-.6.5-1.4.5-2.4.1a8.6 8.6 0 0 1-4-3.7c-.4-.9-.2-1.700.4-2.100Z" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.2l1.5 4-2 1.300a11 11 0 0 0 5 5L14.1 12.300l4 1.500V17a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowUpRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.100 7-11.500A7 7 0 0 0 5 9.500C5 14.900 12 21 12 21Z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="m12 2.800 2.800 5.700 6.200.9-4.500 4.400 1.100 6.200L12 17l-5.600 3 1.100-6.200L3 9.400l6.200-.9L12 2.800Z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

/* Icone dei servizi (linee semplici, coerenti con l'identità) */
export const IconVisit = (p: P) => (
  <svg {...base} width={44} height={44} strokeWidth={1.2} {...p}>
    <path d="M3 12h4l2-5 4 10 2-5h6" />
  </svg>
);

export const IconSurgery = (p: P) => (
  <svg {...base} width={44} height={44} strokeWidth={1.2} {...p}>
    <path d="M12 4v16M4 12h16" />
    <circle cx="12" cy="12" r="8.500" />
  </svg>
);

export const IconImaging = (p: P) => (
  <svg {...base} width={44} height={44} strokeWidth={1.2} {...p}>
    <path d="M4 8V5h3M17 5h3v3M20 16v3h-3M7 19H4v-3" />
    <circle cx="12" cy="12" r="3.500" />
    <path d="M12 8.500V7M12 17v-1.500M8.500 12H7M17 12h-1.500" />
  </svg>
);
