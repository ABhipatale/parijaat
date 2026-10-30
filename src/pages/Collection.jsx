import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ProductGrid from '../components/ProductGrid';
import RentalProcess from '../components/RentalProcess';
import { CATEGORIES, categoryName } from '../data/products';
import { useSEO } from '../lib/seo';

export default function Collection() {
  const [params, setParams] = useSearchParams();
  const raw = params.get('cat');
  const cat = CATEGORIES.some((c) => c.slug === raw) ? raw : 'all';
  const catLabel = cat === 'all' ? null : categoryName(cat);

  useSEO({
    title: catLabel ? `${catLabel} भाड्याने – इचलकरंजी` : 'दागिन्यांचा संग्रह – Jewellery on Rent',
    description: catLabel
      ? `${catLabel} भाड्याने मिळवा – पारिजात ज्वेल्स, इचलकरंजी. परवडणारे भाडे, WhatsApp वर सोपे बुकिंग.`
      : 'ठुशी, कोल्हापुरी साज, चोकर, लक्ष्मी हार, नथ, बांगड्या, बाजूबंद – पारंपरिक व वधू दागिने भाड्याने. पारिजात ज्वेल्स, इचलकरंजी.',
    path: cat === 'all' ? '/collection' : `/collection?cat=${cat}`,
  });

  const setCategory = (slug) => {
    setParams(slug === 'all' ? {} : { cat: slug }, { replace: true });
  };

  return (
    <>
      <PageHeader
        title={catLabel ?? 'दागिन्यांचा संग्रह'}
        subtitle="तुमच्या आवडीचा साज निवडा, अधिक माहिती पहा आणि WhatsApp वर सहज बुकिंग करा."
        crumbs={[{ label: 'दागिन्यांचा संग्रह', to: catLabel ? '/collection' : undefined }, ...(catLabel ? [{ label: catLabel }] : [])]}
      />
      <section className="section paisley-bg !pt-14">
        <div className="container-lux">
          <ProductGrid category={cat} onCategoryChange={setCategory} />
        </div>
      </section>
      <RentalProcess />
    </>
  );
}
