import Img from './Img';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import { InstagramIcon } from './Icons';
import { SITE } from '../data/site';

// Instagram doesn't allow free embedding of a profile feed, so this gallery uses the
// brand's own photos and links to both profiles. Edit the list to change the tiles.
const POSTS = [
  { image: 'meghana-jewels-look', alt: 'पैठणी साडीत नथ, ठुशी व लक्ष्मी हारासह शाही मराठमोळा लुक', profile: 0 },
  { image: 'meghana-saaj', alt: 'पारंपरिक साज व हिरव्या बांगड्यांसह मराठमोळा शृंगार', profile: 0 },
  { image: 'rental-poster', alt: 'पारिजात रेंटल स्टोअर – पारंपरिक, सण व लग्नासाठी दागिने भाड्याने', profile: 1 },
  { image: 'peacock-choker-599', alt: 'मोरपंखी अँटिक चोकर सेट', profile: 0 },
  { image: 'flower-thushi-choker', alt: 'फुलांची ठुशी चोकर', profile: 0 },
  { image: 'bridal-banner', alt: 'मराठी वधू संपूर्ण पारंपरिक साजात', profile: 1 },
  { image: 'royal-choker-779', alt: 'पारंपरिक रॉयल चोकर सेट', profile: 0 },
  { image: 'kolhapuri-long-saaj', alt: 'कोल्हापुरी पट्टा साज', profile: 1 },
  { image: 'chandrakor-kanthi', alt: 'चंद्रकोर कंठी सेट', profile: 0 },
];

export default function InstagramGallery() {
  return (
    <section id="instagram" className="section bg-ivory" aria-labelledby="ig-title">
      <div className="container-lux">
        <SectionTitle id="ig-title" eyebrow="Follow us on Instagram" title="इन्स्टाग्रामवर पारिजातसोबत जोडले जा!" subtitle="नवीन दागिने, वधू लुक, ग्राहकांचे फोटो आणि पडद्यामागच्या गोष्टी — रोज इन्स्टाग्रामवर." />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {POSTS.map((p, i) => {
            const ig = SITE.instagram[p.profile];
            return (
              <Reveal key={p.image} delay={(i % 4) * 0.06} className={i === 0 ? 'col-span-2 md:row-span-2' : ''}>
                <a href={ig.url} target="_blank" rel="noopener noreferrer" className="group relative block aspect-square overflow-hidden rounded-2xl bg-beige">
                  <Img name={p.image} small={i !== 0} alt={p.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-maroon-900/65 text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <InstagramIcon className="h-8 w-8" />
                    <span className="text-sm">{ig.handle}</span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {SITE.instagram.map((ig) => (
            <a
              key={ig.handle}
              href={ig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-0 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] px-7 py-3.5 text-white shadow-lux hover:-translate-y-0.5"
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="text-left leading-tight">
                <span className="block text-sm font-normal opacity-90">Instagram वर फॉलो करा · {ig.label}</span>
                <span className="block">{ig.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
