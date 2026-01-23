import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
    <ScrollToTop/>
      <div className="flex flex-col min-h-screen bg-gray-50">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
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
        <Footer/>

      </div>
    </Router>
  );
}

export default App;