// Static images served from /public/images — plain root-relative paths so they
// work in any deployment target (no internal asset-serving route involved).

export const photos = {
  logo: "/images/car-logo.png",
  outreach1: "/images/outreach1.webp",
  outreach2: "/images/outreach2.webp",
  outreach3: "/images/outreach3.webp",
  outreach4: "/images/outreach4.webp",
  outreach5: "/images/outreach5.webp",
} as const;
