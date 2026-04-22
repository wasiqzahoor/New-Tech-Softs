import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "What services do you offer?", a: "We specialize in full-stack web development, mobile app development (Flutter/React Native), and digital solutions for modern businesses." },
  { q: "How does the design process work?", a: "Our process includes research, UI/UX design, iterative development, and thorough testing to ensure the best results." },
  { q: "How long does a project usually take?", a: "Timelines vary based on complexity, but we utilize agile methods to ensure timely and efficient delivery." },
  { q: "What do I need to provide before starting a project?", a: "Typically, I’ll need information about your business goals, branding assets, and any specific content like text or images." },
  { q: "Do you offer revisions?", a: "Yes, we work closely with you to ensure the final product aligns perfectly with your vision and requirements." }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-[#b5eef7] max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Left side */}
      <div>
        <h2 className="text-6xl font-bold text-gray-900 group-hover:text-indigo-500 mb-6">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-gray-500">Here are answers to some of the most common questions I receive. If you don’t see your question here, feel free to reach out—I’m happy to help!</p>
      </div>

      {/* Right side - Accordion */}
      <div className="space-y-6 m-12">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button 
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full text-left py-4 flex justify-between items-center group"
            >
              <span className={`text-xl font-medium ${activeIndex === index ? 'text-indigo-600' : 'text-gray-900 group-hover:text-indigo-500'}`}>
                {index + 1}. {faq.q}
              </span>
              <span className="text-2xl">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  className="pb-4 text-gray-600"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;