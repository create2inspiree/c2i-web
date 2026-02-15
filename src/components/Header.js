import React from 'react';
import './Header.css';
import logo from '../images/logo_1_1_without_bg.png';

// Sticky header with logo and navigation
function Header() {
  return (
    <header className="header" role="banner">
      <div className="logo logo-with-img" aria-label="Create to Inspire">
        <img src={logo} alt="Logo" className="header-logo-img" />
        <span className="logo-text">create to inspire</span>
      </div>
      <nav role="navigation" aria-label="Main navigation">
        <ul>
          <li><a href="#home" className="navbar-link" tabIndex={0}>Home</a></li>
          <li><a href="#about" className="navbar-link" tabIndex={0}>About</a></li>
          <li><a href="#programs" className="navbar-link" tabIndex={0}>Programs</a></li>
          <li><a href="#mentors" className="navbar-link" tabIndex={0}>Mentors</a></li>
          <li><a href="#howitworks" className="navbar-link" tabIndex={0}>How It Works</a></li>
          <li><a href="#downloads" className="navbar-link" tabIndex={0}>Resources</a></li>
          <li><a href="#contact" className="navbar-link" tabIndex={0}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
