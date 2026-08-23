import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';

const Checkout = () => {
    const { cart, cartTotal, setIsCartOpen, showToast } = useShop();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        customCity: '',
        phone: '+92 '
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const numbersOnly = value.replace(/^\+92\s*/, '').replace(/\D/g, '');
            const limitedNumbers = numbersOnly.slice(0, 10);
            setFormData({ ...formData, [name]: '+92 ' + limitedNumbers });
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Remove spaces and +92 to count actual digits
        const digits = formData.phone.replace(/^\+92\s*/, '').replace(/\D/g, '');
        if (digits.length < 10) {
            showToast('Please enter a valid 10-digit phone number.');
            return;
        }

        alert('Order placed successfully! This is a demo.');
    };

    if (cart.length === 0) {
        return (
            <div className="container py-40 text-center">
                <h2 className="luxury-font text-3xl mb-4">Your bag is empty</h2>
                <p className="mb-8 color-muted">Add some items before checking out.</p>
                <a href="/shop" className="btn-primary">Go to Shop</a>
            </div>
        );
    }

    return (
        <div className="checkout-page container pt-28 pb-16">
            <h1 className="luxury-font text-4xl mb-12 text-center">Secure Checkout</h1>

            <div className="checkout-grid">
                {/* Form Section */}
                <div className="checkout-form">
                    <form onSubmit={handleSubmit}>
                        <section className="mb-10">
                            <h3 className="uppercase tracking-widest text-sm font-bold mb-6">Contact Information</h3>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="checkout-input"
                            />
                        </section>

                        <section className="mb-10">
                            <h3 className="uppercase tracking-widest text-sm font-bold mb-6">Shipping Address</h3>
                            <div className="flex gap-4 mb-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="checkout-input w-1/2"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="checkout-input w-1/2"
                                />
                            </div>
                            <input
                                type="text"
                                name="address"
                                placeholder="Complete Address"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                className="checkout-input mb-4"
                            />
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <select
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleChange}
                                        className={`checkout-input ${formData.city === 'Other' ? 'w-1/2' : 'w-1/2'}`}
                                    >
                                        <option value="" disabled>Select City</option>
                                        <option value="Karachi">Karachi</option>
                                        <option value="Lahore">Lahore</option>
                                        <option value="Islamabad">Islamabad</option>
                                        <option value="Rawalpindi">Rawalpindi</option>
                                        <option value="Faisalabad">Faisalabad</option>
                                        <option value="Multan">Multan</option>
                                        <option value="Peshawar">Peshawar</option>
                                        <option value="Quetta">Quetta</option>
                                        <option value="Sialkot">Sialkot</option>
                                        <option value="Gujranwala">Gujranwala</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Bahawalpur">Bahawalpur</option>
                                        <option value="Sahiwal">Sahiwal</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="checkout-input w-1/2"
                                    />
                                </div>

                                {formData.city === 'Other' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="w-full"
                                    >
                                        <input
                                            type="text"
                                            name="customCity"
                                            placeholder="Please type your City Name"
                                            required
                                            value={formData.customCity}
                                            onChange={handleChange}
                                            className="checkout-input"
                                        />
                                    </motion.div>
                                )}
                            </div>
                        </section>

                        <button type="submit" className="btn-primary w-full py-4 text-base">Complete Order</button>
                    </form>
                </div>

                {/* Order Summary Section */}
                <div className="order-summary p-8 bg-surface rounded-lg depth-shadow">
                    <h3 className="luxury-font text-xl mb-6">Order Summary</h3>
                    <div className="summary-items">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item">
                                <div className="summary-img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="summary-info" style={{ flexGrow: 1 }}>
                                    <span className="text-[10px] uppercase tracking-tighter color-muted">{item.category}</span>
                                    <p className="font-semibold text-sm m-0" style={{ margin: 0 }}>{item.name}</p>
                                    <p className="text-xs color-muted" style={{ margin: 0 }}>Quantity: {item.quantity}</p>
                                </div>
                                <div className="summary-price font-bold text-sm">
                                    Rs. {(item.price * item.quantity).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="summary-totals border-t pt-6">
                        <div className="flex justify-between mb-2">
                            <span className="color-muted">Subtotal</span>
                            <span>Rs. {cartTotal}.00</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span className="color-muted">Shipping</span>
                            <span className="text-green-600">FREE</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t pt-4">
                            <span>Total</span>
                            <span>Rs. {cartTotal}.00</span>
                        </div>
                    </div>

                    <div className="trust-badges mt-8 flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-xs color-muted">
                            <ShieldCheck size={16} /> 100% Secure Checkout
                        </div>
                        <div className="flex items-center gap-3 text-xs color-muted">
                            <Truck size={16} /> Fast Delivery Pan Pakistan
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .checkout-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 60px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .checkout-grid { 
            grid-template-columns: 1fr; 
            gap: 30px;
          }
          .checkout-form {
            order: 2;
          }
          .order-summary {
            order: 1;
          }
        }
        @media (max-width: 640px) {
          .checkout-row, .flex.gap-4 {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .w-1\/2 {
            width: 100% !important;
          }
          .order-summary {
            padding: 20px !important;
          }
        }
        .checkout-input {
          width: 100%;
          padding: 14px;
          border: 1px solid #eee;
          border-radius: 4px;
          outline: none;
          background: #fff;
          transition: var(--transition);
        }
        select.checkout-input {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
          appearance: none;
          -webkit-appearance: none;
          padding-right: 40px;
        }
        .checkout-input:focus {
          border-color: var(--dark-text);
        }
        .summary-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          align-items: center;
        }
        .summary-img {
          width: 70px;
          height: 85px;
          flex-shrink: 0;
          background: var(--beige);
          border-radius: 4px;
          overflow: hidden;
        }
        .summary-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .gap-4 { gap: 1rem; }
        .w-1\/2 { width: 50%; }
        .w-full { width: 100%; }
        .color-muted { color: var(--muted-text); }
        .bg-surface { background: var(--surface); }
      `}} />
        </div>
    );
};

export default Checkout;
