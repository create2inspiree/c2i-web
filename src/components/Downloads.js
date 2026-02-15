import React from 'react';
import './Downloads.css';

const documents = [
  {
    title: 'C2I Brochure',
    description: 'Overview of our philosophy, mentors, and approach.',
    url: 'https://drive.google.com/file/d/EXAMPLE_BROCHURE/view?usp=sharing',
  },
  {
    title: 'Program Overview',
    description: 'Details of our programs for Classes 6–8.',
    url: 'https://drive.google.com/file/d/EXAMPLE_PROGRAM/view?usp=sharing',
  },
  {
    title: 'Syllabus',
    description: 'Download the latest syllabus for Maths & Science.',
    url: 'https://drive.google.com/file/d/EXAMPLE_SYLLABUS/view?usp=sharing',
  },
  {
    title: 'Sample Worksheets',
    description: 'Try our sample worksheets for concept clarity.',
    url: 'https://drive.google.com/file/d/EXAMPLE_WORKSHEETS/view?usp=sharing',
  },
];

function Downloads() {
  return (
    <section className="downloads section-animate" id="downloads" aria-labelledby="downloads-title">
      <h2 id="downloads-title" className="line-draw">Resources & Downloads</h2>
      <div className="section-divider" aria-hidden="true"></div>
      <div className="downloads-list stagger-children">
        {documents.map((doc, idx) => (
          <div className="download-card" key={idx} tabIndex={0} aria-label={doc.title}>
            <div className="download-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h10l6 6v16H6V3z" /><path d="M16 3v6h6" /><line x1="10" y1="15" x2="18" y2="15" /><line x1="10" y1="19" x2="18" y2="19" /><line x1="10" y1="23" x2="14" y2="23" /></svg>
            </div>
            <div className="download-info">
              <div className="download-title">{doc.title}</div>
              <div className="download-desc">{doc.description}</div>
            </div>
            <a
              href={doc.url}
              className="btn btn-secondary download-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download ${doc.title}`}
            >
              <span>Download PDF</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Downloads;
