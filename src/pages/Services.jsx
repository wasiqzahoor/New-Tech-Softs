import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPhp, FaWordpress, FaDatabase, FaFigma, 
  FaMobileAlt, FaApple, FaAndroid, FaLayerGroup, FaCheckCircle,
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaSwift, FaAws, FaDocker,
  FaRobot, FaShieldAlt, FaChartLine, FaSearch,FaRocket
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { 
  SiNextdotjs, SiMongodb, SiFlutter, SiFirebase, SiAdobexd, 
  SiTailwindcss, SiPython, SiTensorflow, SiSelenium, SiJest
} from 'react-icons/si';

const Services = () => {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen pt-20 overflow-hidden">
      
      {/* --- 1. HERO SECTION (Image Background with Blur Overlay) --- */}
<section className="relative h-[65vh] flex items-center justify-center overflow-hidden border-b border-gray-800">
  
  {/* Background Image Layer */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
    style={{ 
      backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600')` 
    }}
  >
    {/* Light Blue Blur Overlay */}
    <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-md"></div>
    
    {/* Optional: Subtle Gradient to ensure text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/60 via-transparent to-[#0a192f]"></div>
  </div>

  <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
    {/* Animated Sub-heading */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-6"
    >
      <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Our Services</span>
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white"
    >
      Digital Solutions <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
        Built For Tomorrow
      </span>
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md"
    >
      From conceptualization to deployment, we deliver high-end technology services 
      that transform your business vision into a scalable digital reality.
    </motion.p>
  </div>
</section>

      {/* --- 2. DETAILED SERVICES LIST --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-40">
        
        {/* BLOCK 1: WEB DEVELOPMENT (Slider + Fast Typewriter) */}
        <ServiceBlock 
          title="Web Development"
          tagline="The Digital Core"
          desc="We architect robust, high-performance web applications tailored to your business. Our focus is on clean code, security, and exceptional user engagement."
          features={["Custom SaaS Platforms", "Next.js & MERN Stack", "Enterprise Portals", "Headless CMS Solutions"]}
          icons={[
            { icon: <FaReact />, color: "text-cyan-400", name: "React" },
            { icon: <SiNextdotjs />, color: "text-white", name: "Next.js" },
            { icon: <FaNodeJs />, color: "text-green-500", name: "Node.js" },
            { icon: <FaPhp />, color: "text-blue-400", name: "PHP" },
            { icon: <FaBootstrap />, color: "text-purple-500", name: "Bootstrap" },
            { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML5" },
            { icon: <FaCss3Alt />, color: "text-blue-500", name: "CSS3" },
          ]}
          images={[
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
          ]}
          reverse={false}
        />

        {/* BLOCK 2: APP DEVELOPMENT */}
        <ServiceBlock 
          title="App Development"
          tagline="Innovation in Hand"
          desc="Seamless mobile experiences across all devices. We use cutting-edge frameworks to ensure your application is fast, reliable, and user-friendly."
          features={["Flutter Cross-Platform", "React Native Apps", "Swift (iOS) & Kotlin (Android)", "App Maintenance"]}
          icons={[
            { icon: <SiFlutter />, color: "text-blue-400", name: "Flutter" },
            { icon: <FaReact />, color: "text-cyan-400", name: "Native" },
            { icon: <FaSwift />, color: "text-orange-500", name: "Swift" },
            { icon: <SiFirebase />, color: "text-yellow-500", name: "Firebase" },
            { icon: <FaDatabase />, color: "text-green-400", name: "Database" },
          ]}
          images={[
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800"
          ]}
          reverse={true}
        />

       
        {/* BLOCK 3: UI/UX & DESIGN (Fixed Image & Slider Added) */}
        <ServiceBlock 
          title="UI/UX & Design"
          tagline="Visual Excellence"
          desc="Human-centric designs that convert. We create intuitive interfaces that make technology accessible and enjoyable for your customers."
          features={["User Research", "Wireframing & Prototyping", "Design Systems", "Interactive UI Designs"]}
          icons={[
            { icon: <FaFigma />, color: "text-purple-400", name: "Figma" },
            { icon: <SiAdobexd />, color: "text-pink-500", name: "Adobe XD" },
            { icon: <FaLayerGroup />, color: "text-cyan-400", name: "Layered" },
            { icon: <SiTailwindcss />, color: "text-blue-300", name: "Tailwind" },
          ]}
          images={[
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800", // New Design Image
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800", // Mobile UI
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800"  // Prototyping
          ]}
          reverse={false}
        />

        {/* BLOCK 4: SEO & DIGITAL GROWTH (Slider Added) */}
        <ServiceBlock 
          title="SEO & Marketing"
          tagline="Targeted Visibility"
          desc="Boost your search rankings and reach the right audience. We combine data-driven strategies with technical SEO to ensure your business grows online."
          features={["Technical SEO Audit", "Content Strategy", "Performance Marketing", "Social Media Growth"]}
          icons={[
            { icon: <FaSearch />, color: "text-cyan-400", name: "SEO" },
            { icon: <FaChartLine />, color: "text-green-400", name: "Analytics" },
            { icon: <FaCheckCircle />, color: "text-blue-500", name: "Verified" },
          ]}
          images={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GirTYOpmMiv1fQzcUfViE7xHPYimmhRmJQ&s",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
            "data:image/jpeg;base64,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"
          ]}
          reverse={true}
        />

        {/* BLOCK 5: CLOUD SOLUTIONS (Slider Added) */}
        <ServiceBlock 
          title="Cloud & DevOps"
          tagline="Secure Scaling"
          desc="Scale your infrastructure with modern cloud solutions. We ensure 99.9% uptime and robust security through automated CI/CD pipelines."
          features={["AWS & Azure Support", "Docker Containerization", "CI/CD Implementation", "Infrastructure Monitoring"]}
          icons={[
            { icon: <FaAws />, color: "text-orange-400", name: "AWS" },
            { icon: <FaDocker />, color: "text-blue-400", name: "Docker" },
            { icon: <FaShieldAlt />, color: "text-green-500", name: "Security" },
          ]}
          images={[
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhAVFRUVFRUVFxUVFRUVFRUXFRUWFhUVFRYYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0gHyYtLSsrLS0tLS0tLS0rLS0tLSstLS0tLS0rLS0tLS0tLS0tLS0tLS0tKy0tKy0tLS0tLf/AABEIAK0BIgMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAABAgMEBQAG/8QAPBAAAQMCAwUFBgUDAwUAAAAAAQACEQMhBDFBBRJRYXEigZGh8BMyscHR4QZCUnLxFGKyI4KiFSRDktL/xAAbAQEAAwEBAQEAAAAAAAAAAAABAAIDBAUGB//EADcRAAIBAgQDBQcDBAIDAAAAAAABAgMRBBIhMUFRYXGBkbHwEyIyocHR4SNCUgUGFPGCohUkQ//aAAwDAQACEQMRAD8A8qV9efMnFBAKCBAgKCCqEAUCBQQIECGQUqCAlBAKCKUCKgQFAgKCClQRSgRUCAoECCCoEBUEUlDEUoEBQIpQQVBYBQQVAgUIAoEVAioEBQIFCHspXtHigUE5DIKVBAUEAoICgiFQICoIECKggFBAUEJquBqtbvGk8C1y0gXy0RdFkisQggpQIpUITUsKXTBAPA2JUSuEpZNXsQPaQSCIIt4ILrVXQhVWWASggpUEVAgKBFKBFQQBUEVAgQIpVRFKhAFAilQQFDECBFJQQCgns17R4gCoICgRSggFBAggCoIECBBBSUCBQgCUCNTcBn1HJVkr6F4SytNbo2n4Z5pCpvUj7QPgNfvPANnB4k+z6G3RcuSEWot7WsnZfPienHE1arqSp09ZJ5pRUno99LtK/wDoy61FuQBa7UHI8F0KR5zg/iWqKdRhGYhJUQMlQTWxWH/1mWgltx3CCrqN7MzpyXsZWExNENrOpuYHbxJ3sjc6HMZqttdSsPeoqcXaxRfgXEu3bgOIAm5AOYGqrl5GntEks2lym4KhqKUFhSoQBQxFVRFKggKBQqggJVWQUlAgKgilAilBAIEBKBFKhAIE9mvbPFAhiBQgEEAoICUCKUEAoxAgQFBAbqhBhTPDvUsGYIoc05SZyWi4sMtcQfj3LOpRjUVpK50YbG1sPPPSlZ+t1s+8vPq06ohzdx/6hO6eo0PeuR0qtH4fejye67D144nCY5/rfpVH+5fC+1cPWvAzqzIJG9IGuY7l1wWaN7W7Tx60fZ1HG6lbinoyKj2XBwgwQbgEd4Nj0Q4lYzszZGKpVajHu3mOyIHuGYvvG7QNfeRnlFWNoU6bTS0uHF0T/VNEEyCWi5nLLiFpGUctzmVOoqMoNalfE0P+6tInTgZ1So8SsZf+tzMTHsio/wDc74lYPc3p/BHsRWVTRAKgilDIBVEUqCKgQFAikoEVBAFAilQQIYilAilBAKCcgh7Mr22eKBAioIBQQFBAKCBAgKCBayVCN2JBRhNimckDU2Kt8xhSnISoDkkMaJ1IHUgKXBTvtqLus1e1F0N5cmduN/W3xj4ouhvJcGB1C059LhNxU9bMjNG0lTQupO9kQvtkFnJGsU+ZPhdp1GQA4loMlhndNxY8jqsJROqE2tGXKmKoueKxe4QINMAEk6Q/IDutzVvayWhX/HpZHDWz9bmNtPEio8uDQ2dB6z16kqqFpLRFPdSAC1QBC1FhEIVWhEKqKAUFhSUEFKBAoIpQQUoECBFKBAoIEEAoNj2ZXtHigKhBUEOlAiqCgIEChCanS1KlikpcixSFiMrfNWMZvYcUNSQAFCrqcLEL8S0WaJPOw8NVVs0jSlLfQidiHHNxGgAzPQBZuZ1U8KtH4cW+xHChIJBFsxvCepEfNYutZnowwKlBtNXW6ur+u8rvpkd2YNiFbOYSotX6b8GiOVLgojMcRcEg8s0ZhdJSVmi/QxPtOy6AdCLA8jzV1M5amHdP347cRKtLirXNIK5UqsjJZSOiMLkLmeHBZl1Fg3OCSOIfYq6KOIDSVrFCJ9NDRCF7VRoSFyoxQhVSwpQIqCAQIsqCBAilVEUqEAgQKCgSoQ9oV7R4oqCAUEBQQBUEEIEmpN1TYpKXAmDUmdx3ODRJ7hqfshsok5OyKVWq5/TgBYdFm5czrpUbfCrkLmkaFVujb2cluiZj7Ryg6HXI9+RWbWp106iy5elnwfHZ9+q2JelrQDFxaMuPQwszrSdr/TVd32aXMUmdBkQNTexJOQ6BFrEcnLRLh3673ey7FpfxIhS9X05pcykcPfj5/Y72BVXM09g9whqMxZUTTLd5odqRfqPU961jK6PPVH2dRw8Ox+mu4rVaSJSOyNIqmhbofj/Cyua+y1GbRV4sHRLGGwLnmAOp0HMlapnNWUaavItYjYzgOyQ7r2fCbEefJao4ViIv4lb5+NtvLqZmJwT2+8xw6gjzUZeLjL4WmZ1VizaLWKtQLJiQuVGIhVRFQICoQVBYBQQUlAilQTkEsKVBAi4ntJXtHiAUEBKCAUEBKCHMEpI3ZFpoSZMlpt45Zk8hmhsyk3wKT6u++/hyGQWUnZXO7D043UfT/wB7E9JnZ3t3eMZHdgQ6IFiBbje2iwk/etsexRpr2PtMuZ22drKztppZad76XTGY0EXaGkHppbplrOZ4Krdno7/M1p04zhecVCz7ODt2arjf5MpvbMHUiT4q6e5wyj8L4ta/fvOa1DZaMCxRbxE/NZTZ6FCCtZq/T1yLjKVrAkRGR4EcoGa5pSV9WerToycdE7dnNW6K1uT8OKGncWsM+f1TmuHsUpLS3Pr9xBSUzFY0C/g6UsP7viB9FrTldHBiqWSvHs8n+TnYfj9lZyRtGlJ7LxKz8P3rJs3jSbkk1b0h6OHkgRJOnPRMZF5UUk29j0OFwgaIF48yM3HlwC7KaW7PnsRCVV3en0XL7i4mqAL/AGnmuhO5yLBu+iMyrX4EgxpIHgFZ5CssJfdGPtOhvt3hd7R2gNRnPMj4dFhNcgpr2TyvZ7dHy9cTz1ULBnVYrOWYEZQICggpQIqBAUCKVCAQIFBFKCHSpcT2a9o8QBUE5BEWaONc1u5pDgYmYdnaYJ5lVaGxG+k2Jachpef3D8vwUIRmmRmI4cOo8FEDJ2q5kyV/uPj9PkCCfKVWRRfHHtMuFQ7kSMrkGdfP7rNxTOmnWlF5lvz4/nvHa8kgc9ST8VRpLU6IVJVGo+d35ska0kT8iTbis20tGdUIOSzp236vTmyb+ncDBdPidY4LLOrbHYsNUjJRbv4/b1zExbzTpl7RcEN4hs5ujwHes5O7SexpL9GhKrBe8rLnbr9uRn0cW57DTDHPqucHCoHPLgALtDQYjWYmy2jCNrJeR4VTFVnLNKb8WQUNpVWGN8uH6Xdr43CydGPYddH+pYin+7MuT1LJ2tUcYbDByufEpp4dN66mmI/rNe36doLpq/FnoA3EUHBlUgyA6JBsQCDLcl1rDU2vd+Vzyv8AzmJjLNP3ukkvNGjh6bqhDadIuJ4k+FlX/FUU3ORtV/urLZUqSu+bvrySRUrHdJa+nBBvBOY6yo8FFq8ZPzL0P7qm2nUpprpdP6lnZtMF7SLxNtQYMT3hcsqcqckpeJ9BDHYfHYacqL5XT3V35dUaZDoiDHQ8FvGokZOnS1ba+RXfhnHMHuz+Cv7UxqyopPVeu8zsXhSPeIb+4gfGFdTRwzqRfwK/YmZGIq06d94uPBsi/Nxy7gVHUSOWdGrPdWXX7L7mFjqu+4ndDZ0Hx5lYylctCnkja9yhUCoQRlMuMNBJOgupuVdkrsuDY1ciRT82/VXVKRl7eF9yjXouYYc0g81nJNbmqaeqIlUuKSggFBAgiFKggVRFUIe0XtniAQICoICUCA4gMgl27wMqk5xj8TLRg5bImZiJ4EWtoe/mlW3RSSJuzpPQ6K6MpIlpPvb114qNGc1oV8Rgbyy44aju1HNUaNqddaZ9CpHr6qjR1xYzWqjOmGhO0g6eCyd0dsMstWvXYWKbOvwWUjup25si2jiXU2iBnbKRHMarJpWsy9apOCUofj895QwtaHB9J5o1BkWkhpmxgi7M+iIzlDqjilRoYjb9OX/V/WPzRnVqL2uhwgnz5jQjotYyzapnDVoTovLNW9cC9gsBUcx1UMJY0gOdeATlfSfUrppx2OKrNbG5s9pOZnquxHk4hpbHqKG03spezYA3OXD3iDpPBZOknLMzzbu76+PZfl0MPESSSTcrU6ae1kTYbDPaQ4ghpBvkDbQrkxU4ezcXvwPof7dhUli1VhpGPxPhZ6W63JvbP/U7/wBivNhex+gSjS5LwIqric3HvP3WqTMpumldL5fgz8SI5euS1sedUqKSujJxDJ1Hmmx59R9DPrM4KWOaUiq6mUNGWZGhsOBvge92YmxIE7wHl4K9Pjbc5sRwfA2m1DF/mtVJnLZGPtuXU53SRvQHQSAdRPRZVG2tTqoJJ2v3Hniuc6hSoQCBASoIqBAUEAgT2i9w8QBQRClQQIEvt/Cj8TQZWpy8+0LXMbAcGiJMuPqQuLEOMpZZaW2NqVRw2K/4q2E7Z1RoY9z6VRstLwLOBuwkWnIyIzXPTqyhsbrLVWq1Ewz5YHlpDXEgOghpIzAdFyF6NOopLQ4qlOUXYnFWMh43WtzBwvuFtRQtkuSmtOYB6iSqsYwa+F2C1jD+XwJVGkbxdRcfkTU6DOB8R9FRxR106lXp4fkt0sKzn4j6LKUUd1OrW6eD+5YfgKbmkFshZuKOpSrSajK1n0MHaH4fLZdSuOCyaS2JPBTa0dzMZXLew9sj9Lhbu4HoqNJu+zM4zqU1kms0f4v6cu4uYZgILabyAf8AxuMeBycumliMuk/Hh+Dlr/0+Fb38O7v+L37ns/M09nsgwR4/dejF3Wh8tioyi2pKz6m+MITSNS0AgZifDNVzLNlPLvr/AK8tzGxLrqx200B+0qh3GlxIaN1oJsATlGgWU6MJJ3R6OBxNbC1VKjK3RvTsd9LFirn69FeRE/SqldRSzaaercyFzXFbRTPPrY6nHiVsS0nQ21Wh5zxEFd33M6th3HQpRyzxMOZRq0SNPHJJk6qZUqUyVCmZED5BBBuFSSe6ImnuN/WVXWko9rU2LKy2BQx9SnMOMOzE9kqiqTg8xJQjU1e4Xtp1bjsO4aFa3hU20YpNaMz61MtMFZOLW5ewiqIpQQUoECgnIIezK9s8QBUFCoE5BCTDYyrTn2dVzJzgiOsGRKynSjPVlrm9s78UAt9ljGe0pkQXhoLgP7mZOGeWXBc08O1rEezQt1fwydw1tn1mvpu95kh1J0flc13ukf3XH6mqiqJv3tHzHO9pHnKlKH7jm+wqa06h3aZOm693uzoHWOjiumNVpa6rmRwT2KxqGYIuFtmK5Rm1gpmLKLLFOqDqpc0imXaDgqs6IdhqYRu8QAJOgA+CpJHbGagry0XVl6ALZHgc+9ZNHo4dZrS0fLUjqFYtHowizL2hg6dT3m34hYyLTw0ai1PO4vZ76dx2mqimeViMBKGq1J8DtotgPG+OdnDofqt6dSUNYvu4HDiIU8RHLiVm5SXxLv495v0cW2o2abt4atycOrfmvQpYiE9Hoz5nFf0WpRTqU/fhzW67VuvIqOY55gAnW11u9DiTUVdlUXPl06qGz2L+0KRpAs9qHw0OBYSQJiW+fkvNxkVlVRaO9j6b+28XKq54eorpK6vrbbRdHfba5h1cQTmVxJn0cmlsitVngfBXUjmqKXJlOrVK0TOKpfZif1Lh+dw5SYVlJnHOnB7pHDaBye0OHgfEZ+Cups5pYeP7Xb5osBjHt3mkmM2/mHCfqrppnO3ODtIqVTAgCFGax13NDZv4cfVp7/tGgOmGwXHsktJd+m455tGbmzlJDKqouxiYmkWOcxwgtcW2MglpgkHUSsXHkdCaauiKq4nMnoVZOT3LERKhBSgQIIBAgUIe0K9s8UVBAFQQFAioIBQSxs7aNbDv9pRqOY7WMnDg9ps4dVlOnGe4p6WZY/EG3auMe19YMBazcG4CBEkyZJ1KrSpKCaHsMtaCM0oLImplKLJmngKRc4NGZ9EngFaxd1VTi5M9hs7Dta3kYzzdzceH9vzWcrnnzxU5y9WXZ9/wW6u7r4ETHjcKmW534WvNbO3Zp+H3plSrTpn8pH7SfnKzcGe1SxldLSV+1L6WMXGsLCQfHiNCOq55RPZo4mNSCkvXQp+0zWajqXlV2RQxuzWPuOyVbKcVelCeq0ZjVWVKJm4jJwsfFR7ankuMqdROLszR2d+KH0zvX3oIL2HdcQbGdD5K8a00rbrqY18NhsRrVi4y/lDTxW3hYR+1qOf+oc7Q3XnPqVv/AJk/4rxMV/TMIv8A6Styyr7kDtrb53A3dadMyYyk/Jc1SpKesmelhHTo+5RjZcW9W+37I5z8gLTrMeaytuz0XPWKXH1uRVmt6Z/mb3WJMoi5ekUrRpN6ea+rd/EgqRlvgiDxkQPCO9Xv0sc04xs1mUtHzuvp03KLlqee2Rl/r1kko2PhqxY4OGmY4jUc1L2ZnOGeLiX8ezdcQNNdVqc1KV1cn2O2g5r2VKzqb3Rulx/0TGRcJG8dO1AE94xqXWx6FCFKaam9eBVq4phJbAvYF1mciACdw5ZHXNBhltt+StW2eQLEE6t85a4WcIQWUigY0+6LmgkIIKgQFQgJUE9ovbPEFQICgQIIKVCAKBFJUECqxBKgnBQhNTdCUNze2HEPcf7W3yg7zj/iFc5MVJ3jFdX5JebNp2Nj3ek634KygY0ocyIYguvOVrlRxSPSpzUVqc6o7Tz08FlJHdDEQWrIsW8bsVXBpGR/N03cyCuecUWo4mWfNRV778vHmvLgYYxA81jlPTlWbejGGIPFWsZSlETG1JpGRPaaPJx+SzmtDCjJe3/4v6GBVwIJ7JWNjplSUnaJEcA/qOPHoFW/Ur/iztdLT1sTYfDbv5b8TI806LiXp05R/b5jViW6dQeeR+6srMarlBbdqZXdUB081fKzllUjy+YN4RpBMchzIzKq1roKksqvom/TfF25DFkyRMDUFkEetM1W+y+5s4K0pK9lxTja3hv01ZC9gkDPeydl3GNQVZPS5jKkm4rdS2e3c+F1x8SuykXkNGZIHjZabnE5KKbfA09oVQXGL3WrOShG0UZtSSbeuqzkdcdCKo4Ta/wtYdVmXSFLyREmBkJsOmgUEmfiS4EPaHkCzsi3/wCkMFG2xULpzQWFKBFKggQQ9oV7Z4gFGICVURVCAJUEBQKFKBBKCCkoEChB2lWRDRwOPNMEAAyQb71iJiII4lXRhVoqpa7t4fVM0GbYP6G/8o/yV0upksKl+5/L7D/9WccmsB6E+EmFGkjWOHX8n8vsV6+1KmW+f9sN/wAYlZySOqFKmtbX7dfO5nVK5Kwkd0ahD7W3f3erLKxZ1NSRtUq9irqEtQzTdxs7wN/KVScbowjUy1YvuMn2pmeCwcT0I1WmmhzXtAI4xA+MXzVcuups6+lotJcml5214kXtHcR/xPwTZerlFUmne6/6nPM2zJvDW+Fh16qqVtS025PLu3wS8FbT7u5FVonKHW6GPApU7mc8O4tpp6b7O3gyI9nmOXH5FW3fUy+Fc4v13fUHt+Z4RAIjhCq43LRrW4vsauuy17ergqVfKY4Cc45+KigSde9sq226c9OfVtstYSnuDecO0R2RwB16lbxVtTzaks7yrbiV6zv4UbNIRsVnv+31WTZqlwIra+uqqXAb2/hAiHgghznzn4oEQlQgpQJyhD2i9s8UVAgKCClQQFBBVCwCggECKUEAoJwcoQdr1ZMLEgqqykFhjXTmFCurc1m2aIWh2nQqcSzlZEmLo7pA42VGghUvqQyeiuizkTUasH5cRqhoxqK6KmNoFtxdhyPD+08/isHGx00q+dWe5UPriq2NcwntPXHqoxUrNMs0au6SbkG9s/tYnyOixlG6SO6jW9nKUldp8t19drrwe6HfVZO9umREQCD9I8VTLLbgdDq0G1Us3JbWTX4su/ssU6mRm0mYGi1itjz6kopSW13tvYFPDOd7otxNh3krRRuckqkY7st0sOymN4neIj9vWNe9XUUjCVScnbZfMrV8RvHNDZrCCRXI4+CzbNUQuf8AzqqF0K4yoIrggRSUCAoIKUCBQgFCWPaFe2eKKgQFBAKCKSgQFAilAgKCClQQFAgJUEEqXJYO8pclgb6LksIXIbLI9D+D8G1zn1HtkMbLbiCZANtbHzQuZScXUfs4uzZY2u1uJcH0qZEOAgZn9RjuyVmlZNHPTU6Ccajvf16uUdtbPfSa2WwTu+YOSj2L0aim3ZlD2EN3jYfHomxfPd2QKeKAsBM57157slUq6betyJ1Cm64lvS48DfzVXFM0VSpHqRuwbdKg6kGfBVyFlXf8RP6EZmoO4EoyD7Z8EEUmDNzj4D6qZELq1X/tgD2D3WDq7tHzU0QZZy+J/Qiq4onUnn9FGy0aajsRCoeMcdfEKrlYvlTI6lfp1gSqOVy6gkVi5Zmh0qCRlAgQQCBAVCCoEChEcgT2ZXtnigQQUqCAoIKVCwEEAUCKUEFKBQCoWFQQCBASggpKg2FJQJcwO03UgQNRmDuu6TEEciCOiilYMrUlOLs/E2/wrj2hznPkQ1wLjdtwYJaMhpJBHMa3i7qxlUjmqxz2s/sWhiHYqoaT6k33WEdqADO94BO8dStShChK1Fbv0gfiDZrW0Ru1A5waSRYEAHeJ4Rmo72Zz4ecnUalFx7fI8eHjj6+ayzHo2LVDCPff559OKzlWgtzqpYGtVi3FfS/Zf0+BBWYW2I+ivmTWhzOOV2ej+ZCXk/ypclhS4cfoq5iyRE+p1PrgquRZRFdU9D66qrkWykTjzVCwpBCBBvaKChCggpQxAoJxQQUlAgUIBAnKEPZL2zxQFBBSoICgQEoEVAgKCClQRUCAoEVAgJQQUoEBUEUlAilAhZULTLSQRkQYKCNJqzNLYW1zRqbxdaZuJaTed6LjqJPIq0ZczKpSvZxW3rs8S2/ard+o+Wibfr0jsiO13wPgr50ky2Ibq2sn36eu48+99yRlMgWGvKw7lg2apaFzD7VIs4bw046D/dYdeawnST1Wh6WHx84e7P3l8/z9tmi7VxNJ4G8ZBtP5m8J+4jhGayjGcXp69eJ3162FrxTqa8L8V9e6zjwXMy8fhg27HAsmLESDwIz77jmtozb0aseXWwygs0JqS203719VddSkW8Vc5hS7TyVWIHOnP7/dAkZUECCAKgilBAIECBAVCClAgUIcgQKEPZle0eKLKggKCIWUFgFBBSgRZUIcgRCoWAVVkFKBAVBFKBASgRSgRSggCoIqBAgRSgQSghwP8oEf21oAHX68FCWICgsAuQIhKCCqCBAoBUIKqsTlBAggpQIFCAQIFBOQQ9kV7Z4gpQICoIpQICgRSggCoIpQIECKgQFBBUCKVCwpVSAQIpKhAFAiqCAlVEUoECgilBBSgTpQIpQIpUECCAKgilDECCAQICoIqCAUE5BAIYiqEPZFe2eKBBAOKCwChkFKBAoQVBYVQQFVEVQgpQICgRSgRShkAgQFQRUCAoEQoECCAKBFUEBVWIFBFKCCqCBA2AUEFQIFBAUEAUCBQgFBAgQFBAKEP//Z",
            "data:image/jpeg;base64,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"
          ]}
          reverse={false}
        />

        {/* BLOCK 6: AI & MACHINE LEARNING (Slider Added) */}
        <ServiceBlock 
          title="AI & Data Science"
          tagline="Smart Automation"
          desc="Leverage the power of data. We build AI-driven tools and predictive models that help automate tasks and provide deep business insights."
          features={["Custom AI Chatbots", "Predictive Analytics", "NLP Integration", "Machine Learning Models"]}
          icons={[
            { icon: <FaRobot />, color: "text-cyan-400", name: "AI" },
            { icon: <SiPython />, color: "text-yellow-400", name: "Python" },
            { icon: <SiTensorflow />, color: "text-orange-500", name: "ML" },
          ]}
          images={[
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
          ]}
          reverse={true}
        />

        {/* BLOCK 7: QUALITY ASSURANCE (Slider Added) */}
        <ServiceBlock 
          title="QA & Testing"
          tagline="Bug-Free Reality"
          desc="We ensure your software is flawless. Our team performs rigorous automated and manual testing to deliver a rock-solid user experience."
          features={["Automated Testing", "Performance Load Testing", "Manual QA Audit", "Regression Testing"]}
          icons={[
            { icon: <SiSelenium />, color: "text-green-500", name: "Selenium" },
            { icon: <SiJest />, color: "text-red-400", name: "Jest" },
            { icon: <FaShieldAlt />, color: "text-cyan-400", name: "Quality" },
          ]}
          images={[
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
          ]}
          reverse={false}
        />

      </div>

      {/* --- COMPACT & REFINED FINAL CTA --- */}
<section className="py-20 px-6 relative overflow-hidden">
  
  {/* Subtler Background Accents */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>

  <div className="max-w-4xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-[#112240]/80 to-[#0a192f]/80 backdrop-blur-xl border border-gray-700/50 rounded-[2rem] p-8 md:p-14 text-center shadow-2xl overflow-hidden"
    >
      {/* Decorative Corner Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>

      {/* Small Icon Header */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6 border border-cyan-500/20"
      >
        <FaRocket />
      </motion.div>

      <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Scale Up?</span>
      </h2>

      <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
        Don’t settle for average. Your business deserves a high-end digital ecosystem. 
        Whether it's a fresh idea or a complex system, we provide the expertise to make it happen.
      </p>

      {/* Balanced Button Layout */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <Link to="/contact">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(34, 211, 238, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 text-[#0a192f] px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all"
          >
            Start Your Journey
          </motion.button>
        </Link>
        
        <Link to="/portfolio">
          <motion.button 
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)", color: "#fff" }}
            className="text-gray-400 px-8 py-4 rounded-xl font-bold border border-gray-700 transition-all"
          >
            See Our Work
          </motion.button>
        </Link>
      </div>

      {/* Sub-text */}
      <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
        Consultation is free of cost
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

// --- REUSABLE SERVICE BLOCK WITH SLIDER & TYPEWRITER ---
const ServiceBlock = ({ title, tagline, desc, features, icons, images, reverse }) => {
  const [currentImg, setCurrentImg] = useState(0);

  // Slider Logic
  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [images.length]);

  // Typewriter Setup
  const words = desc.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.015, delayChildren: 0.2 } },
  };
  const child = {
    visible: { opacity: 1, transition: { duration: 0.01 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      
      {/* 1. Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8"
      >
        <div>
          <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-3">{tagline}</h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">{title}</h2>
        </div>
        
        {/* Fast Typewriter Description */}
        <motion.p 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 text-lg leading-relaxed min-h-[100px]"
        >
          {words.map((char, index) => (
            <motion.span key={index} variants={child}>{char}</motion.span>
          ))}
        </motion.p>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-200">
              <FaCheckCircle className="text-cyan-500 shrink-0 text-lg" />
              <span className="text-sm font-semibold">{item}</span>
            </div>
          ))}
        </div>

        {/* Detailed Tech Icons */}
        <div className="pt-8">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-5">Tech Stack & Tools</p>
          <div className="flex flex-wrap gap-8">
            {icons.map((tech, i) => (
              <div key={i} className="group relative">
                <div className={`text-4xl ${tech.color} opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300`}>
                  {tech.icon}
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 2. Image Slider Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 relative w-full"
      >
        <div className="relative h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-700/50">
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentImg}
              src={images[currentImg]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
              alt={title}
            />
          </AnimatePresence>
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 to-transparent"></div>
          
          {/* Slider Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImg ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40'}`} />
              ))}
            </div>
          )}
        </div>
        
        {/* Decorative Background Glow */}
        <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl -z-10 rounded-full opacity-50"></div>
      </motion.div>

    </div>
  );
};

export default Services;