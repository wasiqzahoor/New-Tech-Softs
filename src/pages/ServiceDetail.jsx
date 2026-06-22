import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FaArrowLeft, FaCheckCircle, FaChevronRight, FaRocket, FaPhone,
  FaReact, FaMobileAlt, FaFigma, FaSearch, FaAws, FaRobot
} from 'react-icons/fa';
import { services } from '../data/servicesData';

const iconMap = {
  FaReact: FaReact,
  FaMobileAlt: FaMobileAlt,
  FaFigma: FaFigma,
  FaSearch: FaSearch,
  FaAws: FaAws,
  FaRobot: FaRobot,
};

const colorMap = {
  cyan: { primary: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', gradient: 'from-cyan-400 to-blue-500' },
  blue: { primary: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', gradient: 'from-blue-400 to-cyan-500' },
  purple: { primary: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', gradient: 'from-purple-400 to-pink-500' },
  green: { primary: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30', gradient: 'from-green-400 to-cyan-500' },
  orange: { primary: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', gradient: 'from-orange-400 to-yellow-500' },
  pink: { primary: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30', gradient: 'from-pink-400 to-purple-500' },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const service = services.find((s) => s.slug === slug);
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!service) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === service.images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/services" className="text-cyan-400 hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  const colors = colorMap[service.color] || colorMap.cyan;
  const IconComp = iconMap[service.icon] || FaRocket;

  return (
    <div className="text-white min-h-screen pt-20">
      {/* SEO */}
      <Helmet>
        <title>{service.title} | New Tech Softs</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={`${service.title}, ${service.tools.join(', ')}, New Tech Softs`} />
        <link rel="canonical" href={`https://newtechsofts.com/service/${service.slug}`} />
        <meta property="og:title" content={`${service.title} | New Tech Softs`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.images[0]} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "url": `https://newtechsofts.com/service/${service.slug}`,
            "provider": { "@type": "Organization", "name": "New Tech Softs" },
            "serviceType": service.title,
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 text-sm font-semibold"
        >
          <FaArrowLeft /> Back to Services
        </motion.button>
      </div>

      {/* --- HERO: Image Carousel + Title --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={service.images[currentImage]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={`${service.title} - Image ${currentImage + 1}`}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 via-transparent to-transparent"></div>

              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {service.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentImage ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-300 font-semibold">
                {currentImage + 1} / {service.images.length}
              </div>
            </div>
            <div className={`absolute -inset-4 ${colors.bg} blur-3xl -z-10 rounded-full opacity-40`}></div>
          </motion.div>

          {/* Right: Service Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.border} border px-4 py-2 rounded-full`}>
              <IconComp className={colors.primary} />
              <span className={`text-xs font-bold uppercase tracking-wider ${colors.primary}`}>{service.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === service.title.split(' ').length - 1 ? `text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}` : 'text-white'}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>

            {/* Features */}
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                    <FaCheckCircle className={`${colors.primary} shrink-0`} />
                    <span className="text-sm text-gray-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="flex-1">
                <button className={`w-full bg-gradient-to-r ${colors.gradient} text-[#0a192f] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
                  <FaRocket /> Get Started
                </button>
              </Link>
              <Link to="/contact" className="flex-1">
                <button className="w-full border border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-bold hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center justify-center gap-2">
                  <FaPhone /> Talk to Expert
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TOOLS & TECH --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Tools & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">We use industry-leading tools to deliver exceptional results</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {service.tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${colors.bg} ${colors.border} border px-6 py-3 rounded-xl text-sm font-semibold ${colors.primary} hover:scale-105 transition-transform`}
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROCESS GUIDE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Our <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>Process</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">A proven roadmap that delivers results every time</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step Number */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a192f] border-2 border-cyan-500 items-center justify-center z-10">
                  <span className="text-cyan-400 font-bold text-sm">{i + 1}</span>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-[#112240] border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      <span className="md:hidden w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-bold">
                        {i + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white">{step.step}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Frequently Asked <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {service.faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#112240] border border-gray-700/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openFaq === i ? 90 : 0 }}
                  className={`${colors.primary} shrink-0`}
                >
                  <FaChevronRight />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-700/30 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- RELATED SERVICES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((rel, i) => {
            const RelIcon = iconMap[rel.icon] || FaRocket;
            const relColors = colorMap[rel.color] || colorMap.cyan;
            return (
              <Link key={rel.id} to={`/service/${rel.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#112240] border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group cursor-pointer h-full"
                >
                  <div className={`w-12 h-12 ${relColors.bg} rounded-xl flex items-center justify-center text-xl ${relColors.primary} mb-4`}>
                    <RelIcon />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{rel.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{rel.shortDesc}</p>
                  <span className={`text-sm font-semibold ${relColors.primary} flex items-center gap-1`}>
                    Learn More <FaChevronRight className="text-xs" />
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#112240]/80 to-[#0a192f]/80 backdrop-blur-xl border border-gray-700/50 rounded-[2rem] p-8 md:p-14 text-center shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6 border border-cyan-500/20"
            >
              <FaRocket />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Project?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how {service.title.toLowerCase()} can transform your business. Free consultation included.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(34, 211, 238, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 text-[#0a192f] px-8 py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)", color: "#fff" }}
                  className="text-gray-400 px-8 py-4 rounded-xl font-bold border border-gray-700"
                >
                  See Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
