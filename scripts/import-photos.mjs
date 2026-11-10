// Copies photos from the drop folder (src/assets/photos, not committed) into
// src/assets/img as web-sized JPEGs that the site imports. Run: npm run photos
import { mkdir, readdir, rm } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const SRC = 'src/assets/photos';
const OUT = 'src/assets/img';
const FOLDERS = ['headshot', 'rugby', 'cars', 'hobbies', 'projects'];
const MAX = 2400; // long edge, px

for (const folder of FOLDERS) {
  const files = await readdir(join(SRC, folder)).catch(() => []);
  const photos = files.filter((f) => /\.(jpe?g|png|webp|tiff?)$/i.test(f));
  await rm(join(OUT, folder), { recursive: true, force: true });
  if (!photos.length) continue;
  await mkdir(join(OUT, folder), { recursive: true });
  for (const f of photos) {
    const name = parse(f).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const keepPng = folder === 'projects' && /\.png$/i.test(f); // screenshots stay sharp
    const img = sharp(join(SRC, folder, f)).rotate().resize(MAX, MAX, { fit: 'inside', withoutEnlargement: true });
    const out = join(OUT, folder, `${name}.${keepPng ? 'png' : 'jpg'}`);
    await (keepPng ? img.png() : img.flatten({ background: '#121614' }).jpeg({ quality: 86, mozjpeg: true })).toFile(out);
    console.log(`${folder}/${f} -> ${out}`);
  }
  const skipped = files.filter((f) => !photos.includes(f) && !f.startsWith('.'));
  if (skipped.length) console.warn(`Skipped (unsupported format, export as JPG): ${skipped.join(', ')}`);
}
