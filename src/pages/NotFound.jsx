import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useSEO } from '../lib/seo';

export default function NotFound() {
  useSEO({ title: 'पान सापडले नाही', path: '/404' });
  return (
    <>
      <PageHeader title="पान सापडले नाही" subtitle="तुम्ही शोधत असलेले पान उपलब्ध नाही." />
      <section className="section paisley-bg text-center">
        <Link to="/" className="btn-maroon mr-3">मुख्यपृष्ठावर जा</Link>
        <Link to="/collection" className="btn-outline">दागिन्यांचा संग्रह</Link>
      </section>
    </>
  );
}
