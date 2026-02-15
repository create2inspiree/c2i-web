import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Marquee from './components/Marquee';
import About from './components/About';
import Programs from './components/Programs';
import Mentors from './components/Mentors';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Downloads from './components/Downloads';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { revealSections, initScrollProgress } from './utils/scrollReveal';

// Main App component rendering all sections
function App() {
  useEffect(() => {
    // Initialize scroll-triggered reveal animations
    revealSections();
    // Initialize scroll progress indicator
    initScrollProgress();
  }, []);

  return (
    <div className="page-transition">
      {/* Subtle grain overlay for editorial texture */}
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Marquee />
        <About />
        <Programs />
        <Mentors />
        <HowItWorks />
        <WhyChooseUs />
        <Downloads />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
