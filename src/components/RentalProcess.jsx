import { CalendarCheck, Gem, Handshake, PackageCheck } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import { WhatsAppIcon } from './Icons';
import { useBooking } from '../context/BookingContext';

const STEPS = [
  { n: '01', icon: Gem, title: 'दागिने निवडा', text: 'आमच्या संग्रहातून तुमच्या आवडीचे दागिने निवडा.' },
  { n: '02', icon: CalendarCheck, title: 'तारीख निश्चित करा', text: 'कार्यक्रमाची तारीख आणि बुकिंगची माहिती द्या.' },
  { n: '03', icon: Handshake, title: 'बुकिंग निश्चित करा', text: 'आमच्याशी संपर्क साधून भाडे आणि उपलब्धता निश्चित करा.' },
  { n: '04', icon: PackageCheck, title: 'दागिने मिळवा', text: 'तुमच्या खास दिवसासाठी सुंदर दागिने मिळवा.' },
];

export default function RentalProcess() {
  const { openBooking } = useBooking();
  return (
    <section id="rental-process" className="section maroon-bg relative overflow-hidden" aria-labelledby="rp-title">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-gold/15" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-gold/10" />
      <div className="container-lux relative">
        <SectionTitle
          id="rp-title"
          light
          eyebrow="How Rental Works"
          title="भाड्याने दागिने कसे मिळतील?"
          subtitle="फक्त चार सोप्या पायऱ्या — आणि तुमचा शाही साज तयार!"
        />

        <div className="relative">
        <span className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent lg:block" aria-hidden="true" />
        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.12} className="group relative text-center">
              <div className="relative mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full border border-gold/50 bg-maroon-900 shadow-[0_0_0_8px_rgba(196,154,69,0.08)] transition-all duration-500 group-hover:shadow-[0_0_0_12px_rgba(196,154,69,0.16)]">
                <s.icon className="text-gold-light" size={34} strokeWidth={1.4} />
                <span className="absolute -right-1 -top-1 grid h-9 w-9 place-items-center rounded-full bg-gold-grad font-display text-sm font-bold text-maroon-900">
                  {s.n}
                </span>
              </div>
              <h3 className="mb-2 text-2xl !text-ivory">{s.title}</h3>
              <p className="mx-auto max-w-[16rem] text-ivory/70">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        </div>

        <Reveal className="mt-14 text-center">
          <button onClick={() => openBooking()} className="btn-gold px-10 py-4 text-lg">
            <WhatsAppIcon className="h-5 w-5" /> आजच बुकिंग करा
          </button>
          <p className="mt-4 text-sm text-ivory/55">बुकिंग मालकांनी उपलब्धता निश्चित केल्यानंतरच पक्की होते.</p>
        </Reveal>
      </div>
    </section>
  );
}
