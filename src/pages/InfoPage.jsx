import { Link, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { WhatsAppIcon } from '../components/Icons';
import { POLICIES } from '../data/policies';
import { waLink } from '../lib/whatsapp';
import { useSEO } from '../lib/seo';
import NotFound from './NotFound';

export default function InfoPage() {
  const { slug } = useParams();
  const page = POLICIES[slug];
  useSEO({ title: page?.title ?? 'माहिती', description: page?.intro, path: `/info/${slug}` });
  if (!page) return <NotFound />;

  return (
    <>
      <PageHeader title={page.title} crumbs={[{ label: page.title }]} />
      <section className="section paisley-bg">
        <div className="container-lux max-w-3xl">
          <div className="card-lux bg-white p-8 sm:p-12">
            <p className="mb-8 text-lg text-brown/80">{page.intro}</p>
            <ul className="space-y-4">
              {page.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-maroon text-gold-light">
                    <Check size={14} />
                  </span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 border-t border-gold/20 pt-8 sm:flex-row">
              <a href={waLink(`नमस्कार! मला "${page.title}" बद्दल माहिती हवी आहे.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon /> प्रश्न विचारा
              </a>
              <Link to="/collection" className="btn-outline">दागिन्यांचा संग्रह पहा</Link>
            </div>
          </div>
          <nav className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            {Object.entries(POLICIES)
              .filter(([k]) => k !== slug)
              .map(([k, v]) => (
                <Link key={k} to={`/info/${k}`} className="rounded-full bg-white px-4 py-2 ring-1 ring-gold/30 hover:ring-gold">
                  {v.title}
                </Link>
              ))}
          </nav>
        </div>
      </section>
    </>
  );
}
