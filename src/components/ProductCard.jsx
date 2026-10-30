import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import Img from './Img';
import { WhatsAppIcon } from './Icons';
import { STATUS_LABEL, categoryName } from '../data/products';
import { useBooking } from '../context/BookingContext';

const STATUS_STYLE = {
  available: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
  limited: 'bg-amber-50 text-amber-800 ring-amber-200',
  booked: 'bg-rose-50 text-rose-800 ring-rose-200',
};

export function StatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${STATUS_STYLE[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {STATUS_LABEL[status]}
    </span>
  );
}

export default function ProductCard({ product, showNew = false }) {
  const { openBooking, openDetails } = useBooking();
  const booked = product.status === 'booked';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-[0_14px_40px_-24px_rgba(75,16,40,0.45)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-24px_rgba(75,16,40,0.55)]"
    >
      <button onClick={() => openDetails(product)} className="relative block aspect-[4/5] overflow-hidden bg-beige text-left" aria-label={`${product.name} – अधिक माहिती`}>
        <Img
          name={product.image}
          small
          alt={`${product.name} – ${categoryName(product.categories[0])} भाड्याने, पारिजात ज्वेल्स`}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {(showNew || product.isNew) && (
          <span className="absolute left-3 top-3 rounded-full bg-maroon px-3 py-1 font-cormorant text-xs font-semibold uppercase tracking-[0.2em] text-gold-light shadow">
            New
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-ivory/90 px-2.5 py-1 font-poppins text-[11px] font-medium tracking-wide text-brown/80 backdrop-blur">
          {product.code}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <p className="mb-0.5 text-xs font-medium text-gold-dark sm:mb-1 sm:text-sm">{categoryName(product.categories[0])}</p>
        <h3 className="mb-2 font-marathi text-base leading-snug sm:mb-3 sm:text-xl">{product.name}</h3>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-1.5 sm:mb-5 sm:gap-2">
          <p className="text-brown">
            <span className="text-xs text-brown/60 sm:text-sm">भाडे: </span>
            <span className="font-display text-xl font-semibold text-maroon sm:text-2xl">₹{product.price}</span>
          </p>
          <StatusBadge status={product.status} />
        </div>
        <div className="mt-auto grid grid-cols-1 gap-2 min-[560px]:grid-cols-2">
          <button onClick={() => openDetails(product)} className="btn-outline order-2 !px-3 !py-2 text-sm min-[560px]:order-1 sm:!py-2.5">
            <Eye size={16} /> तपशील
          </button>
          <button onClick={() => openBooking(product)} disabled={booked} className="btn-whatsapp order-1 !px-3 !py-2 text-sm min-[560px]:order-2 sm:!py-2.5">
            <WhatsAppIcon className="h-4 w-4" /> {booked ? 'बुक' : 'बुकिंग करा'}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
