import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Img from './Img';
import Reveal from './Reveal';
import { Monogram } from './Logo';
import { Ornament, ParijatFlower } from './Icons';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yInset = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="section relative overflow-hidden bg-ivory" aria-labelledby="about-title">
      <ParijatFlower className="absolute -left-6 top-16 h-24 w-24 rotate-12 text-champagne" />
      <ParijatFlower className="absolute bottom-10 right-6 h-16 w-16 -rotate-12 text-champagne" />

      <div className="container-lux grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Owner portraits */}
        <Reveal className="relative mx-auto w-full max-w-[360px] pb-10 pr-10 sm:max-w-md sm:pb-14 sm:pr-14">
          <motion.div style={{ y }} className="relative">
            <div className="absolute -inset-3 rounded-t-full border border-gold/50" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-[3px] border-gold/70 shadow-lux">
              <Img
                name="meghana-about"
                sizes="(max-width: 640px) 80vw, 420px"
                alt="पारिजात ज्वेल्सच्या संस्थापिका मेघना — नथ, ठुशी, साज आणि हिरव्या बांगड्यांसह पारंपरिक मराठमोळ्या शृंगारात"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
          <motion.div style={{ y: yInset }} className="absolute bottom-0 right-0 w-[44%] overflow-hidden rounded-2xl border-4 border-ivory shadow-lux ring-1 ring-gold/50">
            <Img name="meghana-saaj" small alt="मेघना — पारंपरिक कोल्हापुरी साज व लक्ष्मी हार" className="aspect-[3/4] w-full object-cover object-top" />
          </motion.div>
          <div className="absolute left-0 top-0 grid h-20 w-20 -translate-y-1/4 sm:-translate-x-1/4 place-items-center rounded-full bg-maroon shadow-lux ring-4 ring-ivory sm:h-24 sm:w-24">
            <Monogram className="h-14 w-14 sm:h-16 sm:w-16" />
          </div>
        </Reveal>

        {/* Story */}
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="eyebrow mb-3">About Us</p>
            <h2 id="about-title" className="mb-2 text-4xl sm:text-5xl">
              नमस्कार! मी मेघना...
            </h2>
            <Ornament className="my-6 lg:!justify-start" />
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-brown/85 sm:text-lg">
            <p>
              पारिजात ज्वेल्सची सुरुवात एका सुंदर विचारातून झाली – प्रत्येक स्त्रीला तिच्या खास क्षणी सुंदर आणि आकर्षक दिसण्याचा आनंद मिळावा.
            </p>
            <p>
              पारंपरिक दागिन्यांची आवड आणि महाराष्ट्रीय संस्कृतीवरील प्रेम जपत, प्रत्येक महिलेसाठी सुंदर दागिन्यांचा संग्रह उपलब्ध करून देण्याचा आमचा प्रयत्न आहे.
            </p>
            <p>
              लग्नसमारंभ असो, सण असो किंवा आयुष्यातील एखादा खास क्षण – तुमच्या सौंदर्यात भर घालण्यासाठी पारिजात नेहमीच तुमच्या सोबत!
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="mx-auto mt-8 max-w-lg rounded-2xl border border-gold/30 bg-beige/60 px-6 py-5 font-calli text-2xl leading-snug text-maroon lg:mx-0 lg:border-0 lg:border-l-2 lg:bg-transparent lg:px-5 lg:py-0">
              “कारण प्रत्येक क्षण खास असतो आणि प्रत्येक स्त्री खास असते!”
            </blockquote>
            <p className="mt-4 font-calli text-xl text-gold-dark">— मेघना, संस्थापिका</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
