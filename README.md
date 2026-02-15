# Create to Inspire (C2I) - Online Education SPA

A modern, responsive single-page application for an online education startup targeting parents of students in classes 6–8 (India & NRI).

## Features
- Minimal, trustworthy, education-focused design
- Mobile-first, fully responsive
- Smooth scroll navigation
- Clean, reusable React components
- Accessible and SEO-friendly
- No backend integration required

## Sections
- Header / Navbar (sticky, logo, navigation)
- Hero (headline, subheading, CTA)
- About (platform, mentor background)
- Programs (cards for classes 6–8)
- How It Works (visual steps)
- Why Choose Us (bullets/icons)
- Contact (form, info)
- Footer (brand, tagline, copyright, social icons)

## Tech Stack
- React
- HTML, CSS, JavaScript
- Google Fonts (Inter)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

## File Structure
```
C2I-1/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── App.js
│   ├── styles/
│   │   └── global.css
│   └── components/
│       ├── Header.js / Header.css
│       ├── Hero.js / Hero.css
│       ├── About.js / About.css
│       ├── Programs.js / Programs.css
│       ├── HowItWorks.js / HowItWorks.css
│       ├── WhyChooseUs.js / WhyChooseUs.css
│       ├── Contact.js / Contact.css
│       ├── Footer.js / Footer.css
│       ├── ScrollToSection.js
│       └── LogoPlaceholder.js
├── package.json
└── README.md
```

## Accessibility & SEO
- Semantic HTML
- ARIA labels for icons
- Responsive design
- Meta tags in index.html

## License
MIT
