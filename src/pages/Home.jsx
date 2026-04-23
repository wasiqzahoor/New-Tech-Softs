import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaLaptopCode, FaMobileAlt, FaReact, FaNodeJs, FaPython, FaCheckCircle, FaAndroid, FaVuejs, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaJava, FaSwift, FaAws, FaDocker, FaGitAlt,FaClock, FaGem, FaHeadset } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiMysql, SiFirebase, SiNextdotjs, SiTailwindcss, SiDjango, SiPostgresql } from 'react-icons/si';
import { motion,AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Reviews from '../components/Reviews';
import { blogData } from '../data/blogData';
import HowWeWork from '../components/HowWeWork';
import FAQs from '../components/FAQs';
// --- ANIMATION VARIANTS (Settings) ---
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
    transition: { type: "spring", stiffness: 120, damping: 10, delay: 1.5 } // Delay taake text ke baad girein
  }
};


const Home = () => {
  //Home component ke top par state add karein:
const [isModalOpen, setIsModalOpen] = useState(false);
  const projectImages = [
    'https://res.cloudinary.com/dwhj8qfca/image/upload/v1776867745/SS1_gyr3jr.png',
    'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1776867745/SS2_rqihi6.png',
    'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1776867746/SS3_bhi1nj.png',
    'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1776867746/SS4_pdxz4x.png',
    'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/v1776867746/SS5_i3i0vz.png',
  ];

  const [currentImg, setCurrentImg] = useState(0);

  // Auto-Slide Logic for Featured Project
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [projectImages.length]);
   // --- 2. ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
    }
  };
   // Typewriter Variants for Featured Project
  const sentence = " Struggling with system lag and frame drops? Our team developed BigLou's Optimizer to provide the ultimate PC performance boost. This advanced system utility is tailored to eliminate bottlenecks by lowering input latency and optimizing RAM and CPU allocation. Whether you're a competitive gamer or a power user, BigLou’s Optimizer fine-tunes your Windows OS, delivering the high-FPS, responsive, and seamless experience your setup deserves.";
  const words = sentence.split("");

  const typewriterContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };

  const typewriterChild = {
    visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, x: -10 },
  };
 
  return (
    
    <div className="bg-gray-50 overflow-hidden">
       <Helmet>
  <title>Best Software House in Islamabad | New Tech Softs</title>
  <meta name="description" content="Looking for the top software house in Islamabad? New Tech Softs delivers custom web apps, professional web development, and digital solutions. Partner with a leading startup company today!" />
{/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareBusiness",
      "name": "New Tech Softs",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Islamabad",
        "addressCountry": "PK"
      },
      "logo": "https://www.newtechsofts.com/logo.png", // Update this URL
    "image": "https://www.newtechsofts.com/logo.png",
      "url": "https://www.newtechsofts.com/",
      "description": "Professional software house in Islamabad specializing in custom web apps and digital solutions."
    })}
  </script>
