// Central business information — edit here and every page updates.
export const SITE = {
  brandMr: 'पारिजात ज्वेल्स',
  brandEn: 'Parijaat Jewels by Meghana',
  owner: 'मेघना',
  tagline: 'परंपरा आमची, विश्वास तुमचा!',
  // TODO: replace with the live domain before deploying (also in index.html, robots.txt, sitemap.xml)
  url: 'https://www.parijaatjewels.in',
  whatsapp: '919005313005',
  phoneDisplay: '+91 90053 13005',
  city: 'इचलकरंजी, महाराष्ट्र',
  cityEn: 'Ichalkaranji, Maharashtra',
  // Add the verified street address once provided. Until then the map shows the city.
  address: '',
  mapQuery: 'Ichalkaranji, Maharashtra',
  instagram: [
    { handle: '@pj_jewels_by_meghana', url: 'https://www.instagram.com/pj_jewels_by_meghana/', label: 'दागिन्यांचा संग्रह' },
    { handle: '@parijat_rental_by_meghana', url: 'https://www.instagram.com/parijat_rental_by_meghana/', label: 'भाड्याने दागिने' },
  ],
};

export const NAV_LINKS = [
  { label: 'मुख्यपृष्ठ', to: '/#home' },
  { label: 'आमच्याविषयी', to: '/#about' },
  { label: 'दागिन्यांचा संग्रह', to: '/collection' },
  { label: 'नवीन आगमन', to: '/#new-arrivals' },
  { label: 'वधूसाठी खास', to: '/collection?cat=bridal' },
  { label: 'भाड्याने दागिने', to: '/#rental-process' },
  { label: 'संपर्क', to: '/#contact' },
];

export const EVENT_TYPES = ['लग्न', 'साखरपुडा', 'सण', 'डोहाळे जेवण', 'फोटोशूट', 'इतर'];
