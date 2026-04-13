import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">ABIN <span className="gradient-text">ROY</span></a>
        
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn btn-primary btn-sm">Contact</a>
        </div>
      </div>

      <style jsx="true">{`
        .fixed-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
        }

        .fixed-nav.scrolled {
          background: var(--nav-bg);
          backdrop-filter: blur(12px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--text-main);
          letter-spacing: -0.05em;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a:not(.btn) {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .nav-links a:not(.btn):hover {
          color: var(--primary);
        }

        .btn-sm {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
