import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="flex items-center gap-6 mb-6">
              <img src="/assets/logo.png" alt="Infeuz Organic" className="footer-logo" />
              <h2 className="luxury-font text-2xl">INFEUZ ORGANIC</h2>
            </div>
            <p>Embrace your natural glow with our dermatologist-approved, cruelty-free formulas.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/infeuzorganic?igsi=ejJqOGFqNnlkYWRv" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-icon-btn">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/198yVNbvG7/" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-icon-btn">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/923216157018" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="social-icon-btn">
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
          padding: 50px 0 30px;
          margin-top: 40px;
          border-top: 1px solid var(--glass-border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 40px;
        }
        .footer-logo {
          height: 50px;
          width: 50px;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid var(--soft-pink);
        }
        .footer-brand p {
          color: var(--muted-text);
          margin-bottom: 16px;
          max-width: 320px;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .social-links {
          display: flex;
          gap: 16px;
          color: var(--dark-text);
        }
        .footer-links h3 {
          font-size: 1.1rem;
          margin-bottom: 14px;
          font-weight: 600;
        }
        .footer-links ul li {
          margin-bottom: 8px;
          font-size: 0.88rem;
          color: var(--muted-text);
        }
        .footer-bottom {
          margin-top: 30px;
          padding-top: 16px;
          border-top: 1px solid var(--glass-border);
          text-align: center;
          font-size: 0.78rem;
          color: var(--muted-text);
        }

        /* Mobile Responsive Footer Adjustments */
        @media (max-width: 768px) {
          .footer-section {
            padding: 30px 0 20px;
            margin-top: 20px;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px 16px;
          }
          .footer-brand {
            grid-column: span 2;
          }
          .footer-brand p {
            max-width: 100%;
            font-size: 0.85rem;
            margin-bottom: 14px;
          }
          .footer-links h3 {
            font-size: 1rem;
            margin-bottom: 10px;
          }
          .footer-links ul li {
            font-size: 0.82rem;
            margin-bottom: 6px;
          }
          .footer-bottom {
            margin-top: 24px;
            padding-top: 12px;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .footer-brand {
            grid-column: span 1;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
