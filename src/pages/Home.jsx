import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import NewArrivals from '../components/NewArrivals';
import BridalCollection from '../components/BridalCollection';
import RentalProcess from '../components/RentalProcess';
import WhyChoose from '../components/WhyChoose';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import InstagramGallery from '../components/InstagramGallery';
import ContactSection from '../components/ContactSection';
import { useSEO } from '../lib/seo';

export default function Home() {
  useSEO({
    title: 'Jewellery on Rent in Ichalkaranji | पारंपरिक दागिने भाड्याने',
    description:
      'पारिजात ज्वेल्स – इचलकरंजीमध्ये लग्न, साखरपुडा व सणासाठी पारंपरिक दागिने भाड्याने. ठुशी, कोल्हापुरी साज, नथ, चोकर सेट. Bridal & Maharashtrian jewellery on rent.',
    path: '/',
  });

  return (
    <>
      <HeroSection />
      <CategorySection />
      <NewArrivals />
      <BridalCollection />
      <RentalProcess />
      <WhyChoose />
      <AboutSection />
      <Testimonials />
      <InstagramGallery />
      <ContactSection />
    </>
  );
}
