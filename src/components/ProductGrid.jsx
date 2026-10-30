import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';

const SORTS = [
  { value: 'latest', label: 'नवीनतम आधी' },
  { value: 'price-asc', label: 'भाडे: कमी ते जास्त' },
  { value: 'price-desc', label: 'भाडे: जास्त ते कमी' },
];

/**
 * Filterable catalogue. Controlled category (`category`/`onCategoryChange`) lets
 * the collection page sync the filter with the URL; uncontrolled on the homepage.
 */
export default function ProductGrid({ category: controlledCat, onCategoryChange, limit, showViewAll = false }) {
  const [localCat, setLocalCat] = useState('all');
  const category = controlledCat ?? localCat;
  const setCategory = onCategoryChange ?? setLocalCat;
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('latest');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = PRODUCTS.filter(
      (p) =>
        (category === 'all' || p.categories.includes(category)) &&
        (!q ||
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categories.some((c) => CATEGORIES.find((x) => x.slug === c)?.name.includes(q))),
    );
    list = [...list].sort((a, b) =>
      sort === 'price-asc' ? a.price - b.price : sort === 'price-desc' ? b.price - a.price : b.addedOn.localeCompare(a.addedOn),
    );
    return list;
  }, [category, query, sort]);

  const shown = limit ? results.slice(0, limit) : results;
  const chips = [{ slug: 'all', name: 'सर्व दागिने' }, ...CATEGORIES];

  return (
    <div>
      {/* Category chips */}
      <div className="no-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" role="tablist" aria-label="प्रकारानुसार दागिने">
        {chips.map((c) => {
          const active = category === c.slug;
          return (
            <button
              key={c.slug}
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(c.slug)}
              className={`relative shrink-0 rounded-full px-4 py-2 font-mukta text-[15px] font-medium transition-colors ${
                active ? 'text-ivory' : 'bg-white text-brown ring-1 ring-gold/30 hover:ring-gold'
              }`}
            >
              {active && <motion.span layoutId="chip-bg" className="absolute inset-0 rounded-full bg-maroon" transition={{ type: 'spring', damping: 28, stiffness: 300 }} />}
              <span className="relative">{c.name}</span>
            </button>
          );
        })}
      </div>

      {/* Search + sort */}
      <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">दागिने शोधा</span>
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-dark" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="दागिना शोधा… (उदा. ठुशी, नथ, PJ-CH-101)"
            className="input-lux !rounded-full !pl-11"
          />
        </label>
        <label className="relative sm:w-60">
          <span className="sr-only">क्रम लावा</span>
          <SlidersHorizontal size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-dark" />
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="input-lux !rounded-full !pl-10">
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mb-6 text-center text-sm text-brown/60" aria-live="polite">
        {results.length} दागिने सापडले
      </p>

      {shown.length ? (
        <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <ProductCard key={p.code} product={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="card-lux mx-auto max-w-md p-10 text-center">
          <p className="mb-4 font-marathi text-xl text-maroon">माफ करा, असा दागिना सापडला नाही.</p>
          <button
            onClick={() => {
              setQuery('');
              setCategory('all');
            }}
            className="btn-outline"
          >
            <X size={16} /> फिल्टर काढा
          </button>
        </div>
      )}

      {showViewAll && results.length > shown.length && (
        <div className="mt-12 text-center">
          <Link to={category === 'all' ? '/collection' : `/collection?cat=${category}`} className="btn-maroon px-8 py-4">
            संपूर्ण संग्रह पहा ({results.length}) <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </div>
  );
}
