import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page-wrapper">
      
      {/* Clean Header */}
      <section className="about-clean-header text-center">
        <div className="container">
          <h1 className="luxury-font text-5xl mb-3">About Infeuz Organic</h1>
          <p className="about-clean-subtitle max-w-xl mx-auto">
            Handcrafting organic skincare, premium soap bases, and natural botanical formulations.
          </p>
        </div>
      </section>

      {/* Main Story & Image Section */}
      <section className="about-story-clean container">
        <div className="clean-story-grid">
          
          {/* Left Column: Real Infeuz Product Assets Showcase */}
          <div className="story-assets-grid">
            <div className="asset-card asset-main">
              <img 
                src="/assets/hero-product.jpg" 
                alt="Infeuz Organic Products" 
                className="rounded-lg shadow-sm"
              />
            </div>
            <div className="asset-sub-grid grid grid-cols-2 gap-5 mt-5">
              <div className="asset-card">
                <img 
                  src="/assets/daisy_lime_soap.png" 
                  alt="Daisy Lime Soap" 
                  className="rounded-lg"
                />
              </div>
              <div className="asset-card">
                <img 
                  src="/assets/goatmilk_soap_base.jpeg" 
                  alt="Goat Milk Base" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story Text */}
          <div className="story-text-column">
            <span className="clean-tag uppercase tracking-widest text-xs font-semibold muted-text mb-4 block">
              OUR PHILOSOPHY
            </span>
            <h2 className="luxury-font text-4xl mb-6">
              Pure Ingredients, Handcrafted Care
            </h2>
            
            <p className="story-paragraph mb-5 leading-relaxed">
              Infeuz Organic was created to bring simple, honest, high-quality botanical skincare into everyday routines. We specialize in handcrafted organic soaps, pure melt-and-pour soap bases, hydrating moisturizers, serums, herbal powders, essential oils, and soap-crafting moulds.
            </p>
            
            <p className="story-paragraph mb-8 leading-relaxed muted-text">
              We believe effective skincare doesn't need to be complicated. By focusing on clean ingredients—like goat milk, charcoal, Aker Fassi, Sidr, and pure botanical oils—we create products designed to nourish your skin naturally without harsh or unnecessary additives.
            </p>

            <div className="clean-commitments-list mb-10">
              <div className="c-item flex items-center gap-3.5 mb-4">
                <Leaf size={18} className="text-dark" />
                <span className="text-sm font-medium">100% Organic & Plant-Derived Ingredients</span>
              </div>
              <div className="c-item flex items-center gap-3.5 mb-4">
                <ShieldCheck size={18} className="text-dark" />
                <span className="text-sm font-medium">Gentle & Non-Irritating Formulations</span>
              </div>
              <div className="c-item flex items-center gap-3.5">
                <Heart size={18} className="text-dark" />
                <span className="text-sm font-medium">Handcrafted with Small-Batch Precision</span>
              </div>
            </div>

            <div className="story-actions flex gap-4 mt-2">
              <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
                Explore Collection <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* What We Offer Section with Dedicated Spacing & Background */}
      <section className="about-offerings-section border-t">
        <div className="container">
          
          <div className="offerings-header text-center mb-16">
            <span className="clean-tag uppercase tracking-widest text-xs font-semibold muted-text mb-3 block">
              OUR PRODUCT LINE
            </span>
            <h2 className="luxury-font text-4xl mb-4">What We Offer</h2>
            <p className="muted-text text-base max-w-lg mx-auto">
              Explore our range of finished organic skincare and raw crafting supplies.
            </p>
          </div>

          <div className="offerings-grid grid grid-cols-3 gap-10">
            
            <div className="offering-card bg-surface border p-8 rounded-xl text-center">
              <div className="offering-img-box mb-6">
                <img src="/assets/acne_whitening_soap.png" alt="Soaps" />
              </div>
              <h3 className="luxury-font text-2xl mb-3">Organic Soaps</h3>
              <p className="text-sm muted-text leading-relaxed">
                Handmade bars infused with natural herbs, essential oils, and botanical clays for gentle cleansing.
              </p>
            </div>

            <div className="offering-card bg-surface border p-8 rounded-xl text-center">
              <div className="offering-img-box mb-6">
                <img src="/assets/transparent_soap_base.jpeg" alt="Soap Bases" />
              </div>
              <h3 className="luxury-font text-2xl mb-3">Premium Soap Bases</h3>
              <p className="text-sm muted-text leading-relaxed">
                High-quality transparent, goat milk, milky, and charcoal melt-and-pour bases for soap makers.
              </p>
            </div>

            <div className="offering-card bg-surface border p-8 rounded-xl text-center">
              <div className="offering-img-box mb-6">
                <img src="/assets/serum_glowing_v2.png" alt="Serums & Oils" />
              </div>
              <h3 className="luxury-font text-2xl mb-3">Serums & Oils</h3>
              <p className="text-sm muted-text leading-relaxed">
                Targeted face serums, moisturizers, and pure essential oils formulated for natural hydration.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Embedded CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .about-page-wrapper {
          padding-top: 25px;
          padding-bottom: 90px;
          color: var(--dark-text);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .about-clean-header {
          margin-bottom: 70px;
          padding: 45px 30px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .about-clean-subtitle {
          color: var(--muted-text);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* Story Section */
        .about-story-clean {
          margin-bottom: 110px;
        }

        .clean-story-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 65px;
          align-items: center;
        }

        .story-assets-grid {
          display: flex;
          flex-direction: column;
        }

        .asset-main {
          height: 350px;
          border-radius: 14px;
          overflow: hidden;
          background: var(--beige);
          border: 1px solid rgba(0, 0, 0, 0.12);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
        }

        .asset-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .asset-card {
          position: relative;
          background: var(--beige);
          border-radius: 10px;
          overflow: hidden;
          aspect-ratio: 4/3;
          border: 1px solid rgba(0, 0, 0, 0.12);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }

        .asset-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .story-text-column {
          display: flex;
          flex-direction: column;
        }

        .story-paragraph {
          font-size: 1rem;
          line-height: 1.7;
        }

        .muted-text {
          color: var(--muted-text);
        }

        .text-dark {
          color: var(--dark-text);
        }

        /* Offerings Section */
        .about-offerings-section {
          padding-top: 100px;
          padding-bottom: 80px;
          background: linear-gradient(180deg, var(--surface) 0%, var(--beige) 100%);
          border-top: 1px solid var(--glass-border);
        }

        .offerings-header {
          margin-bottom: 60px;
        }

        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .offering-card {
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 36px 28px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
        }

        .offering-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-gold);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
        }

        .offering-img-box {
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          background: var(--beige);
          border: 1px solid rgba(0, 0, 0, 0.12);
          margin-bottom: 24px;
        }

        .offering-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .offering-card:hover .offering-img-box img {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .clean-story-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-story-clean {
            margin-bottom: 70px;
          }
          .about-offerings-section {
            padding-top: 70px;
            padding-bottom: 60px;
          }
          .offerings-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}} />
    </div>
  );
};

export default About;
