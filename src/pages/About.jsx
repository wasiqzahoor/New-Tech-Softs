import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBullseye,
  FaEye,
  FaFlag,
  FaUserTie,
  FaLaptopCode,
  FaBezierCurve,
  FaCode,
  FaPalette,
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
import image1 from "../assets/team/image1.jpg";
import image2 from "../assets/team/image2.jpg";
import image3 from "../assets/team/image3.jpg";
import image4 from "../assets/team/image4.jpg";
import image5 from "../assets/team/image5.jpg";
import image6 from "../assets/team/image6.jpg";

const About = () => {

  const steps = [
    { number: "01", title: "Discovery", desc: "Understanding your business goals and project requirements in depth." },
    { number: "02", title: "Strategy & Design", desc: "Crafting a custom roadmap and intuitive UI/UX prototypes." },
    { number: "03", title: "Development", desc: "Writing clean, scalable code using the latest tech stacks." },
    { number: "04", title: "Quality Assurance", desc: "Rigorous testing to ensure a bug-free and seamless experience." },
    { number: "05", title: "Deployment", desc: "Launching your product and providing post-launch support." }
  ];
 const teamMembers = [
  {
    name: "CHAUDHARY WASIQ ZAHOOR",
    role: "Founder & CEO",
    desc: "A visionary leader steering New Tech Softs towards technological excellence and ensuring high-impact digital solutions for global brands.",
    img: image1,
    icon: <FaUserTie />,
    social: { 
      linkedin: "https://www.linkedin.com/in/chaudhary-wasiq-zahoor-bbab952b0/", 
      github: "https://github.com/wasiqzahoor", 
      insta: "https://www.instagram.com/ch_wiqii?igsh=MTB6bDgwYXptbzh3bQ==" 
    }
  },
 {
  name: "Muhammad Musa",
  role: "AI Engineer",
  desc: "Designing, training, and deploying intelligent AI models while transforming complex data into scalable, real-world solutions that drive automation and smarter decision-making.",
  img: image2,
  icon: <FaRobot />,
  social: { linkedin: "https://www.linkedin.com/in/mussakhan-ai/", github: "#", insta: "#" }
},
{
    name: "MALIK IMRAN",
    role: "Graphic Designer",
    desc: "A creative mastermind transforming brand stories into stunning visual identities and high-quality graphics that capture attention.",
    img: image4,
    icon: <FaPalette />, // Graphic design ke liye palette icon
    social: { 
      linkedin: "https://www.linkedin.com/in/malik-imran-13754937a/?", 
      github: "#", 
      insta: "https://www.instagram.com/malik__imran_001?igsh=bm0yaG02djJiMTB0" 
    }
  },
  // {
  //   name: "WARDA RIFFAT",
  //   role: "Web Developer",
  //   desc: "Specialized in building high-performance, responsive, and scalable web applications using the latest MERN and Next.js technologies.",
  //   img: image3,
  //   icon: <FaLaptopCode />, // Web development ke liye code/laptop icon
  //   social: { linkedin: "#", github: "#", insta: "#" }
  // },
  
  // {
  //   name: "BILAL ZAHOOR",
  //   role: "UI/UX DESIGNER",
  //   desc: "Crafting intuitive and user-centric designs that provide seamless digital journeys and maximize user engagement across all platforms.",
  //   img: image5,
  //   icon: <FaBezierCurve />, // UI/UX design ke liye curve/design tool icon
  //   social: { linkedin: "#", github: "#", insta: "#" }
  // },
  // {
  //   name: "TASEER ZAHOOR",
  //   role: "APP DEVELOPER",
  //   desc: "Expert in developing robust, cross-platform mobile applications for Android and iOS using modern frameworks like Flutter.",
  //   img: image6,
  //   icon: <FaMobileAlt />, // App development ke liye mobile icon
  //   social: { linkedin: "#", github: "#", insta: "#" }
  // }
];

  return (
    <div className="bg-[#0a192f] text-white min-h-screen pt-24 pb-12 overflow-hidden">
      
      {/* --- SECTION 1: WHO WE ARE (Modern & Persuasive) --- */}
<section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
  
  {/* Subtle Background Glows */}
  <div className="absolute top-0 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Side: Persuasive Content */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
        <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Our Identity</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
        Crafting the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Digital Innovation</span>
      </h1>

      <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
        <p className="font-medium">
          At <span className="text-white font-bold">New Tech Softs</span>, we don’t just build software; we solve complex business challenges with precision and creativity. 
        </p>
        <p>
          We are a team of visionary developers, designers, and strategists committed to turning your ambitious ideas into scalable, high-performance digital solutions. From robust web architectures to seamless mobile experiences, we bridge the gap between concept and reality.
        </p>
      </div>

      {/* Trust Badges / Mini Features */}
      <div className="grid grid-cols-2 gap-6 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <FaCheckCircle />
          </div>
          <span className="text-sm font-semibold text-gray-200">Quality-First Approach</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <FaCheckCircle />
          </div>
          <span className="text-sm font-semibold text-gray-200">Agile Methodology</span>
        </div>
      </div>
    </motion.div>

    {/* Right Side: Modern Tech Experience Box (Clean & Minimal) */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative z-10 bg-gradient-to-br from-[#112240] to-[#0a192f] p-10 rounded-[2.5rem] border border-gray-700/50 shadow-2xl overflow-hidden group">
        
        {/* Animated Background Pulse */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-500"></div>

        <div className="relative z-20 space-y-8">
          <div className="flex items-center justify-between">
            <div className="p-4 bg-cyan-500 rounded-2xl text-[#0a192f] text-3xl shadow-lg shadow-cyan-500/20">
              <FaCode />
            </div>
            <div className="text-right">
              <p className="text-4xl font-black text-white">100+</p>
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-tighter">Projects Delivered</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          <p className="text-gray-400 italic text-lg leading-relaxed">
            "We believe that great technology is invisible; it just works. Our mission is to make your business run smoother and faster with our custom-built digital ecosystems."
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D3D3D3] flex items-center justify-center text-cyan-400 font-bold">
              <img src={logo} alt="no image" />
            </div>
            <div>
              <p className="text-white font-bold">New Tech Softs</p>
              <p className="text-xs text-gray-500">Innovation Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow for the Box */}
      <div className="absolute -bottom-4 -right-4 w-full h-full bg-cyan-500/10 rounded-[2.5rem] blur-xl -z-10"></div>
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
    desc="To empower businesses with cutting-edge technology solutions that drive sustainable growth and operational efficiency. We believe in building digital foundations that are not just robust but also adaptable to the ever-changing market needs."
    visual={<MissionVisual />}
    reverse={false}
  />

  {/* 2. OUR VISION */}
  <PillarRow 
    icon={<FaEye />}
    title="Our Vision"
    tagline="Looking Ahead"
    desc="To be the globally trusted partner for digital transformation, setting new benchmarks in innovation and quality. We envision a future where every business, regardless of size, can leverage high-end technology to reach its full potential."
    visual={<VisionVisual />}
    reverse={true} // Content will be on the right
  />

  {/* 3. OUR GOAL */}
  <PillarRow 
    icon={<FaFlag />}
    title="Our Goal"
    tagline="Excellence in Delivery"
    desc="To deliver 100% client satisfaction through absolute transparency, unmatched quality, and timely project delivery. Our ultimate target is to become an extension of your team, ensuring every line of code adds value to your business."
    visual={<GoalVisual />}
    reverse={false}
  />

</section>


      {/* --- SECTION 3: OUR TEAM --- */}
     <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a192f] overflow-hidden">
      
      {/* Heading Section */}
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Meet the Minds <span className="text-cyan-400">Behind the Code</span>
        </motion.h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          A dedicated team of experts committed to delivering exceptional digital solutions for your business.
        </p>
      </div>
      
      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index}
            {...member}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
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
    {/* Section 5 : CTA */}
      <section className="py-24 bg-[#0a192f] text-center px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-12 rounded-[3rem] border border-cyan-500/30 shadow-2xl backdrop-blur-sm"
    >
      <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
        Ready to Build Your <span className="text-cyan-400">Digital Future?</span>
      </h2>
      <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
        Whether you have a startup idea or an enterprise challenge, our team at New Tech Softs is ready to help you scale.
      </p>
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(34, 211, 238, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-500 text-[#0a192f] px-12 py-4 rounded-xl font-black text-xl transition-all"
        >
          Let's Get Started
        </motion.button>
      </Link>
    </motion.div>
  </section>
  


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


const TeamCard = ({ name, role, desc, img, icon, social, delay }) => {
  
  // 1. Bubble Entry Variants (From Left)
  const entryVariants = {
    hidden: { 
      opacity: 0, 
      x: -150, 
      scale: 0.5,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
        duration: 0.8
      }
    }
  };

  // 2. Floating Animation Variants (Continuous)
  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay 
      }
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
      {/* Outer Floating Wrapper */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="relative z-10 bg-[#112240] p-7 rounded-[2.5rem] border border-gray-700/50 flex flex-col h-[540px] text-center shadow-2xl group hover:border-cyan-500/50 transition-all duration-500"
      >
        
        {/* Profile Image */}
        <div className="w-full h-60 rounded-[2rem] overflow-hidden mb-6 relative">
          <img 
            src={img} 
            alt={name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=Member'; }} // Fallback if local image not found
          />
          {/* Role Icon Overlay */}
          <div className="absolute top-4 right-4 bg-cyan-500 text-[#0a192f] p-3 rounded-2xl text-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow space-y-3">
          {/* Name: Maximum 40 chars and truncated to stay on one line if necessary */}
          <h3 className="text-xl md:text-2xl font-black text-white truncate px-2" title={name}>
            {name}
          </h3>
          <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
            {role}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 px-2">
            {desc}
          </p>
        </div>

        {/* Social Links Container */}
        <div className="flex items-center justify-center gap-6 pt-6 mt-6 border-t border-gray-800">
          <SocialLink href={social.linkedin} icon={<FaLinkedin />} />
          <SocialLink href={social.github} icon={<FaGithub />} />
          <SocialLink href={social.insta} icon={<FaInstagram />} />
        </div>

        {/* Inner Hover Glow */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="text-gray-500 text-2xl hover:text-cyan-400 hover:scale-125 transition-all duration-300"
    target="_blank" 
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default About;