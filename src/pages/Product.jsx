import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
        <section className="relative text-white pt-28 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
          
          {/* Background Animation (Abstract Blobs) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-center lg:text-left">
                
                {/* Welcome Badge */}
                <motion.div 
                  className="text-cyan-400 font-bold tracking-widest uppercase text-base lg:text-lg mb-4 flex flex-wrap justify-center lg:justify-start gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                  {"Our Products".split(" ").map((word, index) => (
                    <motion.span key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, delay: 0.3 + index * 0.1 }}>{word}</motion.span>
                  ))}
                </motion.div>

                {/* Main Heading - Word by Word Animation */}
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                  {"Powerful Software".split(" ").map((word, index) => (
                    <motion.span key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, delay: 0.4 + index * 0.1 }}>{word}</motion.span>
                  ))}
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                  >
                    Built to Scale
                  </motion.span>
                </motion.h1>

                {/* Short Description */}
                <motion.p 
                  className="text-gray-400 text-lg lg:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Explore our curated collection of industry-leading software tools — from development platforms to productivity suites, crafted for modern teams.
                </motion.p>
                
                {/* Search + Buttons */}
                <motion.div 
                  className="flex flex-col gap-4"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 10, delay: 1.2 }}
                >
                  {/* Search Bar */}
                  <div className="relative max-w-md mx-auto lg:mx-0">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M13 13l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input
                      type="text"
                      className="w-full pl-12 pr-10 py-3.5 bg-[#112240]/80 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all text-sm"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition" onClick={() => setSearchTerm('')}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#products" className="w-full sm:w-auto bg-cyan-500 text-[#0a192f] px-8 py-3.5 rounded-full font-bold text-lg hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center">
                      View Products
                    </a>
                    <Link to="/contact">
                      <button className="w-full sm:w-auto border-2 border-gray-600 text-gray-300 px-8 py-3.5 rounded-full font-bold text-lg hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2">
                        Get a Quote
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right Visual - Floating Product Cards */}
              <motion.div 
                className="relative hidden lg:flex items-center justify-center h-[380px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative w-full h-full">
                  
                  {/* Card 1 - Dev Tools */}
                  <motion.div 
                    className="absolute top-0 left-0 bg-[#112240]/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">CodeFlow IDE</p>
                      <p className="text-gray-500 text-xs">Dev Tools, Productivity</p>
                    </div>
                  </motion.div>

                  {/* Card 2 - Design Tool */}
                  <motion.div 
                    className="absolute top-8 right-0 bg-[#112240]/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">DesignStudio</p>
                      <p className="text-gray-500 text-xs">Design, UI/UX</p>
                    </div>
                  </motion.div>

                  {/* Card 3 - Cloud Platform */}
                  <motion.div 
                    className="absolute bottom-20 left-4 bg-[#112240]/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">CloudDeploy</p>
                      <p className="text-gray-500 text-xs">Cloud, DevOps</p>
                    </div>
                  </motion.div>

                  {/* Card 4 - Analytics */}
                  <motion.div 
                    className="absolute bottom-8 right-8 bg-[#112240]/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">DataPulse</p>
                      <p className="text-gray-500 text-xs">Analytics, Productivity</p>
                    </div>
                  </motion.div>

                  {/* Center Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

                </div>
              </motion.div>

            </div>
          </div>
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
        <h1 id="products" className='product-h1'>Our Products</h1>
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
        <section className="relative py-24 px-4 overflow-hidden">
          
          {/* Background Decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 flex justify-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {"About NewTechSofts".split(" ").map((word, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-white">Engineering</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Excellence,</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Delivered.</span>
              </motion.h2>

              <motion.p 
                className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                We are a premier software house based in Islamabad, dedicated to delivering
                precision-engineered digital solutions. Every product we build is designed with
                performance, scalability, and exceptional user experience at the core.
              </motion.p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Custom Development',
                  text: 'Tailored software built around your exact requirements.',
                  color: '#60a5fa',
                  gradient: 'from-blue-400 to-cyan-400',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  )
                },
                {
                  title: 'Cloud-Ready',
                  text: 'Scalable infrastructure for modern cloud environments.',
                  color: '#22d3ee',
                  gradient: 'from-cyan-400 to-teal-400',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
                    </svg>
                  )
                },
                {
                  title: '24/7 Support',
                  text: 'Round-the-clock technical support for all our products.',
                  color: '#a78bfa',
                  gradient: 'from-purple-400 to-violet-400',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  )
                },
                {
                  title: 'Secure by Design',
                  text: 'Enterprise-grade security baked into every layer.',
                  color: '#34d399',
                  gradient: 'from-emerald-400 to-green-400',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  )
                },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 80 }}
                  whileHover={{ y: -8, boxShadow: `0 20px 40px ${f.color}20` }}
                  className="group relative bg-[#112240]/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-7 hover:border-transparent transition-all duration-500 cursor-default overflow-hidden"
                >
                  {/* Glow on hover */}
                  <div 
                    className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: f.color }}
                  ></div>

                  {/* Icon */}
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-5 shadow-lg`}
                    style={{ boxShadow: `0 8px 20px ${f.color}30` }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {f.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {f.text}
                  </p>

                  {/* Bottom accent line */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
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