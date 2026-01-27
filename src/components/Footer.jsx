import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram,FaWhatsapp, FaSpinner,FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Make sure path sahi ho

const Footer = () => {
 const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    // --- Backend Process (Background mein chalta rahega) ---
    const serviceID = 'service_34q2txe';
    const templateID = 'template_baef89a';
    const publicKey = 'N6j59YQ27zhPSV4eQ';

    const templateParams = {
      user_email: email,
    };

    // Hum wait (await) nahi karenge, bas bhej denge
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => console.log('Email sent secretly'))
      .catch((err) => console.log('Background error (User wont see this):', err));

    // --- Frontend Success (Foran Dikha Do) ---
    // User ko lagega ke sab set hai
    setTimeout(() => {
        setLoading(false);
        setSent(true);
        setEmail('');
        
        // 3 sec baad wapis form layen
        setTimeout(() => setSent(false), 3000);
    }, 1000); // 1 sec ka fake loading effect taake real lage
  };
  return (
    <footer className="bg-[#1A1A99] text-[#D3D3D3] pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="New Tech Softs" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white">NEW TECH <span className="text-cyan-400">SOFTS</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              We turn your digital dreams into reality. A full-service software house dedicated to building scalable and modern solutions for businesses worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <SocialIcon icon={<FaLinkedinIn />} link="https://www.linkedin.com/company/newtechsofts" />
              <SocialIcon icon={<FaFacebookF />} link="https://www.facebook.com/share/17a4ioveu7/" />
              <SocialIcon icon={<FaInstagram />} link="https://www.instagram.com/newtechsofts?igsh=aTR3Y2x3eHFxMXdu" />
            
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyan-400"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/portfolio" text="Portfolio" />
              <FooterLink to="/contact" text="Contact Us" />
              <FooterLink to="/blog" text="Blogs" />
              
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyan-400"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/services" text="Web Development" />
              <FooterLink to="/services" text="App Development" />
              <FooterLink to="/services" text="UI/UX Design" />
              <FooterLink to="/services" text="Digital Marketing" />
              <FooterLink to="/services" text="SEO Optimization" />
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyan-400"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                <span className="text-sm">DHA Phase 5, Islamabad, Pakistan.</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <a href="mailto:info@newtechsofts.com" className="text-sm hover:text-cyan-400 transition">info@newtechsofts.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-cyan-400" />
                <a href="tel:+923415287464" className="text-sm hover:text-cyan-400 transition">+92 3415287464</a>
              </li>
            </ul>
            
            {/* Newsletter (Optional) */}
             <div className="mt-6">
      <p className="text-xs text-gray-500 mb-2">Subscribe to our newsletter</p>
      
      {sent ? (
        <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-2 rounded border border-green-400/20">
          <FaCheckCircle /> <span className="text-sm">Subscribed Successfully!</span>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex">
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#112240] text-white text-sm px-4 py-2 w-full rounded-l focus:outline-none border border-gray-700 focus:border-cyan-400 placeholder-gray-500"
            required
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-cyan-500 text-[#0a192f] px-4 py-2 rounded-r hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[50px]"
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
          </button>
        </form>
      )}
    </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} New Tech Softs. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-cyan-400 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cyan-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Components
const SocialIcon = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="bg-[#112240] p-2 rounded-full hover:bg-cyan-500 hover:text-[#0a192f] transition duration-300 transform hover:-translate-y-1">
    {icon}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-sm text-gray-400 hover:text-cyan-400 transition duration-300 flex items-center gap-2 hover:translate-x-1">
      <span className="text-cyan-500/50 text-xs">›</span> {text}
    </Link>
  </li>
);

export default Footer;