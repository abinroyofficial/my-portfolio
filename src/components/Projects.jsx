import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website (NodeJS)",
      description: "A full-stack e-commerce platform featuring product management and user authentication. Built with Node.js and MongoDB.",
      tech: ["Node JS", "Express JS", "MongoDB", "Bootstrap"],
      status: "In Progress"
    },
    {
      "title": "Event Management Website",
      "description": "A modern event management platform that allows users to browse, book, and manage events seamlessly. Includes features for uploading and showcasing event-related work, secure user authentication, and real-time interactions.",
      "tech": ["React", "Django", "Python", "PostgreSQL"],
      "status": "Completed"
    },
    {
      title: "E-RATION",
      description: "MCA Main Project focusing on digitizing the traditional ration distribution system. Emphasizes efficiency and transparency.",
      tech: ["Python", "Django", "MySQL", "Javascript"],
      status: "Academic level project"
    },
    {
      title: "Equipment Rental System",
      description: "A specialized platform for managing equipment bookings and rentals. Developed as part of MCA Mini Project.",
      tech: ["Python", "Django", "MySQL", "Javascript"],
      status: "Academic level project"
    },
    {
      "title": "Employee Management System",
      "description": "Comprehensive employee management system built with Laravel, enabling efficient handling of employee records, attendance tracking, role-based access, and payroll management. Designed for scalability with a clean and user-friendly interface.",
      "tech": ["Laravel", "PHP", "MySQL", "Bootstrap", "Javascript"],
      "status": "Completed"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="grid grid-2 project-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card glass animate-fade-in">
              <div className="project-status-badge">{project.status}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, j) => (
                  <span key={j} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .project-grid {
          margin-top: 3rem;
        }

        .project-card {
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
        }

        .project-status-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--primary);
          color: white;
          padding: 0.25rem 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          border-bottom-left-radius: 1rem;
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .project-card p {
          color: var(--text-muted);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          font-size: 0.75rem;
          padding: 0.2rem 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          border-radius: 2rem;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
