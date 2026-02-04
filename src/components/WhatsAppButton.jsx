import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923415287464" // Tumhara number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping group-hover:opacity-75"></div>
      
      {/* Icon */}
      <FaWhatsapp className="text-3xl relative z-10" />
    </a>
  );
};

export default WhatsAppButton;