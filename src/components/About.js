import React from 'react';
import './About.css';

// About section describing C2I and mentor background
function About() {
  return (
    <section className="about section-animate" id="about" aria-labelledby="about-title">
      {/* Decorative geometric background */}
      <div className="about-decoration" aria-hidden="true">
        <svg className="about-deco about-deco-circles" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="#000" strokeWidth="0.5" opacity="0.04" />
          <circle cx="150" cy="150" r="100" stroke="#000" strokeWidth="0.5" opacity="0.03" />
          <circle cx="150" cy="150" r="60" stroke="#000" strokeWidth="0.5" opacity="0.025" />
        </svg>
        <svg className="about-deco about-deco-lines" viewBox="0 0 200 200" fill="none">
          <line x1="0" y1="0" x2="200" y2="200" stroke="#000" strokeWidth="0.5" opacity="0.04" />
          <line x1="0" y1="50" x2="200" y2="200" stroke="#000" strokeWidth="0.5" opacity="0.03" />
          <line x1="50" y1="0" x2="200" y2="200" stroke="#000" strokeWidth="0.5" opacity="0.03" />
        </svg>
        <div className="about-dots-pattern">
          {[...Array(16)].map((_, i) => <span key={i} className="about-dot" />)}
        </div>
      </div>
      <h2 id="about-title" className="line-draw">About Create to Inspire (C2I)</h2>
      <div className="section-divider" aria-hidden="true"></div>
      <p className="about-lead reveal-up">
        <strong>Trusted by parents in India & worldwide.</strong> C2I is an online education platform focused on concept clarity and small batch learning. Our human-driven, AI-enabled model ensures every student gets personal attention and real progress. Classes are led by experienced mentors from IIT/NIT.
      </p>
      <ul className="about-list stagger-children reveal-up" aria-label="C2I Features" data-delay="200">
        <li tabIndex={0}><strong>Concept clarity</strong> for Maths & Science</li>
        <li tabIndex={0}><strong>Small batch learning</strong> for personal attention</li>
        <li tabIndex={0}><strong>Human-driven, AI-enabled</strong> model</li>
        <li tabIndex={0}><strong>IIT/NIT mentor</strong> background</li>
      </ul>
      <div className="about-extra reveal-up" data-delay="400">
        <span className="about-badge">100% Satisfaction Guarantee</span>
        <span className="about-badge">Transparent Progress Reports</span>
      </div>
    </section>
  );
}

export default About;
