import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaArrowRight,
  FaEnvelope,
  FaInfoCircle,
} from 'react-icons/fa';

// ─── STATS DATA ───────────────────────────────────────────────────────────────
const stats = [
  { num: '100+', label: 'Projects Delivered' },
  { num: '50+',  label: 'Global Clients'     },
  { num: '5★',   label: 'Client Satisfaction'},
  { num: '365 Days', label: 'Support Available'  },
];

// ─── KEYWORD TAGS ─────────────────────────────────────────────────────────────
const keywords = [
  'New Tech Softs',
  'Web Development',
  'AI Solutions',
  'Mobile Apps',
  'Search Engine Optimization',
  'AI Agents',
  'Graphic Designing',
  'Logo & Branding',
  'Custom Web Solutions',
  'WordPress Sites',
  'Desktop Applications',
  'Chrome Extensions',
];

// ─── TRUST ITEMS ──────────────────────────────────────────────────────────────
const trustItems = [
  'Free Consultation',
  'No Hidden Charges',
  '100% Client Satisfaction',
  'NDA Protected',
];

// ─── STAT CARD ────────────────────────────────────────────────────────────────
const StatCard = ({ num, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center justify-center min-w-[130px] px-6 py-4 rounded-xl border border-white/8 bg-white/[0.03]"
  >
    <span className="font-black text-2xl text-white leading-none">
      <span className="text-cyan-400">{num.replace(/[^0-9★]/g, '')}</span>
      {num.replace(/[0-9★]/g, '')}
    </span>
    <span className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest">{label}</span>
  </motion.div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const CTASection = () => {
  return (
    <section className="relative py-24 px-4 bg-[#0a192f] overflow-hidden">

      {/* ── Background grid ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-500/[0.06] blur-[120px]" />

      {/* ── Inner wrapper ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* ── Live badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.07] border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold tracking-[2.5px] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            New Tech Softs — NTS · Islamabad's #1 IT Company
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[clamp(30px,5vw,52px)] font-black text-[#f0f4f8] leading-[1.1] tracking-tight mb-3"
        >
          Let's Build Something{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Extraordinary Together.
          </span>
        </motion.h2>

        {/* ── Sub-headline ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(14px,2.5vw,20px)] text-slate-500 font-medium mb-8 leading-snug"
        >
          Pakistan's Premier{' '}
          <span className="text-slate-400">Software House</span> for Next-Gen Digital Solutions
        </motion.p>

        {/* ── Stats row ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={0.12 + i * 0.08} />
          ))}
        </div>

        {/* ── Rich description ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 text-[15px] leading-[1.9] max-w-3xl mx-auto mb-10"
        >
          At{' '}
          <strong className="text-slate-400 font-medium">New Tech Softs (NTS)</strong>,
          we don't just write code — we craft digital experiences that drive real growth.
          From{' '}
          <strong className="text-slate-400 font-medium">custom web &amp; mobile applications</strong>{' '}
          to{' '}
          <strong className="text-slate-400 font-medium">AI-powered enterprise solutions</strong>,
          our expert team has helped startups, SMEs, and global brands transform their
          vision into reality. Whether you need a{' '}
          <strong className="text-slate-400 font-medium">MERN stack platform</strong>,
          a{' '}
          <strong className="text-slate-400 font-medium">cross-platform mobile app</strong>,
          or a{' '}
          <strong className="text-slate-400 font-medium">complete brand identity</strong> —
          as Islamabad's leading{' '}
          <strong className="text-slate-400 font-medium">IT company &amp; software house</strong>,
          we deliver measurable results with full transparency.
        </motion.p>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent mb-10" />

        {/* ── Keyword tags (SEO) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {keywords.map((kw) => (
            <span
              key={kw}
              className="px-3 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-wide text-cyan-400 bg-cyan-500/[0.06] border border-cyan-500/15"
            >
              {kw}
            </span>
          ))}
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-10"
        >
          {/* Primary button */}
          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: '0 0 50px rgba(34,211,238,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-[14px] font-bold text-[15px] text-[#0a192f] bg-gradient-to-r from-cyan-400 to-sky-500 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all"
            >
              <FaEnvelope className="text-[15px]" />
              Start Your Project Today
              <FaArrowRight className="text-[13px]" />
            </motion.button>
          </Link>

          {/* Secondary button */}
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.03, borderColor: 'rgba(34,211,238,0.5)', color: '#22d3ee' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] font-medium text-[14px] text-slate-400 bg-transparent border border-white/12 transition-all"
            >
              <FaInfoCircle className="text-[14px]" />
              Explore Our Services
            </motion.button>
          </Link>
        </motion.div>

        {/* ── Trust bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          {trustItems.map((item, i) => (
            <React.Fragment key={item}>
              <span className="inline-flex items-center gap-1.5 text-slate-500 text-[12px]">
                <FaCheckCircle className="text-cyan-500 text-[13px] flex-shrink-0" />
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span className="text-slate-700 text-lg">·</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;