// File: src/components/Testimonials.jsx
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Yahan humne data folder se import kiya hai
// Note: Agar tumhara folder structure different hai to path adjust kar lena
import { testimonials } from '../data/testimonialData'; 

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-cyan-400">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We don't just build software; we build lasting partnerships. Here is what our partners have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6">
                <FaQuoteLeft className="text-4xl text-cyan-500/30 group-hover:text-cyan-400 transition-colors" />
              </div>
              
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-700 pt-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                  <p className="text-cyan-400 text-xs">{item.role}</p>
                </div>
                <div className="ml-auto flex gap-1 text-yellow-400 text-xs">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;