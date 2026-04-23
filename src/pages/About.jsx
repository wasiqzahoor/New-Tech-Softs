import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  FaBullseye,
  FaEye,
  FaFlag,
  FaUserTie,
  FaLaptopCode,
  FaBezierCurve,
  FaCode,
  FaPalette,
  FaProjectDiagram,
  FaCheckCircle,
  FaMobileAlt,
  FaTerminal,
  FaRobot,
  FaLinkedin,
  FaGithub,
  FaInstagram
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Team from '../components/Team';
import CTASection from '../components/CTA_About';

const About = () => {

  const steps = [
    { number: "01", title: "Discovery", desc: "Understanding your business goals and project requirements in depth." },
    { number: "02", title: "Strategy & Design", desc: "Crafting a custom roadmap and intuitive UI/UX prototypes." },
    { number: "03", title: "Development", desc: "Writing clean, scalable code using the latest tech stacks." },
    { number: "04", title: "Quality Assurance", desc: "Rigorous testing to ensure a bug-free and seamless experience." },
    { number: "05", title: "Deployment", desc: "Launching your product and providing post-launch support." }
  ];

  return (
    <div className="bg-[#0a192f] text-white min-h-screen pt-24 pb-12 overflow-hidden">
      <Helmet>
  <title>About New Tech Softs | Our Mission, Vision & Team</title>
  <meta name="description" content="Learn more about New Tech Softs, a leading software house in Islamabad. Discover our mission, our professional team, and how we deliver innovative software solutions." />
</Helmet>
      {/* --- SECTION 1: WHO WE ARE (Modern & Persuasive) --- */}
 <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
  {/* Subtle Background Glows */}
  <div className="absolute top-0 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Side: Persuasive Content (SEO Optimized) */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
        <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Leading Software House in Islamabad</span>
      </div>

      {/* Changed h1 for better Keyword density */}
      <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
        New Tech Softs: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pioneering Digital Innovation</span>
      </h1>

      <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
        <p className="font-medium">
          As a top-tier <span className="text-white font-bold">software house in Islamabad</span>, we don’t just build software; we engineer precise, scalable solutions for complex business challenges. 
        </p>
        <p>
          We are a team of visionary developers, designers, and strategists. Our expertise in <span className="text-white">MERN stack development</span>, custom <span className="text-white">mobile applications</span>, and AI-driven solutions bridges the gap between your concept and reality.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-6 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <FaCheckCircle />
          </div>
          <span className="text-sm font-semibold text-gray-200">High-Performance Code</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <FaCheckCircle />
          </div>
          <span className="text-sm font-semibold text-gray-200">Scalable Architecture</span>
        </div>
      </div>
    </motion.div>

    {/* Right Side: Modern Tech Experience Box */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative z-10 bg-gradient-to-br from-[#112240] to-[#0a192f] p-10 rounded-[2.5rem] border border-gray-700/50 shadow-2xl overflow-hidden group">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-500"></div>

        <div className="relative z-20 space-y-8">
          <div className="flex items-center justify-between">
            <div className="p-4 bg-cyan-500 rounded-2xl text-[#0a192f] text-3xl shadow-lg shadow-cyan-500/20">
              <FaCode />
            </div>
            <div className="text-right">
              <p className="text-4xl font-black text-white">100+</p>
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-tighter">Successful Projects</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          <p className="text-gray-400 italic text-lg leading-relaxed">
            "We transform complexity into simplicity. Our mission at New Tech Softs is to accelerate your digital growth with secure, efficient, and future-proof technology."
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold">
              <img src="/logo.png" alt="New Tech Softs Logo" />
            </div>
            <div>
              <p className="text-white font-bold">New Tech Softs</p>
              <p className="text-xs text-gray-500">Your Innovation Partner</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* --- SECTION 2: THE CORE PILLARS (Mission, Vision, Goal) --- */}
      <section className="py-24 space-y-32">
  
  {/* 1. OUR MISSION */}
  <PillarRow 
    icon={<FaBullseye />}
    title="Our Mission"
    tagline="Driven by Purpose"
    desc="As a top IT tech company, our mission is to empower businesses with cutting-edge IT tech solutions that drive sustainable growth and operational efficiency. We specialize in building robust digital foundations that adapt seamlessly to evolving market needs."
    visual={<MissionVisual />}
    reverse={false}
  />

  {/* 2. OUR VISION */}
  <PillarRow 
    icon={<FaEye />}
    title="Our Vision"
    tagline="Looking Ahead"
    desc="To be the globally trusted partner for digital transformation, setting new benchmarks in innovation and IT tech solutions. We envision a future where every business, regardless of size, leverages our high-end technology to reach its full potential."
    visual={<VisionVisual />}
    reverse={true}
  />

  {/* 3. OUR GOAL */}
  <PillarRow 
    icon={<FaFlag />}
    title="Our Goal"
    tagline="Excellence in Delivery"
    desc="To deliver 100% client satisfaction as a premier IT tech company through absolute transparency, unmatched quality, and timely project delivery. Our ultimate target is to become an extension of your team, ensuring every custom IT tech solution adds measurable value to your business."
    visual={<GoalVisual />}
    reverse={false}
  />
</section>
{/* --- SECTION 3: OUR TEAM --- */}
<Team/>
      
     
{/* SECTION 4: OUR DEVELOPMENT PROCESS */}
       <section className="py-24 bg-[#112240]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white"
          >
            How We <span className="text-cyan-400">Make it Happen</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Our systematic approach ensures every project is delivered with precision and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-6 bg-[#112240] rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-5xl font-black text-cyan-500/20 mb-4 group-hover:text-cyan-500/40 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              
              {/* Connector for desktop (excluding last item) */}
              {index < 4 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gray-700 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <CTASection/>
  


    </div>
  );
};

// --- Pillar Card Component ---
const PillarRow = ({ icon, title, tagline, desc, visual, reverse }) => {
  // Typewriter Variants
  const sentence = desc;
  const words = sentence.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: 0.2 }, // Fast typewriter
    },
  };

  const child = {
    visible: { opacity: 1, transition: { duration: 0.01 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={reverse ? 'lg:order-2' : 'lg:order-1'}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-3xl text-cyan-400">
              {icon}
            </div>
            <div>
              <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs">{tagline}</p>
              <h3 className="text-3xl md:text-4xl font-black text-white">{title}</h3>
            </div>
          </div>

          {/* Typewriter Description */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed min-h-[120px]"
          >
            {words.map((char, index) => (
              <motion.span key={index} variants={child}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={reverse ? 'lg:order-1' : 'lg:order-2'}
        >
          {visual}
        </motion.div>

      </div>
    </div>
  );
};

// --- VISUAL COMPONENTS (Animations for each row) ---

const MissionVisual = () => (
  <div className="relative h-[300px] bg-[#112240] rounded-[2rem] border border-gray-700/50 flex items-center justify-center overflow-hidden group">
    <motion.div 
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="text-9xl text-cyan-500/20"
    >
      <FaBullseye />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
    <div className="absolute w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
  </div>
);

const VisionVisual = () => (
  <div className="relative h-[300px] bg-[#112240] rounded-[2rem] border border-gray-700/50 flex items-center justify-center overflow-hidden group">
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="text-9xl text-blue-500/20"
    >
      <FaEye />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
    <div className="absolute w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]"></div>
  </div>
);

const GoalVisual = () => (
  <div className="relative h-[300px] bg-[#112240] rounded-[2rem] border border-gray-700/50 flex items-center justify-center overflow-hidden group">
    <motion.div 
      animate={{ x: [-10, 10, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="text-9xl text-cyan-400/20"
    >
      <FaFlag />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent"></div>
    <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl"></div>
  </div>
); 





export default About;