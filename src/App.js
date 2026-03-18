import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Homepage from './Pages/Hompage';
import Educationpage from './Pages/EducationPage';
import Experiencepage from './Pages/ExperiencePage';
import Skillspage from './Pages/SkillsPage';
import Projectspage from './Pages/ProjectsPage';
import Contactpage from './Pages/ContactPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="education" element={<Educationpage />} />
          <Route path="experience" element={<Experiencepage />} />
          <Route path="skills" element={<Skillspage />} />
          <Route path="projects" element={<Projectspage />} />
          <Route path="contact" element={<Contactpage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;