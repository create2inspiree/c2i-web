import React from 'react';
import './WhyChooseUs.css';

// Clean B&W SVG feature icons
const PointIcons = [
  /* Grad Cap */ <svg key="g" width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3L2 9l12 6 12-6L14 3z" /><path d="M6 12v8s3 5 8 5 8-5 8-5v-8" /><line x1="26" y1="9" x2="26" y2="19" /></svg>,
  /* AI Chip */ <svg key="ai" width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="16" height="16" rx="3" /><circle cx="11" cy="14" r="1.5" fill="currentColor" /><circle cx="17" cy="14" r="1.5" fill="currentColor" /><line x1="3" y1="11" x2="6" y2="11" /><line x1="3" y1="17" x2="6" y2="17" /><line x1="22" y1="11" x2="25" y2="11" /><line x1="22" y1="17" x2="25" y2="17" /><line x1="11" y1="3" x2="11" y2="6" /><line x1="17" y1="3" x2="17" y2="6" /></svg>,
  /* Group */ <svg key="gr" width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="9" r="4" /><circle cx="18" cy="9" r="4" /><path d="M3 25v-4c0-2 3-4 7-4 1.5 0 2.8.3 3.8.8" /><path d="M25 25v-4c0-2-3-4-7-4-1.5 0-2.8.3-3.8.8" /></svg>,
  /* Attention */ <svg key="at" width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="10" r="5" /><path d="M6 26V22c0-3 3-5 8-5s8 2 8 5v4" /><path d="M20 4l2-2" /><path d="M22 7l3-1" /><path d="M22 11l2 1" /></svg>,
  /* Search */ <svg key="se" width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><line x1="18" y1="18" x2="25" y2="25" strokeWidth="2.5" /><path d="M9 12l2 2 4-4" /></svg>
];

const points = [
  { text: 'IIT/NIT Mentors' },
  { text: 'AI-Based Progress Tracking' },
  { text: 'Small Batch Size' },
  { text: 'Personal Attention' },
  { text: 'Concept-Based Learning' }
];

// Why Choose Us section with bullet points/icons
function WhyChooseUs() {
  return (
    <section className="whychooseus section-animate" id="whychooseus" aria-labelledby="whychooseus-title">
      <h2 id="whychooseus-title" className="line-draw">Why Choose Us</h2>
      <div className="section-divider" aria-hidden="true"></div>
      <ul className="choose-list stagger-children" aria-label="Why Choose Us Features">
        {points.map((item, idx) => (
          <li key={idx} className="choose-item" tabIndex={0} aria-label={item.text}>
            <span className="choose-icon" aria-label={item.text}>{PointIcons[idx]}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WhyChooseUs;
