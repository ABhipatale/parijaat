import { motion } from 'framer-motion';
import { Monogram } from './Logo';

export default function Loader() {
  return (
    <motion.div
      className="maroon-bg fixed inset-0 z-[100] grid place-items-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      aria-hidden="true"
    >
      <div className="text-center">
        <motion.div initial={{ scale: 0.7, opacity: 0, rotate: -20 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <Monogram className="mx-auto h-28 w-28" />
        </motion.div>
        <motion.p className="mt-5 font-brand text-5xl text-gold-grad" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          पारिजात
        </motion.p>
        <motion.p className="mt-1 font-cormorant text-sm uppercase tracking-[0.4em] text-gold-light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Jewels by Meghana
        </motion.p>
        <motion.span className="mx-auto mt-6 block h-px bg-gold" initial={{ width: 0 }} animate={{ width: 140 }} transition={{ delay: 0.5, duration: 0.9 }} />
      </div>
    </motion.div>
  );
}
