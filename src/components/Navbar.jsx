import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome,FaBlog, FaInfoCircle, FaLaptopCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path ? "text-[#00FFFF] font-bold" : "text-[#D3D3D3] hover:text-white";

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-[#1A1A99]/95 shadow-lg backdrop-blur-md py-2' : 'bg-[#1A1A99] py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="New Tech Softs" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="text-xl font-bold text-[#D3D3D3] tracking-wide hidden sm:block">
              NEW TECH <span className="text-[#00FFFF]">SOFTS</span>
            </span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" icon={<FaHome />} text="Home" activeClass={isActive('/')} />
            <NavLink to="/about" icon={<FaInfoCircle />} text="About" activeClass={isActive('/about')} />
            <NavLink to="/services" icon={<FaLaptopCode />} text="Services" activeClass={isActive('/services')} />
            <NavLink to="/portfolio" icon={<FaBriefcase />} text="Portfolio" activeClass={isActive('/portfolio')} />
            <NavLink to="/blog" icon={<FaBlog />} text="Blog" activeClass={isActive('/blog')} />
            
            <Link to="/contact">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition duration-300 flex items-center gap-2">
                <FaEnvelope className="text-sm" /> Get a Quote
              </button>
            </Link>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-cyan-400 text-2xl focus:outline-none transition-transform duration-300 hover:scale-110">
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE RIGHT DRAWER --- */}
      {/* 1. Backdrop Overlay (Drawer khulne par background dim ho jayega) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={toggleMenu}
      ></div>

      {/* 2. Side Drawer Container */}
      <div className={`fixed top-0 right-0 h-screen w-[280px] bg-[#112240] shadow-2xl transition-transform duration-300 ease-in-out z-[110] md:hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Drawer Header (Close Button) */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">NEW TECH SOFTS</span>
          <button onClick={toggleMenu} className="text-white text-2xl hover:text-red-500 transition-colors">
            <FaTimes />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col space-y-2 p-6 overflow-y-auto">
          <MobileLink to="/" icon={<FaHome />} text="Home" toggle={toggleMenu} activeClass={isActive('/')} />
          <MobileLink to="/about" icon={<FaInfoCircle />} text="About Us" toggle={toggleMenu} activeClass={isActive('/about')} />
          <MobileLink to="/services" icon={<FaLaptopCode />} text="Services" toggle={toggleMenu} activeClass={isActive('/services')} />
          <MobileLink to="/portfolio" icon={<FaBriefcase />} text="Portfolio" toggle={toggleMenu} activeClass={isActive('/portfolio')} />
          <MobileLink to="/blog" icon={<FaBlog />} text="Blog" toggle={toggleMenu} activeClass={isActive('/blog')} />
          
          {/* CTA Button at the Bottom of Drawer */}
          <div className="pt-10">
            <Link to="/contact" onClick={toggleMenu}>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-bold shadow-xl hover:shadow-cyan-500/40 active:scale-95 transition-all">
                Get Started Now
              </button>
            </Link>
            <p className="text-gray-500 text-xs text-center mt-6 uppercase tracking-widest">New Tech Softs</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable Components
const NavLink = ({ to, icon, text, activeClass }) => (
  <Link to={to} className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors duration-300 ${activeClass}`}>
    <span className="text-lg mb-0.5">{icon}</span> {text}
  </Link>
);

const MobileLink = ({ to, icon, text, toggle, activeClass }) => (
  <Link 
    to={to} 
    onClick={toggle} 
    className={`flex items-center gap-4 py-4 px-2 rounded-lg transition-all duration-300 group ${activeClass.includes('font-bold') ? 'bg-cyan-500/10' : 'hover:bg-gray-800'}`}
  >
    <span className={`text-xl transition-transform duration-300 group-hover:scale-125 ${activeClass.includes('font-bold') ? 'text-cyan-400' : 'text-gray-400'}`}>
      {icon}
    </span> 
    <span className={`text-lg ${activeClass.includes('font-bold') ? 'text-cyan-400' : 'text-gray-200'}`}>
      {text}
    </span>
  </Link>
);

export default Navbar;