import { Link } from 'react-router-dom';
import Img from './Img';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import ProductGrid from './ProductGrid';
import { CATEGORIES, PRODUCTS } from '../data/products';

export default function CategorySection() {
  return (
    <section id="collections" className="section paisley-bg" aria-labelledby="collections-title">
      <div className="container-lux">
        <SectionTitle
          id="collections-title"
          eyebrow="Our Collection"
          title="दागिन्यांचा संग्रह"
          subtitle="ठुशी, कोल्हापुरी साज, नथ, चोकर ते लक्ष्मी हार — प्रत्येक प्रसंगासाठी निवडक पारंपरिक दागिने, परवडणाऱ्या भाड्यात."
        />

        {/* Category tiles */}
        <div className="mb-20 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-5 lg:grid-cols-6">
          {CATEGORIES.map((c, i) => {
            const count = PRODUCTS.filter((p) => p.categories.includes(c.slug)).length;
            return (
              <Reveal key={c.slug} delay={(i % 6) * 0.05}>
                <Link to={`/collection?cat=${c.slug}`} className="group block text-center">
                  <div className="relative mx-auto mb-3 aspect-square overflow-hidden rounded-full border-2 border-gold/40 p-1 transition-all duration-500 group-hover:border-gold group-hover:shadow-gold">
                    <Img
                      name={c.image}
                      small
                      alt={`${c.name} भाड्याने`}
                      className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <p className="font-marathi text-base text-maroon sm:text-lg">{c.name}</p>
                  <p className="text-xs text-brown/50">{count} डिझाइन्स</p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <ProductGrid limit={8} showViewAll />
      </div>
    </section>
  );
}
