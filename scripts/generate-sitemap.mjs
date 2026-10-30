// Builds public/sitemap.xml from the product & category data (runs before every build).
import { writeFile } from 'node:fs/promises';
import { SITE } from '../src/data/site.js';
import { CATEGORIES, PRODUCTS, slugOf } from '../src/data/products.js';
import { POLICIES } from '../src/data/policies.js';

const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: '/', priority: '1.0' },
  { loc: '/collection', priority: '0.9' },
  ...CATEGORIES.map((c) => ({ loc: `/collection?cat=${c.slug}`, priority: '0.8' })),
  ...PRODUCTS.map((p) => ({ loc: `/collection/${slugOf(p)}`, priority: '0.7', lastmod: p.addedOn })),
  ...Object.keys(POLICIES).map((k) => ({ loc: `/info/${k}`, priority: '0.3' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url><loc>${SITE.url}${u.loc.replace(/&/g, '&amp;')}</loc><lastmod>${u.lastmod ?? today}</lastmod><priority>${u.priority}</priority></url>`,
  )
  .join('\n')}
</urlset>
`;
await writeFile('public/sitemap.xml', xml);
console.log(`sitemap.xml: ${urls.length} URLs`);
