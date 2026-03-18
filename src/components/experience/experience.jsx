import React from 'react';
import './experience.css';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Software Engineer",
      company: "BizCredence",
      period: "Feb 2026 – Present",
      tech: ["React", "D3.js", "Three.js", "JavaScript", "CSV"],
      points: [
        "Built interactive dashboards using D3.js with React",
        "Developed 3D visualizations using Three.js",
        "Enhanced analytics platform (Nox Analytics)",
        "Integrated CSV datasets and APIs for dynamic charts"
      ]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Digiopen Services Pvt. Ltd",
      period: "Dec 2024 – Nov 2025",
      tech: ["Java", "Openbravo", "Frappe", "Python", "PostgreSQL"],
      points: [
        "Worked on Openbravo ERP customization",
        "Handled PostgreSQL queries, views & procedures",
        "Developed Frappe apps with APIs & reports",
        "Implemented dynamic UI & backend logic"
      ]
    },
    {
      id: 3,
      role: "Trainee Java Developer",
      company: "Hefshine Softwares",
      period: "Jan 2024 – Sep 2024",
      tech: ["Java", "Spring Boot", "MySQL", "JavaScript", "HTML", "CSS"],
      points: [
        "Completed full-stack training",
        "Developed REST APIs and tested with Postman",
        "Worked on DB operations",
        "Improved debugging and backend skills"
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">

        <h2 className="section-title">Work Experience</h2>

        <div className="timeline">

          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="experience-card">

                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="experience-period">{exp.period}</span>

                {/* TECH STACK */}
                <div className="tech-stack">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* BULLET POINTS */}
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;