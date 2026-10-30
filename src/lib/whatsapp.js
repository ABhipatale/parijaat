import { SITE } from '../data/site';

export const waLink = (text = '') =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

const formatDate = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
};

// Full booking-form message
export function buildBookingMessage({ name, mobile, product, date, eventType, message }) {
  return [
    'नमस्कार पारिजात ज्वेल्स! 🌸',
    '',
    'मला दागिने बुक करायचे आहेत.',
    '',
    `👤 ग्राहकाचे नाव: ${name}`,
    `📱 मोबाईल नंबर: ${mobile}`,
    `💎 दागिन्याचे नाव: ${product ? `${product.name} (${product.code})` : '-'}`,
    `💰 भाडे: ${product ? `₹${product.price}` : '-'}`,
    `📅 कार्यक्रमाची तारीख: ${formatDate(date)}`,
    `🎉 कार्यक्रमाचा प्रकार: ${eventType}`,
    `📝 अतिरिक्त माहिती: ${message?.trim() || '-'}`,
    '',
    'कृपया दागिन्याची उपलब्धता आणि बुकिंग प्रक्रियेबद्दल माहिती द्यावी.',
    '',
    'धन्यवाद!',
    '- पारिजात ज्वेल्स ग्राहक',
  ].join('\n');
}

// Quick enquiry about one product (no form)
export function buildEnquiryMessage(product) {
  return [
    'नमस्कार पारिजात ज्वेल्स!',
    '',
    'मला खालील दागिन्याबद्दल माहिती हवी आहे.',
    '',
    `दागिन्याचे नाव: ${product.name}`,
    `प्रॉडक्ट कोड: ${product.code}`,
    `भाडे: ₹${product.price}`,
    'कार्यक्रमाची तारीख: ',
    '',
    'कृपया उपलब्धता आणि बुकिंगची माहिती द्यावी.',
    '',
    'धन्यवाद!',
  ].join('\n');
}

export function buildContactMessage({ name, mobile, message }) {
  return [
    'नमस्कार पारिजात ज्वेल्स! 🌸',
    '',
    `👤 नाव: ${name}`,
    `📱 मोबाईल: ${mobile}`,
    `📝 चौकशी: ${message}`,
    '',
    'धन्यवाद!',
  ].join('\n');
}

// Accepts 98XXXXXXXX, 098XXXXXXXX, +91 98XXX XXXXX
export const normalizeMobile = (raw) => raw.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '');
export const isValidMobile = (raw) => /^[6-9]\d{9}$/.test(normalizeMobile(raw));

const isMobile = () => /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

// On phones, navigate directly so the WhatsApp app opens; on desktop use a new tab.
export function openWhatsApp(text) {
  const url = waLink(text);
  if (isMobile()) {
    window.location.href = url;
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return url;
}
