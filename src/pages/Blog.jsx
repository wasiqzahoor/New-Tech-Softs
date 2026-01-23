import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight, FaUserAlt,FaRocket, FaTag } from 'react-icons/fa';
import { blogData } from '../data/blogData';

const Blog = () => {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen pt-16 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="text-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
        >
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Latest News</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black mb-6 tracking-tight"
        >
          Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Innovation</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore the world of technology through our expert-written articles on web development, mobile apps, and digital strategies.
        </p>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {blogData.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#112240] rounded-[2.5rem] border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group shadow-2xl"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={blog.img} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute bottom-6 left-6 flex gap-2">
                  <span className="bg-cyan-500 text-[#0a192f] px-4 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-2">
                    <FaTag /> {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-10 space-y-5">
                <div className="flex items-center gap-8 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                  <span className="flex items-center gap-2"><FaCalendarAlt className="text-cyan-400" /> {blog.date}</span>
                  <span className="flex items-center gap-2"><FaUserAlt className="text-cyan-400" /> {blog.author}</span>
                </div>

                <h3 className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors leading-tight">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="pt-6">
                  <Link to={`/blog/${blog.id}`}>
                    <button className="flex items-center gap-3 text-cyan-400 font-black uppercase tracking-widest text-sm group-hover:gap-5 transition-all">
                      Read Full Article <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
{/* Widget 3: Newsletter / CTA Ad */}
<section className='pt-10 '>
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <FaRocket className="absolute -bottom-4 -right-4 text-8xl text-white/10 group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-4 relative z-10 text-center">Have a Project in Mind?</h3>
              <p className="text-white/80 text-sm mb-6 relative z-10 text-center">
                Let's turn these insights into a real product for your business.
              </p>
              <Link to="/contact">
                <button className="w-full bg-white text-blue-700 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-gray-100 transition-all relative z-10">
                  Get Started
                </button>
              </Link>
            </div>
            </section>

    </div>
  );
};

export default Blog;