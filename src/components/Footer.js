import React from 'react';
import './Footer.css';

// Footer with brand, tagline, copyright, social icons
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-brand reveal-up" aria-label="Create to Inspire (C2I)">Create to Inspire (C2I)</div>
      <div className="footer-tagline reveal-up" data-delay="100">Empowering Young Minds with Concept-Based Learning</div>
      <div className="footer-social stagger-children reveal-up" data-delay="200" aria-label="Social Media Links">
        <a className="social-icon" aria-label="Facebook" tabIndex={0} href="#" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
        </a>
        <a className="social-icon" aria-label="Twitter" tabIndex={0} href="#" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
        </a>
        <a className="social-icon" aria-label="Instagram" tabIndex={0} href="#" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
        </a>
      </div>
      <div className="footer-copyright reveal-up" data-delay="300">&copy; {new Date().getFullYear()} Create to Inspire (C2I). All rights reserved.</div>
    </footer>
  );
}

export default Footer;
