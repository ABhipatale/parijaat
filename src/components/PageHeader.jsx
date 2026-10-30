import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Ornament } from './Icons';

export default function PageHeader({ title, subtitle, crumbs = [] }) {
  return (
    <header className="maroon-bg relative overflow-hidden pb-14 pt-32 text-center sm:pt-36">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-gold/15" />
      <div className="container-lux relative">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-1 text-sm text-ivory/60">
          <Link to="/" className="hover:text-gold-light">मुख्यपृष्ठ</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight size={14} />
              {c.to ? <Link to={c.to} className="hover:text-gold-light">{c.label}</Link> : <span className="text-gold-light">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl font-normal !text-ivory sm:text-5xl">{title}</h1>
        <Ornament className="my-5" />
        {subtitle && <p className="mx-auto max-w-2xl text-lg text-ivory/75">{subtitle}</p>}
      </div>
    </header>
  );
}
