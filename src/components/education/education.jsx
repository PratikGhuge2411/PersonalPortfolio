import React from 'react';
import './education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.E - Computer Science and Engineering",
      institution: "Sahyadri Valley College Of Engineering & Technology, Pune",
      period: "2020 - 2024",
      score: "CGPA: 7.63",
    },
    {
      id: 2,
      degree: "Higher Secondary Education (12th)",
      institution: "Jijamata Junior College, Sindakhed Raja",
      period: "2019 - 2020",
      score: "Percentage: 83.60%",
    },
    {
      id: 3,
      degree: "Secondary School (10th)",
      institution: "Deulgaon Raja High School, Deulgaon Raja",
      period: "2017 - 2018",
      score: "Percentage: 83.38%",
    }
  ];

  return (
    <section className="education-section">
      <div className="education-container">

        <h2 className="section-title">Education</h2>

        <div className="timeline">

          {educationData.map((edu) => (
            <div key={edu.id} className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <span className="timeline-period">{edu.period}</span>
                <p className="timeline-score">{edu.score}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;