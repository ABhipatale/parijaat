// ─────────────────────────────────────────────────────────────
//  Product & category data — the single place to edit the catalogue.
//
//  IMPORTANT: prices and availability below are SAMPLE values.
//  Only ₹599 and ₹779 appeared on brand posts, and even those must be
//  re-confirmed by Meghana before going live. Update `price` and
//  `status` here whenever stock or rates change.
//
//  status: 'available' | 'limited' | 'booked'
//  image:  file name inside /public/images (without extension → .webp is used)
// ─────────────────────────────────────────────────────────────

export const CATEGORIES = [
  { slug: 'thushi', name: 'ठुशी', image: 'thushi' },
  { slug: 'kolhapuri-saaj', name: 'कोल्हापुरी साज', image: 'kolhapuri-long-saaj' },
  { slug: 'choker', name: 'चोकर सेट', image: 'royal-choker-779' },
  { slug: 'laxmi-haar', name: 'लक्ष्मी हार', image: 'laxmi-haar' },
  { slug: 'necklace', name: 'पारंपरिक नेकलेस', image: 'ruby-pendant-necklace' },
  { slug: 'earrings', name: 'कानातले', image: 'earrings' },
  { slug: 'nath', name: 'नथ', image: 'nath' },
  { slug: 'bangles', name: 'बांगड्या', image: 'bangles' },
  { slug: 'bajuband', name: 'बाजूबंद', image: 'bajuband' },
  { slug: 'bridal', name: 'ब्रायडल ज्वेलरी', image: 'maharashtrian-saaj' },
  { slug: 'festive', name: 'फेस्टिव्ह ज्वेलरी', image: 'festive-banner' },
  { slug: 'temple', name: 'टेंपल ज्वेलरी', image: 'temple' },
];

export const STATUS_LABEL = {
  available: 'उपलब्ध',
  limited: 'मर्यादित उपलब्ध',
  booked: 'सध्या बुक',
};

