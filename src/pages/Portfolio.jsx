import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes, FaRocket, FaCheckCircle, FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData'; 

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filtering Logic
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#0a192f] text-white min-h-screen pt-10 overflow-hidden">
      
      {/* --- 1. HERO HEADER (Seamless with Navbar) --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110 animate-slow-zoom"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600')` }}
        >
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-6 backdrop-blur-md"
          >
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">Precision & Excellence</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white leading-tight drop-shadow-2xl"
          >
            Digital Success <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase">Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Explore our curated gallery of high-impact solutions, where we transform complex business visions into scalable digital realities.
          </motion.p>
        </div>
      </section>

      {/* --- 2. FILTER TABS (Refined Spacing) --- */}
      <div className="py-16 md:py-24 flex flex-wrap justify-center gap-4 px-4 bg-[#0a192f] relative z-20">
        {['All', 'Web', 'App', 'Design'].map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveFilter(tab)}
            className={`px-10 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 border-2 ${
              activeFilter === tab 
              ? 'bg-cyan-500 border-cyan-500 text-[#0a192f] shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-105' 
              : 'border-gray-800 text-gray-500 hover:border-cyan-400 hover:text-cyan-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- 3. PROJECT GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer border border-gray-800/50 shadow-2xl"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Component */}
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110" />
                
                {/* High-End Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/20 to-transparent opacity-90 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-cyan-400 font-black text-xs uppercase tracking-[0.2em] mb-2">{project.category}</p>
                    <h3 className="text-3xl font-black text-white mb-6 leading-tight">{project.title}</h3>
                    <button className="bg-white text-[#0a192f] px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                      View Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- 4. PORTFOLIO CTA --- */}
      <section className="py-24 px-6 bg-[#112240]/30 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#112240] to-[#0a192f] backdrop-blur-xl border border-gray-700/50 rounded-[3rem] p-12 md:p-20 text-center shadow-3xl overflow-hidden"
          >
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="w-20 h-20 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-10 border border-cyan-500/20"><FaRocket /></div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1]">Your Vision, <br /> Our <span className="text-cyan-400">Execution.</span></h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              Ready to see your project featured here? Let's collaborate to build something that sets you apart from the competition.
            </p>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(34, 211, 238, 0.3)" }}
                className="bg-cyan-500 text-[#0a192f] px-12 py-5 rounded-2xl font-black text-xl shadow-lg transition-all"
              >
                Let's Talk Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- 5. IMMERSIVE CASE STUDY MODAL (FINAL FIXED) --- */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 100, opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#112240] w-full max-w-6xl h-[90vh] rounded-[3rem] border border-gray-700 shadow-4xl relative overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-6 right-6 text-white bg-gray-800/60 p-4 rounded-full text-2xl hover:text-cyan-400 hover:bg-white transition-all z-[120]"
        >
          <FaTimes />
        </button>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full">

          {/* LEFT IMAGE (FIXED) */}
          <div className="lg:col-span-5 sticky top-0 h-[300px] lg:h-full flex items-center justify-center bg-black">
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="max-w-full max-h-full object-contain object-center"
            />
          </div>

          {/* RIGHT CONTENT (SCROLLABLE) */}
          <div className="lg:col-span-7 overflow-y-auto p-8 md:p-16 space-y-10">

            {/* Header */}
            <div className="space-y-4">
              <span className="flex items-center gap-2 text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">
                {selectedProject.category === "Web" ? (
                  <FaLaptopCode />
                ) : selectedProject.category === "App" ? (
                  <FaMobileAlt />
                ) : (
                  <FaPalette />
                )}
                Project Detail
              </span>

              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {selectedProject.title}
              </h2>

              <p className="text-gray-400 font-bold text-lg">
                {selectedProject.client}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-5 py-2 bg-gray-800/50 text-gray-300 rounded-xl text-xs font-bold border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  The Challenge
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Our Solution
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-10 flex flex-col sm:flex-row gap-6">
              <a 
  href={selectedProject.link.startsWith('http') ? selectedProject.link : `https://${selectedProject.link}`} 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-4 bg-cyan-500 text-[#0a192f] px-10 py-4 rounded-2xl font-black text-lg hover:bg-white transition-all shadow-xl shadow-cyan-500/10"
>
  Visit Live Site <FaExternalLinkAlt />
</a>

              <Link
                to="/contact"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center justify-center gap-4 bg-gray-800 text-white px-10 py-4 rounded-2xl font-black text-lg border border-gray-700 hover:bg-gray-700 transition-all"
              >
                Request Similar Project
              </Link>
            </div>

            {/* Footer */}
            <div className="pt-8 flex items-center gap-3 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <FaCheckCircle className="text-green-500 text-lg" />
              Delivered on time & within budget
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default Portfolio;