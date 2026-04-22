import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  { title: "Listening to your vision", desc: "We begin by discussing your goals, audience, and expectations to ensure our approach aligns perfectly with your vision." },
  { title: "Planning with purpose", desc: "We analyze trends, competitors, and opportunities to craft a strategic roadmap tailored to your needs." },
  { title: "Visualizing your ideas", desc: "Creative concepts come to life as we design user-friendly and visually appealing solutions." },
  { title: "Bringing it to life", desc: "Using cutting-edge technologies, we develop and implement your project with precision and care." },
  { title: "Delivering success", desc: "After a seamless launch, we provide ongoing support and optimization to ensure long-term success." }
];

const HowWeWork = () => {
  return (
    <section className="py-24 bg-[#e5e7eb] text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16">
        
        {/* Left Side */}
        <div className="md:w-1/2">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
            {'{ How We Work }'}
          </p>

          <h2 className="text-5xl font-extrabold leading-tight text-gray-900 mb-10">
            STRATEGIC STEPS TO <span className="text-indigo-600">IMPACTFUL RESULTS</span>
          </h2>

          {/* Orange Layout */}
          <div className="w-full bg-gradient-to-r from-orange-500 to-orange-300 rounded-[40px] overflow-hidden relative p-10">

            <div className="flex justify-center">
              <img 
                src="https://framerusercontent.com/images/VSxqLrfRMs8XEbT1SuK60xq3aKI.jpeg?scale-down-to=1024&width=1200&height=1200"
                alt="Person"
                className="w-[400px] object-cover"
              />
            </div>

            {/* Bottom Right Shape */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gray-200 rounded-tl-[50px]"></div>

          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 relative">
          <div className="space-y-16 relative">

            {/* Background Line */}
            <div className="absolute left-[-24px] top-0 bottom-0 w-0.5 bg-gray-200" />

            {/* Animated Line */}
            <div className="absolute left-[-24px] top-0 bottom-0 w-0.5">
              <motion.div 
                className="w-full bg-yellow-400"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "linear" }}
              />
            </div>

            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8"
              >

                {/* Circle */}
                <motion.div 
                  className="absolute left-[-35px] top-0 w-6 h-6 rounded-full border-4 border-white bg-gray-900 flex items-center justify-center text-white text-xs font-bold"
                  initial={{ backgroundColor: "#111827" }}
                  whileInView={{ backgroundColor: "#FBBF24" }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  {index + 1}
                </motion.div>

                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;