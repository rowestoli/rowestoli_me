import type { ImageMetadata } from 'astro';

// Every web-sized photo in src/assets/img (written by `npm run photos`).
const all = import.meta.glob<{ default: ImageMetadata }>('../assets/img/**/*.{jpg,png}', { eager: true });

export interface SitePhoto { name: string; src: ImageMetadata }

export function photos(folder: string): SitePhoto[] {
  return Object.entries(all)
    .filter(([path]) => path.includes(`/img/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => ({ name: path.split('/').pop()!.replace(/\.\w+$/, ''), src: mod.default }));
}

export function photo(folder: string, name: string): ImageMetadata | undefined {
  return photos(folder).find((p) => p.name === name)?.src;
}

// Alt text for car photos, by file name. Anything missing falls back to a generic description.
export const carAlt: Record<string, string> = {
  frontier: 'Nissan Frontier pickup parked on a lakeside bluff',
  jeep: 'Silver Jeep Wrangler on gravel at dusk, with a mountain behind it',
  'img-1644': 'A row of Pagani hypercars lined up at a car show',
};
