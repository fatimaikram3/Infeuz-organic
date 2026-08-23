import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShoppingBag, Eye, Heart, Sparkles, ShieldCheck, Leaf, Truck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { products, addToCart, toggleWishlist, setActiveQuickView, wishlist } = useShop();

  const categories = [
    { name: 'Soaps', img: '/src/assets/daisy_lime_soap.png', color: 'var(--sage-green)' },
    { name: 'Soap Bases', img: '/src/assets/goatmilk_soap_base.jpeg', color: 'var(--soft-pink)' },
    { name: 'Moisturizer', img: '/src/assets/moisturizer_150ml.png', color: 'var(--beige)' },
    { name: 'Serum', img: '/src/assets/serum_peel_v2.png', color: 'var(--sage-green)' },
    { name: 'Scrubs', img: '/src/assets/aker_fassi_scrub.jpeg', color: 'var(--soft-pink)' },
    { name: 'Oils', img: '/src/assets/oil_peppermint.jpeg', color: 'var(--beige)' },
    { name: 'Powders', img: '/src/assets/powder_akarfassi.png', color: 'var(--sage-green)' },
    { name: 'Moulds', img: '/src/assets/rectangle_soap_mould.jfif', color: 'var(--soft-pink)' },
  ];

  return (
    <div className="home-page-wrapper">
      
      {/* Hero Section */}
      <section className="home-hero-section container">
        <div className="hero-grid">
          
          {/* Left Hero Text */}
          <div className="hero-text-wrap">
            <div className="hero-badge-pill inline-flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-gold" />
              <span>100% ORGANIC BOTANICAL SKINCARE</span>
            </div>

            <h1 className="hero-main-title luxury-font">
              Glow Naturally. <br />
              <span className="italic-accent">Feel Confident.</span>
            </h1>

            <p className="hero-subtitle-text">
              Dermatologist-approved organic soaps, soap bases, moisturizers, and pure botanical serums crafted for radiant skin health.
            </p>

            <div className="hero-btn-row flex items-center gap-4 mb-8">
              <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
                Shop Collection <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-outline">
                Our Story
              </Link>
            </div>

            {/* Value Highlights Bar */}
            <div className="hero-perks-row flex items-center gap-6 text-xs muted-text border-t pt-5">
              <span className="flex items-center gap-1.5 font-medium">
                <Leaf size={14} className="text-dark" /> Organic & Vegan
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck size={14} className="text-dark" /> Dermatologist Approved
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Truck size={14} className="text-dark" /> Fast Delivery
              </span>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="hero-image-wrap">
            <motion.div 
              className="hero-image-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/src/assets/hero-product.jpg" 
                alt="Infeuz Organic Skincare" 
                className="hero-img"
              />
              <div className="hero-card-floating-badge">
                <Sparkles size={16} className="text-gold mb-1" />
                <strong className="block text-xs uppercase tracking-wider">Handcrafted Formulation</strong>
                <span className="text-xs muted-text">Pure Botanical Oils</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Brand Value Features Banner */}
      <section className="features-banner container py-10">
        <div className="features-grid grid grid-cols-3 gap-6">
          <div className="feature-item p-6 rounded-xl border bg-surface flex items-center gap-4">
            <div className="feature-icon-box">
              <Leaf size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-base mb-1">100% Organic Botanicals</h4>
              <p className="text-xs muted-text">Ethically sourced cold-pressed plant ingredients.</p>
            </div>
          </div>

          <div className="feature-item p-6 rounded-xl border bg-surface flex items-center gap-4">
            <div className="feature-icon-box">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-base mb-1">Dermatologist Tested</h4>
              <p className="text-xs muted-text">Hypoallergenic & safe for sensitive skin types.</p>
            </div>
          </div>

          <div className="feature-item p-6 rounded-xl border bg-surface flex items-center gap-4">
            <div className="feature-icon-box">
              <Truck size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-base mb-1">Carefully Packaged</h4>
              <p className="text-xs muted-text">Hand-poured into glass bottles & eco boxes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop By Category Section */}
      <section className="categories-section container py-16">
        <div className="text-center mb-12">
          <span className="section-tag-small">EXPLORE OUR RANGE</span>
          <h2 className="luxury-font text-4xl mb-3">Shop by Category</h2>
          <p className="muted-text text-sm max-w-md mx-auto">
            From handcrafted soap bars to melt-and-pour soap bases and serums.
          </p>
        </div>

        <div className="category-grid grid grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="cat-card border rounded-xl overflow-hidden bg-surface"
            >
              <div className="cat-img-box">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="cat-card-body p-4 text-center">
                <h3 className="luxury-font text-lg mb-1">{cat.name}</h3>
                <Link to="/shop" className="cat-link text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1">
                  View Category <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Collection Grid */}
      <section className="featured-section container py-16">
        <div className="text-center mb-12">
          <span className="section-tag-small">HANDCRAFTED FORMULATIONS</span>
          <h2 className="luxury-font text-4xl mb-3">Featured Collection</h2>
          <p className="muted-text text-sm max-w-md mx-auto">
            Discover our most loved organic soaps, serums, moisturizers, and crafting supplies.
          </p>
        </div>

        <div className="product-grid grid grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => {
            const isWishlisted = wishlist.some(item => item.id === product.id);

            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="product-card border rounded-xl overflow-hidden bg-surface"
              >
                <div className="product-img-wrapper">
                  <Link to={`/product/${product.id}`} className="img-link">
                    <img src={product.img} alt={product.name} />
                  </Link>

                  {product.tag && <span className="product-tag">{product.tag}</span>}

                  <div className="product-actions">
                    <button
                      title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
                      onClick={() => toggleWishlist(product)}
                      className={isWishlisted ? "active-wishlist" : ""}
                    >
                      <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>
                    <button
                      title="Quick View"
                      onClick={() => setActiveQuickView(product)}
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      title="Add to Cart"
                      className="cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>

                <div className="product-info p-4">
                  <span className="product-cat">{product.category}</span>
                  <Link to={`/product/${product.id}`} className="product-name">
                    {product.name}
                  </Link>
                  <span className="product-price">Rs. {product.price}.00</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-primary">
            View All Products
          </Link>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section py-20 border-t bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-tag-small">TESTIMONIALS</span>
            <h2 className="luxury-font text-4xl mb-3">Loved by Our Community</h2>
            <p className="muted-text text-sm max-w-md mx-auto">
              Real feedback from customers using our soaps, soap bases, and botanical oils.
            </p>
          </div>

          <div className="review-grid grid grid-cols-3 gap-8">
            <div className="review-card p-8 border rounded-xl bg-background">
              <div className="stars flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={15} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
              </div>
              <p className="text-sm italic mb-6 leading-relaxed">
                "The Goat Milk Soap Base is incredible! Melts smoothly and leaves my homemade soaps feeling so soft and moisturizing."
              </p>
              <div className="reviewer font-medium text-sm">
                <strong>Fatima K.</strong>
                <span className="block text-xs muted-text">Verified Buyer</span>
              </div>
            </div>

            <div className="review-card p-8 border rounded-xl bg-background">
              <div className="stars flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={15} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
              </div>
              <p className="text-sm italic mb-6 leading-relaxed">
                "The Daisy Lime Soap and Glowing Serum have become my daily holy grail. My skin has never looked this clear and fresh!"
              </p>
              <div className="reviewer font-medium text-sm">
                <strong>Zainab M.</strong>
                <span className="block text-xs muted-text">Verified Buyer</span>
              </div>
            </div>

            <div className="review-card p-8 border rounded-xl bg-background">
              <div className="stars flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={15} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
              </div>
              <p className="text-sm italic mb-6 leading-relaxed">
                "Super fast shipping and high quality ingredients. The Aker Fassi powder and peppermint oil are 100% authentic."
              </p>
              <div className="reviewer font-medium text-sm">
                <strong>Ayesha S.</strong>
                <span className="block text-xs muted-text">Verified Buyer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .home-page-wrapper {
          padding-top: 25px;
          padding-bottom: 60px;
          color: var(--dark-text);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Grid */
        .home-hero-section {
          margin-bottom: 70px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
          background: linear-gradient(180deg, var(--surface) 0%, var(--beige) 100%);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 60px;
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.03);
        }

        .hero-badge-pill {
          background: var(--surface);
          border: 1px solid var(--glass-border);
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--dark-text);
        }

        .text-gold {
          color: var(--accent-gold);
        }

        .hero-main-title {
          font-size: 3.5rem;
          line-height: 1.15;
          margin-bottom: 18px;
        }

        .italic-accent {
          font-style: italic;
          font-weight: 400;
        }

        .hero-subtitle-text {
          color: var(--muted-text);
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 30px;
        }

        .hero-image-wrap {
          position: relative;
        }

        .hero-image-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.12);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
          aspect-ratio: 4/3;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-card-floating-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          padding: 12px 18px;
          border-radius: 10px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }

        /* Features Banner */
        .features-banner {
          margin-bottom: 70px;
        }

        .feature-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: var(--beige);
          color: var(--dark-text);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .section-tag-small {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--muted-text);
          margin-bottom: 8px;
        }

        /* Category Grid */
        .cat-card {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .cat-card:hover {
          border-color: var(--accent-gold);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .cat-img-box {
          height: 160px;
          overflow: hidden;
          background: var(--beige);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .cat-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cat-card:hover .cat-img-box img {
          transform: scale(1.06);
        }

        .cat-link {
          color: var(--dark-text);
          transition: color 0.2s ease;
        }

        .cat-link:hover {
          color: var(--accent-gold);
        }

        /* Product Cards */
        .product-card {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .product-card:hover {
          border-color: var(--accent-gold);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .product-img-wrapper {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--beige);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .img-link {
          display: block;
          width: 100%;
          height: 100%;
        }

        .product-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-img-wrapper img {
          transform: scale(1.05);
        }

        .product-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--surface);
          color: var(--dark-text);
          padding: 4px 10px;
          font-size: 0.65rem;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
          border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
        }

        .product-actions {
          position: absolute;
          bottom: 12px;
          right: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.25s ease;
        }

        .product-card:hover .product-actions {
          opacity: 1;
          transform: translateX(0);
        }

        .product-actions button {
          background: var(--surface);
          color: var(--dark-text);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .product-actions button:hover {
          background: var(--dark-text);
          color: white;
        }

        .product-actions button.active-wishlist {
          color: #e53935;
        }

        .product-actions .cart-btn {
          background: var(--dark-text);
          color: white;
        }

        .product-cat {
          display: block;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: var(--muted-text);
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .product-name {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--dark-text);
          margin-bottom: 4px;
          transition: color 0.2s ease;
        }

        .product-name:hover {
          color: var(--accent-gold);
        }

        .product-price {
          font-weight: 500;
          font-size: 0.95rem;
        }

        .reviews-section {
          background: linear-gradient(180deg, var(--surface) 0%, var(--beige) 100%);
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 36px;
            gap: 40px;
          }
          .hero-main-title {
            font-size: 2.5rem;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .review-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
};

export default Home;
