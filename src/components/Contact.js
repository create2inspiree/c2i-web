import React from 'react';
import './Contact.css';

// Google Form embed (replace with your actual form link)
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/EXAMPLE_FORM_ID/viewform?embedded=true';

function Contact() {
  return (
    <section className="contact section-animate" id="contact" aria-labelledby="contact-title">
      {/* Decorative background */}
      <div className="contact-decoration" aria-hidden="true">
        <svg className="contact-deco contact-deco-ring" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#000" strokeWidth="0.5" opacity="0.04" />
          <circle cx="100" cy="100" r="60" stroke="#000" strokeWidth="0.5" opacity="0.03" />
        </svg>
      </div>
      <h2 id="contact-title" className="line-draw">Book Free Demo</h2>
      <div className="section-divider" aria-hidden="true"></div>
      <div className="contact-container reveal-up" data-delay="200">
        <div className="contact-form-embed">
          <iframe
            title="Book Free Demo Form"
            src={GOOGLE_FORM_URL}
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            style={{ background: 'var(--white)', border: '1px solid var(--lighter)' }}
            aria-label="Book Free Demo Form"
          >
            Loading…
          </iframe>
        </div>
        <div className="contact-info">
          <p>Email: <a href="mailto:c2i.admissions@gmail.com">c2i.admissions@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
