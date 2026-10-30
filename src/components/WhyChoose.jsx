import { Diamond, Landmark, IndianRupee, Truck } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const FEATURES = [
  { icon: Diamond, title: 'उत्कृष्ट गुणवत्ता', text: 'प्रत्येक दागिना स्वच्छ, तपासलेला आणि नव्यासारखा चमकदार.' },
  { icon: Landmark, title: 'आकर्षक पारंपरिक डिझाइन्स', text: 'अस्सल महाराष्ट्रीयन परंपरेतून निवडलेले देखणे डिझाइन्स.' },
  { icon: IndianRupee, title: 'परवडणारे भाडे', text: 'खरेदीच्या खर्चाशिवाय शाही लुक — खिशाला परवडणाऱ्या दरात.' },
  { icon: Truck, title: 'सुरक्षित डिलिव्हरी', text: 'तुमचे दागिने काळजीपूर्वक पॅक करून सुरक्षितपणे तुमच्यापर्यंत.' },
];

export default function WhyChoose() {
  return (
    <section id="why" className="section paisley-bg" aria-labelledby="why-title">
      <div className="container-lux">
        <SectionTitle id="why-title" eyebrow="Why Parijaat" title="तुमच्या आनंदाच्या क्षणांसाठी पारिजातची खास साथ!" />
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="group card-lux h-full p-4 text-center sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:bg-white">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border sm:mb-6 sm:h-20 sm:w-20 border-gold/50 bg-ivory transition-colors duration-500 group-hover:bg-maroon">
                  <f.icon size={32} strokeWidth={1.3} className="text-gold-dark transition-colors duration-500 group-hover:text-gold-light" />
                </div>
                <h3 className="mb-2 text-base sm:mb-3 sm:text-xl">{f.title}</h3>
                <p className="text-sm text-brown/70 sm:text-base">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
