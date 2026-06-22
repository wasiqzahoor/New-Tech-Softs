import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaLaptopCode, FaDesktop, FaRobot, FaTools, FaCode, FaCheckCircle, FaCalendar, FaUser, FaClock, FaLayerGroup, FaRocket } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="text-white min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio" className="text-cyan-400 hover:underline font-bold">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

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

  // Get related projects
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="text-white min-h-screen pt-32 pb-20">
      <Helmet>
        <title>{project.title} | New Tech Softs - Case Study</title>
        <meta name="description" content={project.description || `${project.title} - A case study by New Tech Softs, a leading software house in Islamabad. View the technologies, features, and results.`} />
        <meta name="keywords" content={`${project.title}, ${project.category || 'software'}, case study, New Tech Softs, software house Islamabad, web development`} />
        <meta name="author" content="New Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://newtechsofts.com/project/${project.slug}`} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://newtechsofts.com/project/${project.slug}`} />
        <meta property="og:title" content={`${project.title} | New Tech Softs`} />
        <meta property="og:description" content={project.description || `${project.title} - Case study by New Tech Softs.`} />
        <meta property="og:image" content={project.image || 'https://newtechsofts.com/logo.png'} />
        <meta property="og:site_name" content="New Tech Softs" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://newtechsofts.com/project/${project.slug}`} />
        <meta name="twitter:title" content={`${project.title} | New Tech Softs`} />
        <meta name="twitter:description" content={project.description || `${project.title} - Case study by New Tech Softs.`} />
        <meta name="twitter:image" content={project.image || 'https://newtechsofts.com/logo.png'} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description || `${project.title} - Case study by New Tech Softs.`,
            "image": project.image || 'https://newtechsofts.com/logo.png',
            "author": { "@type": "Organization", "name": "New Tech Softs" },
            "url": `https://newtechsofts.com/project/${project.slug}`
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- BACK BUTTON --- */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-bold uppercase text-xs tracking-widest"
          >
            <FaArrowLeft /> Back to Portfolio
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* --- LEFT SIDE: MAIN CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-cyan-500/20 flex items-center gap-2">
                  {getCategoryIcon(project.category)}
                  {project.category}
                </span>
                {project.featured && (
                  <span className="bg-yellow-500/10 text-yellow-400 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-500/20">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm font-bold uppercase tracking-tighter">
                <span className="flex items-center gap-2"><FaCalendar className="text-cyan-400" /> {project.year}</span>
                <span className="flex items-center gap-2"><FaUser className="text-cyan-400" /> {project.client}</span>
                <span className="flex items-center gap-2"><FaClock className="text-cyan-400" /> {project.duration}</span>
                <span className="flex items-center gap-2"><FaLayerGroup className="text-cyan-400" /> {project.role}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-800">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1200x600?text=Project+Image';
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              {project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '/' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0a192f] px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20"
                >
                  <FaExternalLinkAlt /> Visit Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#112240] hover:bg-gray-800 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-xs sm:text-sm transition-all border border-gray-700 hover:border-cyan-500/30"
                >
                  <FaGithub /> View Source Code
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-gray-800 text-gray-400 hover:text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm transition-all border border-gray-700"
              >
                Start Similar Project
              </Link>
            </div>

            {/* Project Overview */}
            <div className="bg-[#112240] rounded-[2rem] p-8 border border-gray-800">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center">
                  <FaLaptopCode />
                </span>
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="bg-[#112240] rounded-[2rem] p-8 border border-gray-800">
              <h2 className="text-2xl font-black text-white mb-8">Challenge & Solution</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-3">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    The Challenge
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-6">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    Our Solution
                  </h3>
                  <p className="text-gray-300 leading-relaxed pl-6">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-[#112240] rounded-[2rem] p-8 border border-gray-800">
              <h2 className="text-2xl font-black text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#0a192f] rounded-xl border border-gray-700/50">
                    <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results & Impact */}
            <div className="bg-[#112240] rounded-[2rem] p-8 border border-gray-800">
              <h2 className="text-2xl font-black text-white mb-6">Results & Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((result, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-[#112240] rounded-[2rem] p-8 border border-gray-800">
              <h2 className="text-2xl font-black text-white mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    className="px-5 py-2.5 bg-[#0a192f] text-cyan-400 rounded-xl text-sm font-bold border border-gray-700/50 hover:border-cyan-500/50 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="pt-8 border-t border-gray-800">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold uppercase text-gray-500">Share this project:</span>
                <div className="flex gap-4">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#0077b5] text-xl transition-all hover:scale-125"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(project.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#1da1f2] text-xl transition-all hover:scale-125"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* --- RIGHT SIDE: SIDEBAR --- */}
          <aside className="space-y-6">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <FaRocket className="absolute -bottom-4 -right-4 text-8xl text-white/10 group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">Have a Similar Project?</h3>
              <p className="text-white/80 text-sm mb-6 relative z-10">
                Let's discuss how we can build something amazing for you with the same technology stack.
              </p>
              <Link to="/contact">
                <button className="w-full bg-white text-blue-700 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-gray-100 transition-all relative z-10">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Project Info Card */}
            <div className="bg-[#112240] p-8 rounded-[2rem] border border-gray-800">
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-6">Project Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-500 text-sm">Category</span>
                  <span className="text-white font-bold text-sm">{project.category}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-500 text-sm">Year</span>
                  <span className="text-white font-bold text-sm">{project.year}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-500 text-sm">Duration</span>
                  <span className="text-white font-bold text-sm">{project.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-500 text-sm">Client</span>
                  <span className="text-white font-bold text-sm text-right">{project.client}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <span className="text-gray-500 text-sm">Technologies</span>
                  <span className="text-white font-bold text-sm">{project.tags.length} Used</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-500 text-sm">Status</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-bold border border-green-500/30">Completed</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-[#112240] p-8 rounded-[2rem] border border-gray-800">
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-6">Quick Links</h3>
              <div className="space-y-3">
                {project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '/' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    <FaExternalLinkAlt className="text-cyan-400" /> Visit Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    <FaGithub className="text-cyan-400" /> View Source Code
                  </a>
                )}
                <Link
                  to="/contact"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                >
                  <FaRocket className="text-cyan-400" /> Start Similar Project
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* --- RELATED PROJECTS --- */}
      {relatedProjects.length > 0 && (
        <section className="py-20 mt-12 bg-[#112240] border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white mb-10 text-center">
              More <span className="text-cyan-400">{project.category}</span> Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.id}
                  to={`/project/${relProject.slug}`}
                  className="group bg-[#0a192f] rounded-[2rem] overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relProject.img}
                      alt={relProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200?text=Project';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {relProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {relProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Want a Similar{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Project?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how we can build something amazing for you with the same technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(34, 211, 238, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 text-[#0a192f] px-10 py-4 rounded-2xl font-black text-lg shadow-lg"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-2xl font-bold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all"
                >
                  View All Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
