import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="grid grid-2">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              I am a dedicated Junior Software Developer with a background in Physics and a passion
              for building elegant solutions to complex problems. My journey into tech began with
              my Master of Computer Applications, where I developed a strong foundation in
              algorithms and software engineering principles.
            </p>
            <p>
              Currently, I am honing my skills at Metaveo.ai (previously MWT Technologies) working on large-scale ERP
              applications and API development. I thrive in collaborative environments and
              am always looking for opportunities to learn and grow.
            </p>
          </div>

          <div className="education-column">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>Master of Computer Applications</h4>
                <p className="timeline-meta">St. Joseph's College of Engineering & Technology | Oct 2021 - June 2023</p>
                <p className="timeline-detail">CGPA: 7.31</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>BSc Physics</h4>
                <p className="timeline-meta">Henry Baker College, Melukavu | July 2016 - Aug 2019</p>
                <p className="timeline-detail">CGPA: 7.06</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--text-main);
        }

        .about-text p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .timeline {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid var(--glass-border);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .timeline-dot {
          position: absolute;
          left: calc(-2rem - 6px);
          top: 8px;
          width: 10px;
          height: 10px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .timeline-item h4 {
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .timeline-meta {
          font-size: 0.9rem;
          color: var(--primary);
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .timeline-detail {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};

export default About;