</Helmet>
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#0a192f] text-white pt-32 pb-20 lg:pt-32 lg:pb-20 overflow-hidden">
        
        {/* Background Animation (Abstract Blobs) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              
              {/* 1. WELCOME TEXT (Typewriter Style) */}
              <motion.div 
                className="text-cyan-400 font-bold tracking-widest uppercase text-base lg:text-lg mb-4 flex flex-wrap justify-center lg:justify-start gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"Welcome To New Tech Softs".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
              </motion.div>

              {/* 2. MAIN HEADLINE (Typewriter Style) */}
              <motion.h1 
                className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Static part */}
                {"Turning Your Ideas Into".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
                {/* Gradient part */}
                <motion.span 
                  variants={wordVariants}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                  Digital Reality
                </motion.span>
              </motion.h1>

              {/* 3. PARAGRAPH (Fade In Line) */}
              <motion.p 
                className="text-gray-400 text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                We build scalable Websites, Mobile Apps, and Custom Software Solutions tailored for modern businesses. Your vision, our code.
              </motion.p>
              
              {/* 4. BUTTONS (Falling Animation) */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/contact">
                  <button className="w-full sm:w-auto bg-cyan-500 text-[#0a192f] px-8 py-3.5 rounded-full font-bold text-lg hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <FaRocket /> Get a Quote
                  </button>
                </Link>
                <Link to="/portfolio">
                  <button className="w-full sm:w-auto border-2 border-gray-600 text-gray-300 px-8 py-3.5 rounded-full font-bold text-lg hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2">
                    <FaCode /> View Our Portfolio
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Visual (Sliding In) */}
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Main Card */}
              <div className="relative bg-[#112240] p-8 rounded-2xl border border-gray-700 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3 font-mono text-sm group-hover:scale-105 transition duration-300">
                  <p className="text-cyan-400">const <span className="text-yellow-400">NewTech</span> = {"{"}</p>
                  <p className="pl-4 text-white">mission: <span className="text-green-400">'Innovate'</span>,</p>
                  <p className="pl-4 text-white">services: [<span className="text-green-400">'Web'</span>, <span className="text-green-400">'App'</span>, <span className="text-green-400">'AI'</span>],</p>
                  <p className="pl-4 text-white">status: <span className="text-blue-400">true</span></p>
                  <p className="text-cyan-400">{"}"};</p>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Projects Completed</p>
                    <p className="text-lg font-bold text-gray-800">100+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK STRIP (Infinite Slider) --- */}
<div className="bg-[#112240] py-10 border-b border-gray-800 overflow-hidden relative">
  <div className="max-w-7xl mx-auto px-4 mb-8">
    <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest">
      Technologies We Master
    </p>
  </div>

  {/* Slider Container */}
  <div className="relative w-full overflow-hidden">
    {/* Left Gradient Fade (Smooth edges ke liye) */}
    <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#112240] to-transparent z-10"></div>
    {/* Right Gradient Fade */}
    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#112240] to-transparent z-10"></div>

    {/* Moving Track */}
    <div className="flex gap-12 w-max animate-infinite-scroll hover:[animation-play-state:paused]">
      {/* Duplicate list twice for seamless loop */}
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-12 items-center">
          {/* Frontend */}
          <TechIcon icon={<FaReact />} color="text-cyan-400" name="React" />
          <TechIcon icon={<SiNextdotjs />} color="text-white" name="Next.js" />
          <TechIcon icon={<FaVuejs />} color="text-green-500" name="Vue.js" />
          <TechIcon icon={<SiTailwindcss />} color="text-cyan-300" name="Tailwind" />
          <TechIcon icon={<FaHtml5 />} color="text-orange-500" name="HTML5" />
          <TechIcon icon={<FaCss3Alt />} color="text-blue-500" name="CSS3" />
          <TechIcon icon={<FaJsSquare />} color="text-yellow-400" name="JavaScript" />
          
          {/* Backend */}
          <TechIcon icon={<FaNodeJs />} color="text-green-500" name="Node.js" />
          <TechIcon icon={<FaPhp />} color="text-purple-400" name="PHP" />
          <TechIcon icon={<FaPython />} color="text-yellow-300" name="Python" />
          <TechIcon icon={<FaJava />} color="text-red-500" name="Java" />
          <TechIcon icon={<SiDjango />} color="text-green-800" name="Django" />

          {/* Database */}
          <TechIcon icon={<SiMongodb />} color="text-green-400" name="MongoDB" />
          <TechIcon icon={<SiMysql />} color="text-blue-500" name="MySQL" />
          <TechIcon icon={<SiPostgresql />} color="text-blue-300" name="PostgreSQL" />
          <TechIcon icon={<SiFirebase />} color="text-yellow-500" name="Firebase" />

          {/* Mobile & Tools */}
          <TechIcon icon={<SiFlutter />} color="text-blue-400" name="Flutter" />
          <TechIcon icon={<FaAndroid />} color="text-green-500" name="Android" />
          <TechIcon icon={<FaSwift />} color="text-orange-500" name="Swift" />
          <TechIcon icon={<FaAws />} color="text-orange-400" name="AWS" />
          <TechIcon icon={<FaDocker />} color="text-blue-500" name="Docker" />
          <TechIcon icon={<FaGitAlt />} color="text-red-500" name="Git" />
        </div>
      ))}
    </div>
  </div>
