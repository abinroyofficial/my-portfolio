import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      skills: ["Python", "PHP", "JavaScript"]
    },
    {
      title: "Frameworks",
      skills: ["Laravel", "Django", "React", "Jquery", "Bootstrap"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Source Tree", "Postman", "Linux", "Claude Code"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        <div className="grid grid-3 skill-grid">
          {categories.map((cat, i) => (
            <div key={i} className="skill-card glass">
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .text-center { text-align: center; }
        
        .skill-grid {
          margin-top: 3rem;
        }

        .skill-card {
          padding: 2rem;
          transition: var(--transition);
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .skill-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .skill-tag:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        @media (max-width: 992px) {
          .grid-3 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
