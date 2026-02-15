import React from 'react';
import './Marquee.css';

const items = [
  'IIT Bombay',
  'NIT Warangal',
  'IIT Madras',
  'NIT Trichy',
  'AI-Powered',
  'Small Batches',
  'Concept Clarity',
  'Personal Attention',
];

function Marquee() {
  // Double the items for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((text, idx) => (
          <span className="marquee-item" key={idx}>
            <svg className="marquee-dot" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
              <rect width="8" height="8" />
            </svg>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
