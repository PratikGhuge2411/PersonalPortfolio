import React from "react";
import Hero from "../components/Home/Hero";
import Contact from "../components/contact/contact";
import Education from "../components/education/education";
import Experience from "../components/experience/experience";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Homepage;