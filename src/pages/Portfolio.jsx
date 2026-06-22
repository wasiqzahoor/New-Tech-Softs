import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaStar, FaClock, FaLaptopCode, FaDesktop, FaRobot, FaTools, FaCode, FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projects, PROJECT_CATEGORIES } from '../data/portfolioData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const stats = [
    { value: "21+", label: "Projects Delivered" },
    { value: "15+", label: "Happy Clients" },
    { value: "98%", label: "On-Time Delivery" },
    { value: "100%", label: "Satisfaction" },
  ];

  // Animation Variants
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack': return <FaLaptopCode />;
      case 'Web Apps': return <FaLaptopCode />;
      case 'AI Tools': return <FaRobot />;
      case 'Utilities': return <FaTools />;
      case 'Desktop': return <FaDesktop />;
      case 'Developer Tools': return <FaCode />;
      default: return <FaLaptopCode />;
    }
  };

  return (
    <div className="min-h-screen">

      {/* --- SEO META TAGS --- */}
      <Helmet>
        <title>Portfolio & Case Studies | New Tech Softs - Software House in Islamabad</title>
        <meta name="description" content="Explore 21+ successful projects by New Tech Softs - a leading software house in Islamabad. View our portfolio of web apps, AI tools, desktop applications, and full-stack solutions delivered to clients worldwide." />
        <meta name="keywords" content="portfolio, case studies, web development, AI tools, software house Islamabad, MERN stack, React, Next.js, Python, machine learning, custom software, New Tech Softs, project showcase" />
        <meta name="author" content="New Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newtechsofts.com/portfolio" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newtechsofts.com/portfolio" />
        <meta property="og:title" content="Portfolio & Case Studies | New Tech Softs" />
        <meta property="og:description" content="Explore 21+ successful projects by New Tech Softs. View our portfolio of web apps, AI tools, desktop applications, and full-stack solutions." />
        <meta property="og:image" content="https://newtechsofts.com/logo.png" />
        <meta property="og:site_name" content="New Tech Softs" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newtechsofts.com/portfolio" />
        <meta name="twitter:title" content="Portfolio & Case Studies | New Tech Softs" />
        <meta name="twitter:description" content="Explore 21+ successful projects by New Tech Softs. View our portfolio of web apps, AI tools, desktop applications, and full-stack solutions." />
        <meta name="twitter:image" content="https://newtechsofts.com/logo.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio & Case Studies | New Tech Softs",
            "description": "Explore 21+ successful projects by New Tech Softs - a leading software house in Islamabad specializing in web apps, AI tools, and custom software solutions.",
            "url": "https://newtechsofts.com/portfolio",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": projects.length,
              "itemListElement": projects.slice(0, 10).map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "SoftwareApplication",
                  "name": project.title,
                  "description": project.description,
                  "applicationCategory": project.category,
                  "operatingSystem": "Web-based",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                }
              }))
            },
            "publisher": {
              "@type": "Organization",
              "name": "New Tech Softs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://newtechsofts.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
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
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"Our Portfolio".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
              </motion.div>

              {/* Main Heading - Word by Word Animation */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"Showcasing".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
                <motion.span 
                  variants={wordVariants}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                  Digital Excellence
                </motion.span>
              </motion.h1>

              {/* Short Description */}
              <motion.p 
                className="text-gray-400 text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                21+ successful projects delivered worldwide. From web apps to AI solutions – explore our work as a top software house in Islamabad.
              </motion.p>
              
              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                <a href="#projects" className="w-full sm:w-auto bg-cyan-500 text-[#0a192f] px-8 py-3.5 rounded-full font-bold text-lg hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  View Projects
                </a>
                <Link to="/contact">
                  <button className="w-full sm:w-auto border-2 border-gray-600 text-gray-300 px-8 py-3.5 rounded-full font-bold text-lg hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2">
                    Get a Quote
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Visual - Floating Project Cards */}
            <motion.div 
              className="relative hidden lg:flex items-center justify-center h-[380px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full h-full">
                
                {/* Card 1 - Web App */}
                <motion.div 
                  className="absolute top-0 left-0 bg-[#112240]/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100" alt="Web" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">E-Commerce Platform</p>
                    <p className="text-gray-500 text-xs">React, Node.js, Stripe</p>
                  </div>
                </motion.div>

                {/* Card 2 - Mobile App */}
                <motion.div 
                  className="absolute top-8 right-0 bg-[#112240]/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100" alt="App" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Fitness Tracking App</p>
                    <p className="text-gray-500 text-xs">Flutter, Firebase</p>
                  </div>
                </motion.div>

                {/* Card 3 - AI Project */}
                <motion.div 
                  className="absolute bottom-20 left-4 bg-[#112240]/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100" alt="AI" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">AI Chatbot System</p>
                    <p className="text-gray-500 text-xs">Python, OpenAI, RAG</p>
                  </div>
                </motion.div>

                {/* Card 4 - SaaS Dashboard */}
                <motion.div 
                  className="absolute bottom-8 right-8 bg-[#112240]/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100" alt="SaaS" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">SaaS Dashboard</p>
                    <p className="text-gray-500 text-xs">Next.js, PostgreSQL</p>
                  </div>
                </motion.div>

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FILTER TABS --- */}
      <div className="py-8 border-y border-gray-700/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-cyan-500 text-[#0a192f] shadow-lg shadow-cyan-500/30'
                    : 'text-gray-400 border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- PROJECT GRID --- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-gray-500 text-sm font-semibold uppercase tracking-wider"
          >
            Showing <span className="text-cyan-400">{filteredProjects.length}</span> projects
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group h-[420px]"
                >
                  <Link to={`/project/${project.slug}`} className="block h-full">
                    <div className="bg-[#112240] rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                      {/* Image Container - Fixed Height */}
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                          }}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent opacity-60"></div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-[#0a192f]/90 backdrop-blur-sm text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 border border-gray-700/50">
                            {getCategoryIcon(project.category)}
                            {project.category}
                          </span>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1.5 bg-cyan-500 text-[#0a192f] text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-1">
                              <FaStar /> Featured
                            </span>
                          </div>
                        )}

                        {/* View Button */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <div className="bg-cyan-500 text-[#0a192f] px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg">
                            View Case Study <FaArrowRight />
                          </div>
                        </div>
                      </div>

                      {/* Content - Fixed Height with Truncation */}
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-2">
                          <FaClock className="text-cyan-500" />
                          <span>{project.year}</span>
                          <span className="text-gray-600">•</span>
                          <span className="truncate">{project.client}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#0a192f] text-gray-400 rounded-lg text-xs font-medium border border-gray-700/50 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-3 py-1 bg-[#0a192f] text-gray-400 rounded-lg text-xs font-medium border border-gray-700/50">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Ready to start your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Digital Project?
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              New Tech Softs specializes in MERN stack development, custom mobile applications, and comprehensive digital solutions. Let's transform your vision into reality.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(34, 211, 238, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 text-[#0a192f] px-12 py-5 rounded-2xl font-black text-xl shadow-lg transition-all"
              >
                Contact Our Experts →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
