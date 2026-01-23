import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaGlobe, FaFileContract } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen pt-32 pb-20 overflow-hidden">
      
      {/* --- HERO HEADER --- */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-20 h-20 bg-cyan-500/10 text-cyan-400 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 border border-cyan-500/20 shadow-lg shadow-cyan-500/5"
        >
          <FaShieldAlt />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
        >
          Privacy <span className="text-cyan-400">Policy</span>
        </motion.h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          At New Tech Softs, your privacy is our priority. This policy outlines how we handle data, protect your information, and ensure transparency in our digital solutions.
        </p>
        <div className="mt-6 text-gray-500 font-bold uppercase tracking-widest text-xs">
          Last Updated: January 22, 2026
        </div>
      </section>

      {/* --- MAIN CONTENT (Detailed Sections) --- */}
      <section className="max-w-5xl mx-auto px-6 space-y-12">
        
        {/* Section 1: Data Collection */}
        <PolicySection 
          icon={<FaDatabase />}
          title="1. Information Collection & Usage"
          content="We collect personal data (Name, Email, Phone) only when voluntarily provided via our inquiry forms. Additionally, we may collect technical data such as IP addresses, browser types, and usage patterns to improve our service performance and user experience."
        />

        {/* Section 2: Software Development & Client Data */}
        <PolicySection 
          icon={<FaFileContract />}
          title="2. Project Data & Confidentiality"
          content="During software development, any data provided by the client is treated with 100% confidentiality. We do not use client project data for any purposes other than the specific project development. Non-Disclosure Agreements (NDA) are standard for all our enterprise-grade projects."
        />

        {/* Section 3: Third-Party Integrations */}
        <PolicySection 
          icon={<FaGlobe />}
          title="3. Third-Party Services"
          content="Our applications may integrate third-party services such as AWS (Hosting), Firebase (Database), or EmailJS (Communication). These services have their own privacy policies, and while we ensure secure integration, we are not responsible for their independent data handling practices."
        />

        {/* Section 4: Cookies & Tracking */}
        <PolicySection 
          icon={<FaUserShield />}
          title="4. Cookies & Analytics"
          content="We use cookies and tracking technologies (like Google Analytics) to analyze website traffic and optimize our platform. You can choose to disable cookies in your browser settings, though some features of our site may not function correctly as a result."
        />

        {/* Section 5: Data Security */}
        <PolicySection 
          icon={<FaLock />}
          title="5. Security Standards"
          content="New Tech Softs implements industry-standard encryption (SSL/TLS) and secure server protocols to protect your information from unauthorized access, hacking, or disclosure. We continuously monitor our systems to prevent potential vulnerabilities."
        />

        {/* Section 6: Rights & Compliance */}
        <PolicySection 
          icon={<FaShieldAlt />}
          title="6. Your Rights & Compliance"
          content="We adhere to global privacy standards (GDPR/CCPA). Users have the right to request a copy of their data, request deletion, or opt-out of marketing communications. For any privacy concerns, contact our legal team at info@newtechsofts.com."
        />

      </section>

      {/* --- BOTTOM CALLOUT --- */}
      <section className="max-w-4xl mx-auto px-6 mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#112240] p-10 rounded-[2.5rem] border border-gray-800 text-center shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Have questions about your data?</h2>
          <p className="text-gray-400 mb-8">Reach out to our Data Protection Officer for any clarifications.</p>
          <a 
            href="mailto:info@newtechsofts.com" 
            className="inline-block bg-cyan-500 text-[#0a192f] px-10 py-3 rounded-xl font-black hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            Contact Support
          </a>
        </motion.div>
      </section>

    </div>
  );
};

// --- Reusable Policy Section Component ---
const PolicySection = ({ icon, title, content }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="group bg-[#112240]/50 p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-500"
  >
    <div className="flex items-start gap-6">
      <div className="text-3xl text-cyan-500/50 group-hover:text-cyan-400 transition-colors mt-1 shrink-0">
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

export default PrivacyPolicy;