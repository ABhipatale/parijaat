import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Img from '../components/Img';
import ProductCard, { StatusBadge } from '../components/ProductCard';
import { WhatsAppIcon } from '../components/Icons';
import { PRODUCTS, categoryName, findProduct } from '../data/products';
import { useBooking } from '../context/BookingContext';
import { buildEnquiryMessage, waLink } from '../lib/whatsapp';
import { useSEO } from '../lib/seo';
import { SITE } from '../data/site';
import NotFound from './NotFound';

export default function ProductPage() {
  const { slug } = useParams();
  const product = findProduct(slug);
  const { openBooking } = useBooking();

  // Product schema without price offers — rental rates are confirmed per booking.
  const jsonLd = useMemo(
    () =>
      product && {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        sku: product.code,
        image: `${SITE.url}/images/${product.image}.webp`,
        description: product.description,
        category: product.categories.map(categoryName).join(', '),
        brand: { '@type': 'Brand', name: 'Parijaat Jewels by Meghana' },
      },
    [product],
  );

  useSEO({
    title: product ? `${product.name} भाड्याने (${product.code})` : 'दागिना सापडला नाही',
    description: product ? `${product.name} – ${product.description} भाडे ₹${product.price}. पारिजात ज्वेल्स, इचलकरंजी.` : undefined,
    path: `/collection/${slug}`,
    image: product ? `/images/${product.image}.webp` : undefined,
    jsonLd,
  });

  if (!product) return <NotFound />;

  const related = PRODUCTS.filter((p) => p.code !== product.code && p.categories.some((c) => product.categories.includes(c))).slice(0, 4);

  return (
    <>
      <PageHeader
        title={product.name}
        crumbs={[
          { label: 'दागिन्यांचा संग्रह', to: '/collection' },
          { label: categoryName(product.categories[0]), to: `/collection?cat=${product.categories[0]}` },
          { label: product.code },
        ]}
      />
      <section className="section paisley-bg !pt-14">
        <div className="container-lux">
          <Link to="/collection" className="mb-8 inline-flex items-center gap-2 text-maroon hover:text-gold-dark">
            <ArrowLeft size={18} /> संग्रहाकडे परत
          </Link>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-3xl border border-gold/30 bg-beige shadow-lux">
              <Img name={product.image} priority alt={`${product.name} – ${categoryName(product.categories[0])} भाड्याने`} className="aspect-square h-full w-full object-cover" />
            </div>
            <div>
              <p className="mb-3 font-marathi text-gold-dark">{product.categories.map(categoryName).join(' · ')}</p>
              <h2 className="mb-3 text-4xl font-normal">{product.name}</h2>
              <p className="mb-6 font-poppins text-sm text-brown/60">प्रॉडक्ट कोड: {product.code}</p>
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <p>
                  <span className="text-brown/60">भाडे: </span>
                  <span className="font-display text-4xl font-semibold text-maroon">₹{product.price}</span>
                </p>
                <StatusBadge status={product.status} />
              </div>
              <p className="mb-6 text-lg leading-relaxed text-brown/85">{product.description}</p>
              <ul className="mb-8 flex flex-wrap gap-2">
                {product.includes.map((i) => (
                  <li key={i} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm ring-1 ring-gold/30">
                    <Check size={14} className="text-gold-dark" /> {i}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button onClick={() => openBooking(product)} disabled={product.status === 'booked'} className="btn-whatsapp flex-1 py-4 text-lg">
                  <WhatsAppIcon className="h-6 w-6" /> आत्ताच बुक करा
                </button>
                <a href={waLink(buildEnquiryMessage(product))} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 py-4">
                  <MessageCircle size={18} /> फक्त चौकशी करा
                </a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <p className="flex items-center gap-3 rounded-xl bg-white/70 p-4 text-sm ring-1 ring-gold/20">
                  <ShieldCheck className="shrink-0 text-gold-dark" /> स्वच्छ व तपासलेले दागिने
                </p>
                <p className="flex items-center gap-3 rounded-xl bg-white/70 p-4 text-sm ring-1 ring-gold/20">
                  <Truck className="shrink-0 text-gold-dark" /> सुरक्षित डिलिव्हरी / पिकअप
                </p>
              </div>
              <p className="mt-6 text-xs text-brown/60">
                * भाडे व उपलब्धता कार्यक्रमाच्या तारखेनुसार बदलू शकते. बुकिंग मालकांनी निश्चित केल्यानंतरच पक्की होते.
              </p>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-24">
              <h2 className="mb-8 text-center text-3xl font-normal">तुम्हाला हेही आवडेल</h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
                {related.map((p) => (
                  <ProductCard key={p.code} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
