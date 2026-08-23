import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    // Centralized Products List
    const products = [
        // Soaps
        { id: 1, name: 'Acne and Whitening Soap', category: 'Soaps', price: 750, img: '/assets/acne_whitening_soap.png', tag: 'New' },
        { id: 2, name: 'Daisy Lime Soap', category: 'Soaps', price: 650, img: '/assets/daisy_lime_soap.png', tag: 'Fresh' },
        { id: 101, name: 'Mocha Mist Soap', category: 'Soaps', price: 800, img: '/assets/mocha_mist_soap.png', tag: 'Rich' },
        { id: 102, name: 'Lavender Soap', category: 'Soaps', price: 700, img: '/assets/lavender_soap_bar.png', tag: 'Soothing' },
        { id: 103, name: 'Whitening Booster Soap', category: 'Soaps', price: 850, img: '/assets/whitening_booster_soap.png', tag: 'Best' },
        { id: 104, name: 'Charcoal Soap', category: 'Soaps', price: 750, img: '/assets/charcoal_soap.jpg', tag: 'Detox' },
        { id: 106, name: 'Moroccon Daisy Soap', category: 'Soaps', price: 900, img: '/assets/moroccon_daisy_soap.jpg', tag: 'Luxury' },

        // Soap Bases
        { id: 3, name: 'Transparent Soap Base', category: 'Soap Bases', price: 1200, img: '/assets/transparent_soap_base.jpeg', tag: 'Pure' },
        { id: 4, name: 'Premium Goat Milk Base', category: 'Soap Bases', price: 1500, img: '/assets/goatmilk_soap_base.jpeg', tag: 'Creamy' },
        { id: 301, name: 'Milky Soap Base', category: 'Soap Bases', price: 1400, img: '/assets/milky_soap_base.jpeg', tag: 'Rich' },
        { id: 302, name: 'Charcoal Soap Base', category: 'Soap Bases', price: 1600, img: '/assets/charcoal_soap_base_v3.jpeg', tag: 'Detox' },

        // Moisturizers
        { id: 5, name: 'Premium Moisturizer (150ml)', category: 'Moisturizer', price: 1450, img: '/assets/moisturizer_150ml.png', tag: 'Everyday' },
        { id: 105, name: 'Premium Moisturizer (1KG)', category: 'Moisturizer', price: 8500, img: '/assets/moisturizer_1kg.png', tag: 'Value Pack' },

        // Serums
        { id: 7, name: 'Glowing Spotless Face Serum', category: 'Serum', price: 2500, img: '/assets/serum_glowing_v2.png', tag: 'New' },
        { id: 8, name: 'Even Tone Serum', category: 'Serum', price: 2800, img: '/assets/serum_even_tone_v2.png', tag: 'Bestseller' },
        { id: 107, name: 'Peel & Reveal Serum', category: 'Serum', price: 2200, img: '/assets/serum_peel_v2.png', tag: 'Artisan' },

        // Scrubs
        { id: 9, name: 'Aker Fassi Scrub', category: 'Scrubs', price: 1250, img: '/assets/aker_fassi_scrub.jpeg', tag: 'Traditional' },
        { id: 303, name: 'Nila Moroccan Scrub', category: 'Scrubs', price: 1850, img: '/assets/nila_moroccan_scrub_v2.jpeg', tag: 'Luxury' },

        // Oils
        { id: 11, name: 'Peppermint Essential Oil', category: 'Oils', price: 850, img: '/assets/oil_peppermint.jpeg', tag: 'Pure' },
        { id: 12, name: 'Tea Tree Essential Oil', category: 'Oils', price: 950, img: '/assets/oil_teatree.jpeg', tag: 'Cleansing' },
        { id: 111, name: 'Lavender Essential Oil', category: 'Oils', price: 850, img: '/assets/oil_lavender.jpeg', tag: 'Soothing' },
        { id: 112, name: 'Eucalyptus Essential Oil', category: 'Oils', price: 900, img: '/assets/oil_eucalyptus.jpeg', tag: 'Refreshing' },
        { id: 115, name: 'Rose Fragrance Oil', category: 'Oils', price: 1200, img: '/assets/oil_rose.png', tag: 'Floral' },
        { id: 116, name: 'Strawberry Fragrance Oil', category: 'Oils', price: 1100, img: '/assets/oil_strawberry.png', tag: 'Sweet' },
        { id: 117, name: 'Jasmine Fragrance Oil', category: 'Oils', price: 1250, img: '/assets/oil_jasmine.png', tag: 'Exotic' },
        { id: 118, name: 'Vitamin E Oil', category: 'Oils', price: 1500, img: '/assets/oil_vitamin_e.png', tag: 'Nourishing' },

        // Powders
        { id: 201, name: 'Akarfassi Powder', category: 'Powders', price: 1200, img: '/assets/powder_akarfassi.png', tag: 'Traditional' },
        { id: 202, name: 'Sidr Powder', category: 'Powders', price: 950, img: '/assets/powder_sidr.jpg', tag: 'Natural' },
        { id: 203, name: 'Nila Moroccan Powder', category: 'Powders', price: 1850, img: '/assets/powder_nila.png', tag: 'Luxury' },

        // Moulds
        { id: 401, name: 'Rectangle Soap Mould', category: 'Moulds', price: 650, img: '/assets/rectangle_soap_mould.jfif', tag: 'Eco' },
        { id: 402, name: 'Daisy Soap Mould', category: 'Moulds', price: 550, img: '/assets/daisy_soap_mould.jfif', tag: 'Floral' },
        { id: 403, name: 'Honey Comb Soap Mould', category: 'Moulds', price: 600, img: '/assets/honeycomb_soap_mould.jpg', tag: 'Natural' },
        { id: 404, name: 'Hexagonal Honey Comb Mould', category: 'Moulds', price: 600, img: '/assets/hexagonal_honeycomb_soap_mould.jfif', tag: 'Modern' },
        { id: 405, name: 'Mermaid Tail Soap Mould', category: 'Moulds', price: 750, img: '/assets/mermaid_tail_soap_mould.jfif', tag: 'Fancy' },
        { id: 406, name: 'Oval Soap Mould', category: 'Moulds', price: 500, img: '/assets/oval_soap_mould.jfif', tag: 'Classic' },
        { id: 407, name: 'Message Bar Soap Mould', category: 'Moulds', price: 700, img: '/assets/message_bar_soap_mould.png', tag: 'Artistic' },
        { id: 408, name: 'Heart Shape Soap Mould', category: 'Moulds', price: 550, img: '/assets/heart_shape_soap_mould.jfif', tag: 'Love' },
        { id: 409, name: 'Strawberry Soap Mould', category: 'Moulds', price: 650, img: '/assets/strawberry_soap_mould.jpg', tag: 'Fruity' },
    ];

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    const [activeQuickView, setActiveQuickView] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [sortOrder, setSortOrder] = useState('newest');
    const [priceRange, setPriceRange] = useState([0, 10000]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    // Prevent double scrollbar by locking body scroll when drawers or modals are open
    useEffect(() => {
        if (isCartOpen || isWishlistOpen || isFilterOpen || isSearchOpen || activeQuickView) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isCartOpen, isWishlistOpen, isFilterOpen, isSearchOpen, activeQuickView]);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
        } else {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filtered.slice(0, 5)); // Limit to top 5 results
        }
    }, [searchQuery]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        showToast(`${product.name} added to cart!`);
        setIsCartOpen(true);
    };

    const updateQuantity = (productId, delta) => {
        setCart((prev) => prev.map(item => {
            if (item.id === productId) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const toggleWishlist = (product) => {
        const isInWishlist = wishlist.some((item) => item.id === product.id);

        if (isInWishlist) {
            setWishlist((prev) => prev.filter((item) => item.id !== product.id));
            showToast(`${product.name} removed from wishlist.`);
        } else {
            setWishlist((prev) => [...prev, product]);
            showToast(`${product.name} added to wishlist!`);
        }
    };

    const [toasts, setToasts] = useState([]);

    const showToast = (message) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const value = {
        products,
        cart,
        wishlist,
        addToCart,
        updateQuantity,
        removeFromCart,
        toggleWishlist,
        cartCount,
        cartTotal,
        activeQuickView,
        setActiveQuickView,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isFilterOpen,
        setIsFilterOpen,
        searchQuery,
        setSearchQuery,
        searchResults,
        sortOrder,
        setSortOrder,
        priceRange,
        setPriceRange,
        toasts,
        showToast,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}

            {/* Notifications */}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className="toast-notification ripple-effect">
                        {toast.message}
                    </div>
                ))}
            </div>

            {/* Cart Drawer */}
            {isCartOpen && (
                <div className="drawer-overlay" onClick={() => setIsCartOpen(false)}>
                    <div className="side-drawer" onClick={(e) => e.stopPropagation()}>
                        <div className="drawer-header">
                            <h2 className="luxury-font text-2xl">Your Bag ({cartCount})</h2>
                            <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
                        </div>

                        <div className="drawer-content">
                            {cart.length === 0 ? (
                                <div className="empty-state">
                                    <p>Your bag is empty.</p>
                                    <button className="btn-outline mt-4" onClick={() => setIsCartOpen(false)}>Shop Collection</button>
                                </div>
                            ) : (
                                <div className="cart-list">
                                    {cart.map((item) => (
                                        <div key={item.id} className="item-row">
                                            <div className="item-img"><img src={item.img} alt={item.name} /></div>
                                            <div className="item-details">
                                                <h4>{item.name}</h4>
                                                <p>Rs. {item.price}.00</p>
                                                <div className="qty-picker">
                                                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                                </div>
                                            </div>
                                            <button className="remove-item" onClick={() => removeFromCart(item.id)}>&times;</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="drawer-footer">
                                <div className="total-row">
                                    <span>Subtotal</span>
                                    <span>Rs. {cartTotal}.00</span>
                                </div>
                                <button
                                    className="btn-primary w-full"
                                    onClick={() => {
                                        setIsCartOpen(false);
                                        window.location.href = '/checkout';
                                    }}
                                >
                                    Checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Wishlist Drawer */}
            {isWishlistOpen && (
                <div className="drawer-overlay" onClick={() => setIsWishlistOpen(false)}>
                    <div className="side-drawer" onClick={(e) => e.stopPropagation()}>
                        <div className="drawer-header">
                            <h2 className="luxury-font text-2xl">Wishlist</h2>
                            <button className="close-btn" onClick={() => setIsWishlistOpen(false)}>&times;</button>
                        </div>
                        <div className="drawer-content">
                            {wishlist.length === 0 ? (
                                <div className="empty-state"><p>No items saved yet.</p></div>
                            ) : (
                                <div className="cart-list">
                                    {wishlist.map((item) => (
                                        <div key={item.id} className="item-row">
                                            <div className="item-img"><img src={item.img} alt={item.name} /></div>
                                            <div className="item-details">
                                                <h4>{item.name}</h4>
                                                <p>Rs. {item.price}.00</p>
                                                <button className="btn-primary text-[10px] py-1 mt-2" onClick={() => addToCart(item)}>Add to Bag</button>
                                            </div>
                                            <button className="remove-item" onClick={() => toggleWishlist(item)}>&times;</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Filter Drawer */}
            {isFilterOpen && (
                <div className="drawer-overlay" onClick={() => setIsFilterOpen(false)}>
                    <div className="side-drawer" onClick={(e) => e.stopPropagation()}>
                        <div className="drawer-header">
                            <div>
                                <h2 className="luxury-font text-xl">Filter & Sort</h2>
                                <span className="text-xs muted-text">Refine your product selection</span>
                            </div>
                            <button className="close-btn" onClick={() => setIsFilterOpen(false)}>&times;</button>
                        </div>
                        <div className="drawer-content filter-drawer-content">
                            <div className="filter-section">
                                <h3 className="filter-title">Sort By</h3>
                                <div className="sort-grid">
                                    {[
                                        { id: 'newest', label: 'Newest' },
                                        { id: 'price-low', label: 'Price: Low to High' },
                                        { id: 'price-high', label: 'Price: High to Low' },
                                        { id: 'name-az', label: 'Name: A-Z' }
                                    ].map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setSortOrder(opt.id)}
                                            className={`sort-pill-btn ${sortOrder === opt.id ? 'active' : ''}`}
                                        >
                                            <span>{opt.label}</span>
                                            {sortOrder === opt.id && <div className="active-dot"></div>}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="filter-section">
                                <h3 className="filter-title">Price Range (Rs.)</h3>
                                <div className="price-inputs">
                                    <div className="price-input-box">
                                        <span className="price-label">Min</span>
                                        <input
                                            type="number"
                                            value={priceRange[0] === 0 ? '' : priceRange[0]}
                                            onChange={(e) => {
                                                const val = e.target.value === '' ? 0 : Math.max(0, parseInt(e.target.value, 10) || 0);
                                                setPriceRange([val, priceRange[1]]);
                                            }}
                                            placeholder="0"
                                        />
                                    </div>
                                    <span className="price-dash">-</span>
                                    <div className="price-input-box">
                                        <span className="price-label">Max</span>
                                        <input
                                            type="number"
                                            value={priceRange[1] === 10000 || priceRange[1] === 0 ? '' : priceRange[1]}
                                            onChange={(e) => {
                                                const val = e.target.value === '' ? 10000 : Math.max(0, parseInt(e.target.value, 10) || 10000);
                                                setPriceRange([priceRange[0], val]);
                                            }}
                                            placeholder="10000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="drawer-footer filter-drawer-footer">
                            <button className="btn-primary w-full py-3" onClick={() => setIsFilterOpen(false)}>
                                Apply Filters
                            </button>
                            <button
                                className="reset-all-btn w-full mt-2 text-xs uppercase tracking-widest text-muted-text hover:text-dark-text"
                                onClick={() => {
                                    setSortOrder('newest');
                                    setPriceRange([0, 10000]);
                                }}
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="search-overlay" onClick={() => setIsSearchOpen(false)}>
                    <div className="search-box" onClick={(e) => e.stopPropagation()}>
                        <button className="close-search" onClick={() => setIsSearchOpen(false)}>&times;</button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="luxury-font"
                            autoFocus
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchResults.length > 0 && (
                            <div className="search-dropdown">
                                {searchResults.map(product => (
                                    <div key={product.id} className="search-result-item" onClick={() => {
                                        setActiveQuickView(product);
                                        setIsSearchOpen(false);
                                        setSearchQuery('');
                                    }}>
                                        <div className="res-img"><img src={product.img} alt={product.name} /></div>
                                        <div className="res-info">
                                            <span className="res-cat">{product.category}</span>
                                            <span className="res-name">{product.name}</span>
                                            <span className="res-price">Rs. {product.price}.00</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {searchQuery && searchResults.length === 0 && (
                            <div className="search-no-results">
                                No products found for "{searchQuery}"
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Quick View Modal */}
            {activeQuickView && (
                <div className="quickview-overlay" onClick={() => setActiveQuickView(null)}>
                    <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-qv" onClick={() => setActiveQuickView(null)}>&times;</button>
                        <div className="qv-grid">
                            <div className="qv-img"><img src={activeQuickView.img} alt={activeQuickView.name} /></div>
                            <div className="qv-info">
                                <span>{activeQuickView.category}</span>
                                <h2 className="luxury-font">{activeQuickView.name}</h2>
                                <div className="qv-price">Rs. {activeQuickView.price}.00</div>
                                <div className="flex gap-4 mt-6">
                                    <button className="btn-primary flex-grow" onClick={() => { addToCart(activeQuickView); setActiveQuickView(null); }}>Add to Bag</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
        .toast-container { position: fixed; bottom: 30px; right: 30px; z-index: 10000; display: flex; flex-direction: column; gap: 10px; }
        .toast-notification { background: var(--dark-text); color: white; padding: 12px 25px; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); animation: slideIn 0.3s ease forwards; font-size: 0.9rem; }
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

        .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 9999; display: flex; justify-content: flex-end; }
        .side-drawer { width: 100%; max-width: 400px; background: var(--off-white); height: 100%; display: flex; flex-direction: column; animation: slideL 0.4s ease; }
        @keyframes slideL { from { transform: translateX(100%); } to { transform: translateX(0); } }
        
        .drawer-header { padding: 25px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center; }
        .close-btn { font-size: 2rem; color: var(--muted-text); }
        .drawer-content { padding: 25px; overflow-y: auto; flex-grow: 1; }
        .empty-state { text-align: center; padding: 50px 0; color: var(--muted-text); }
        
        .item-row { display: flex; gap: 15px; padding: 15px 0; border-bottom: 1px solid #eee; position: relative; }
        .item-img { width: 70px; height: 90px; background: var(--beige); border-radius: 4px; overflow: hidden; }
        .item-img img { width: 100%; height: 100%; object-fit: cover; }
        .item-details h4 { font-size: 0.95rem; margin-bottom: 5px; }
        .item-details p { font-size: 0.85rem; color: var(--muted-text); }
        .qty-picker { display: flex; align-items: center; border: 1px solid #eee; width: fit-content; margin-top: 10px; }
        .qty-picker button { padding: 2px 10px; }
        .qty-picker span { padding: 0 10px; border-left: 1px solid #eee; border-right: 1px solid #eee; font-size: 0.8rem; }
        .remove-item { position: absolute; top: 15px; right: 0; font-size: 1.2rem; color: #ccc; }
        
        .drawer-footer { padding: 25px; border-top: 1px solid var(--glass-border); }
        .total-row { display: flex; justify-content: space-between; margin-bottom: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

        .search-overlay { 
          position: fixed; 
          inset: 0; 
          background: rgba(0,0,0,0.5); 
          backdrop-filter: blur(10px);
          z-index: 10000; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          padding: 20px; 
          animation: fadeIn 0.3s ease;
        }
        .search-box { 
          width: 100%; 
          max-width: 500px; 
          background: var(--off-white);
          padding: 40px;
          border-radius: 8px;
          position: relative; 
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .search-box input { 
          width: 100%; 
          border: none; 
          border-bottom: 2px solid var(--dark-text); 
          background: transparent; 
          font-size: 1.5rem; 
          outline: none; 
          padding: 10px 0;
          color: var(--dark-text);
          font-family: 'Playfair Display', serif;
        }
        .close-search { 
          position: absolute; 
          top: 15px; 
          right: 20px; 
          font-size: 1.5rem; 
          color: var(--muted-text);
        }

        .search-dropdown {
          margin-top: 20px;
          border-top: 1px solid #eee;
          max-height: 400px;
          overflow-y: auto;
        }
        .search-result-item {
          display: flex;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid #f9f9f9;
          cursor: pointer;
          transition: background 0.2s;
        }
        .search-result-item:hover {
          background: #fbfbfb;
        }
        .res-img { width: 50px; height: 60px; background: var(--beige); border-radius: 4px; overflow: hidden; }
        .res-img img { width: 100%; height: 100%; object-fit: cover; }
        .res-info { display: flex; flex-direction: column; justify-content: center; }
        .res-cat { font-size: 0.7rem; text-transform: uppercase; color: var(--muted-text); }
        .res-name { font-size: 0.9rem; font-weight: 500; font-family: 'Playfair Display', serif; }
        .res-price { font-size: 0.8rem; font-weight: 600; color: var(--dark-text); }
        .search-no-results { padding: 20px 0; text-align: center; color: var(--muted-text); font-size: 0.9rem; }

        .quickview-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .quickview-modal { background: var(--off-white); width: 100%; max-width: 800px; border-radius: 8px; position: relative; overflow: hidden; }
        .close-qv { position: absolute; top: 15px; right: 15px; font-size: 2rem; color: var(--dark-text); z-index: 10; }
        .qv-grid { display: grid; grid-template-columns: 1fr 1fr; }
        @media (max-width: 600px) { .qv-grid { grid-template-columns: 1fr; } }
        .qv-img { background: var(--beige); aspect-ratio: 1/1; }
        .qv-img img { width: 100%; height: 100%; object-fit: cover; }
        .qv-info { padding: 40px; }
        .qv-info span { font-size: 0.8rem; text-transform: uppercase; color: var(--muted-text); }
        .qv-info h2 { font-size: 2rem; margin: 10px 0; }
        .qv-price { font-size: 1.5rem; font-weight: 600; }

        /* Filter Drawer Styling - Compact & Single Scrollbar */
        .filter-drawer-content { 
          padding: 20px 24px; 
          flex-grow: 1;
          overflow-y: auto;
        }

        .filter-section { 
          margin-bottom: 20px; 
          display: block; 
          width: 100%; 
        }

        .filter-title { 
          display: block; 
          margin-bottom: 12px; 
          font-weight: 700; 
          font-size: 0.75rem; 
          letter-spacing: 1.5px; 
          text-transform: uppercase;
          color: var(--dark-text);
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 6px;
        }

        .sort-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 10px; 
          width: 100%;
        }

        .sort-pill-btn { 
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border: 1.5px solid var(--glass-border);
          border-radius: 8px;
          background: var(--surface);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--dark-text);
          transition: all 0.2s ease;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .sort-pill-btn:hover { 
          border-color: var(--dark-text); 
          background: var(--beige); 
        }

        .sort-pill-btn.active {
          border-color: var(--dark-text);
          background: var(--dark-text);
          color: var(--button-text);
          font-weight: 600;
        }

        .sort-pill-btn .active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-gold);
        }

        .price-inputs { 
          display: flex; 
          gap: 12px; 
          align-items: center; 
        }

        .price-input-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .price-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--muted-text);
        }

        .price-input-box input { 
          width: 100%; 
          padding: 10px 12px; 
          border: 1.5px solid var(--glass-border); 
          border-radius: 8px; 
          outline: none; 
          font-size: 0.9rem;
          background: var(--surface);
          color: var(--dark-text);
          transition: border-color 0.2s ease; 
        }

        .price-input-box input:focus { 
          border-color: var(--dark-text); 
        }

        .price-dash { 
          color: var(--muted-text); 
          font-weight: 600; 
          margin-top: 16px;
        }

        .filter-drawer-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--glass-border);
          background: var(--surface);
        }

        .reset-all-btn { 
          display: block; 
          text-align: center; 
          padding: 6px; 
          width: 100%;
          color: var(--muted-text);
          font-size: 0.75rem;
          cursor: pointer;
        }

        .reset-all-btn:hover {
          color: var(--dark-text);
        }
      `}} />
        </ShopContext.Provider>
    );
};
