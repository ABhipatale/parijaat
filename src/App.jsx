import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileActionBar from './components/MobileActionBar';
import Loader from './components/Loader';
import { BookingProvider } from './context/BookingContext';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductPage from './pages/ProductPage';
import InfoPage from './pages/InfoPage';
import NotFound from './pages/NotFound';

// Scroll to #hash after navigation, otherwise to top on page change.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // The target may not exist yet while the page transition is running — retry briefly.
      let tries = 0;
      const id = setInterval(() => {
        const el = document.getElementById(hash.slice(1));
        if (el || ++tries > 20) {
          clearInterval(id);
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return () => clearInterval(id);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <BookingProvider>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <ScrollManager />
      <a href="#main" className="sr-only z-[90] rounded bg-maroon px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        मुख्य मजकुराकडे जा
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:slug" element={<ProductPage />} />
            <Route path="/info/:slug" element={<InfoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </BookingProvider>
  );
}
