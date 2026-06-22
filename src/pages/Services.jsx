import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaMobileAlt, FaFigma, FaSearch, FaAws, FaRobot, FaRocket,
  FaChevronRight, FaCode, FaDesktop, FaPalette, FaVideo, FaCogs, FaHeadset
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/servicesData';

const iconMap = {
  FaReact: FaReact,
  FaMobileAlt: FaMobileAlt,
  FaFigma: FaFigma,
  FaSearch: FaSearch,
  FaAws: FaAws,
  FaRobot: FaRobot,
  FaCode: FaCode,
  FaDesktop: FaDesktop,
  FaPalette: FaPalette,
  FaVideo: FaVideo,
  FaCogs: FaCogs,
  FaHeadset: FaHeadset,
};

const colorMap = {
  cyan: { 
    primary: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30',
    gradient: 'from-cyan-400 to-blue-500', glow: 'rgba(34,211,238,0.35)',
    hex: '#22d3ee'
  },
  blue: { 
    primary: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30',
    gradient: 'from-blue-400 to-cyan-500', glow: 'rgba(96,165,250,0.35)',
    hex: '#60a5fa'
  },
  purple: { 
    primary: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30',
    gradient: 'from-purple-400 to-pink-500', glow: 'rgba(192,132,252,0.35)',
    hex: '#c084fc'
  },
  green: { 
    primary: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30',
    gradient: 'from-green-400 to-emerald-500', glow: 'rgba(74,222,128,0.35)',
    hex: '#4ade80'
  },
  orange: { 
    primary: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30',
    gradient: 'from-orange-400 to-amber-500', glow: 'rgba(251,146,60,0.35)',
    hex: '#fb923c'
  },
  pink: { 
    primary: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30',
    gradient: 'from-pink-400 to-rose-500', glow: 'rgba(244,114,182,0.35)',
    hex: '#f472b6'
  },
  yellow: { 
    primary: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30',
    gradient: 'from-yellow-400 to-amber-500', glow: 'rgba(250,204,21,0.35)',
    hex: '#facc15'
  },
  red: { 
    primary: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30',
    gradient: 'from-red-400 to-rose-500', glow: 'rgba(248,113,113,0.35)',
    hex: '#f87171'
  },
  indigo: { 
    primary: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30',
    gradient: 'from-indigo-400 to-violet-500', glow: 'rgba(129,140,248,0.35)',
    hex: '#818cf8'
  },
  teal: { 
    primary: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30',
    gradient: 'from-teal-400 to-cyan-500', glow: 'rgba(45,212,191,0.35)',
    hex: '#2dd4bf'
  },
  emerald: { 
    primary: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30',
    gradient: 'from-emerald-400 to-green-500', glow: 'rgba(52,211,153,0.35)',
    hex: '#34d399'
  },
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComp = iconMap[service.icon] || FaRocket;
  const colors = colorMap[service.color] || colorMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 80 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link to={`/service/${service.slug}`} className="block h-full">
        <div 
          className="relative h-full min-h-[480px] bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-3xl border border-gray-700/50 overflow-hidden transition-all duration-500 hover:border-transparent flex flex-col"
          style={{ boxShadow: isHovered ? `0 20px 60px ${colors.glow}` : '0 4px 20px rgba(0,0,0,0.3)' }}
        >
          
          {/* Hover Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none`}></div>
          
          {/* Top Color Bar */}
          <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

          {/* Floating Particles */}
          <AnimatePresence>
            {isHovered && [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{ 
                  width: Math.random() * 5 + 3, height: Math.random() * 5 + 3, 
                  backgroundColor: colors.hex,
                  left: `${15 + Math.random() * 70}%`, top: `${20 + Math.random() * 60}%`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.7, 0], scale: [0, 1, 0], y: [0, -50] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.2, delay: i * 0.25, repeat: Infinity }}
              />
            ))}
          </AnimatePresence>

          {/* Image Section */}
          <div className="relative h-52 shrink-0 overflow-hidden">
            <motion.img 
              src={service.images[0]} 
              alt={service.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.15 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-[#112240]/40 to-transparent"></div>
          </div>

          {/* Icon - Overlapping Image & Content */}
          <div className="relative flex justify-center -mt-9 z-10 shrink-0">
            <motion.div 
              className="w-[72px] h-[72px] rounded-2xl bg-[#0a192f] border-2 flex items-center justify-center shadow-xl"
              style={{ borderColor: isHovered ? colors.hex : 'rgba(75,85,99,0.5)' }}
              animate={{ rotate: isHovered ? [0, -8, 8, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="text-3xl"
                animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className={colors.primary}><IconComp /></span>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="px-7 pt-5 pb-7 flex flex-col flex-1">
            {/* Tagline */}
            <motion.div 
              className="flex items-center gap-2 mb-2"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="h-[2px] bg-gradient-to-r rounded-full"
                style={{ backgroundImage: `linear-gradient(to right, ${colors.hex}, transparent)` }}
                animate={{ width: isHovered ? 32 : 24 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${colors.primary}`}>
                {service.tagline}
              </span>
            </motion.div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight transition-colors duration-300" style={isHovered ? { color: colors.hex } : {}}>
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
              {service.shortDesc}
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {service.features.slice(0, 3).map((f, i) => (
                <motion.span 
                  key={i} 
                  className="text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-all duration-300"
                  style={isHovered 
                    ? { borderColor: `${colors.hex}40`, backgroundColor: `${colors.hex}15`, color: colors.hex }
                    : { borderColor: 'rgba(255,255,255,0.06)', backgroundColor: 'rgba(255,255,255,0.03)', color: '#9ca3af' }
                  }
                >
                  {f}
                </motion.span>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/5">
              <span 
                className="text-xs font-bold flex items-center gap-2 transition-all duration-300"
                style={{ color: isHovered ? colors.hex : 'transparent', opacity: isHovered ? 1 : 0 }}
              >
                Explore Service
                <motion.span animate={{ x: isHovered ? [0, 4, 0] : 0 }} transition={{ duration: 1, repeat: Infinity }}>
                  <FaChevronRight className="text-[10px]" />
                </motion.span>
              </span>
              <motion.div 
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
                style={{ 
                  borderColor: isHovered ? colors.hex : 'rgba(75,85,99,0.5)',
                  color: isHovered ? colors.hex : '#6b7280',
                  boxShadow: isHovered ? `0 0 20px ${colors.glow}` : 'none',
                  backgroundColor: isHovered ? `${colors.hex}10` : 'transparent'
                }}
              >
                <FaChevronRight className="text-xs" />
              </motion.div>
            </div>
          </div>

          {/* Bottom Corner Glow */}
          <div 
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none"
            style={{ backgroundColor: colors.hex, opacity: isHovered ? 0.15 : 0 }}
          ></div>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const buttonVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 120, damping: 10, delay: 1.5 }
    }
  };

  return (
    <div className="text-white min-h-screen pt-20 overflow-hidden">
      
      {/* --- SEO META TAGS --- */}
      <Helmet>
        <title>Our Services | Web Development, App Development, AI Solutions | New Tech Softs</title>
        <meta name="description" content="New Tech Softs offers professional web development, mobile app development, UI/UX design, SEO, AI solutions, and cloud services. Top software house in Islamabad delivering custom digital solutions worldwide." />
        <meta name="keywords" content="web development, app development, mobile app, UI/UX design, SEO, digital marketing, AI chatbots, AI agents, SaaS development, cloud services, devops, desktop application, graphic designing, video editing, IT consulting, technical support, software house Islamabad, New Tech Softs" />
        <meta name="author" content="New Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newtechsofts.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newtechsofts.com/services" />
        <meta property="og:title" content="Our Services | Web Development, App Development, AI Solutions | New Tech Softs" />
        <meta property="og:description" content="Professional web development, mobile app development, UI/UX design, SEO, AI solutions, and cloud services from New Tech Softs - a leading software house in Islamabad." />
        <meta property="og:image" content="https://newtechsofts.com/logo.png" />
        <meta property="og:site_name" content="New Tech Softs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newtechsofts.com/services" />
        <meta name="twitter:title" content="Our Services | New Tech Softs" />
        <meta name="twitter:description" content="Professional web development, mobile app development, UI/UX design, SEO, AI solutions from New Tech Softs." />
        <meta name="twitter:image" content="https://newtechsofts.com/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Software Development Services | New Tech Softs",
            "description": "Professional web development, mobile app development, UI/UX design, SEO, AI solutions, and cloud services from New Tech Softs.",
            "url": "https://newtechsofts.com/services",
            "provider": {
              "@type": "Organization",
              "name": "New Tech Softs",
              "address": { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" }
            },
            "areaServed": "Worldwide",
            "serviceType": ["Web Development", "Mobile App Development", "UI/UX Design", "AI Chatbots & AI Agents", "SaaS Development", "Digital Marketing", "Cloud & DevOps", "Desktop Applications", "Graphic Designing", "Video Editing", "IT Solutions & Consulting", "Technical Support Services"]
          })}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative text-white pt-28 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div 
                className="text-cyan-400 font-bold tracking-widest uppercase text-base lg:text-lg mb-4 flex flex-wrap justify-center lg:justify-start gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"Our Services".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"Transforming".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
                <motion.span 
                  variants={wordVariants}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                  Ideas Into Reality
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-gray-400 text-lg lg:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                From web development to AI solutions – end-to-end digital services from a leading software house in Islamabad.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/contact" className="w-full sm:w-auto bg-cyan-500 text-[#0a192f] px-8 py-3.5 rounded-full font-bold text-lg hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <FaRocket /> Get a Quote
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto border-2 border-gray-600 text-gray-300 px-8 py-3.5 rounded-full font-bold text-lg hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2">
                  View Our Work
                </Link>
              </motion.div>
            </div>

            <motion.div 
              className="relative hidden lg:flex items-center justify-center h-[350px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full h-full">
                <motion.div 
                  className="absolute top-0 left-0 bg-[#112240] p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 text-2xl">
                    <FaReact />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Web Development</p>
                    <p className="text-gray-500 text-xs">React, Next.js, Node.js</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute top-8 right-0 bg-[#112240] p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-2xl">
                    <FaMobileAlt />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Mobile Apps</p>
                    <p className="text-gray-500 text-xs">Flutter, React Native</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute bottom-20 left-4 bg-[#112240] p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 text-2xl">
                    <FaRobot />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">AI Solutions</p>
                    <p className="text-gray-500 text-xs">Python, TensorFlow</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute bottom-8 right-8 bg-[#112240] p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400 text-2xl">
                    <FaFigma />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">UI/UX Design</p>
                    <p className="text-gray-500 text-xs">Figma, Adobe XD</p>
                  </div>
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            What We <span className="text-cyan-400">Offer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
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
            transition={{ duration: 0.6 }}
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Scale Up?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              Don't settle for average. Your business deserves a high-end digital ecosystem. 
              Whether it's a fresh idea or a complex system, we provide the expertise to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(34, 211, 238, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 text-[#0a192f] px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all"
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)", color: "#fff" }}
                  className="text-gray-400 px-8 py-4 rounded-xl font-bold border border-gray-700 transition-all"
                >
                  See Our Work
                </motion.button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Consultation is free of cost
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
