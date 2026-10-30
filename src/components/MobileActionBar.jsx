import { Link } from 'react-router-dom';
import { Gem } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { useBooking } from '../context/BookingContext';
import { waLink } from '../lib/whatsapp';

// Thumb-reachable actions, phones only (replaces the floating WhatsApp button there).
export default function MobileActionBar() {
  const { openBooking } = useBooking();
  return (
    <nav
      aria-label="झटपट कृती"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-ivory/95 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 shadow-[0_-10px_30px_-15px_rgba(75,16,40,0.45)] backdrop-blur-md sm:hidden"
    >
      <div className="grid grid-cols-[auto_auto_1fr] items-center gap-2">
        <Link to="/collection" className="flex flex-col items-center px-3 text-maroon" aria-label="दागिन्यांचा संग्रह">
          <Gem size={20} />
          <span className="text-[11px] font-medium">संग्रह</span>
        </Link>
        <a
          href={waLink('नमस्कार पारिजात ज्वेल्स! मला दागिन्यांबद्दल माहिती हवी आहे.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center px-3 text-[#128C7E]"
          aria-label="WhatsApp वर चॅट करा"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="text-[11px] font-medium">चॅट</span>
        </a>
        <button onClick={() => openBooking()} className="btn-gold !py-3 text-base">
          आत्ताच बुक करा
        </button>
      </div>
    </nav>
  );
}
