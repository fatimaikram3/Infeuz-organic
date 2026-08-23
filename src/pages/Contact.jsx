import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Instagram, Facebook, Twitter, 
  Send, CheckCircle2, Clock, Sparkles, ChevronDown, Search, 
  MessageSquare, ShieldCheck, ArrowRight, RefreshCw, HeartHandshake, Compass
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: 'General Skin Routine Inquiry',
    subject: '',
    message: '',
    newsletter: true,
    freeSample: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [faqQuery, setFaqQuery] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      topic: 'General Skin Routine Inquiry',
      subject: '',
      message: '',
      newsletter: true,
      freeSample: false
    });
    setIsSubmitted(false);
  };

  const faqs = [
    {
      q: 'Are your formulations 100% organic and safe for sensitive skin?',
      a: 'Yes, absolutely! Every Infeuz Organic formula is dermatologist-tested, 100% vegan, cruelty-free, and hypoallergenic. We completely exclude synthetic fragrance, parabens, phthalates, and harsh sulfates.'
    },
    {
      q: 'How long until I see visible radiance in my skin?',
      a: 'Most of our clients notice enhanced hydration and glow within 3–5 days. Targeted improvements in texture, hyperpigmentation, and firmness typically unfold visibly between 2–4 weeks of consistent ritual application.'
    },
    {
      q: 'What is your 30-Day Pure Glow Guarantee?',
      a: 'We stand behind our organic elixirs completely. If a product does not deliver the results your skin deserves, return it within 30 days of purchase—even if used—for a full refund or exchange.'
    },
    {
      q: 'How fast do orders ship and do you ship internationally?',
      a: 'Orders placed before 2 PM EST ship the same business day. Standard US domestic delivery takes 2–4 business days with complimentary carbon-neutral shipping on orders over $60. We also ship express to Canada, the UK, Europe, and Australia.'
    },
    {
      q: 'Is your packaging eco-conscious and recyclable?',
      a: 'Sustainability is at our core. All our glass bottles are 100% recyclable biophotonic glass designed to preserve botanical potency, paired with FSC-certified post-consumer paper packaging and soy-based inks.'
    },
    {
      q: 'Can I get personalized product recommendations for my skin type?',
      a: 'Yes! You can take our interactive 2-Minute Skin Quiz for custom routine matches, or reach out directly to our lead holistic esthetician through the message form above.'
    }
  ];

  const filteredFaqs = faqs.filter(
    faq => faq.q.toLowerCase().includes(faqQuery.toLowerCase()) || 
           faq.a.toLowerCase().includes(faqQuery.toLowerCase())
  );

  return (
    <div className="contact-page-wrapper">
      {/* Top Banner / Hero Section */}
      <section className="contact-hero text-center">
        <div className="container">
          <div className="hero-badge-pill inline-flex items-center gap-2">
            <Sparkles size={14} className="text-accent" />
            <span>EXPERT SKINCARE CARE & CONSULTATION</span>
          </div>
          <h1 className="contact-title luxury-font">How Can We Nourish Your Skin Today?</h1>
          <p className="contact-subtitle">
            Whether you need bespoke product guidance, assistance with your order, or wholesale inquiries, 
            our organic skin specialists are delighted to assist you.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="contact-cards-section container">
        <div className="cards-grid">
          {/* Card 1 */}
          <div className="quick-card glass-card">
            <div className="card-icon-wrap">
              <Mail size={24} />
            </div>
            <div className="card-content">
              <span className="card-tag">DIRECT EMAIL</span>
              <h3>Email Support</h3>
              <p className="card-val">hello@infeuzorganic.com</p>
              <span className="card-sub">Response time: within 2–4 hours</span>
              <a href="mailto:hello@infeuzorganic.com" className="card-action-link">
                Send an Email <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="quick-card glass-card">
            <div className="card-icon-wrap">
              <Phone size={24} />
            </div>
            <div className="card-content">
              <span className="card-tag">CLIENT HOTLINE</span>
              <h3>Phone & WhatsApp</h3>
              <p className="card-val">+1 (888) INFEUZ-O</p>
              <span className="card-sub">Mon–Fri, 9:00 AM – 8:00 PM EST</span>
              <a href="tel:+18884633896" className="card-action-link">
                Call Our Specialists <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Main Grid: Form & Info Sidebars */}
      <section className="contact-main-section container">
        <div className="main-layout-grid">
          
          {/* Left Column: Brand Care Info & Socials */}
          <div className="left-info-column">
            
            {/* Status & Hours Card */}
            <div className="info-box glass-card">
              <div className="box-header flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-accent" />
                  <h3 className="font-medium text-lg">Customer Care Hours</h3>
                </div>
                <span className="status-badge open">
                  <span className="dot"></span> OPEN NOW
                </span>
              </div>
              <ul className="hours-list">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-semibold">9:00 AM – 8:00 PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM – 6:00 PM EST</span>
                </li>
                <li className="flex justify-between muted">
                  <span>Sunday</span>
                  <span>Closed (Online Care Active)</span>
                </li>
              </ul>
            </div>

            {/* Skin Quiz CTA Banner */}
            <div className="quiz-cta-box glass-card">
              <div className="quiz-badge">
                <Sparkles size={16} /> 2-Min Routine Quiz
              </div>
              <h3 className="luxury-font">Not Sure Which Formula Fits Your Skin?</h3>
              <p>
                Discover your custom organic ritual tailored precisely to your skin goals, sensitivity level, and climate.
              </p>
              <Link to="/assessment" className="quiz-btn">
                Take Free Skin Quiz <ArrowRight size={16} />
              </Link>
            </div>



            {/* Social Connect Box */}
            <div className="social-connect-box glass-card">
              <span className="card-tag">JOIN OUR RITUAL</span>
              <h3>Follow Our Organic Journey</h3>
              <p className="text-sm muted-text">
                Connect with 50,000+ radiance seekers for daily skincare rituals, ingredient highlights, and VIP drops.
              </p>
              <div className="social-pills-row">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">
                  <Instagram size={18} /> <span>Instagram</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-pill">
                  <Facebook size={18} /> <span>Facebook</span>
                </a>
                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="social-pill">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg> <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="right-form-column">
            <div className="form-card glass-card">
              
              {isSubmitted ? (
                <div className="success-state text-center fade-in">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={56} />
                  </div>
                  <h2 className="luxury-font text-3xl mb-3">Message Received with Care</h2>
                  <p className="success-desc">
                    Thank you, <strong style={{ color: 'var(--dark-text)' }}>{formData.firstName || 'Valued Client'}</strong>! 
                    Our skincare specialists have received your message and will respond to <strong>{formData.email}</strong> within 2–4 hours.
                  </p>

                  <div className="submission-summary text-left">
                    <div className="summary-row">
                      <span>Topic:</span>
                      <strong>{formData.topic}</strong>
                    </div>
                    {formData.subject && (
                      <div className="summary-row">
                        <span>Subject:</span>
                        <strong>{formData.subject}</strong>
                      </div>
                    )}
                  </div>

                  <button onClick={resetForm} className="btn-secondary-luxury inline-flex items-center gap-2">
                    <RefreshCw size={16} /> Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="luxury-contact-form">
                  <div className="form-header">
                    <h2 className="luxury-font text-3xl">Send Us a Message</h2>
                    <p className="text-sm muted-text">
                      Fill out the form below and an organic skin advisor will craft a personalized response for you.
                    </p>
                  </div>

                  {/* Form Rows */}
                  <div className="form-grid-2">
                    <div className="input-field-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        required 
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="e.g. Sophia"
                      />
                    </div>
                    <div className="input-field-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        required 
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Laurent"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="input-field-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sophia@example.com"
                      />
                    </div>
                    <div className="input-field-group">
                      <label htmlFor="phone">Phone Number (Optional)</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="input-field-group">
                    <label htmlFor="topic">How Can We Help You? *</label>
                    <select 
                      id="topic" 
                      name="topic" 
                      value={formData.topic} 
                      onChange={handleChange}
                    >
                      <option value="General Skin Routine Inquiry">General Skin Routine Inquiry</option>
                      <option value="Order Status & Tracking">Order Status & Tracking</option>
                      <option value="Custom Product Recommendation">Custom Product Recommendation</option>
                      <option value="Return or Guarantee Claim">Return or Guarantee Claim</option>
                      <option value="Wholesale & Spa Partnerships">Wholesale & Spa Partnerships</option>
                      <option value="Press, PR & Media">Press, PR & Media</option>
                    </select>
                  </div>

                  <div className="input-field-group">
                    <label htmlFor="subject">Subject Line</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Question about Vitamin C Serum application"
                    />
                  </div>

                  <div className="input-field-group">
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="message" className="m-0">Your Message *</label>
                      <span className="char-count text-xs">{formData.message.length}/500</span>
                    </div>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      required 
                      maxLength="500"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details regarding your skin type, question, or order number..."
                    ></textarea>
                  </div>

                  {/* Custom Checkboxes */}
                  <div className="checkboxes-wrapper">
                    <label className="custom-checkbox-label">
                      <input 
                        type="checkbox" 
                        name="newsletter" 
                        checked={formData.newsletter} 
                        onChange={handleChange} 
                      />
                      <span className="checkmark"></span>
                      <span className="text-xs">
                        Subscribe to <strong>Organic Rituals Digest</strong> (Receive 15% off coupon code & botanical advice)
                      </span>
                    </label>
                    
                    <label className="custom-checkbox-label">
                      <input 
                        type="checkbox" 
                        name="freeSample" 
                        checked={formData.freeSample} 
                        onChange={handleChange} 
                      />
                      <span className="checkmark"></span>
                      <span className="text-xs">
                        Include complimentary botanical elixir samples with my next order
                      </span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="submit-luxury-btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <RefreshCw size={18} className="spin-icon" /> Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message <Send size={16} />
                      </span>
                    )}
                  </button>

                  <div className="form-trust-footer flex items-center justify-center gap-4 text-xs muted-text">
                    <span className="flex items-center gap-1"><ShieldCheck size={14} /> 256-bit Encrypted</span>
                    <span>•</span>
                    <span>Privacy Assured</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="faq-section container">
        <div className="faq-header text-center">
          <span className="card-tag">HAVE QUESTIONS?</span>
          <h2 className="luxury-font text-4xl">Frequently Asked Questions</h2>
          <p className="muted-text max-w-xl mx-auto">
            Find immediate clarity on our organic ingredients, shipping policies, and skincare rituals.
          </p>

          {/* Search Bar for FAQs */}
          <div className="faq-search-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search questions (e.g. organic, shipping, returns, sensitive skin)..."
              value={faqQuery}
              onChange={(e) => setFaqQuery(e.target.value)}
              className="faq-search-input"
            />
            {faqQuery && (
              <button onClick={() => setFaqQuery('')} className="clear-faq-btn">Clear</button>
            )}
          </div>
        </div>

        <div className="faq-accordion-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-accordion-item ${openFaq === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <ChevronDown size={20} className="faq-arrow-icon" />
                </button>
                {openFaq === index && (
                  <div className="faq-answer-content fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-faq-results text-center p-8 glass-card">
              <MessageSquare size={32} className="mx-auto mb-2 text-muted" />
              <p>No questions matched your search query "{faqQuery}".</p>
              <button onClick={() => setFaqQuery('')} className="btn-secondary-luxury mt-4">
                View All FAQs
              </button>
            </div>
          )}
        </div>
      </section>



      {/* Embedded Modern Styling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-page-wrapper {
          padding-top: 100px;
          padding-bottom: 30px;
          color: var(--dark-text);
        }

        /* Container */
        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Glassmorphism Card Style */
        .glass-card {
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .glass-card:hover {
          border-color: var(--accent-gold);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.07);
        }

        /* Hero Section */
        .contact-hero {
          margin-bottom: 50px;
        }

        .hero-badge-pill {
          background: var(--beige);
          border: 1px solid var(--glass-border);
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: var(--dark-text);
          margin-bottom: 20px;
          display: inline-flex;
        }

        .contact-title {
          font-size: 3rem;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .contact-subtitle {
          max-width: 680px;
          margin: 0 auto;
          color: var(--muted-text);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* Quick Cards Grid */
        .contact-cards-section {
          margin-bottom: 60px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .quick-card {
          padding: 32px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .card-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--beige);
          color: var(--dark-text);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-content {
          display: flex;
          flex-direction: column;
        }

        .card-tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--muted-text);
          margin-bottom: 6px;
          display: block;
          text-transform: uppercase;
        }

        .card-content h3 {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .card-val {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--dark-text);
          margin-bottom: 4px;
          word-break: break-all;
        }

        .card-sub {
          font-size: 0.8rem;
          color: var(--muted-text);
          margin-bottom: 14px;
        }

        .card-action-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-text);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: gap 0.2s ease;
        }

        .card-action-link:hover {
          gap: 10px;
        }

        /* Main Layout Grid */
        .contact-main-section {
          margin-bottom: 80px;
        }

        .main-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 40px;
          align-items: start;
        }

        /* Left Info Column */
        .left-info-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-box {
          padding: 28px;
        }

        .box-header {
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 16px;
          margin-bottom: 16px;
        }

        .status-badge.open {
          background: rgba(46, 125, 50, 0.1);
          color: #2e7d32;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .status-badge .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #2e7d32;
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.9rem;
        }

        .hours-list li.muted {
          color: var(--muted-text);
        }

        .quiz-cta-box {
          padding: 28px;
          background: linear-gradient(135deg, var(--beige), var(--surface));
          position: relative;
        }

        .quiz-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: var(--surface);
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 14px;
        }

        .quiz-cta-box h3 {
          font-size: 1.35rem;
          margin-bottom: 10px;
        }

        .quiz-cta-box p {
          font-size: 0.88rem;
          color: var(--muted-text);
          margin-bottom: 20px;
        }

        .quiz-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--dark-text);
          color: var(--button-text);
          padding: 12px 22px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .quiz-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .guarantee-mini-cards .g-card {
          background: var(--surface);
          border: 1px solid var(--glass-border);
          padding: 18px;
          border-radius: 12px;
          text-align: center;
        }

        .g-card svg {
          color: var(--dark-text);
          margin: 0 auto 8px auto;
          display: block;
        }

        .g-card h4 {
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .g-card p {
          font-size: 0.75rem;
          color: var(--muted-text);
        }

        .social-connect-box {
          padding: 28px;
        }

        .social-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--beige);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--dark-text);
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .social-pill:hover {
          background: var(--soft-pink);
          transform: translateY(-2px);
        }

        /* Right Form Column */
        .form-card {
          padding: 40px;
        }

        .form-header {
          margin-bottom: 30px;
        }

        .form-header h2 {
          margin-bottom: 6px;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .input-field-group {
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
        }

        .input-field-group label {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--muted-text);
          margin-bottom: 8px;
        }

        .input-field-group input,
        .input-field-group select,
        .input-field-group textarea {
          width: 100%;
          background: var(--off-white);
          border: 1.5px solid var(--glass-border);
          border-radius: 10px;
          padding: 14px 16px;
          font-size: 0.95rem;
          color: var(--dark-text);
          outline: none;
          font-family: inherit;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .input-field-group input:focus,
        .input-field-group select:focus,
        .input-field-group textarea:focus {
          border-color: var(--dark-text);
          background: var(--surface);
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
        }

        .input-field-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .char-count {
          color: var(--muted-text);
        }

        /* Custom Checkboxes */
        .checkboxes-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .custom-checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
          user-select: none;
          position: relative;
        }

        .custom-checkbox-label input {
          width: 18px;
          height: 18px;
          accent-color: var(--dark-text);
          margin-top: 2px;
          cursor: pointer;
        }

        .submit-luxury-btn {
          width: 100%;
          background: var(--dark-text);
          color: var(--button-text);
          padding: 16px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
          border: none;
        }

        .submit-luxury-btn:hover {
          opacity: 0.92;
          transform: translateY(-2px);
        }

        .submit-luxury-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-trust-footer {
          margin-top: 18px;
        }

        /* Success State */
        .success-state {
          padding: 40px 20px;
        }

        .success-icon-wrap {
          color: #2e7d32;
          margin-bottom: 20px;
          display: inline-block;
        }

        .success-desc {
          max-width: 480px;
          margin: 0 auto 28px auto;
          color: var(--muted-text);
          font-size: 1rem;
          line-height: 1.6;
        }

        .submission-summary {
          background: var(--beige);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
          max-width: 440px;
          margin-left: auto;
          margin-right: auto;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          margin-bottom: 8px;
        }

        .summary-row:last-child {
          margin-bottom: 0;
        }

        .btn-secondary-luxury {
          background: var(--beige);
          color: var(--dark-text);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          transition: background 0.2s ease;
        }

        .btn-secondary-luxury:hover {
          background: var(--soft-pink);
        }

        /* FAQ Section */
        .faq-section {
          margin-bottom: 90px;
        }

        .faq-header {
          margin-bottom: 40px;
        }

        .faq-search-wrapper {
          position: relative;
          max-width: 580px;
          margin: 24px auto 0 auto;
        }

        .faq-search-wrapper .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--muted-text);
        }

        .faq-search-input {
          width: 100%;
          background: var(--surface);
          border: 1.5px solid var(--glass-border);
          border-radius: 30px;
          padding: 14px 44px 14px 48px;
          font-size: 0.95rem;
          outline: none;
          color: var(--dark-text);
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
          transition: border-color 0.2s ease;
        }

        .faq-search-input:focus {
          border-color: var(--dark-text);
        }

        .clear-faq-btn {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.8rem;
          color: var(--muted-text);
          background: none;
          border: none;
          cursor: pointer;
        }

        .faq-accordion-list {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-accordion-item {
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .faq-accordion-item.active {
          border-color: var(--dark-text);
        }

        .faq-question-btn {
          width: 100%;
          padding: 22px 26px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--dark-text);
        }

        .faq-arrow-icon {
          transition: transform 0.3s ease;
          color: var(--muted-text);
        }

        .faq-accordion-item.active .faq-arrow-icon {
          transform: rotate(180deg);
          color: var(--dark-text);
        }

        .faq-answer-content {
          padding: 0 26px 22px 26px;
          color: var(--muted-text);
          font-size: 0.95rem;
          line-height: 1.65;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
          padding-top: 16px;
        }

        /* Location & Map Card */
        .boutique-location-section {
          margin-bottom: 60px;
        }

        .location-card {
          padding: 44px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .boutique-details {
          margin-top: 24px;
        }

        .b-item p {
          font-size: 0.9rem;
          color: var(--muted-text);
          margin-top: 2px;
        }

        .map-placeholder-box {
          height: 320px;
          background: linear-gradient(135deg, #e8dfd8, #f5efe9);
          border-radius: 16px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid var(--glass-border);
        }

        .map-pin-pulse {
          color: var(--dark-text);
          animation: mapBounce 2s infinite ease-in-out;
        }

        @keyframes mapBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .map-glass-badge {
          position: absolute;
          bottom: 20px;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          padding: 10px 18px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          border: 1px solid var(--glass-border);
        }

        .text-accent {
          color: var(--accent-gold);
        }

        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* Responsive Media Queries */
        @media (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
          .main-layout-grid {
            grid-template-columns: 1fr;
          }
          .location-card {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-title {
            font-size: 2.2rem;
          }
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
          .form-card {
            padding: 24px;
          }
          .location-card {
            padding: 24px;
          }
        }
      `}} />
    </div>
  );
};

export default Contact;
