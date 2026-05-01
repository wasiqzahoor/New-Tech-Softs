import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { products } from '../data/productData';
import { Helmet } from 'react-helmet-async';
/* ─── Animated Counter Hook ─────────────────────────────────── */
const useCounter = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

/* ─── Stat Card ─────────────────────────────────────────────── */
const StatCard = ({ value, label, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(inView ? value : 0);
  return (
    <div ref={ref} className="stat-card">
      <span className="stat-value">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

/* ─── Product Card ──────────────────────────────────────────── */
const ProductCard = ({ product, index, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(product)}
    >
      <div className="card-image-wrapper">
        <div className="card-glow" />
        <img
          src={product.image}
          alt={product.name}
          className="card-image"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.querySelector('.img-fallback').style.display = 'flex';
          }}
        />
        <div className="img-fallback">
          <span>{product.name.charAt(0)}</span>
        </div>
        <div className="card-badge">WEBSITE</div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-details">{product.details}</p>
        <motion.button
          className="card-btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={(e) => { e.stopPropagation(); onClick(product); }}
        >
          <span>View Details</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

/* ─── Modal ─────────────────────────────────────────────────── */
const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey); };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-box"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="modal-img-wrap">
            <img src={product.image} alt={product.name} className="modal-img" />
          </div>
          <div className="modal-content">
            <div className="modal-tag">Software Product</div>
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-desc">{product.details}</p>
            <div className="modal-actions">
              <motion.a
                href={product.url}
                className="modal-btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                target='blank'
              >
                Get Started
              </motion.a>
              <motion.button
                className="modal-btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Main Page ─────────────────────────────────────────────── */
