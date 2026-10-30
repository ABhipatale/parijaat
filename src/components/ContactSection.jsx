import { useState } from 'react';
import { MapPin, Navigation, Phone, Send } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { SITE } from '../data/site';
import { buildContactMessage, isValidMobile, normalizeMobile, openWhatsApp, waLink } from '../lib/whatsapp';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', mobile: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const mapsQuery = encodeURIComponent(SITE.address || SITE.mapQuery);

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (form.name.trim().length < 2) er.name = 'कृपया तुमचे नाव लिहा.';
    if (!isValidMobile(form.mobile)) er.mobile = 'कृपया योग्य मोबाईल नंबर लिहा.';
    if (form.message.trim().length < 3) er.message = 'कृपया तुमची चौकशी लिहा.';
    setErrors(er);
    if (Object.keys(er).length) return;
    openWhatsApp(buildContactMessage({ ...form, mobile: normalizeMobile(form.mobile) }));
    setSent(true);
  };

  const field = (k) => ({
    id: `ct-${k}`,
    value: form[k],
    onChange: (e) => setForm((f) => ({ ...f, [k]: e.target.value })),
    'aria-invalid': !!errors[k],
    className: `input-lux ${errors[k] ? 'border-red-400' : ''}`,
  });

  const items = [
    { icon: MapPin, label: 'ठिकाण', value: SITE.address || SITE.city },
    { icon: WhatsAppIcon, label: 'WhatsApp', value: SITE.phoneDisplay, href: waLink('नमस्कार पारिजात ज्वेल्स!') },
    { icon: Phone, label: 'कॉल करा', value: SITE.phoneDisplay, href: `tel:+${SITE.whatsapp}` },
  ];

  return (
    <section id="contact" className="section paisley-bg" aria-labelledby="contact-title">
      <div className="container-lux">
        <SectionTitle id="contact-title" eyebrow="Contact Us" title="संपर्क साधा" subtitle="दागिन्यांची उपलब्धता, भाडे किंवा बुकिंगबद्दल कोणतीही चौकशी — आम्ही आनंदाने मदत करू." />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="maroon-bg h-full rounded-3xl p-8 text-ivory shadow-lux sm:p-10">
              <h3 className="mb-1 text-2xl !text-ivory">पारिजात ज्वेल्स – मेघना</h3>
              <p className="mb-8 font-cormorant text-lg italic text-gold-light">Parijaat Jewels by Meghana</p>
              <ul className="space-y-6">
                {items.map((it) => {
                  const Inner = (
                    <>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-light">
                        <it.icon className="h-5 w-5" size={20} />
                      </span>
                      <span>
                        <span className="block text-sm text-ivory/60">{it.label}</span>
                        <span className="block text-lg">{it.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={it.label}>
                      {it.href ? (
                        <a href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 transition hover:text-gold-light">
                          {Inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{Inner}</div>
                      )}
                    </li>
                  );
                })}
                {SITE.instagram.map((ig) => (
                  <li key={ig.handle}>
                    <a href={ig.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition hover:text-gold-light">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-light">
                        <InstagramIcon />
                      </span>
                      <span>
                        <span className="block text-sm text-ivory/60">Instagram · {ig.label}</span>
                        <span className="block text-lg">{ig.handle}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={submit} noValidate className="card-lux h-full bg-white p-8 sm:p-10">
              <h3 className="mb-6 text-2xl">चौकशी फॉर्म</h3>
              {sent ? (
                <div className="rounded-2xl bg-emerald-50 p-6 text-emerald-900" role="status">
                  <p className="mb-2 font-semibold">WhatsApp उघडले आहे.</p>
                  <p>कृपया Send बटण दाबून तुमची चौकशी पाठवा. आम्ही लवकरच उत्तर देऊ.</p>
                  <button type="button" onClick={() => setSent(false)} className="mt-4 text-sm font-semibold underline">
                    नवीन चौकशी
                  </button>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="ct-name" className="mb-1.5 block text-sm font-semibold text-maroon">तुमचे नाव *</label>
                    <input {...field('name')} autoComplete="name" />
                    {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="ct-mobile" className="mb-1.5 block text-sm font-semibold text-maroon">मोबाईल नंबर *</label>
                    <input {...field('mobile')} type="tel" inputMode="numeric" autoComplete="tel" />
                    {errors.mobile && <p className="mt-1 text-sm text-red-700">{errors.mobile}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="ct-message" className="mb-1.5 block text-sm font-semibold text-maroon">तुमची चौकशी *</label>
                    <textarea {...field('message')} rows={4} placeholder="कोणते दागिने हवे आहेत, कोणत्या तारखेसाठी…" />
                    {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-whatsapp sm:col-span-2">
                    <WhatsAppIcon /> WhatsApp वर चौकशी पाठवा <Send size={16} />
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-lux">
            <iframe
              title="पारिजात ज्वेल्स – इचलकरंजी नकाशा"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-[340px] w-full grayscale-[30%] sepia-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-maroon absolute bottom-5 right-5"
            >
              <Navigation size={18} /> दिशा मिळवा
            </a>
          </div>
          {!SITE.address && (
            <p className="mt-3 text-center text-sm text-brown/60">अचूक पत्त्यासाठी कृपया WhatsApp वर संपर्क साधा.</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
