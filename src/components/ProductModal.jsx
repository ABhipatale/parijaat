import { Link } from 'react-router-dom';
import { Check, ExternalLink, MessageCircle } from 'lucide-react';
import Modal from './Modal';
import Img from './Img';
import { WhatsAppIcon } from './Icons';
import { StatusBadge } from './ProductCard';
import { categoryName, slugOf } from '../data/products';
import { buildEnquiryMessage, waLink } from '../lib/whatsapp';

export default function ProductModal({ product, onClose, onBook }) {
  return (
    <Modal open={!!product} onClose={onClose} labelledBy="pd-title" maxWidth="max-w-4xl">
      {product && (
        <div className="grid md:grid-cols-2">
          <div className="aspect-square bg-beige md:aspect-auto md:min-h-full">
            <Img name={product.image} alt={product.name} sizes="(max-width: 768px) 100vw, 450px" className="h-full w-full object-cover md:rounded-l-3xl" />
          </div>
          <div className="flex flex-col p-6 sm:p-8">
            <p className="mb-2 font-marathi text-gold-dark">{product.categories.map(categoryName).join(' · ')}</p>
            <h2 id="pd-title" className="mb-2 text-3xl">
              {product.name}
            </h2>
            <p className="mb-5 font-poppins text-sm text-brown/60">प्रॉडक्ट कोड: {product.code}</p>
            <div className="mb-5 flex flex-wrap items-center gap-4">
              <p>
                <span className="text-brown/60">भाडे: </span>
                <span className="font-display text-3xl font-semibold text-maroon">₹{product.price}</span>
              </p>
              <StatusBadge status={product.status} />
            </div>
            <p className="mb-5 leading-relaxed text-brown/80">{product.description}</p>
            {product.includes?.length > 0 && (
              <div className="mb-6">
                <p className="mb-2 font-semibold text-maroon">सेटमध्ये समाविष्ट:</p>
                <ul className="flex flex-wrap gap-2">
                  {product.includes.map((i) => (
                    <li key={i} className="inline-flex items-center gap-1 rounded-full bg-beige px-3 py-1 text-sm">
                      <Check size={14} className="text-gold-dark" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="mb-6 rounded-xl bg-beige/70 p-3 text-xs text-brown/70">
              * भाडे व उपलब्धता कार्यक्रमाच्या तारखेनुसार बदलू शकते. अंतिम माहिती WhatsApp वर निश्चित केली जाईल.
            </p>
            <div className="mt-auto space-y-3">
              <button onClick={() => onBook(product)} disabled={product.status === 'booked'} className="btn-whatsapp w-full py-3.5">
                <WhatsAppIcon className="h-5 w-5" /> आत्ताच बुक करा
              </button>
              <div className="grid grid-cols-2 gap-3">
                <a href={waLink(buildEnquiryMessage(product))} target="_blank" rel="noopener noreferrer" className="btn-outline !px-3 text-sm">
                  <MessageCircle size={16} /> फक्त चौकशी
                </a>
                <Link to={`/collection/${slugOf(product)}`} onClick={onClose} className="btn-outline !px-3 text-sm">
                  <ExternalLink size={16} /> पूर्ण पान
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
