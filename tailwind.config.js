/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: '#4B1028', 700: '#5E1633', 800: '#3A0C1F', 900: '#2A0816' },
        gold: { DEFAULT: '#C49A45', light: '#E2C27D', dark: '#9C7A32' },
        ivory: '#FFF8ED',
        champagne: '#E8D7B8',
        brown: '#422719',
        beige: '#F4EBDD',
        whatsapp: '#25D366',
      },
      fontFamily: {
        brand: ['"Yatra One"', '"Rozha One"', 'serif'],
        shahi: ['"Rozha One"', '"Tiro Devanagari Marathi"', 'serif'],
        calli: ['Amita', '"Tiro Devanagari Marathi"', 'serif'],
        marathi: ['"Tiro Devanagari Marathi"', '"Noto Serif Devanagari"', 'serif'],
        serifdeva: ['"Noto Serif Devanagari"', 'serif'],
        mukta: ['Mukta', 'Poppins', 'sans-serif'],
        display: ['"Playfair Display"', '"Tiro Devanagari Marathi"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['Mukta', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        lux: '0 20px 50px -20px rgba(75,16,40,0.35)',
        gold: '0 0 0 1px rgba(196,154,69,0.35), 0 18px 40px -18px rgba(66,39,25,0.4)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg,#9C7A32 0%,#E2C27D 45%,#C49A45 70%,#9C7A32 100%)',
      },
    },
  },
  plugins: [],
};
