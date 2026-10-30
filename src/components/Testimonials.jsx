import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const hasSamples = TESTIMONIALS.some((x) => x.isSample);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="section bg-beige" aria-labelledby="t-title">
      <div className="container-lux">
        <SectionTitle id="t-title" eyebrow="Testimonials" title="आमच्या ग्राहकांचे प्रेम, हाच आमचा खरा विश्वास!" />

        <div className="card-lux relative mx-auto max-w-3xl overflow-hidden bg-ivory px-6 py-12 text-center sm:px-14">
          <Quote className="absolute left-6 top-6 text-gold/25" size={64} />
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5 flex justify-center gap-1" aria-label={`${t.rating} पैकी ५ स्टार`}>
                {Array.from({ length: 5 }, (_, k) => (
                  <Star key={k} size={20} className={k < t.rating ? 'fill-gold text-gold' : 'text-champagne'} />
                ))}
              </div>
              <blockquote className="mb-7 font-marathi text-xl leading-relaxed text-maroon sm:text-2xl">“{t.text}”</blockquote>
              <figcaption>
                <div className="mx-auto mb-3 grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-maroon font-marathi text-xl text-gold-light ring-2 ring-gold/50">
                  {t.photo ? <img src={t.photo} alt={t.name} className="h-full w-full object-cover" loading="lazy" /> : t.name.charAt(0)}
                </div>
                <p className="font-semibold text-maroon">{t.name}</p>
                <p className="text-sm text-brown/60">
                  {t.place} · {t.event}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`अभिप्राय ${k + 1}`}
                className={`h-2.5 rounded-full transition-all ${k === i ? 'w-8 bg-maroon' : 'w-2.5 bg-gold/40'}`}
              />
            ))}
          </div>
        </div>
        {hasSamples && (
          <p className="mt-5 text-center text-xs text-brown/50">* वरील अभिप्राय नमुन्यादाखल आहेत. ग्राहकांचे खरे अभिप्राय लवकरच येथे प्रकाशित केले जातील.</p>
        )}
      </div>
    </section>
  );
}
