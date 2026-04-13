import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="contact-subtitle text-center">Interested in working together or just want to say hi? My inbox is always open!</p>

        <div className="contact-grid">
          <div className="contact-card glass">
            <div className="contact-item">

              <div>
                <h4>Email</h4>
                <p>abinroy4321@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">

              <div>
                <h4>Mobile</h4>
                <p>+91-9207432442</p>
              </div>
            </div>

            <div className="contact-item">

              <div>
                <h4>Location</h4>
                <p>Kerala, India</p>
              </div>
            </div>
          </div>

          <div className="social-links-grid">
            <a href="mailto:abinroy4321@gmail.com" className="social-card glass">
              <span>Send an Email</span>
            </a>
            <a href="tel:+919207432442" className="social-card glass">
              <span>Call Me</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-subtitle {
          color: var(--text-muted);
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-card {
          padding: 2.5rem;
          display: grid;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .icon {
          font-size: 2rem;
          background: rgba(99, 102, 241, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
        }

        .contact-item h4 {
          color: var(--primary);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
        }

        .contact-item p {
          color: var(--text-main);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .social-links-grid {
          display: grid;
          gap: 1.5rem;
        }

        .social-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-decoration: none;
          color: var(--text-main);
          font-weight: 700;
          font-family: var(--font-heading);
          transition: var(--transition);
        }

        .social-card:hover {
          background: var(--primary);
          border-color: var(--primary);
          transform: translateX(10px);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
