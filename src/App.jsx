import React, { useEffect } from 'react'; // React aur useEffect import karein
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // useLocation yahan se aayega

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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

// --- Google Analytics Tracker Component ---
// Ye component Router ke andar hone ki wajah se location track kar sakay ga
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-88G6VJT1LN', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null; // Ye screen par kuch nahi dikhayega
};

function App() {
  return (
    <Router>
      {/* Analytics aur Scroll helpers hamesha Router ke foran baad honay chahiyen */}
      <AnalyticsTracker />
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />

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

        <Footer />
      </div>
    </Router>
  );
}

export default App;