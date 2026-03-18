import React from 'react';
import portfoliodata from '../../data/portfoliodata';
import './about.css';

const About = () => {
  const { personal } = portfoliodata;

  return (
    <section className="about-section">
      <div className="about-container">

        <h2 className="section-title">About Me</h2>

        <div className="about-content">

          {/* LEFT TEXT */}
          <div className="about-text">
            <p className="about-bio">{personal.bio}</p>

            <p>
              I'm passionate about building scalable applications, crafting clean UI,
              and solving real-world problems using modern technologies.
            </p>

            <p>
              I enjoy working with React, Java, Spring Boot, and exploring new tools
              that improve performance and user experience.
            </p>
          </div>

          {/* RIGHT IMAGE (OPTIONAL) */}
          <div className="about-image">
            <img
              src="/assets/pratik3.jpeg"
              alt="profile"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x350?text=Profile";
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;