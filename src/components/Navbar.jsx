import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Heart, Menu, X, Sun, Moon, Palette, Sprout, Sparkles, ChevronRight } from 'lucide-react';
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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

      {/* Mobile Menu Overlay Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div className="mobile-menu-header">
              <Link to="/" className="mobile-brand" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/assets/logo.png" alt="Infeuz Organic" className="mobile-logo-img" />
                <span className="luxury-font mobile-brand-name">INFEUZ ORGANIC</span>
              </Link>
              <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            {/* Navigation Options */}
            <nav className="mobile-menu-nav">
              <Link to="/" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Home</span>
                <ChevronRight size={16} className="nav-arrow" />
              </Link>

              <Link to="/shop" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex items-center gap-2">
                  <span>Shop Collection</span>
                </div>
                <span className="badge-mini">50+ Items</span>
              </Link>

              <Link to="/assessment" className="mobile-nav-item highlight-item" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-gold" />
                  <span>Skin Routine Quiz</span>
                </div>
                <span className="quiz-pill-badge">FREE</span>
              </Link>

              <Link to="/about" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                <span>About Our Story</span>
                <ChevronRight size={16} className="nav-arrow" />
              </Link>

              <Link to="/contact" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Contact Us</span>
                <ChevronRight size={16} className="nav-arrow" />
              </Link>
            </nav>

            {/* Quick Actions Footer */}
            <div className="mobile-menu-footer">
              <div className="mobile-action-buttons">
                <button onClick={toggleTheme} className="mobile-footer-btn">
                  {theme === 'light' ? <Moon size={18} /> :
                   theme === 'dark' ? <Palette size={18} /> :
                   theme === 'sunset' ? <Sprout size={18} /> :
                   <Sun size={18} />}
                  <span>{theme.toUpperCase()}</span>
                </button>

                <button onClick={() => { setIsWishlistOpen(true); setIsMobileMenuOpen(false); }} className="mobile-footer-btn">
                  <Heart size={18} />
                  <span>Wishlist</span>
                </button>

                <button onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }} className="mobile-footer-btn">
                  <ShoppingCart size={18} />
                  <span>Bag ({cartCount})</span>
                </button>
              </div>

              <p className="mobile-menu-tagline">100% Organic & Dermatologist Approved</p>
            </div>

          </div>
        </div>
      )}

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
          height: 50px;
          width: 50px;
          object-fit: cover;
          border-radius: 50%;
          transition: transform 0.3s ease;
          border: 2px solid var(--soft-pink);
        }
        @media (min-width: 768px) {
          .nav-logo {
            height: 60px;
            width: 60px;
          }
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
        .hidden { display: none; }
        @media (min-width: 768px) { .md\\:flex { display: flex; } .md\\:hidden { display: none; } }
        .text-sm { font-size: 0.875rem; }
        .text-lg { font-size: 1.125rem; }
        .uppercase { text-transform: uppercase; }
        .tracking-widest { letter-spacing: 0.1em; }
        .font-bold { font-weight: 700; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .absolute { position: absolute; }
        .relative { position: relative; }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .announcement-bar {
          background-color: var(--dark-text);
          color: var(--button-text);
          font-size: 0.72rem;
          letter-spacing: 1.5px;
        }

        /* Mobile Drawer Custom Styles */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-menu-drawer {
          width: 86%;
          max-width: 380px;
          height: 100%;
          background: var(--off-white);
          color: var(--dark-text);
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 40px rgba(0,0,0,0.2);
          animation: slideDrawer 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
        }

        @keyframes slideDrawer {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .mobile-menu-header {
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--glass-border);
        }

        .mobile-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-logo-img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid var(--soft-pink);
        }

        .mobile-brand-name {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .mobile-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--beige);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-text);
          cursor: pointer;
        }

        .mobile-menu-nav {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-grow: 1;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--dark-text);
          transition: all 0.2s ease;
        }

        .mobile-nav-item:hover, .mobile-nav-item:active {
          background: var(--beige);
          border-color: var(--dark-text);
          transform: translateX(4px);
        }

        .mobile-nav-item.highlight-item {
          background: linear-gradient(135deg, var(--beige) 0%, var(--surface) 100%);
          border-color: var(--accent-gold);
          color: var(--dark-text);
        }

        .nav-arrow {
          color: var(--muted-text);
        }

        .badge-mini {
          font-size: 0.65rem;
          background: var(--beige);
          color: var(--muted-text);
          padding: 3px 8px;
          border-radius: 20px;
          font-weight: 600;
        }

        .quiz-pill-badge {
          font-size: 0.65rem;
          background: var(--dark-text);
          color: var(--button-text);
          padding: 3px 8px;
          border-radius: 20px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .mobile-menu-footer {
          padding: 18px 20px 24px;
          border-top: 1px solid var(--glass-border);
          background: var(--surface);
        }

        .mobile-action-buttons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 14px;
        }

        .mobile-footer-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 10px 4px;
          background: var(--off-white);
          border: 1px solid var(--glass-border);
          border-radius: 10px;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--dark-text);
        }

        .mobile-menu-tagline {
          text-align: center;
          font-size: 0.7rem;
          color: var(--muted-text);
          letter-spacing: 0.5px;
        }
      `}} />
    </nav>
    </header>
  );
};

export default Navbar;
