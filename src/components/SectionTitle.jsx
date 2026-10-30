import Reveal from './Reveal';
import { Ornament } from './Icons';

export default function SectionTitle({ eyebrow, title, subtitle, light = false, align = 'center', id }) {
  const center = align === 'center';
  return (
    <Reveal className={`mb-12 sm:mb-16 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${light ? '!text-gold-light' : ''}`}>{eyebrow}</p>}
      <h2 id={id} className={`text-3xl font-normal sm:text-4xl lg:text-[2.75rem] ${light ? '!text-ivory' : ''}`}>
        {title}
      </h2>
      <Ornament className={`my-5 ${center ? '' : '!justify-start'}`} />
      {subtitle && <p className={`text-lg leading-relaxed ${light ? 'text-ivory/75' : 'text-brown/75'}`}>{subtitle}</p>}
    </Reveal>
  );
}
