import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, FaUserAlt, FaArrowLeft, FaTag, 
  FaLinkedin, FaTwitter, FaFacebook, FaRocket 
} from 'react-icons/fa';
import { blogData } from '../data/blogData';

const BlogDetail = () => {
  const shareUrl = encodeURIComponent(window.location.href); // Current page link
const blogTitle = encodeURIComponent(blogData.title); // Blog ka title

// LinkedIn Share Link
const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

// Facebook Share Link
const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

// Twitter (X) Share Link (Extra Suggestion)
const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${blogTitle}`;
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  // Agar blog na miley
  if (!blog) {
    return (
      <div className="bg-[#0a192f] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-cyan-400 hover:underline">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  // Sidebar ke liye doosre blogs
  const recentPosts = blogData.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <div className="bg-[#0a192f] text-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- BREADCRUMBS & BACK BUTTON --- */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-bold uppercase text-xs tracking-widest">
            <FaArrowLeft /> Back to Insights
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- LEFT SIDE: MAIN CONTENT (2 Columns) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-cyan-500/20">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-500 text-sm font-bold uppercase tracking-tighter">
                <span className="flex items-center gap-2"><FaCalendarAlt className="text-cyan-400" /> {blog.date}</span>
                <span className="flex items-center gap-2"><FaUserAlt className="text-cyan-400" /> {blog.author}</span>
              </div>
            </div>

            {/* Optimized Featured Image */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-800 h-[300px] md:h-[450px]">
              <img 
                src={blog.img} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="text-gray-300 text-lg leading-relaxed space-y-6 font-medium">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-cyan-400 first-letter:mr-3 first-letter:float-left">
                {blog.content}
              </p>
              
              {/* Additional Filler Content for Length */}
              <p>
                In today's fast-paced digital world, staying competitive requires more than just following trends; it demands a strategic approach to technology. At New Tech Softs, we emphasize the importance of building systems that are not only functional today but scalable for the challenges of tomorrow. 
              </p>
              
              <blockquote className="border-l-4 border-cyan-500 bg-[#112240] p-8 rounded-2xl italic text-white text-xl font-semibold">
                "Innovation is the ability to see change as an opportunity, not a threat. Our mission is to lead that change."
              </blockquote>

              <p>
                Whether you are a startup looking to make your mark or an established enterprise seeking digital transformation, the principles discussed in this article serve as a roadmap for sustainable growth. We continue to explore new frontiers in MERN stack, AI integration, and mobile excellence to bring our clients the best the industry has to offer.
              </p>
            </div>

            {/* Social Share Section */}
<div className="pt-10 border-t border-gray-800 flex items-center gap-6">
  <span className="text-sm font-bold uppercase text-gray-500">Share this:</span>
  <div className="flex gap-4">
    {/* LinkedIn */}
    <SocialShareIcon 
      icon={<FaLinkedin />} 
      link={linkedinShareUrl} 
      colorClass="hover:text-[#0077b5]" 
    />
    
    {/* Facebook */}
    <SocialShareIcon 
      icon={<FaFacebook />} 
      link={facebookShareUrl} 
      colorClass="hover:text-[#1877f2]" 
    />

    {/* Twitter/X */}
    <SocialShareIcon 
      icon={<FaTwitter />} 
      link={twitterShareUrl} 
      colorClass="hover:text-[#1da1f2]" 
    />
  </div>
</div>
          </motion.div>

          {/* --- RIGHT SIDE: SIDEBAR (1 Column) --- */}
          <aside className="space-y-10">
            
            {/* Widget 1: Search (Visual Only) */}
            <div className="bg-[#112240] p-8 rounded-[2rem] border border-gray-800">
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-4">Search Articles</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Keyword..." 
                  className="w-full bg-[#0a192f] border border-gray-700 rounded-xl px-4 py-3 text-sm focus:border-cyan-400 outline-none"
                />
              </div>
            </div>

            {/* Widget 2: Popular Posts (Ads Style) */}
            <div className="bg-[#112240] p-8 rounded-[2rem] border border-gray-800">
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-6">Recent Insights</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-300 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 3: Newsletter / CTA Ad */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <FaRocket className="absolute -bottom-4 -right-4 text-8xl text-white/10 group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">Have a Project in Mind?</h3>
              <p className="text-white/80 text-sm mb-6 relative z-10">
                Let's turn these insights into a real product for your business.
              </p>
              <Link to="/contact">
                <button className="w-full bg-white text-blue-700 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-gray-100 transition-all relative z-10">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Widget 4: Categories */}
            <div className="bg-[#112240] p-8 rounded-[2rem] border border-gray-800">
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {['Web Dev', 'Mobile', 'AI', 'Cloud', 'Marketing'].map(cat => (
                  <span key={cat} className="px-3 py-1 bg-[#0a192f] text-gray-400 text-xs font-bold rounded-lg border border-gray-700 hover:text-cyan-400 cursor-pointer transition">
                    #{cat}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};

// Sub-component for Social Icons
const SocialShareIcon = ({ icon, link, colorClass }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`text-gray-500 ${colorClass} text-2xl transition-all hover:scale-125`}
  >
    {icon}
  </a>
);

export default BlogDetail;