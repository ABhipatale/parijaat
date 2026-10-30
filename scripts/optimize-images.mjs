// Converts every .jpg/.png in public/images to an optimized .webp (max 1600px wide)
// plus a 640px "-sm.webp" for product cards. Run: npm run optimize-images
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public/images');
const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png)$/i.test(f) && f !== 'og-cover.jpg');

for (const file of files) {
  const base = path.join(dir, file.replace(/\.(jpe?g|png)$/i, ''));
  await sharp(path.join(dir, file)).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(`${base}.webp`);
  await sharp(path.join(dir, file)).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${base}-sm.webp`);
  console.log('✓', file);
}

// Social share image
await sharp(path.resolve('_originals/generated/hero-meghana-b.png')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(dir, 'og-cover.jpg'));
console.log('✓ og-cover.jpg');
