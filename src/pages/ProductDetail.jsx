import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Star, Truck, ShieldCheck, Leaf, Heart, Plus, Minus, ChevronLeft } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const { products, addToCart, toggleWishlist, wishlist, showToast } = useShop();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container py-60 text-center">
        <h2 className="luxury-font text-3xl mb-4">Product Not Found</h2>
        <a href="/shop" className="btn-primary">Back to Shop</a>
      </div>
    );
  }

  // Define some default details if they aren't in the product object
  const details = {
    rating: 4.8,
    reviews: 86,
    shortDesc: `This ${product.category.toLowerCase()} is meticulously crafted to nourish and enhance your skin.`,
    longDesc: `Our ${product.name} represents the pinnacle of natural skincare. Infused with pure botanical extracts and specifically formulated for effective results, it provides a luxurious experience that transforms your daily routine into a spa-like ritual.`,
    ingredients: 'Pure Organic extracts, Essential oils, Shea butter, Natural Glycerin.',
    benefits: ['Deeply cleanses without stripping', 'Rich in natural antioxidants', 'Sustainably sourced ingredients', 'Chemical-free and gentle']
  };

  return (
    <div className="product-detail-page container py-40">
      <button
        onClick={() => navigate(-1)}
        className="back-btn flex items-center gap-2 mb-8 hover:text-dark-text transition-colors"
        style={{ color: 'var(--muted-text)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}
      >
        <ChevronLeft size={20} /> Back to Collection
      </button>

      <div className="pd-grid">
        {/* Gallery */}
        <div className="pd-gallery">
          <div className="main-img">
            <img src={product.img} alt={product.name} />
          </div>
          {product.images && product.images.length > 0 && (
            <div className="thumb-grid">
              {product.images.map((img, i) => (
                <div key={i} className="thumb">
                  <img src={img} alt={`thumb-${i}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pd-info">
          <div className="pd-rating flex items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
            </div>
            <span className="text-sm">({details.reviews} Customer Reviews)</span>
          </div>

          <h1 className="luxury-font text-4xl">{product.name}</h1>
          <span className="pd-price">Rs. {product.price}.00</span>

          <p className="pd-desc">
            {details.shortDesc}
          </p>

          <div className="pd-actions">
            <div className="quantity-selector">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}><Minus size={16} /></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
            </div>

            <button
              className="btn-primary btn-add-bag"
              onClick={() => {
                addToCart(product, quantity);
                showToast(`${product.name} added to bag!`);
              }}
            >
              Add to Bag
            </button>

            <button
              className="pd-wish-btn"
              onClick={() => toggleWishlist(product)}
              style={{ backgroundColor: wishlist.some(i => i.id === product.id) ? 'var(--beige)' : '#fff' }}
            >
              <Heart size={20} fill={wishlist.some(i => i.id === product.id) ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="pd-features">
            <div className="feat flex items-center gap-3">
              <Leaf size={20} className="text-sage-green" />
              <span>100% Organic</span>
            </div>
            <div className="feat flex items-center gap-3">
              <ShieldCheck size={20} className="text-sage-green" />
              <span>Quality Assured</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="pd-tabs border-t">
            <div className="tab-headers flex gap-8">
              <button onClick={() => setActiveTab('details')} className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}>Experience</button>
              <button onClick={() => setActiveTab('ingredients')} className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}>Ingredients</button>
              <button onClick={() => setActiveTab('shipping')} className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}>Shipping</button>
            </div>
            <div className="tab-content py-6 text-sm" style={{ color: 'var(--muted-text)', lineHeight: '1.8' }}>
              {activeTab === 'details' && (
                <div>
                  <p className="mb-6">{details.longDesc}</p>
                  <ul className="list-disc pl-4 space-y-2">
                    {details.benefits.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              )}
              {activeTab === 'ingredients' && <p>{details.ingredients}</p>}
              {activeTab === 'shipping' && <p>Free standard shipping pan Pakistan. Delivered within 3-5 business days.</p>}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .pd-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
        }
        .back-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }
        @media (max-width: 900px) {
           .pd-grid { grid-template-columns: 1fr; }
        }

        .main-img {
          aspect-ratio: 1/1;
          background-color: var(--beige);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .main-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .thumb-grid {
          display: flex;
          gap: 15px;
        }
        .thumb {
          width: 80px;
          height: 80px;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid #eee;
        }
        .thumb img { width: 100%; height: 100%; object-fit: cover; }

        .pd-info .text-4xl { font-size: 2.5rem; margin-bottom: 1.5rem; }
        .pd-price { font-size: 1.75rem; font-weight: 600; margin-bottom: 2rem; display: block; }
        .pd-desc { font-size: 1rem; line-height: 1.8; margin-bottom: 2.5rem; font-style: italic; color: var(--muted-text); }
        
        .pd-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .quantity-selector {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 4px;
          height: 50px;
          background: #fff;
        }
        .quantity-selector button {
          background: none;
          border: none;
          padding: 0 15px;
          cursor: pointer;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .quantity-selector button:hover { background: #f9f9f9; }
        .quantity-selector span {
          width: 40px;
          text-align: center;
          font-weight: 500;
        }

        .btn-add-bag {
          flex: 1;
          height: 50px;
          min-width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .pd-wish-btn {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd;
          border-radius: 4px;
          background: #fff;
          cursor: pointer;
          transition: all 0.3s;
        }

        .tab-headers {
          padding: 20px 0 10px;
        }
        .tab-btn {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #999;
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
        }
        .tab-btn.active {
          color: var(--dark-text);
        }
        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--dark-text);
        }

        .pd-features {
          padding: 25px;
          background-color: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .feat span { font-size: 0.9rem; font-weight: 500; }
        .text-sage-green { color: var(--sage-green); }
      `}} />
    </div>
  );
};

export default ProductDetail;
