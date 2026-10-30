import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Logo from './Logo';
import { InstagramIcon, Ornament, WhatsAppIcon } from './Icons';
import { SITE } from '../data/site';
import { waLink } from '../lib/whatsapp';
import { CATEGORIES } from '../data/products';

const QUICK = [
  { label: 'मुख्यपृष्ठ', to: '/' },
  { label: 'आमच्याविषयी', to: '/#about' },
  { label: 'दागिन्यांचा संग्रह', to: '/collection' },
  { label: 'नवीन आगमन', to: '/#new-arrivals' },
  { label: 'संपर्क', to: '/#contact' },
];

const INFO = [
  { label: 'भाड्याच्या अटी व शर्ती', to: '/info/rental-terms' },
  { label: 'बुकिंग प्रक्रिया', to: '/info/booking-process' },
  { label: 'गोपनीयता धोरण', to: '/info/privacy-policy' },
  { label: 'रद्द करण्याचे धोरण', to: '/info/cancellation-policy' },
];

function Col({ title, children }) {
  return (
    <div>
      <h3 className="mb-5 font-marathi text-xl !text-gold-light">{title}</h3>
      {children}
    </div>
  );
}

const linkCls = 'text-ivory/70 transition hover:pl-1 hover:text-gold-light';

export default function Footer() {
  return (
    <footer className="maroon-bg relative border-t-2 border-gold/40 text-ivory">
      <div className="container-lux pb-28 pt-16 sm:pb-8">
        <div className="mb-12 text-center">
          <div className="inline-block">
            <Logo light />
          </div>
          <p className="mt-5 font-calli text-3xl text-gold-grad">{SITE.tagline}</p>
          <Ornament className="mt-5" />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Col title="झटपट दुवे">
            <ul className="space-y-2.5">
              {QUICK.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col title="दागिन्यांचे प्रकार">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {CATEGORIES.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link to={`/collection?cat=${c.slug}`} className={linkCls}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col title="ग्राहक माहिती">
            <ul className="space-y-2.5">
              {INFO.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col title="आमच्याशी जोडा">
            <p className="mb-4 flex items-center gap-2 text-ivory/70">
              <MapPin size={16} className="text-gold-light" /> {SITE.city}
            </p>
            <div className="space-y-3">
              <a href={waLink('नमस्कार पारिजात ज्वेल्स!')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ivory/80 hover:text-gold-light">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-whatsapp text-white"><WhatsAppIcon /></span>
                {SITE.phoneDisplay}
              </a>
              {SITE.instagram.map((ig) => (
                <a key={ig.handle} href={ig.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ivory/80 hover:text-gold-light">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold-light"><InstagramIcon /></span>
                  {ig.handle}
                </a>
              ))}
            </div>
          </Col>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-gold/20 pt-6 text-sm text-ivory/55 sm:flex-row">
          <p>© 2026 Parijaat Jewels by Meghana. सर्व हक्क राखीव.</p>
          <p className="font-cormorant italic text-gold-light/80">Let your moments shine ✦</p>
        </div>
      </div>
    </footer>
  );
}
