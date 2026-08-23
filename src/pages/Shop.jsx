import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Heart, Filter, SlidersHorizontal } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { 
    products, addToCart, toggleWishlist, setActiveQuickView, 
    wishlist, setIsFilterOpen, sortOrder, setSortOrder, priceRange 
  } = useShop();

  const categories = ['All', 'Soaps', 'Soap Bases', 'Moisturizer', 'Serum', 'Scrubs', 'Oils', 'Powders', 'Moulds'];

  const minPrice = typeof priceRange[0] === 'number' ? priceRange[0] : 0;
  const maxPrice = (typeof priceRange[1] === 'number' && priceRange[1] > 0) ? priceRange[1] : 100000;

  const filteredProducts = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => p.price >= minPrice && p.price <= maxPrice)
    .sort((a, b) => {
      if (sortOrder === 'price-low') return a.price - b.price;
      if (sortOrder === 'price-high') return b.price - a.price;
      if (sortOrder === 'name-az') return a.name.localeCompare(b.name);
      return b.id - a.id;
    });

  return (
    <div className="shop-page-wrapper">
      {/* Clean & Spacious Header */}
      <header className="shop-clean-header text-center">
        <div className="container">
          <h1 className="luxury-font text-5xl mb-3">The Collection</h1>
          <p className="shop-clean-subtitle">
            Pure. Potent. Proven skincare for every skin type.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="container">
        
        {/* Sleek Category Navigation & Filter Action */}
        <div className="clean-controls-row flex justify-between items-center mb-10">
          <div className="clean-tabs-list flex items-center gap-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`clean-cat-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsFilterOpen(true)}
            className="clean-filter-btn flex items-center gap-2"
          >
            <SlidersHorizontal size={15} />
            <span>Filter & Sort</span>
          </button>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.some(item => item.id === product.id);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`product-card ${product.category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="product-img-wrapper">
                    <Link to={`/product/${product.id}`} className="img-link">
                      <img src={product.img} alt={product.name} loading="lazy" />
                    </Link>

                    {product.tag && <span className="product-tag">{product.tag}</span>}

                    <div className="product-actions">
                      <button
                        title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
                        onClick={() => toggleWishlist(product)}
                        className={isWishlisted ? "active-wishlist" : ""}
                      >
                        <Heart size={17} fill={isWishlisted ? "currentColor" : "none"} />
                      </button>
                      <button
                        title="Quick View"
                        onClick={() => setActiveQuickView(product)}
                      >
                        <Eye size={17} />
                      </button>
                      <button
                        title="Add to Cart"
                        className="cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingBag size={17} />
                      </button>
                    </div>
                  </div>

                  <div className="product-info">
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
        ) : (
          <div className="empty-shop-results text-center py-16">
            <Filter size={32} className="mx-auto mb-3 muted-text" />
            <h3 className="luxury-font text-2xl mb-2">No Products Match Your Filter</h3>
            <p className="muted-text text-sm mb-6">
              Try adjusting your price range or selecting another category.
            </p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setPriceRange([0, 10000]);
                setSortOrder('newest');
              }} 
              className="btn-primary"
            >
              View All Formulations
            </button>
          </div>
        )}

      </section>

      {/* Clean Embedded Styling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .shop-page-wrapper {
          padding-top: 100px;
          padding-bottom: 30px;
          color: var(--dark-text);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (max-width: 768px) {
          .shop-page-wrapper {
            padding-top: 90px;
          }
          .container {
            padding: 0 14px;
          }
          .shop-clean-header {
            padding: 20px 14px;
            margin-bottom: 20px;
          }
          .shop-clean-header h1 {
            font-size: 1.8rem;
          }
          .shop-clean-subtitle {
            font-size: 0.88rem;
          }
          .clean-controls-row {
            gap: 14px;
            margin-bottom: 20px;
          }
          .clean-cat-btn {
            font-size: 0.78rem;
          }
        }

        /* Clean Header */
        .shop-clean-header {
          margin-bottom: 30px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 30px 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .shop-clean-subtitle {
          color: var(--muted-text);
          font-size: 0.98rem;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        /* Controls Row */
        .clean-controls-row {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 20px;
          margin-bottom: 30px;
        }

        .clean-tabs-list {
          display: flex;
          align-items: center;
          gap: 28px;
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
        }

        .clean-tabs-list::-webkit-scrollbar {
          display: none;
        }

        .clean-cat-btn {
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--muted-text);
          background: none;
          border: none;
          padding: 6px 0;
          position: relative;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clean-cat-btn:hover {
          color: var(--dark-text);
        }

        .clean-cat-btn.active {
          color: var(--dark-text);
          font-weight: 700;
        }

        .clean-cat-btn.active::after {
          content: '';
          position: absolute;
          bottom: -21px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--dark-text);
        }

        /* Responsive Mobile Layout for Category Filters */
        @media (max-width: 768px) {
          .clean-controls-row {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }

          .clean-tabs-list {
            display: flex;
            flex-wrap: wrap;
            white-space: normal;
            overflow: visible;
            gap: 8px 6px;
            width: 100%;
          }

          .clean-cat-btn {
            padding: 8px 14px;
            border-radius: 20px;
            border: 1px solid var(--glass-border);
            background: var(--surface);
            font-size: 0.76rem;
            font-weight: 500;
            letter-spacing: 0.5px;
            color: var(--dark-text);
            box-shadow: 0 2px 6px rgba(0,0,0,0.02);
            text-transform: uppercase;
          }

          .clean-cat-btn:hover, .clean-cat-btn:active {
            border-color: var(--dark-text);
          }

          .clean-cat-btn.active {
            background: var(--dark-text);
            color: var(--button-text);
            border-color: var(--dark-text);
            font-weight: 700;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          }

          .clean-cat-btn.active::after {
            display: none;
          }

          .clean-filter-btn {
            width: 100%;
            justify-content: center;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 0.8rem;
          }
        }

        .clean-filter-btn {
          padding: 10px 20px;
          border: 1px solid var(--dark-text);
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--dark-text);
          background: transparent;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .clean-filter-btn:hover {
          background: var(--dark-text);
          color: var(--button-text);
        }

        /* Product Grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px 30px;
          margin-top: 30px;
        }

        @media (max-width: 900px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .clean-controls-row {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
          .clean-filter-btn {
            align-self: flex-start;
          }
        }

        @media (max-width: 550px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
        }

        .product-card {
          position: relative;
        }

        .product-img-wrapper {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          background-color: var(--beige);
          border-radius: 4px;
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
          transform: scale(1.04);
        }

        .product-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: var(--surface);
          color: var(--dark-text);
          padding: 4px 10px;
          font-size: 0.65rem;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
          border-radius: 2px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
        }

        .product-actions {
          position: absolute;
          bottom: 14px;
          right: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.25s ease;
          z-index: 5;
        }

        .product-card:hover .product-actions {
          opacity: 1;
          transform: translateX(0);
        }

        .product-actions button {
          background-color: var(--surface);
          color: var(--dark-text);
          width: 36px;
          height: 36px;
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
          background-color: var(--dark-text);
          color: white;
        }

        .product-actions button.active-wishlist {
          color: #e53935;
        }

        .product-actions .cart-btn {
          background-color: var(--dark-text);
          color: white;
        }

        .product-info {
          padding-top: 16px;
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
          font-size: 1.15rem;
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
          font-size: 1rem;
        }

        .empty-shop-results {
          padding: 60px 20px;
        }
      `}} />
    </div>
  );
};

export default Shop;
