import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import { NAV_LINKS, SITE } from '../data/site';
import { waLink } from '../lib/whatsapp';
import { useBooking } from '../context/BookingContext';

export default function Navbar() {
  const { pathname } = useLocation();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = pathname === '/' && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        overHero ? 'bg-gradient-to-b from-maroon-900/70 to-transparent py-4' : 'border-b border-gold/20 bg-ivory/95 py-2 shadow-[0_8px_30px_-18px_rgba(75,16,40,0.4)] backdrop-blur-md'
      }`}
    >
      <nav className="container-lux flex items-center justify-between gap-4" aria-label="मुख्य मेनू">
        <Logo light={overHero} onClick={close} />

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`group relative rounded-full px-3 py-2 font-mukta text-[15px] font-medium transition-colors ${
                  overHero ? 'text-ivory/90 hover:text-gold-light' : 'text-brown hover:text-maroon'
                }`}
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={waLink('नमस्कार पारिजात ज्वेल्स! मला दागिन्यांबद्दल माहिती हवी आहे.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp वर संपर्क"
            className="grid h-10 w-10 place-items-center rounded-full bg-whatsapp text-white shadow transition hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button onClick={() => openBooking()} className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
            बुकिंग करा
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="मेनू उघडा"
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-full ring-1 xl:hidden ${
              overHero ? 'text-ivory ring-ivory/40' : 'text-maroon ring-gold/40'
            }`}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Portal to <body>: the scrolled header uses backdrop-blur, which would otherwise
          become the containing block for this fixed drawer and clip it to the header height. */}
      {createPortal(
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-maroon-900/60 backdrop-blur-sm" onClick={close} />
            <motion.aside
              className="maroon-bg absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto border-l border-gold/30 px-7 py-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo light onClick={close} />
                <button onClick={close} aria-label="मेनू बंद करा" className="grid h-10 w-10 place-items-center rounded-full text-ivory ring-1 ring-gold/40">
                  <X size={22} />
                </button>
              </div>
              <ul className="space-y-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li key={l.to} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                    <Link
                      to={l.to}
                      onClick={close}
                      className="block border-b border-gold/15 py-3.5 font-marathi text-xl text-ivory transition hover:pl-2 hover:text-gold-light"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3 pt-8">
                <button
                  onClick={() => {
                    close();
                    openBooking();
                  }}
                  className="btn-gold w-full"
                >
                  आत्ताच बुक करा
                </button>
                <div className="flex justify-center gap-4 pt-2 text-gold-light">
                  {SITE.instagram.map((ig) => (
                    <a key={ig.handle} href={ig.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs">
                      <InstagramIcon className="h-4 w-4" /> {ig.handle}
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
      )}
    </header>
  );
}
