import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Developer (Full-time)",
      company: "Metaveo.ai Pvt Ltd (previously MWT Technologies Pvt. Ltd.)",
      location: "Kochi, Kerala",
      date: "April 2025 - Present",
      responsibilities: [
        "Developed and maintained Laravel based website for placement purpose of college called 'Clinsoft'.",
        "Developed and maintained Laravel based web application for handling raw materials, production and sales as an independent system for managing customers, suppliers, inventory of the company called 'max-worth'.",
        "Architected and developed scalable APIs for the 'Clinsoft' mobile application to support core mobile functionalities.",
        "Engineered and sustained a high-performance Complaint Management System for IHNA and IHM students utilizing Python FastAPI, React and PostgreSQL.",
        "Performed rigorous bug fixes, implemented system modifications, and oversaw deployment processes to ensure seamless and reliable software updates.",
        "Optimized backend operations and executed complex database queries to enhance system performance, responsiveness, and data integrity.",
        "Collaborated with cross-functional teams to analyze technical requirements, design robust solutions, and implement features aligned with strategic business objectives."
      ]
    },
    {
      title: "Software Developer Trainee",
      company: "Metaveo.ai Pvt Ltd (previously MWT Technologies Pvt. Ltd.)",
      location: "Kochi, Kerala",
      date: "Oct 2024 - April 2025",
      responsibilities: [
        "Training in various front-end and back-end technologies to enhance my technical knowledge and improve my development skills."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title text-center">Professional Journey</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-card glass animate-fade-in">
              <div className="exp-header">
                <div className="exp-title-group">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <div className="exp-meta">
                  <span className="location">{exp.location}</span>
                  <span className="date">{exp.date}</span>
                </div>
              </div>

              <div className="exp-body">
                <ul>
                  {exp.responsibilities.map((resp, j) => (
                    <li key={j}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .experience-timeline {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .experience-card {
          padding: 2.5rem;
          transition: var(--transition);
        }

        .experience-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1.5rem;
        }

        .exp-title-group h3 {
          font-size: 1.5rem;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .company {
          font-size: 1rem;
          color: var(--primary);
          font-weight: 600;
        }

        .exp-meta {
          text-align: right;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .exp-meta span {
          display: block;
        }

        .exp-body ul {
          list-style: none;
        }

        .exp-body li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .exp-body li::before {
          content: "⚡";
          position: absolute;
          left: 0;
          font-size: 0.8rem;
          top: 0.2rem;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .exp-header {
            flex-direction: column;
            gap: 1rem;
          }
          .exp-meta {
            text-align: left;
          }
          .experience-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
