import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton'; // Import check kar lena

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

// --- Google Analytics Tracker ---
const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-88G6VJT1LN', {
        page_path: location.pathname,
      });
    }
  }, [location]);
  return null;
};

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />
      
      {/* Main Container */}
      <div className="flex flex-col min-h-screen bg-gray-50 relative">
        <Navbar />

        {/* Content Area - flex-grow ensure karega ke footer neeche rahe */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>

        <Footer />
        
        {/* WhatsApp Button ko yahan sab se end mein rakhein */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;