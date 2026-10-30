import { useEffect, useState } from 'react';
import { CalendarDays, CheckCircle2, Info, Send } from 'lucide-react';
import Modal from './Modal';
import Img from './Img';
import { WhatsAppIcon } from './Icons';
import { PRODUCTS } from '../data/products';
import { EVENT_TYPES } from '../data/site';
import { buildBookingMessage, isValidMobile, normalizeMobile, openWhatsApp } from '../lib/whatsapp';

const today = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const empty = { name: '', mobile: '', productCode: '', date: '', eventType: '', message: '' };

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = 'कृपया तुमचे पूर्ण नाव लिहा.';
  if (!isValidMobile(f.mobile)) e.mobile = 'कृपया योग्य १० अंकी मोबाईल नंबर लिहा.';
  if (!f.productCode) e.productCode = 'कृपया दागिना निवडा.';
  if (!f.date) e.date = 'कृपया कार्यक्रमाची तारीख निवडा.';
  else if (f.date < today()) e.date = 'कार्यक्रमाची तारीख आजची किंवा पुढची असावी.';
  if (!f.eventType) e.eventType = 'कृपया कार्यक्रमाचा प्रकार निवडा.';
  return e;
}

function Field({ id, label, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-mukta text-sm font-semibold text-maroon">
        {label} {required && <span className="text-gold-dark">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function BookingModal({ open, product, onClose }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sentUrl, setSentUrl] = useState('');

  useEffect(() => {
    if (open) {
      setForm((f) => ({ ...empty, name: f.name, mobile: f.mobile, productCode: product?.code ?? '' }));
      setErrors({});
      setSentUrl('');
    }
  }, [open, product]);

  const selected = PRODUCTS.find((p) => p.code === form.productCode);
  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`bk-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const text = buildBookingMessage({
      ...form,
      mobile: normalizeMobile(form.mobile),
      product: selected,
    });
    setSentUrl(openWhatsApp(text));
  };

  const inputProps = (k) => ({
    id: `bk-${k}`,
    value: form[k],
    onChange: set(k),
    'aria-invalid': !!errors[k],
    'aria-describedby': errors[k] ? `bk-${k}-err` : undefined,
    className: `input-lux ${errors[k] ? 'border-red-400' : ''}`,
  });

  return (
    <Modal open={open} onClose={onClose} labelledBy="booking-title">
      {sentUrl ? (
        <div className="px-6 py-12 text-center sm:px-12">
          <CheckCircle2 className="mx-auto mb-4 text-whatsapp" size={64} strokeWidth={1.5} />
          <h2 id="booking-title" className="mb-3 text-2xl">
            WhatsApp उघडले आहे.
          </h2>
          <p className="mx-auto mb-6 max-w-md text-lg text-brown/80">
            कृपया <strong>Send</strong> बटण दाबून तुमची बुकिंग विनंती पाठवा.
          </p>
          <div className="mx-auto mb-8 flex max-w-md items-start gap-3 rounded-2xl bg-beige p-4 text-left text-sm text-brown/80">
            <Info size={18} className="mt-0.5 shrink-0 text-gold-dark" />
            <span>
              ही फक्त बुकिंग विनंती आहे. दागिन्याची उपलब्धता तपासून मेघना तुमच्याशी संपर्क साधून बुकिंग निश्चित करतील.
            </span>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp पुन्हा उघडा
            </a>
            <button onClick={onClose} className="btn-outline">
              बंद करा
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <div className="maroon-bg relative overflow-hidden px-6 pb-6 pt-8 text-ivory sm:px-10">
            <p className="font-cormorant text-sm uppercase tracking-[0.3em] text-gold-light">Parijaat Jewels</p>
            <h2 id="booking-title" className="mt-1 font-marathi text-3xl !text-ivory">
              दागिने बुकिंग फॉर्म
            </h2>
            <p className="mt-1 text-ivory/75">माहिती भरा, आम्ही WhatsApp वर उपलब्धता कळवू.</p>
            {selected && (
              <div className="mt-5 flex items-center gap-4 rounded-2xl bg-white/10 p-3 ring-1 ring-gold/30">
                <Img name={selected.image} small alt={selected.name} className="h-16 w-16 rounded-xl object-cover" />
                <div>
                  <p className="font-marathi text-lg leading-tight">{selected.name}</p>
                  <p className="text-sm text-gold-light">
                    {selected.code} · भाडे ₹{selected.price}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="grid gap-5 px-6 py-7 sm:grid-cols-2 sm:px-10">
            <Field id="bk-name" label="ग्राहकाचे पूर्ण नाव" error={errors.name} required>
              <input {...inputProps('name')} autoComplete="name" placeholder="उदा. प्रिया पाटील" />
            </Field>
            <Field id="bk-mobile" label="मोबाईल नंबर" error={errors.mobile} required>
              <input
                {...inputProps('mobile')}
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={14}
                placeholder="१० अंकी नंबर"
              />
            </Field>
            <div className="sm:col-span-2">
              <Field id="bk-productCode" label="निवडलेला दागिना" error={errors.productCode} required>
                <select {...inputProps('productCode')}>
                  <option value="">-- दागिना निवडा --</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.name} ({p.code}) – ₹{p.price}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field id="bk-date" label="कार्यक्रमाची तारीख" error={errors.date} required>
              <div className="relative">
                <input {...inputProps('date')} type="date" min={today()} />
                <CalendarDays size={18} className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-gold-dark sm:block" />
              </div>
            </Field>
            <Field id="bk-eventType" label="कार्यक्रमाचा प्रकार" error={errors.eventType} required>
              <select {...inputProps('eventType')}>
                <option value="">-- प्रकार निवडा --</option>
                {EVENT_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field id="bk-message" label="अतिरिक्त माहिती">
                <textarea {...inputProps('message')} rows={3} placeholder="उदा. किती दिवसांसाठी हवे, डिलिव्हरी पत्ता, इतर दागिने..." />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-whatsapp w-full py-4 text-lg">
                <WhatsAppIcon className="h-6 w-6" /> WhatsApp वर बुकिंग विनंती पाठवा <Send size={18} />
              </button>
              <p className="mt-3 flex items-start gap-2 text-xs text-brown/60">
                <Info size={14} className="mt-0.5 shrink-0" />
                बटण दाबल्यावर WhatsApp उघडेल. बुकिंग आपोआप निश्चित होत नाही — उपलब्धता तपासून आम्ही तुम्हाला कळवू.
              </p>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
