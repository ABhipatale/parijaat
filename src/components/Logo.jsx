import { Link } from 'react-router-dom';

// PJ monogram with gold gradient, used in navbar, footer and loader.
export function Monogram({ className = 'h-12 w-12' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="PJ">
      <defs>
        <linearGradient id="pj-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9C7A32" />
          <stop offset="0.45" stopColor="#F3DFA8" />
          <stop offset="0.7" stopColor="#C49A45" />
          <stop offset="1" stopColor="#9C7A32" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="none" stroke="url(#pj-gold)" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="26.5" fill="none" stroke="url(#pj-gold)" strokeWidth="0.6" strokeDasharray="1 2.4" />
      <text x="21" y="41" fontFamily="'Playfair Display', serif" fontSize="26" fontWeight="600" fill="url(#pj-gold)">P</text>
      <text x="31" y="45" fontFamily="'Playfair Display', serif" fontSize="26" fontStyle="italic" fontWeight="600" fill="url(#pj-gold)">J</text>
      <path d="M32 6.5l1.6 3.4L32 13l-1.6-3.1z" fill="url(#pj-gold)" />
    </svg>
  );
}

export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3" aria-label="पारिजात ज्वेल्स – मुख्यपृष्ठ">
      <Monogram className="h-11 w-11 transition-transform duration-500 group-hover:rotate-[8deg] sm:h-12 sm:w-12" />
      <span className="flex flex-col items-center leading-none">
        {/* Calligraphic wordmark: gold on dark backgrounds, maroon on ivory */}
        <span
          className={`block font-brand text-[1.7rem] leading-[1.15] sm:text-[2rem] ${
            light ? 'text-gold-grad drop-shadow-[0_1px_6px_rgba(196,154,69,0.35)]' : 'text-maroon'
          }`}
          style={light ? { padding: '0.12em 0.04em 0' } : undefined}
        >
          पारिजात
        </span>
        <span className="mt-0.5 flex items-center gap-1.5" aria-hidden="true">
          <span className="h-px w-3 bg-gold/70 sm:w-4" />
          <svg viewBox="0 0 10 10" className="h-1.5 w-1.5 text-gold" fill="currentColor"><path d="M5 0l1.2 3.8L10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z" /></svg>
          <span className="h-px w-3 bg-gold/70 sm:w-4" />
        </span>
        <span className="mt-1 block font-cormorant text-[10px] font-semibold uppercase tracking-[0.22em] text-gold sm:text-[11px]">
          Jewels by Meghana
        </span>
      </span>
    </Link>
  );
}
