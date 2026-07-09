import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components (always needed on every page, so these stay eager)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton'; // Import check kar lena

// Pages — lazy loaded so each route's JS is only downloaded when that
// route is actually visited, instead of bundling all pages into the
// initial page load (this is what was causing the "unused JavaScript"
// warning in PageSpeed Insights).
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const ProductPage = lazy(() => import('./pages/Product'));

// Lightweight fallback shown for the brief moment a route's JS chunk
// is being fetched (only happens once per chunk, then it's cached).
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[100vh]">
    <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

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
    <HelmetProvider>
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />
      
      {/* Main Container */}
      <div className="flex flex-col min-h-screen relative">
        <Navbar />

        {/* Content Area - flex-grow ensure karega ke footer neeche rahe */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/service/:slug" element={<ServiceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy/>} />
              <Route path="/terms" element={<Terms/>} />
              <Route path="/products" element={<ProductPage/>} />

              <Route path="/blog" element={<Blog/>} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        
        {/* WhatsApp Button ko yahan sab se end mein rakhein */}
        <WhatsAppButton />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;