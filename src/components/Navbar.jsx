import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Heart, Menu, X, Sun, Moon, Palette, Sprout } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const { cartCount, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('sunset');
    else if (theme === 'sunset') setTheme('cactus');
    else setTheme('light');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Announcement Bar */}
      <div className="announcement-bar text-center text-xs py-2 px-4 uppercase tracking-widest font-semibold">
        <span>✨ Shipping will be applied on all orders</span>
      </div>

      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-surface py-4 border-b border-glass-border'}`} style={{ color: 'var(--dark-text)' }}>
      <div className="container nav-content">
        {/* Desktop Menu Left */}
        <div className="nav-col-left hidden md:flex items-center space-x-8">
          <Link to="/shop" className="nav-link text-sm uppercase tracking-widest">Shop</Link>
          <Link to="/about" className="nav-link text-sm uppercase tracking-widest">About</Link>
          <Link to="/assessment" className="nav-link text-sm uppercase tracking-widest" style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>Skin Quiz</Link>
          <Link to="/contact" className="nav-link text-sm uppercase tracking-widest">Contact</Link>
        </div>

        {/* Logo Center */}
        <div className="nav-col-center">
          <Link to="/" className="flex items-center justify-center gap-3 md:gap-6">
            <img src="/assets/logo.png" alt="Infeuz Organic" className="nav-logo" />
            <span className="text-lg md:text-2xl font-bold luxury-font tracking-tight">
              INFEUZ ORGANIC
            </span>
          </Link>
        </div>

        {/* Mobile Header Actions (Visible on Mobile) */}
        <div className="flex md:hidden items-center gap-3">
          <button className="p-1 text-dark-text" onClick={() => setIsSearchOpen(true)} aria-label="Search">
            <Search size={20} />
          </button>
          <button className="relative p-1 text-dark-text" onClick={() => setIsCartOpen(true)} aria-label="Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span
                className="absolute flex items-center justify-center text-white font-bold rounded-full"
                style={{
                  backgroundColor: 'var(--accent-gold)',
                  fontSize: '9px',
                  width: '15px',
                  height: '15px',
                  top: '-4px',
                  right: '-6px',
                  lineHeight: '1'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
          <button className="p-1 ml-1 text-dark-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Icons Right */}
        <div className="nav-col-right hidden md:flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="p-2 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--glass-border)',
              color: 'var(--dark-text)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> :
              theme === 'dark' ? <Palette size={18} /> :
                theme === 'sunset' ? <Sprout size={18} /> :
                  <Sun size={18} />}
          </button>
          <button className="hover:text-gray-500 transition-colors" onClick={() => setIsSearchOpen(true)}>
            <Search size={20} />
          </button>
          <button className="hover:text-gray-500 transition-colors" onClick={() => setIsWishlistOpen(true)}>
            <Heart size={20} />
          </button>
          <button className="relative hover:text-gray-500 transition-colors flex items-center justify-center p-1" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span
                className="absolute flex items-center justify-center text-white font-bold rounded-full"
                style={{
                  backgroundColor: 'var(--accent-gold)',
                  fontSize: '9px',
                  width: '16px',
                  height: '16px',
                  top: '-4px',
                  right: '-6px',
                  lineHeight: '1',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center space-y-8 md:hidden"
          style={{ backgroundColor: 'var(--off-white)', color: 'var(--dark-text)' }}
        >
          <button className="absolute top-6 right-6" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          <Link to="/" className="mb-8 flex flex-col items-center gap-4" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/assets/logo.png" alt="Infeuz Organic" className="nav-logo mobile" />
            <span className="text-3xl font-bold luxury-font tracking-tight">
              INFEUZ <span className="font-light italic">ORGANIC</span>
            </span>
          </Link>
          <Link to="/shop" className="text-xl uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/about" className="text-xl uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/assessment" className="text-xl uppercase tracking-widest" style={{ color: 'var(--accent-gold)' }} onClick={() => setIsMobileMenuOpen(false)}>Skin Quiz</Link>
          <Link to="/contact" className="text-xl uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <div className="flex items-center space-x-8 pt-8">
            <button onClick={toggleTheme} className="p-2 rounded-full border border-gray-200" style={{ color: 'var(--dark-text)' }}>
              {theme === 'light' ? <Moon size={24} /> :
                theme === 'dark' ? <Palette size={24} /> :
                  theme === 'sunset' ? <Sprout size={24} /> :
                    <Sun size={24} />}
            </button>
            <button onClick={() => { setIsWishlistOpen(true); setIsMobileMenuOpen(false); }}>
              <Heart size={24} />
            </button>
            <button onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }}>
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Tailwind classes used above need to be handled. For now, I'll use inline styles or specific index.css classes if I don't set up Tailwind. 
          Actually, I'll use standard CSS classes since I didn't install Tailwind. I'll modify Navbar to use plain CSS classes.
      */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .nav-col-left {
          flex: 1;
          display: flex;
          justify-content: flex-start;
        }
        .nav-col-center {
          flex: 0 0 auto;
          text-align: center;
        }
        .nav-col-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        @media (max-width: 768px) {
          .nav-content {
            justify-content: space-between;
          }
          .nav-col-left, .nav-col-right {
            display: none;
          }
          .nav-col-center {
            flex: 1;
            text-align: left;
          }
        }
        .nav-logo {
          height: 60px;
          width: 60px;
          object-fit: cover;
          border-radius: 50%;
          transition: transform 0.3s ease;
          border: 2px solid var(--soft-pink);
        }
        .nav-logo.mobile {
          height: 100px;
        }
        .nav-logo:hover {
          transform: scale(1.05);
        }
        .fixed { position: fixed; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .w-full { width: 100%; }
        .z-50 { z-index: 50; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .space-x-8 > * + * { margin-left: 2rem; }
        .space-x-6 > * + * { margin-left: 1.5rem; }
        .space-y-8 > * + * { margin-top: 2rem; }
        .hidden { display: none; }
        @media (min-width: 768px) { .md\\:flex { display: flex; } .md\\:hidden { display: none; } }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-sm { font-size: 0.875rem; }
        .text-xl { font-size: 1.25rem; }
        .uppercase { text-transform: uppercase; }
        .tracking-widest { letter-spacing: 0.1em; }
        .tracking-tighter { letter-spacing: -0.05em; }
        .font-bold { font-weight: 700; }
        .font-light { font-weight: 300; }
        .italic { font-style: italic; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .absolute { position: absolute; }
        .relative { position: relative; }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .announcement-bar {
          background-color: var(--dark-text);
          color: var(--button-text);
          font-size: 0.72rem;
          letter-spacing: 1.5px;
        }
      `}} />
    </nav>
    </header>
  );
};

export default Navbar;
