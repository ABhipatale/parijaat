import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';

export default function NewArrivals() {
  const track = useRef(null);
  const items = PRODUCTS.filter((p) => p.isNew).sort((a, b) => b.addedOn.localeCompare(a.addedOn));

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 24), behavior: 'smooth' });
  };

  return (
    <section id="new-arrivals" className="section relative overflow-hidden bg-beige" aria-labelledby="new-title">
      <div className="container-lux">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionTitle
            id="new-title"
            align="left"
            eyebrow="New Arrivals"
            title="नवीन दागिने, नवा शाही अंदाज!"
            subtitle="तुमच्या प्रत्येक खास प्रसंगासाठी आमच्या नवीन दागिन्यांच्या संग्रहातून निवडा तुमचा आवडता साज."
          />
          <div className="mb-14 hidden gap-3 sm:flex">
            {[-1, 1].map((d) => (
              <button
                key={d}
                onClick={() => scroll(d)}
                aria-label={d < 0 ? 'मागे' : 'पुढे'}
                className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-maroon transition hover:bg-maroon hover:text-ivory"
              >
                {d < 0 ? <ChevronLeft /> : <ChevronRight />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-6 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        aria-label="नवीन दागिने"
      >
        {items.map((p) => (
          <div key={p.code} data-card className="w-[62%] shrink-0 snap-start min-[480px]:w-[46%] md:w-[31%] lg:w-[23%]">
            <ProductCard product={p} showNew />
          </div>
        ))}
      </div>
    </section>
  );
}
