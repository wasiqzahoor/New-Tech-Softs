import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, 
  FaFacebook, FaInstagram, FaPaperPlane, FaGlobeAmericas, 
  FaShieldAlt, FaRocket, FaSpinner 
} from 'react-icons/fa';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- EMAILJS INTEGRATION ---
    // In IDs ko EmailJS dashboard se replace karein
    const serviceID = 'service_34q2txe'; 
    const templateID = 'template_to8li2i';
    const publicKey = 'N6j59YQ27zhPSV4eQ';

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      project_type: formData.projectType,
      message: formData.message,
      to_email: 'info@newtechsofts.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert("Success! Your inquiry has been sent to info@newtechsofts.com");
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        setIsSending(false);
      }, (err) => {
        alert("Failed to send message. Please check your internet or try later.");
        setIsSending(false);
      });
  };

  return (
    <div className="bg-[#0a192f] text-white min-h-screen pt-24 pb-12 overflow-hidden">
      
      {/* --- 1. HERO SECTION (Clean & Text Focused) --- */}
      <section className="text-center py-16 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-4"
        >
          Let’s Build Something <span className="text-cyan-400">Great</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have an idea or a project in mind? Fill out the form below or reach out to us directly. 
          Let’s turn your vision into a digital masterpiece.
        </p>
      </section>

      {/* --- 2. CONTACT GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE: Info & Promise Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-l-4 border-cyan-500 pl-6 uppercase tracking-tighter">Information</h2>
            
            <ContactDetail icon={<FaEnvelope />} label="Email our team" value="info@newtechsofts.com" />
            <ContactDetail icon={<FaWhatsapp />} label="Connect with us" value="+923415287464" />
            <ContactDetail icon={<FaMapMarkerAlt />} label="Our Headquarters" value="DHA Phase 5 Sector H, Islamabad" />
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-widest">Global Connect</h3>
            <div className="flex gap-6">
              <SocialIcon icon={<FaLinkedin />} link="https://www.linkedin.com/company/newtechsofts" />
              <SocialIcon icon={<FaFacebook />} link="https://www.facebook.com/share/17a4ioveu7/" />
              <SocialIcon icon={<FaInstagram />} link="https://www.instagram.com/newtechsofts?igsh=aTR3Y2x3eHFxMXdu" />
            </div>
          </div>

          {/* OUR PROMISE CARD (Restored) */}
          <div className="bg-[#112240] p-8 rounded-3xl border border-gray-700 shadow-xl relative overflow-hidden group">
            <FaRocket className="absolute -bottom-4 -right-4 text-8xl text-cyan-500/10 group-hover:rotate-12 transition-transform duration-500" />
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm italic">Our Promise</h3>
            <p className="text-gray-400 text-base leading-relaxed relative z-10">
              We ensure 100% confidentiality and a technical response within 24 hours. 
              Your project data is secured with enterprise-grade encryption.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Interactive Form (EmailJS) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#112240] p-8 md:p-12 rounded-[2.5rem] border border-gray-700 shadow-2xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Full Name</label>
                <input type="text" name="name" required className="w-full bg-[#0a192f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none transition" placeholder="John Doe" value={formData.name} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Address</label>
                <input type="email" name="email" required className="w-full bg-[#0a192f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none transition" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Phone Number</label>
                <input type="text" name="phone" required className="w-full bg-[#0a192f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none transition" placeholder="03xx xxxxxxx" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Project Type</label>
                <input type="text" name="projectType" required className="w-full bg-[#0a192f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none transition" placeholder="e.g. Web App" value={formData.projectType} onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Project Brief</label>
              <textarea name="message" required rows="5" className="w-full bg-[#0a192f] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none transition resize-none" placeholder="Describe your vision..." value={formData.message} onChange={handleChange}></textarea>
            </div>

            <motion.button 
              disabled={isSending}
              whileHover={{ scale: isSending ? 1 : 1.02 }}
              whileTap={{ scale: isSending ? 1 : 0.98 }}
              className={`w-full ${isSending ? 'bg-gray-600' : 'bg-cyan-500 hover:bg-cyan-400'} text-[#0a192f] py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition shadow-lg shadow-cyan-500/10`}
              type="submit"
            >
              {isSending ? (
                <>Sending... <FaSpinner className="animate-spin" /></>
              ) : (
                <>Send Message <FaPaperPlane /></>
              )}
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* --- 3. BOTTOM IMPACT SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-24 border-t border-gray-800/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <ImpactCard icon={<FaGlobeAmericas />} title="Global Reach" desc="Serving clients across UK, USA, UAE, and Pakistan." />
          <ImpactCard icon={<FaShieldAlt />} title="Secure & Private" desc="Your data is encrypted and handled with 100% confidentiality." delay={0.2} />
          <ImpactCard icon={<FaRocket />} title="Fast Turnaround" desc="Quick initial responses and agile project execution." delay={0.4} />
        </div>
      </section>

    </div>
  );
};

// Helper Components
const ContactDetail = ({ icon, label, value }) => (
  <div className="flex items-center gap-6 group">
    <div className="w-14 h-14 bg-gray-800 text-cyan-400 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-cyan-500 group-hover:text-[#0a192f] transition-all duration-300 shadow-lg">{icon}</div>
    <div><p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{label}</p><p className="text-white text-lg font-bold">{value}</p></div>
  </div>
);

const SocialIcon = ({ icon, link }) => (
  <a href={link} className="text-gray-400 text-2xl hover:text-cyan-400 hover:scale-125 transition-all duration-300" target="_blank" rel="noopener noreferrer">{icon}</a>
);

const ImpactCard = ({ icon, title, desc, delay }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }} className="space-y-4">
    <div className="text-5xl text-cyan-400 mx-auto w-max">{icon}</div>
    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default Contact;