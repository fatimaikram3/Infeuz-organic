import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Assessment from './pages/Assessment';
import Preloader from './components/Preloader';
import { ShopProvider } from './context/ShopContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ShopProvider>
      <Router>
        <Preloader />
        <ScrollToTop />
        <div className="app-wrapper min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          .app-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .flex-grow {
            flex-grow: 1;
          }
          .min-h-screen {
            min-height: 100vh;
          }
          .pt-24 {
            padding-top: 110px;
          }
          @media (max-width: 768px) {
            .pt-24 {
              padding-top: 90px;
            }
          }
        `}} />
      </Router>
    </ShopProvider>
  );
}

export default App;
