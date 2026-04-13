import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="badge"> Software Developer</div>
          <h1>
            Building Digital Experiences <br />
            With <span className="gradient-text">Precision & Purpose</span>
          </h1>
          <p className="hero-description">
            Hi, I'm <span className="highlight">Abin Roy</span>. Based in Kerala India, Full-stack developer crafting robust web applications with modern technologies. Experienced in Django,Laravel,React & more. Currently Works at Metaveo.ai (previously MWT Technologies). Passionate about problem-solving and continuous learning.
          </p>
          <div className="hero-socials">
            <a href="https://github.com/abinroyofficial" target="_blank" rel="noopener noreferrer" className="social-icon-box glass" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.25.1-2.61 0 0 .83-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.92-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.36.1 2.61.64.69 1.03 1.57 1.03 2.65 0 3.82-2.32 4.66-4.53 4.9.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" /></svg>
            </a>
            <a href="https://linkedin.com/in/abin-roy-34a74b295" target="_blank" rel="noopener noreferrer" className="social-icon-box glass" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3.7-2.7 1.6v-1.2H10v7.6h3.1v-4.4c0-.7.6-1.3 1.3-1.3a1.3 1.3 0 0 1 1.3 1.3v4.4h2.8M6.7 8.7c1 0 1.7-.8 1.7-1.7s-.8-1.7-1.7-1.7-1.7.8-1.7 1.7.8 1.7 1.7 1.7m1.5 9.8V10.3H5.2v8.2h3z" /></svg>
            </a>
            <a href="mailto:abinroy4321@gmail.com" className="social-icon-box glass" title="Email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
            </a>
            <a href="tel:+919207432442" className="social-icon-box glass" title="Call">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            </a>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
            <a href="/Abin_Roy_Resume.pdf" download="Abin_Roy_Resume.pdf" className="btn btn-resume">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 16l-5-5h3V4h4v7h3l-5 5zm9-1v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-4h2v4h14v-4h2z" /></svg>
              Resume
            </a>
          </div>

        </div>
      </div>

      <div className="hero-background">
        <img src="/hero-bg.png" alt="Background" className="hero-bg-img" />
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <style jsx="true">{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.1;
          filter: grayscale(100%) brightness(0.5);
        }

        .hero-content {
          max-width: 800px;
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(16, 185, 129, 0.1);
          color: var(--primary);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 2rem;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .highlight {
          color: var(--text-main);
          font-weight: 600;
        }

        .hero-socials {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .social-icon-box {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition);
          text-decoration: none;
        }

        .social-icon-box svg {
          width: 24px;
          height: 24px;
        }

        .social-icon-box:hover {
          color: var(--primary);
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 3rem;
        }

        .btn-resume {
          background: transparent;
          color: var(--secondary);
          border: 1px solid var(--secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
        }

        .btn-resume:hover {
          background: rgba(6, 182, 212, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
        }

        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-top: 2rem;
          opacity: 0.7;
        }

        .scroll-icon {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .blob {
          position: absolute;
          width: 500px;
          height: 500px;
          background: var(--primary);
          filter: blur(120px);
          opacity: 0.12;
          border-radius: 50%;
        }

        .blob-1 {
          top: -100px;
          right: -100px;
        }

        .blob-2 {
          bottom: -150px;
          left: -150px;
          background: var(--secondary);
          opacity: 0.08;
        }

        @media (max-width: 768px) {
          .hero-cta {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
