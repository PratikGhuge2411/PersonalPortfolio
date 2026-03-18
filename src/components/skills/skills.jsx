import React from 'react';
import './skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "Python", "HTML", "CSS", "TypeScript", "D3.js", "Three.js", "ReactJS"]
    },
    {
      category: "Frameworks",
      skills: ["Angular", "Spring Boot", "Openbravo", "Frappe", "ERPNext"]
    },
    {
      category: "Developer Tools",
      skills: ["VS Code", "Eclipse", "Git"]
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "MariaDB"]
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Problem Solving", "Leadership", "Event Management"]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">

        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">

          {skillsData.map((group, index) => (
            <div key={index} className="skills-card">

              <h3>{group.category}</h3>

              <div className="skills-list">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;