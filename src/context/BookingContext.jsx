import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import BookingModal from '../components/BookingModal';
import ProductModal from '../components/ProductModal';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState({ open: false, product: null });
  const [details, setDetails] = useState(null);

  const openBooking = useCallback((product = null) => {
    setDetails(null);
    setBooking({ open: true, product });
  }, []);
  const closeBooking = useCallback(() => setBooking((b) => ({ ...b, open: false })), []);
  const openDetails = useCallback((product) => setDetails(product), []);
  const closeDetails = useCallback(() => setDetails(null), []);

  const value = useMemo(
    () => ({ openBooking, closeBooking, openDetails, closeDetails }),
    [openBooking, closeBooking, openDetails, closeDetails],
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <ProductModal product={details} onClose={closeDetails} onBook={openBooking} />
      <BookingModal open={booking.open} product={booking.product} onClose={closeBooking} />
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
