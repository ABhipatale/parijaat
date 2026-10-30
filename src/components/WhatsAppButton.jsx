import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { useBooking } from '../context/BookingContext';
import { waLink } from '../lib/whatsapp';

export default function WhatsAppButton() {
  const { openBooking } = useBooking();
  const [visible, setVisible] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const t = setTimeout(() => setTip(true), 6000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-5 right-5 z-40 hidden flex-col items-end gap-3 sm:bottom-7 sm:right-7 sm:flex"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
        >
          <AnimatePresence>
            {tip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="relative max-w-[240px] rounded-2xl border border-gold/30 bg-ivory p-4 pr-8 text-sm shadow-lux"
              >
                <button onClick={() => setTip(false)} aria-label="बंद करा" className="absolute right-2 top-2 text-brown/50 hover:text-maroon">
                  <X size={16} />
                </button>
                <p className="mb-2 font-semibold text-maroon">नमस्कार! 🌸</p>
                <p className="mb-3 text-brown/80">दागिन्यांबद्दल काही विचारायचे आहे?</p>
                <div className="flex gap-2">
                  <button onClick={() => { setTip(false); openBooking(); }} className="rounded-full bg-maroon px-3 py-1.5 text-xs font-semibold text-ivory">
                    बुकिंग करा
                  </button>
                  <a href={waLink('नमस्कार पारिजात ज्वेल्स! मला माहिती हवी आहे.')} target="_blank" rel="noopener noreferrer" className="rounded-full border border-gold/50 px-3 py-1.5 text-xs font-semibold text-maroon">
                    चॅट करा
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={waLink('नमस्कार पारिजात ज्वेल्स! मला दागिन्यांबद्दल माहिती हवी आहे.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp वर चॅट करा"
            className="relative grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.8)] transition-transform hover:scale-110"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40 motion-reduce:animate-none" />
            <WhatsAppIcon className="relative h-8 w-8" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