</div>
{/* --- WHY CHOOSE US SECTION --- */}

<section className="py-24 bg-[#0d2b45] relative overflow-hidden">
  
  {/* Background Pattern */}
  <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
    <svg width="400" height="400" viewBox="0 0 100 100" className="fill-current text-cyan-500">
      <circle cx="80" cy="20" r="30" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* SEO-Friendly Heading */}
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
      >
        Why Partner with <span className="text-cyan-400">New Tech Softs?</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg"
      >
        As a leading software house in Islamabad, we bridge the gap between complex technology and business goals.
      </motion.p>
    </div>

    {/* Cards Grid with Optimized Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1: Fast Delivery (Agile Focused) */}
      <FeatureCard 
        icon={<FaClock />} 
        title="Agile Delivery" 
        desc="We prioritize speed and transparency. Our agile development methodology ensures your custom software projects are delivered on time without compromising quality."
        delay={0}
      />

      {/* Card 2: Premium Quality (Architecture Focused) */}
      <FeatureCard 
        icon={<FaGem />} 
        title="Scalable Architecture" 
        desc="Our developers build secure, clean-code software solutions designed to scale alongside your business growth, ensuring long-term performance and reliability."
        delay={0.2}
      />

      {/* Card 3: 24/7 Support (Client Focused) */}
      <FeatureCard 
        icon={<FaHeadset />} 
        title="Dedicated Expert Support" 
        desc="Your success is our priority. We offer 24/7 maintenance and technical support to keep your digital infrastructure running efficiently and uninterrupted."
        delay={0.4}
      />

    </div>
  </div>
</section>
      {/* --- SERVICES PREVIEW (Cards) --- */}
