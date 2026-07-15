import hero from "@/assets/hero-revival.jpg";
import preaching from "@/assets/about-preaching.jpg";
import bible from "@/assets/devotional-bible.jpg";
import prayer from "@/assets/prayer-hands.jpg";
import outreach from "@/assets/outreach-market.jpg";
import flame from "@/assets/flame.jpg";

export const imageByKey: Record<string, string> = {
  hero,
  preaching,
  bible,
  prayer,
  outreach,
  flame,
};

export function resolveImage(key: string): string {
  return imageByKey[key] ?? hero;
}