const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Dev Tools', 'Design', 'Productivity', 'Cloud'];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Helmet>
      {/* Page Title */}
      <title>Premium Software Solutions & Products | New Tech Softs</title>
      
      {/* Meta Description for SEO */}
      <meta name="description" content="Discover our cutting-edge software products at New Tech Softs. We offer custom development, cloud solutions, and productivity tools designed to scale your business. Visit us for reliable software excellence in Islamabad." />
      
      {/* Canonical Link */}
      <link rel="canonical" href="https://www.newtechsofts.com/products" />
      
      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:title" content="Premium Software Solutions & Products | New Tech Softs" />
      <meta property="og:description" content="Custom-built, scalable software solutions by New Tech Softs. Elevate your business with our professional tools." />
      <meta property="og:url" content="https://www.newtechsofts.com/products" />
      <meta property="og:type" content="website" />
      
      {/* JSON-LD Schema for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareBusiness",
          "name": "New Tech Softs",
          "url": "https://www.newtechsofts.com/",
          "description": "Professional software house in Islamabad specializing in custom web apps and digital solutions.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Islamabad",
            "addressCountry": "PK"
          },
          "image": "https://www.newtechsofts.com/og-image.png",
          "offers": {
            "@type": "AggregateOffer",
            "itemOffered": "Custom Software Development Services"
          }
        })}
      </script>
    </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        :root {
          --c-bg:        #060b14;
          --c-surface:   #0d1525;
          --c-surface2:  #111d30;
          --c-border:    rgba(99, 168, 255, 0.12);
          --c-border2:   rgba(99, 168, 255, 0.22);
          --c-accent:    #3b82f6;
          --c-accent2:   #60a5fa;
          --c-cyan:      #22d3ee;
          --c-text:      #e2eaf6;
          --c-muted:     #6b83a4;
          --c-dim:       #3a4f6a;
          --font-display: 'Syne', sans-serif;
          --font-body:    'DM Sans', sans-serif;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pp-root {
          font-family: var(--font-body);
          background: var(--c-bg);
          color: var(--c-text);
          min-height: 100vh;
          overflow-x: hidden;
        }
          .product-h1{
          color: #39c2f2;
          padding:10;
          margin:20px;
           text-align: center;
          font-size: 36px;
          }

        /* ── Hero ── */
        .pp-hero {
          position: relative;
          padding: 120px 24px 80px;
          text-align: center;
          overflow: hidden;
        }
        .pp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 900px 500px at 50% -80px, rgba(59,130,246,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 400px 300px at 20% 60%, rgba(34,211,238,0.07) 0%, transparent 60%);
          pointer-events: none;
        }
        .pp-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 80%);
          pointer-events: none;
        }
        .pp-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-cyan);
          background: rgba(34,211,238,0.08);
          border: 1px solid rgba(34,211,238,0.2);
          border-radius: 100px;
          padding: 6px 16px;
          margin-bottom: 24px;
        }
        .pp-hero-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          background: var(--c-cyan);
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .pp-hero-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 6vw, 68px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 20px;
          position: relative;
        }
        .pp-hero-title span {
          background: linear-gradient(135deg, var(--c-accent2) 0%, var(--c-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pp-hero-sub {
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 300;
          color: var(--c-muted);
          max-width: 520px;
          margin: 0 auto 40px;
          line-height: 1.65;
        }
        .pp-search-wrap {
          position: relative;
          max-width: 540px;
          margin: 0 auto;
        }
        .pp-search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--c-dim);
          pointer-events: none;
        }
        .pp-search {
          width: 100%;
          padding: 16px 20px 16px 50px;
          background: var(--c-surface);
          border: 1px solid var(--c-border2);
          border-radius: 14px;
          color: var(--c-text);
          font-family: var(--font-body);
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          backdrop-filter: blur(8px);
        }
        .pp-search::placeholder { color: var(--c-dim); }
        .pp-search:focus {
          border-color: rgba(59,130,246,0.5);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1), 0 4px 24px rgba(0,0,0,0.3);
        }
        .pp-search-clear {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--c-dim);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          transition: color 0.15s;
        }
        .pp-search-clear:hover { color: var(--c-text); }

        /* ── Stats ── */
        .pp-stats {
          display: flex;
          justify-content: center;
          gap: clamp(16px, 4vw, 48px);
          flex-wrap: wrap;
          padding: 40px 24px;
          border-top: 1px solid var(--c-border);
          border-bottom: 1px solid var(--c-border);
          background: linear-gradient(180deg, rgba(59,130,246,0.03) 0%, transparent 100%);
        }
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .stat-label {
          font-size: 13px;
          color: var(--c-muted);
          letter-spacing: 0.04em;
        }

        /* ── Filter Bar ── */
        .pp-filters {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 36px 24px 0;
        }
        .filter-btn {
          padding: 8px 20px;
          border-radius: 100px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid var(--c-border);
          background: transparent;
          color: var(--c-muted);
        }
        .filter-btn:hover { color: var(--c-text); border-color: var(--c-border2); }
        .filter-btn.active {
          background: var(--c-accent);
          border-color: var(--c-accent);
          color: #fff;
          box-shadow: 0 4px 16px rgba(59,130,246,0.3);
        }

        /* ── Product Grid ── */
        .pp-grid-section {
          padding: 40px 24px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .pp-grid-count {
          text-align: center;
          font-size: 13px;
          color: var(--c-dim);
          margin-bottom: 32px;
        }
        .pp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .pp-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 24px;
          color: var(--c-muted);
        }
        .pp-empty h3 { font-family: var(--font-display); font-size: 22px; color: var(--c-text); margin-bottom: 8px; }

        /* ── Product Card ── */
        .product-card {
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
          position: relative;
        }
        .product-card:hover {
          border-color: rgba(59,130,246,0.35);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.12);
        }
        .card-image-wrapper {
          position: relative;
          height: 200px;
          background: var(--c-surface2);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .card-image {
          width: 72px;
          height: 72px;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 4px 16px rgba(59,130,246,0.2));
          transition: transform 0.3s ease;
        }
        .product-card:hover .card-image { transform: scale(1.08); }
        .img-fallback {
          display: none;
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, var(--c-accent) 0%, var(--c-cyan) 100%);
          border-radius: 16px;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          z-index: 1;
        }
        .card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--c-accent2);
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 6px;
          padding: 3px 9px;
        }
        .card-body {
          padding: 20px;
        }
        .card-title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .card-details {
          font-size: 13.5px;
          font-weight: 300;
          color: var(--c-muted);
          line-height: 1.6;
          margin-bottom: 18px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 10px;
          color: var(--c-accent2);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .card-btn:hover {
          background: rgba(59,130,246,0.2);
          border-color: rgba(59,130,246,0.4);
          color: #fff;
        }

        /* ── About Section ── */
        .pp-about {
          padding: 80px 24px;
          background: linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.04) 50%, transparent 100%);
          border-top: 1px solid var(--c-border);
          border-bottom: 1px solid var(--c-border);
          text-align: center;
        }
        .pp-about-inner { max-width: 720px; margin: 0 auto; }
        .pp-section-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--c-accent2);
          margin-bottom: 16px;
        }
        .pp-section-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .pp-about-text {
          font-size: 16px;
          font-weight: 300;
          color: var(--c-muted);
          line-height: 1.75;
        }
        .pp-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-top: 48px;
          text-align: left;
        }
        .pp-feature {
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: 12px;
          padding: 20px;
        }
        .pp-feature-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(59,130,246,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          color: var(--c-accent2);
        }
        .pp-feature-title {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
        }
        .pp-feature-text {
          font-size: 12.5px;
          font-weight: 300;
          color: var(--c-muted);
          line-height: 1.55;
        }

        /* ── CTA Section ── */
        .pp-cta {
          padding: 80px 24px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .pp-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 600px 400px at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .pp-cta-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .pp-cta-sub {
          font-size: 16px;
          font-weight: 300;
          color: var(--c-muted);
          margin-bottom: 36px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }
        .pp-cta-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .pp-btn-primary {
          padding: 14px 32px;
          background: var(--c-accent);
          border: none;
          border-radius: 12px;
          color: #fff;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(59,130,246,0.35);
        }
        .pp-btn-primary:hover {
          background: #2563eb;
          box-shadow: 0 8px 32px rgba(59,130,246,0.45);
        }
        .pp-btn-secondary {
          padding: 14px 32px;
          background: transparent;
          border: 1px solid var(--c-border2);
          border-radius: 12px;
          color: var(--c-text);
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .pp-btn-secondary:hover {
          background: var(--c-surface);
          border-color: rgba(99,168,255,0.4);
        }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 9, 20, 0.85);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-box {
          background: var(--c-surface);
          border: 1px solid var(--c-border2);
          border-radius: 20px;
          max-width: 560px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.1);
        }
        .modal-close {
          position: absolute;
          top: 16px; right: 16px;
          width: 32px; height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--c-border);
          color: var(--c-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: color 0.15s, background 0.15s;
        }
        .modal-close:hover { color: var(--c-text); background: rgba(255,255,255,0.1); }
        .modal-img-wrap {
          height: 200px;
          background: var(--c-surface2);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px 20px 0 0;
          border-bottom: 1px solid var(--c-border);
        }
        .modal-img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          filter: drop-shadow(0 4px 20px rgba(59,130,246,0.25));
        }
        .modal-content { padding: 28px; }
        .modal-tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-accent2);
          margin-bottom: 10px;
        }
        .modal-title {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 14px;
          letter-spacing: -0.01em;
        }
        .modal-desc {
          font-size: 15px;
          font-weight: 300;
          color: var(--c-muted);
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .modal-actions { display: flex; gap: 10px; flex-wrap: wrap; }
        .modal-btn-primary {
          flex: 1;
          min-width: 120px;
          padding: 13px 20px;
          background: var(--c-accent);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          display: block;
          box-shadow: 0 4px 16px rgba(59,130,246,0.3);
          transition: background 0.2s;
        }
        .modal-btn-primary:hover { background: #2563eb; }
        .modal-btn-secondary {
          flex: 1;
          min-width: 120px;
          padding: 13px 20px;
          background: transparent;
          border: 1px solid var(--c-border2);
          border-radius: 10px;
          color: var(--c-muted);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .modal-btn-secondary:hover { color: var(--c-text); border-color: rgba(99,168,255,0.4); }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .pp-hero { padding: 80px 20px 60px; }
          .pp-grid { grid-template-columns: 1fr; }
          .pp-stats { gap: 24px; }
          .modal-box { border-radius: 16px; }
        }
        @media (max-width: 480px) {
          .pp-btn-primary, .pp-btn-secondary { width: 100%; }
          .pp-cta-btns { flex-direction: column; align-items: center; }
        }
      `}</style>

      <div className="pp-root">
        {/* Hero Section */}
        <section className="pp-hero">
          <div className="pp-hero-grid" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pp-hero-eyebrow">NewTechSofts Product Suite</div>
            <h1 className="pp-hero-title">
              Powerful Software<br />
              <span>Built to Scale</span>
            </h1>
            <p className="pp-hero-sub">
              Explore our curated collection of industry-leading software tools — from
              development platforms to productivity suites, crafted for modern teams.
            </p>

            <div className="pp-search-wrap">
              <svg className="pp-search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M13 13l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                className="pp-search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="pp-search-clear" onClick={() => setSearchTerm('')} aria-label="Clear search">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </section>

        {/* Stats Row */}
        <div className="pp-stats">
          <StatCard value={8} label="Products" suffix="+" />
          <StatCard value={50} label="Happy Clients" suffix="+" />
          <StatCard value={99} label="Uptime %" suffix="%" />
          <StatCard value={24} label="Support Hours" suffix="/7" />
        </div>

        {/* Filter Bar */}
        {/* <div className="pp-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div> */}

        {/* Product Grid */}
        <h1 className='product-h1'>Our Products</h1>
        <section className="pp-grid-section">
          <p className="pp-grid-count">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
          <div className="pp-grid">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    onClick={setSelectedProduct}
                  />
                ))
              ) : (
                <motion.div
                  className="pp-empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3>No products found</h3>
                  <p>Try a different search term</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* About Section */}
        <section className="pp-about">
          <div className="pp-about-inner">
            <span className="pp-section-tag">About NewTechSofts</span>
            <h2 className="pp-section-title">Engineering Excellence,<br />Delivered.</h2>
            <p className="pp-about-text">
              We are a premier software house based in Islamabad, dedicated to delivering
              precision-engineered digital solutions. Every product we build is designed with
              performance, scalability, and exceptional user experience at the core.
            </p>
            <div className="pp-features">
              {[
                {
                  title: 'Custom Development',
                  text: 'Tailored software built around your exact requirements.',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 12l3-3 3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: 'Cloud-Ready',
                  text: 'Scalable infrastructure designed for modern cloud environments.',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M14 11a4 4 0 10-5.66-5.66A3 3 0 104.5 11H14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: '24/7 Support',
                  text: 'Round-the-clock technical support for all our products.',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M9 5.5v4l2.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )
                },
                {
                  title: 'Secure by Design',
                  text: 'Enterprise-grade security baked into every layer.',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 2L3 5v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  )
                },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  className="pp-feature"
                  whileHover={{ borderColor: 'rgba(99,168,255,0.3)', y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="pp-feature-icon">{f.icon}</div>
                  <div className="pp-feature-title">{f.title}</div>
                  <div className="pp-feature-text">{f.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pp-cta">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="pp-cta-title">Ready to Build Something<br />Extraordinary?</h2>
            <p className="pp-cta-sub">
              Let's discuss your project requirements and deliver a solution that exceeds expectations.
            </p>
            <div className="pp-cta-btns">
              <motion.button
                className="pp-btn-primary"
                whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(59,130,246,0.5)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us Now
              </motion.button>
              <motion.button
                className="pp-btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.location.href = '/about'}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProductPage;