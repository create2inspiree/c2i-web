import React from 'react';
import './HowItWorks.css';

// Clean B&W SVG step icons
const StepIcons = [
  /* Assessment */ <svg key="a" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="3" width="20" height="30" rx="2" /><path d="M14 15l3 3 5-5" /><line x1="14" y1="23" x2="22" y2="23" /><line x1="14" y1="27" x2="19" y2="27" /></svg>,
  /* Study Plan */ <svg key="b" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="26" height="26" rx="2" /><line x1="5" y1="12" x2="31" y2="12" /><line x1="12" y1="5" x2="12" y2="12" /><line x1="11" y1="18" x2="25" y2="18" /><line x1="11" y1="23" x2="21" y2="23" /></svg>,
  /* Live Class */ <svg key="c" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="7" width="24" height="18" rx="2" /><line x1="2" y1="29" x2="34" y2="29" /><circle cx="18" cy="16" r="4" /><path d="M15.5 16l1.8 1.8L21 14" /></svg>,
  /* Progress */ <svg key="d" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5,27 12,20 18,23 24,14 31,9" fill="none" /><line x1="5" y1="31" x2="31" y2="31" /><line x1="5" y1="5" x2="5" y2="31" /><circle cx="31" cy="9" r="2" fill="currentColor" /></svg>,
  /* Parents */ <svg key="e" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="10" r="5" /><circle cx="8" cy="14" r="3.5" /><circle cx="28" cy="14" r="3.5" /><path d="M12 33V27c0-2.5 2.5-5 6-5s6 2.5 6 5v6" /><path d="M3 33v-4c0-2 2-4 5-4" /><path d="M33 33v-4c0-2-2-4-5-4" /></svg>
];

const steps = [
  { title: 'Assessment Test', num: '01' },
  { title: 'Personalized Study Plan', num: '02' },
  { title: 'Live Online Classes', num: '03' },
  { title: 'Weekly Progress Reports', num: '04' },
  { title: 'Parent Interaction', num: '05' }
];

// How It Works section with visual steps
function HowItWorks() {
  return (
    <section className="howitworks section-animate" id="howitworks" aria-labelledby="howitworks-title">
      <h2 id="howitworks-title" className="line-draw">How It Works</h2>
      <div className="section-divider" aria-hidden="true"></div>
      <div className="steps stagger-children">
        {steps.map((step, idx) => (
          <div className="step" key={idx} tabIndex={0} aria-label={step.title}>
            <span className="step-number" aria-hidden="true">{step.num}</span>
            <span className="step-icon" aria-label={step.title}>{StepIcons[idx]}</span>
            <span className="step-title">{step.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
