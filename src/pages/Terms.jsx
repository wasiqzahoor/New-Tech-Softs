import React from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaCreditCard, FaCode, FaTools, FaGavel, FaExclamationTriangle } from 'react-icons/fa';

const Terms = () => {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen pt-32 pb-20 overflow-hidden">
      
      {/* --- HERO HEADER --- */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-20 h-20 bg-cyan-500/10 text-cyan-400 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 border border-cyan-500/20 shadow-lg"
        >
          <FaFileContract />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
        >
          Terms of <span className="text-cyan-400">Service</span>
        </motion.h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Welcome to New Tech Softs. These terms outline the rules and regulations for the use of our services, ensuring a professional and transparent partnership.
        </p>
        <div className="mt-6 text-gray-500 font-bold uppercase tracking-widest text-xs">
          Effective Date: January 22, 2026
        </div>
      </section>

      {/* --- TERMS CONTENT --- */}
      <section className="max-w-5xl mx-auto px-6 space-y-12">
        
        {/* Section 1: Project Initiation */}
        <TermSection 
          icon={<FaCode />}
          title="1. Project Scope & Initiation"
          content="New Tech Softs provides custom software, web, and mobile application development. Projects commence only after a formal requirement document is approved and the initial deposit is received. Any changes to the scope after initiation may incur additional costs and timeline adjustments."
        />

        {/* Section 2: Payments & Financials */}
        <TermSection 
          icon={<FaCreditCard />}
          title="2. Payment Terms & Milestones"
          content="We typically operate on a 50% upfront and 50% upon completion model for smaller projects. For enterprise-scale work, we follow a milestone-based payment structure. All deposits are non-refundable as they cover resource allocation and initial development costs."
        />

        {/* Section 3: Ownership & Intellectual Property */}
        <TermSection 
          icon={<FaGavel />}
          title="3. Intellectual Property Rights"
          content="Upon full and final payment, the client owns the copyright to the custom source code and visual assets created specifically for their project. However, New Tech Softs retains the right to use common libraries, frameworks, and tools developed internally, as well as the right to showcase the project in our portfolio (unless an NDA states otherwise)."
        />

        {/* Section 4: Maintenance & Support */}
        <TermSection 
          icon={<FaTools />}
          title="4. Post-Launch Support"
          content="We offer 30 days of complimentary technical support after project deployment to fix any bugs or issues related to our original code. Post-support maintenance, updates, or third-party API changes are subject to separate maintenance agreements or hourly rates."
        />

        {/* Section 5: Client Responsibilities */}
        <TermSection 
          icon={<FaFileContract />}
          title="5. Client Obligations"
          content="The client is responsible for providing necessary assets, content, and feedback in a timely manner. Delays in client communication or asset delivery (exceeding 7 business days) may result in project suspension or rescheduling."
        />

        {/* Section 6: Limitation of Liability */}
        <TermSection 
          icon={<FaExclamationTriangle />}
          title="6. Limitation of Liability"
          content="New Tech Softs is not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our software. While we follow best security practices, we do not guarantee that the software will be 100% immune to external cyber threats or server outages."
        />

      </section>

      {/* --- CONTACT FOR LEGAL --- */}
      <section className="max-w-4xl mx-auto px-6 mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#112240] to-[#0a192f] p-12 rounded-[3rem] border border-gray-800 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-bold text-white mb-6">Need Legal Clarification?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            If you have any questions regarding these terms or require a custom Service Level Agreement (SLA), please contact our legal department.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:info@newtechsofts.com" 
              className="bg-cyan-500 text-[#0a192f] px-10 py-4 rounded-xl font-black hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
            >
              Email Legal Team
            </a>
            
          </div>
        </motion.div>
      </section>

    </div>
  );
};

// --- Reusable Term Section Component ---
const TermSection = ({ icon, title, content }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="group bg-[#112240]/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-500"
  >
    <div className="flex items-start gap-6">
      <div className="text-3xl text-cyan-500/40 group-hover:text-cyan-400 transition-colors mt-1">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors tracking-tight">
          {title}
        </h2>
        <p className="text-gray-400 leading-relaxed text-lg font-medium">
          {content}
        </p>
      </div>
    </div>
  </motion.div>
);

export default Terms;