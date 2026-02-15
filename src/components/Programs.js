import React from 'react';
import './Programs.css';

const programs = [
  {
    class: 'Class 6',
    subjects: ['Mathematics', 'Science (Physics & Chemistry)'],
    details: 'Small batches | Weekday classes | India & NRI students'
  },
  {
    class: 'Class 7',
    subjects: ['Mathematics', 'Science (Physics & Chemistry)'],
    details: 'Small batches | Weekday classes | India & NRI students'
  },
  {
    class: 'Class 8',
    subjects: ['Mathematics', 'Science (Physics & Chemistry)'],
    details: 'Small batches | Weekday classes | India & NRI students'
  }
];

// Programs section with cards for each class
function Programs() {
  return (
    <section className="programs section-animate" id="programs" aria-labelledby="programs-title">
      {/* Decorative background grid */}
      <div className="programs-decoration" aria-hidden="true">
        <svg className="programs-grid-svg" viewBox="0 0 600 400" fill="none" preserveAspectRatio="none">
          {/* Vertical lines */}
          {[...Array(7)].map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="400" stroke="#000" strokeWidth="0.3" opacity="0.03" />
          ))}
          {/* Horizontal lines */}
          {[...Array(5)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="600" y2={i * 100} stroke="#000" strokeWidth="0.3" opacity="0.03" />
          ))}
        </svg>
      </div>
      <h2 id="programs-title" className="line-draw">Our Programs</h2>
      <div className="section-divider" aria-hidden="true"></div>
      <div className="program-cards grid stagger-children">
        {programs.map((prog, idx) => (
          <div className="program-card card" key={idx} tabIndex={0} aria-label={prog.class}>
            <h3>{prog.class}</h3>
            <ul>
              {prog.subjects.map((sub, i) => <li key={i} tabIndex={0}>{sub}</li>)}
            </ul>
            <p>{prog.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;
