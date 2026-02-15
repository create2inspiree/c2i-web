import React from 'react';
import './Hero.css';

// Hero section with headline, subheading, CTA buttons
function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      {/* Decorative geometric background */}
      <div className="hero-decoration" aria-hidden="true">
        <svg className="hero-shape hero-circles" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="#000" strokeWidth="0.5" opacity="0.07" />
          <circle cx="200" cy="200" r="140" stroke="#000" strokeWidth="0.5" opacity="0.05" />
          <circle cx="200" cy="200" r="90" stroke="#000" strokeWidth="0.5" opacity="0.04" />
        </svg>
        <svg className="hero-shape hero-diamond" viewBox="0 0 120 120" fill="none">
          <rect x="20" y="20" width="80" height="80" stroke="#000" strokeWidth="0.5" opacity="0.06" transform="rotate(45 60 60)" />
        </svg>
        <svg className="hero-shape hero-cross" viewBox="0 0 60 60" fill="none">
          <line x1="0" y1="30" x2="60" y2="30" stroke="#000" strokeWidth="0.5" opacity="0.06" />
          <line x1="30" y1="0" x2="30" y2="60" stroke="#000" strokeWidth="0.5" opacity="0.06" />
        </svg>
        <div className="hero-dots-grid">
          {[...Array(25)].map((_, i) => <span key={i} className="dot" />)}
        </div>
      </div>
      <div className="hero-content reveal-up">
        <h1 id="hero-title" className="text-reveal">
          <span className="text-reveal-inner">AI-Powered Learning with Passionate IIT/NIT Mentors</span>
        </h1>
        <p className="hero-sub reveal-up" data-delay="150">Personalized online Maths & Science coaching for Classes 6–8</p>
        <div className="hero-buttons reveal-up" data-delay="450">
          <a href="#contact" className="btn btn-cta" tabIndex={0} aria-label="Book Free Demo"><span>Book Free Demo</span></a>
          <a href="#contact" className="btn btn-secondary" tabIndex={0} aria-label="Contact Us"><span>Contact Us</span></a>
        </div>
        <div className="hero-note reveal-up" data-delay="550">No payment required for demo. Limited seats per batch.</div>
      </div>
      <div className="hero-sticky-cta">
        <a href="#contact" className="btn btn-cta" aria-label="Book Free Demo"><span>Book Free Demo</span></a>
      </div>
      {/* Decorative wave divider */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" fill="var(--black)">
          <path d="M0,50 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,50 Z" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
