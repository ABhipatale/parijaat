import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import Img from './Img';
import { WhatsAppIcon, ParijatFlower, Ornament } from './Icons';
import { useBooking } from '../context/BookingContext';
import { CATEGORIES, PRODUCTS } from '../data/products';

const MIN_PRICE = Math.min(...PRODUCTS.map((p) => p.price));

function Particles({ count = 22 }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        size: 2 + ((i * 7) % 5),
        duration: 9 + ((i * 13) % 10),
        delay: (i * 1.3) % 9,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="particle"
          style={{ left: d.left, width: d.size, height: d.size, animationDuration: `${d.duration}s`, animationDelay: `${d.delay}s` }}
        />
      ))}
    </div>
  );
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

// Royal arch-framed portrait (mobile: first thing you see; desktop: right column)
function ArchPortrait() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 50]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ y }}
      className="relative mx-auto w-[78%] max-w-[340px] sm:max-w-[380px] lg:w-full lg:max-w-[460px]"
    >
      {/* outer decorative arches */}
      <div className="absolute -inset-3 rounded-t-full border border-gold/50 sm:-inset-4" aria-hidden="true" />
      <div className="absolute -inset-6 rounded-t-full border border-dashed border-gold/25 sm:-inset-8" aria-hidden="true" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-[3px] border-gold/80 bg-maroon-800 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        <Img
          name="hero-meghana-portrait"
          priority
          sizes="(max-width: 1024px) 80vw, 460px"
          alt="पारंपरिक नथ, ठुशी, कोल्हापुरी साज, लक्ष्मी हार आणि हिरव्या बांगड्या परिधान केलेली पैठणी साडीतील मराठमोळी स्त्री"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-maroon-900/70 to-transparent" />
      </div>
      {/* crest badge */}
      <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-gold/60 bg-maroon-900 px-5 py-2 shadow-lux">
        <ParijatFlower className="h-4 w-4 text-ivory" />
        <span className="font-shahi text-base text-gold-light">शाही साज · पारिजात</span>
      </div>
      <ParijatFlower className="absolute -left-4 top-1/3 h-9 w-9 rotate-12 text-ivory/80 lg:-left-8 lg:h-12 lg:w-12" />
      <ParijatFlower className="absolute -right-3 top-[15%] h-7 w-7 -rotate-12 text-ivory/70 lg:-right-6 lg:h-10 lg:w-10" />
    </motion.div>
  );
}

export default function HeroSection() {
  const { openBooking } = useBooking();

  return (
    <section id="home" className="maroon-bg relative overflow-hidden" aria-label="मुख्य">
      {/* soft blurred backdrop from the same photograph */}
      <div className="absolute inset-0 opacity-25" aria-hidden="true">
        <Img name="hero-meghana" small alt="" className="h-full w-full scale-110 object-cover blur-2xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/40 via-transparent to-maroon-900/80" aria-hidden="true" />
      <Particles />

      <div className="container-lux relative z-10 grid items-center gap-14 pb-20 pt-28 sm:pt-32 lg:min-h-[100svh] lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pb-16 lg:pt-28">
        {/* Portrait first on mobile, right column on desktop */}
        <div className="lg:order-2">
          <ArchPortrait />
        </div>

        <div className="text-center lg:order-1 lg:text-left">
          <motion.p
            {...fade(0.2)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-maroon-900/40 px-4 py-1.5 font-marathi text-sm text-gold-light backdrop-blur sm:text-base"
          >
            <ParijatFlower className="h-4 w-4 text-ivory" /> PJ – पारिजात ज्वेल्स बाय मेघना
          </motion.p>

          <motion.h1 {...fade(0.35)} className="text-[2.35rem] leading-[1.35] !text-ivory sm:text-5xl lg:text-[3.6rem] xl:text-[4rem]">
            तुमच्या सौंदर्यात भर घालणारा <span className="text-gold-grad shimmer">शाही साज!</span>
          </motion.h1>

          <motion.div {...fade(0.45)}>
            <Ornament className="my-5 lg:!justify-start" />
          </motion.div>

          <motion.p {...fade(0.5)} className="mx-auto max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg lg:mx-0 lg:text-xl">
            प्रत्येक खास क्षणासाठी सुंदर, आकर्षक आणि पारंपरिक दागिन्यांचा अनोखा संग्रह. आता आवडते दागिने खरेदी न करता भाड्याने मिळवा!
          </motion.p>

          <motion.div {...fade(0.65)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link to="/collection" className="btn-gold px-8 py-4 text-lg">
              <Sparkles size={18} /> दागिन्यांचा संग्रह पहा
            </Link>
            <button onClick={() => openBooking()} className="btn-whatsapp px-8 py-4 text-lg">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp वर बुकिंग करा
            </button>
          </motion.div>

          <motion.p {...fade(0.85)} className="mt-9 font-calli text-2xl font-bold text-gold-light sm:text-[1.7rem]">
            परंपरा आमची, विश्वास तुमचा!
          </motion.p>

          {/* trust strip */}
          <motion.ul {...fade(1)} className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-2 border-t border-gold/20 pt-6 text-center lg:mx-0">
            {[
              [`${CATEGORIES.length}+`, 'दागिन्यांचे प्रकार'],
              [`₹${MIN_PRICE}`, 'पासून भाडे'],
              ['WhatsApp', 'सोपे बुकिंग'],
            ].map(([v, l]) => (
              <li key={l}>
                <p className="font-display text-xl font-semibold text-gold-light sm:text-2xl">{v}</p>
                <p className="text-xs text-ivory/65 sm:text-sm">{l}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <a href="#collections" aria-label="खाली स्क्रोल करा" className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 text-gold-light lg:block">
        <motion.span className="block" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={30} />
        </motion.span>
      </a>
    </section>
  );
}