<section className="py-24 bg-[#1a3c5a] relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* SEO-Friendly Heading */}
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
      >
        Our Premium <span className="text-cyan-400">Services & Expertise</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
      >
        As a leading software house, we deliver end-to-end digital business solutions tailored to scale your operations in the modern competitive economy.
      </motion.p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* 1. Web Development */}
      <ServiceCard 
        icon={<FaLaptopCode />} 
        title="Web Development Services"
        tagline="Robust Digital Foundations" 
        desc="We architect robust, scalable, and high-performance web applications using modern technologies like MERN Stack and Next.js, ensuring your business stays ahead."
        direction="left"
        delay={0.1}
      />

      {/* 2. App Development */}
      <ServiceCard 
        icon={<FaMobileAlt />} 
        title="Mobile App Development" 
        tagline="Mobile-First Innovation"
        desc="We build custom native and cross-platform mobile apps (Flutter/React Native) that deliver seamless, intuitive user experiences for both iOS and Android."
        direction="up"
        delay={0.3}
      />

      {/* 3. Digital Transformation */}
      <ServiceCard 
        icon={<FaRocket />} 
        title="Digital Transformation" 
        tagline="Scale Beyond Limits"
        desc="Unlock growth with comprehensive digital strategies, expert UI/UX design, professional SEO, and secure Cloud Integration to modernize your enterprise."
        direction="right"
        delay={0.5}
      />
    </div>
    
    {/* CTA Button */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="mt-20 text-center"
    >
      <Link to="/services">
        <button className="group relative bg-transparent border-2 border-cyan-500 text-cyan-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-500 hover:text-[#0a192f] transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 flex items-center gap-3 mx-auto">
          Explore All Our Development Services
          <span className="transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
        </button>
      </Link>
    </motion.div>
  </div>
</section>
    {/* --- Featured Projects --- */}
  <section className="py-24 bg-[#214769] overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
      >
        Innovation in <span className="text-cyan-400">Action</span>
      </motion.h2>
       <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Take a look at how we transform complex business challenges into intuitive digital success stories.
            </motion.p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Image Slider */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-4 border-cyan-500/20 shadow-2xl">
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentImg}
            src={projectImages[currentImg]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-contain"
            alt="Custom Web App Development by New Tech Softs in Islamabad"
          />
        </AnimatePresence>
      </div>

      {/* Right: Content */}
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2">Success Story</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            BigLou's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Optimizer</span>
          </h2>
        </motion.div>
        <motion.div variants={typewriterContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-200 text-lg leading-relaxed max-w-xl min-h-[80px]">
            {words.map((char, index) => (
              <motion.span key={index} variants={typewriterChild}>{char}</motion.span>
            ))}
          </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-cyan-500 text-[#0a192f] px-10 py-4 rounded-xl font-black text-lg hover:shadow-[0px_0px_20px_rgba(34,211,238,0.4)] transition-all"
          >
            View Detailed Case Study →
          </button>
        </motion.div>
      </div>
    </div>
  </div>

  {/* Modal Popup */}
  <AnimatePresence>
    {isModalOpen && (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-[#112240] p-8 rounded-3xl max-w-3xl w-full border border-cyan-500/50 shadow-2xl relative"
          initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
        >
          <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-6 text-white text-3xl">&times;</button>
          <h2 className="text-3xl font-bold text-white mb-6">BigLou's Optimizer: In-Depth</h2>
          <div className="text-gray-300 space-y-4 max-h-[60vh] overflow-y-auto pr-4">
            <p>BigLou's Optimizer is a complete system overhaul utility developed by New Tech Softs. Our solution addresses core Windows bottlenecks that impact competitive gaming.</p>
            <p><strong>Technical Highlights:</strong></p>
            <ul className="list-disc pl-5">
              <li>Deep kernel-level tweaks for reduced input lag.</li>
              <li>Aggressive process management to free up RAM.</li>
              <li>Safe, registry-level optimizations for maximum FPS stability.</li>
            </ul>
            <p>This project showcases our ability to deliver high-performance software, reduce system latency, and enhance overall OS efficiency.</p>
          </div>
          <a href="https://biglousoptimizations.com/" target="_blank" rel="noreferrer" className="mt-8 block text-center bg-cyan-500 text-[#0a192f] py-4 rounded-xl font-bold">
            Download the Software
          </a>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>
 {/* --- Blogs Section --- */}
<section className="py-24 bg-[#b5eef7] overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-[#0a192f] tracking-tight mb-4"
      >
        <span className="text-cyan-600">Expert Insights</span> & Tech Trends 2026
      </motion.h2>
      
      {/* Catchy Sub-heading */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto text-lg"
      >
        Stay ahead with our latest analysis on software development, AI integration, and digital business transformation strategies.
      </motion.p>
    </div>
    {/* Blog Grid (Top 2 Blogs) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogData.slice(0, 2).map((blog) => (
        <motion.div 
          key={blog.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          {/* Image */}
          <div className="h-64 overflow-hidden">
            <img 
              src={blog.img} 
              alt={blog.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
            />
          </div>
          
          {/* Content */}
          <div className="p-8">
            <span className="text-cyan-600 font-bold text-xs uppercase tracking-widest">{blog.category}</span>
            <h3 className="text-2xl font-bold text-[#0a192f] mt-2 mb-4 group-hover:text-cyan-600 transition">
              {blog.title}
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-3">{blog.excerpt}</p>
            <Link to={`/blog/${blog.id}`} className="font-bold text-[#0a192f] hover:text-cyan-600 transition">
              Read More &rarr;
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
<HowWeWork/>
      <Reviews/>
      <FAQs/>
{/* --- CALL TO ACTION (CTA) SECTION --- */}
<section className="py-24 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a3c5a] relative overflow-hidden">
  
  {/* Background Decorative Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
    
    {/* Heading */}
    <motion.h2 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight"
    >
      Ready to start your <span className="text-cyan-400">Digital Project?</span>
    </motion.h2>

    {/* SEO-Rich Description */}
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
    >
      New Tech Softs is a premier software house in Islamabad. We specialize in MERN stack development, custom mobile applications, and comprehensive digital solutions. 
      Let's transform your vision into a scalable, high-performance digital reality together. Our expert team is ready to discuss your business goals.
    </motion.p>

    {/* Animated Button */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    >
      <Link to="/contact">
        <motion.button 
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 0px 30px rgba(34, 211, 238, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-cyan-500 text-[#0a192f] px-12 py-5 rounded-2xl font-black text-xl flex items-center gap-4 mx-auto transition-all duration-300"
        >
          Contact Our Experts &rarr;
        </motion.button>
      </Link>
    </motion.div>

  </div>
</section>


    </div>
    
  );
};

// Simple Card Component
const ServiceCard = ({ icon, title, tagline, desc, direction, delay }) => {
  
  // Entry Animation variants
  const entryVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: delay,
        duration: 0.8
      }
    }
  };

  // Floating Animation variants (Continuous)
  const floatAnimation = {
    y: [0, -12, 0], // Halka sa oopar neeche move hona
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      variants={entryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative"
    >
      {/* Is inner div par continuous floating animation apply ki hai */}
      <motion.div
        animate={floatAnimation}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        className="bg-[#112240] p-10 rounded-2xl shadow-xl border border-gray-700/50 group hover:border-cyan-500/50 transition-colors duration-500 h-full flex flex-col"
      >
        {/* Icon Box */}
        <div className="w-20 h-20 bg-gray-800/50 text-cyan-400 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-cyan-500 group-hover:text-[#0a192f] transition-all duration-500 shadow-inner">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs font-bold text-cyan-600 uppercase tracking-[0.2em] mb-6">
          {tagline}
        </p>
        <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 flex-grow">
          {desc}
        </p>

        {/* Bottom Decorative Line */}
        <div className="w-0 group-hover:w-full h-1 bg-cyan-500 mt-8 transition-all duration-500 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
  
  // Direction Logic for Entry
  let initialPos = {};
  if (direction === "left") initialPos = { x: -100, opacity: 0 };
  if (direction === "right") initialPos = { x: 100, opacity: 0 };
  if (direction === "up") initialPos = { y: 100, opacity: 0 };

  return (
    <motion.div
      // 1. ENTRY Animation
      initial={initialPos}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: delay }}

      // 2. CONTINUOUS FLOATING (Left-Right)
      animate={{ 
        x: [0, 10, 0], // Right jayega phir wapis ayega
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay + 1 
      }}

      className="bg-[#112240] p-8 rounded-xl shadow-2xl border border-gray-700 group hover:border-cyan-500 transition-all duration-300"
    >
      {/* Icon Box */}
      <div className="w-16 h-16 bg-gray-800 text-cyan-400 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-cyan-500 group-hover:text-[#0a192f] transition duration-300 shadow-lg shadow-cyan-500/10">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition">{title}</h3>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 group-hover:text-gray-400">{tagline}</p>
      <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">{desc}</p>

    </motion.div>
  );
};
const TechIcon = ({ icon, color, name }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className={`text-4xl ${color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-300`}>
      {icon}
    </div>
    <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition duration-300">{name}</span>
  </div>
);

const FeatureCard = ({ icon, title, desc, delay }) => (
  <motion.div
    // 1. ENTRY Animation (Left se aana + Bounce karna)
    initial={{ x: -200, opacity: 0 }} 
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }} // Sirf aik dafa enter hoga
    transition={{ 
      type: "spring", 
      stiffness: 120, // Jitna zyada, utna tez bounce
      damping: 10,    // Bounce ko control karne ke liye
      delay: delay 
    }}
    
    // 2. CONTINUOUS BOUNCE (Rukne ke baad hilna)
    animate={{ 
      y: [0, -15, 0], // 15px upar neechay jump karega
    }}
    
    transition={{
       y: {
         duration: 2,         // 2 second mein aik jump complete
         repeat: Infinity,    // Chalta rahe
         repeatType: "mirror",
         ease: "easeInOut",
         delay: delay + 1     // Entry ke 1 second baad shuru ho
       }
    }}
    
    className="bg-[#112240] p-8 rounded-2xl shadow-xl border border-gray-700 text-center group hover:border-cyan-400 transition-colors duration-300"
  >
    <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-[#0a192f] transition duration-300 transform group-hover:rotate-12 group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-base">{desc}</p>
  </motion.div>
);


export default Home;