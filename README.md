# PJ – Parijaat Jewels by Meghana

Marathi luxury jewellery-rental website. React 18 + Vite + Tailwind CSS + Framer Motion + React Router.

```bash
npm install
npm run dev        # local development
npm run build      # generates sitemap.xml, then builds to dist/
npm run preview    # serve the production build
```

## Editing content (no coding knowledge needed)

| What | File |
|---|---|
| Products, prices, availability, categories | `src/data/products.js` |
| WhatsApp number, Instagram, address, domain | `src/data/site.js` |
| Customer reviews | `src/data/testimonials.js` |
| Terms / privacy / cancellation pages | `src/data/policies.js` |

**Before launch**
- Prices and availability in `products.js` are sample values — confirm every one.
- Reviews in `testimonials.js` are labelled samples — replace with real, permitted reviews and set `isSample: false`.
- Policy pages are general drafts — add exact deposit / rental-period / refund rules.
- Replace `https://www.parijaatjewels.in` with the real domain in `src/data/site.js`, `index.html` and `public/robots.txt`.
- Add the verified street address to `SITE.address` (the map then points to it).

## Images

Web images live in `public/images/` as `name.webp` (1600px) + `name-sm.webp` (640px).
To add a photo: put a `.jpg`/`.png` into `public/images/`, run `npm run optimize-images`,
move the original out of `public/`, then reference it by name (without extension) in `products.js`.

Originals are kept in `_originals/` (brand photos) and `_originals/generated/` (AI-generated photos).
The AI-generated images (hero model, bridal, festive, category product shots) are illustrative —
replace them with real photos of Parijaat's own pieces as they become available.

## Deploying

Any static host works. SPA fallbacks are included for Vercel (`vercel.json`) and Netlify (`public/_redirects`).

## Booking flow

“बुकिंग करा” opens a validated Marathi form → builds the WhatsApp message with
`encodeURIComponent` → opens `wa.me/919005313005` (the app on phones, a new tab on desktop).
The customer must press **Send**; the site never claims a booking is confirmed.