export const PRODUCTS = [
  {
    code: 'PJ-CH-101',
    name: 'पारंपरिक रॉयल चोकर सेट',
    categories: ['choker', 'bridal', 'festive'],
    price: 779,
    status: 'available',
    image: 'royal-choker-779',
    isNew: true,
    addedOn: '2026-10-20',
    includes: ['चोकर', 'कानातले', 'मांगटिका'],
    description:
      'अँटिक गोल्ड फिनिश, हिरव्या मिनाकारी पदकांसह मोत्यांचे लटकन असलेला शाही चोकर सेट. लग्न, साखरपुडा आणि सणासाठी परिपूर्ण.',
  },
  {
    code: 'PJ-CH-102',
    name: 'मोरपंखी अँटिक चोकर सेट',
    categories: ['choker', 'temple', 'festive', 'bridal'],
    price: 599,
    status: 'available',
    image: 'peacock-choker-599',
    isNew: true,
    addedOn: '2026-10-18',
    includes: ['चोकर', 'कानातले'],
    description:
      'मोराच्या नक्षीकामासह माणिक-पाचू खड्यांचा आणि सोनेरी घुंगरांचा देखणा चोकर सेट. पैठणी आणि नऊवारीवर विशेष खुलून दिसतो.',
  },
  {
    code: 'PJ-TH-201',
    name: 'फुलांची ठुशी चोकर',
    categories: ['thushi', 'kolhapuri-saaj', 'festive'],
    price: 449,
    status: 'available',
    image: 'flower-thushi-choker',
    isNew: true,
    addedOn: '2026-10-15',
    includes: ['चोकर', 'कानातले (कुडी)'],
    description:
      'सोनेरी मण्यांच्या फुलांची पारंपरिक महाराष्ट्रीयन ठुशी, माणिक-पाचू मध्यखड्यांसह. नऊवारी साडीवर अस्सल मराठमोळा साज.',
  },
  {
    code: 'PJ-NK-301',
    name: 'माणिक पदक नेकलेस सेट',
    categories: ['necklace', 'festive'],
    price: 499,
    status: 'available',
    image: 'ruby-pendant-necklace',
    isNew: true,
    addedOn: '2026-10-12',
    includes: ['नेकलेस', 'कानातले'],
    description:
      'जाळीदार सोनेरी पदकांमध्ये माणिक खडे जडवलेला, रेशमी दोरीचा हलका पारंपरिक नेकलेस सेट.',
  },
  {
    code: 'PJ-NK-302',
    name: 'चंद्रकोर कंठी सेट',
    categories: ['necklace', 'festive'],
    price: 549,
    status: 'limited',
    image: 'chandrakor-kanthi',
    isNew: true,
    addedOn: '2026-10-10',
    includes: ['कंठी', 'कानातले'],
    description:
      'चंद्रकोर आकाराचे पदक, कुंदन-माणिक खडे आणि मोत्यांचे लटकन असलेली मोहक कंठी. आधुनिक आणि पारंपरिक दोन्ही लुकसाठी.',
  },
  {
    code: 'PJ-KS-401',
    name: 'कोल्हापुरी पट्टा साज',
    categories: ['kolhapuri-saaj', 'choker', 'bridal'],
    price: 649,
    status: 'available',
    image: 'kolhapuri-long-saaj',
    addedOn: '2026-09-28',
    includes: ['साज', 'कानातले'],
    description:
      'सोनेरी नाण्यांच्या आकृतींनी आणि माणिक-पाचू थेंबांनी सजलेला रुंद पारंपरिक साज. वधूच्या शृंगारासाठी खास.',
  },
  {
    code: 'PJ-TH-202',
    name: 'पारंपरिक मणी ठुशी',
    categories: ['thushi', 'bridal'],
    price: 399,
    status: 'available',
    image: 'thushi',
    addedOn: '2026-09-20',
    includes: ['ठुशी', 'कानातले'],
    description: 'बारीक सोनेरी मण्यांची दाट ठुशी, रेशमी दोरी आणि गोंड्यासह — प्रत्येक मराठी स्त्रीची आवडती.',
  },
  {
    code: 'PJ-NT-501',
    name: 'मोत्यांची पेशवाई नथ',
    categories: ['nath', 'bridal'],
    price: 249,
    status: 'available',
    image: 'nath',
    addedOn: '2026-09-15',
    includes: ['नथ'],
    description: 'बसरा मोत्यांनी मढवलेली, माणिक-पाचू खड्यांची पारंपरिक पेशवाई नथ. नऊवारीचा लुक पूर्ण करणारी.',
  },
  {
    code: 'PJ-BG-601',
    name: 'पाटल्या-तोडे बांगडी सेट',
    categories: ['bangles', 'bridal'],
    price: 449,
    status: 'available',
    image: 'bangles',
    addedOn: '2026-09-10',
    includes: ['२ पाटल्या', '२ तोडे'],
    description: 'नक्षीदार पाटल्या आणि पिळदार तोडे — हिरव्या चुड्यासोबत शोभून दिसणारा पारंपरिक बांगडी सेट.',
  },
  {
    code: 'PJ-BJ-701',
    name: 'कमळ नक्षी बाजूबंद',
    categories: ['bajuband', 'bridal', 'temple'],
    price: 299,
    status: 'available',
    image: 'bajuband',
    addedOn: '2026-09-05',
    includes: ['बाजूबंद'],
    description: 'कमळाच्या नक्षीचा, माणिक-पाचू खड्यांचा आणि समायोज्य दोरीचा देखणा बाजूबंद.',
  },
  {
    code: 'PJ-LH-801',
    name: 'लक्ष्मी हार',
    categories: ['laxmi-haar', 'bridal', 'temple'],
    price: 899,
    status: 'limited',
    image: 'laxmi-haar',
    addedOn: '2026-08-30',
    includes: ['लक्ष्मी हार', 'झुमके'],
    description: 'लक्ष्मी मुद्रांच्या नाण्यांचा लांब पारंपरिक हार, माणिक मण्यांसह. लग्नसमारंभासाठी शुभ आणि शाही.',
  },
  {
    code: 'PJ-TP-901',
    name: 'देवी टेंपल नेकलेस सेट',
    categories: ['temple', 'bridal', 'festive'],
    price: 849,
    status: 'available',
    image: 'temple',
    addedOn: '2026-08-25',
    includes: ['नेकलेस', 'झुमके'],
    description: 'देवीच्या कोरीव पदकासह, मोर नक्षी आणि घुंगरांचा अँटिक टेंपल नेकलेस सेट.',
  },
  {
    code: 'PJ-ER-1001',
    name: 'झुमके व मोती कुडी',
    categories: ['earrings', 'festive'],
    price: 199,
    status: 'available',
    image: 'earrings',
    addedOn: '2026-08-20',
    includes: ['झुमके', 'कुडी'],
    description: 'माणिक खड्यांचे अँटिक झुमके आणि पारंपरिक मोती कुडी — दोन्ही एकाच सेटमध्ये.',
  },
  {
    code: 'PJ-BR-1101',
    name: 'संपूर्ण मराठमोळा वधू साज',
    categories: ['bridal', 'kolhapuri-saaj', 'thushi', 'nath'],
    price: 1999,
    status: 'available',
    image: 'maharashtrian-saaj',
    addedOn: '2026-08-15',
    includes: ['कोल्हापुरी साज', 'ठुशी', 'नथ', 'तोडे'],
    description: 'कोल्हापुरी साज, ठुशी, मोत्यांची नथ आणि तोडे — वधूसाठी संपूर्ण पारंपरिक शृंगार एकाच बुकिंगमध्ये.',
  },
  {
    code: 'PJ-FS-1201',
    name: 'दिवाळी फेस्टिव्ह सेट',
    categories: ['festive', 'temple', 'necklace'],
    price: 699,
    status: 'available',
    image: 'festive-banner',
    addedOn: '2026-08-10',
    includes: ['नेकलेस', 'झुमके'],
    description: 'माणिक-पाचू खड्यांचा अँटिक नेकलेस व झुमके — सण, पूजा आणि कौटुंबिक समारंभासाठी.',
  },
  {
    code: 'PJ-EV-1301',
    name: 'हलका नाजूक नेकलेस सेट',
    categories: ['necklace', 'earrings'],
    price: 299,
    status: 'available',
    image: 'everyday-banner',
    addedOn: '2026-08-05',
    includes: ['नेकलेस', 'कानातले', 'कडे'],
    description: 'हलका, नाजूक आणि सुंदर — छोट्या कार्यक्रमांसाठी आणि रोजच्या खास प्रसंगांसाठी.',
  },
];

export const slugOf = (p) => p.code.toLowerCase();
export const findProduct = (slug) => PRODUCTS.find((p) => slugOf(p) === slug);
export const categoryName = (slug) => CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
