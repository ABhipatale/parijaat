import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Img from './Img';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const COLLECTIONS = [
  {
    title: 'वधूसाठी खास',
    eyebrow: 'Bridal',
    text: 'नथ, मुंडावळ्या, ठुशी, लक्ष्मी हार आणि बाजूबंद — तुमच्या लग्नाच्या दिवसासाठी संपूर्ण शाही वधू साज.',
    image: 'bridal-banner',
    alt: 'हिरव्या पैठणी नऊवारीत संपूर्ण पारंपरिक दागिन्यांनी सजलेली मराठी वधू',
    cat: 'bridal',
    big: true,
  },
  {
    title: 'सण-समारंभ',
    eyebrow: 'Festive',
    text: 'दिवाळी, गुढीपाडवा, मंगळागौर — सणासुदीला खुलून दिसणारे अँटिक व टेंपल दागिने.',
    image: 'festive-banner',
    alt: 'दिवे आणि पूजेच्या थाळीसोबत माणिक-पाचू खड्यांचा अँटिक नेकलेस',
    cat: 'festive',
  },
  {
    title: 'खास महाराष्ट्रीयन साज',
    eyebrow: 'Maharashtrian',
    text: 'नथ, ठुशी, कोल्हापुरी साज आणि तोडे — अस्सल मराठमोळ्या परंपरेचा अभिमान.',
    image: 'maharashtrian-saaj',
    alt: 'कोल्हापुरी साज, ठुशी, मोत्यांची नथ आणि तोडे',
    cat: 'kolhapuri-saaj',
  },
  {
    title: 'रोजच्या खास प्रसंगांसाठी',
    eyebrow: 'Everyday Elegance',
    text: 'हलके, नाजूक आणि सुंदर — छोटे कार्यक्रम, ऑफिस पार्टी किंवा फोटोशूटसाठी.',
    image: 'everyday-banner',
    alt: 'हलका नाजूक सोनेरी नेकलेस आणि कानातले',
    cat: 'necklace',
  },
];

function Banner({ c, className = '' }) {
  return (
    <Link
      to={`/collection?cat=${c.cat}`}
      className={`group relative block overflow-hidden rounded-3xl border border-gold/30 shadow-lux ${className}`}
    >
      <Img name={c.image} alt={c.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/95 via-maroon-900/35 to-transparent" />
      <div className="absolute inset-3 rounded-[1.25rem] border border-gold-light/30 transition-all duration-500 group-hover:inset-4" />
      <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
        <p className="eyebrow mb-2 !text-gold-light">{c.eyebrow}</p>
        <h3 className={`mb-2 !text-ivory ${c.big ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{c.title}</h3>
        <p className="mb-5 max-w-md text-ivory/80">{c.text}</p>
        <span className="inline-flex items-center gap-2 font-semibold text-gold-light">
          संग्रह पहा <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

export default function BridalCollection() {
  const [bridal, ...rest] = COLLECTIONS;
  return (
    <section id="special" className="section bg-ivory" aria-labelledby="special-title">
      <div className="container-lux">
        <SectionTitle id="special-title" eyebrow="Special Collections" title="खास संग्रह" subtitle="प्रत्येक प्रसंगाचा वेगळा साज — तुमच्या आवडीनुसार निवडा." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="min-h-[520px] lg:row-span-3">
            <Banner c={bridal} className="h-full min-h-[520px]" />
          </Reveal>
          {rest.map((c, i) => (
            <Reveal key={c.title} delay={0.1 * (i + 1)}>
              <Banner c={c} className="h-[300px] lg:h-[250px]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
