import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="flex items-center gap-6 mb-6">
              <img src="/src/assets/logo.png" alt="Infeuz Organic" className="footer-logo" />
              <h2 className="luxury-font text-2xl">INFEUZ ORGANIC</h2>
            </div>
            <p>Embrace your natural glow with our dermatologist-approved, cruelty-free formulas.</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-icon-btn">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-icon-btn">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="social-icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Shop</h3>
            <ul>
              <li><a href="/shop">Soaps</a></li>
              <li><a href="/shop">Soap Bases</a></li>
              <li><a href="/shop">Moisturizer</a></li>
              <li><a href="/shop">Serum</a></li>
              <li><a href="/shop">Scrubs</a></li>
              <li><a href="/shop">Oils</a></li>
              <li><a href="/shop">Powders</a></li>
              <li><a href="/shop">Moulds</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/contact">FAQs</a></li>
              <li><a href="/shipping-returns">Shipping & Returns</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Infeuz Organic. All rights reserved.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer-section {
          background-color: var(--off-white);
          padding: 80px 0 40px;
          margin-top: 100px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 40px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
        .footer-logo {
          height: 60px;
          width: 60px;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid var(--soft-pink);
        }
        .footer-brand p {
          color: var(--muted-text);
          margin-bottom: 20px;
          max-width: 300px;
        }
        .social-links {
          display: flex;
          gap: 20px;
          color: var(--dark-text);
        }
        .footer-links h3 {
          font-size: 1.2rem;
          margin-bottom: 20px;
          font-weight: 500;
        }
        .footer-links ul li {
          margin-bottom: 10px;
          font-size: 0.9rem;
          color: var(--muted-text);
        }
        .footer-bottom {
          margin-top: 60px;
          padding-top: 20px;
          border-top: 1px solid var(--glass-border);
          text-align: center;
          font-size: 0.8rem;
          color: var(--muted-text);
        }
      `}} />
    </footer>
  );
};

export default Footer;
