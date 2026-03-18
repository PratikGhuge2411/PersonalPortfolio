import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position (only on homepage)
      if (isHomePage) {
        const sections = ['home', 'education', 'experience', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavigation = async (sectionId) => {
    closeMenu();
    
    if (sectionId === 'home') {
      // Special case for home - scroll to top
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      } else {
        navigate('/');
      }
      return;
    }

    if (sectionId === 'projects') {
      // Navigate to projects page
      navigate('/projects');
      return;
    }
 if (sectionId === 'education') {
      // Navigate to projects page
      navigate('/education');
      return;
    }
     if (sectionId === 'experience') {
      // Navigate to projects page
      navigate('/experience');
      return;
    }
     if (sectionId === 'contact') {
      // Navigate to projects page
      navigate('/contact');
      return;
    }
     if (sectionId === 'skills') {
      // Navigate to projects page
      navigate('/skills');
      return;
    }
    // For other sections
    if (isHomePage) {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };

  // Handle hash changes when coming from external links
  useEffect(() => {
    if (!isHomePage && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      // Will be handled when homepage loads
    }
  }, [location, isHomePage]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Portfolio</span>
          <span className="logo-dot">.</span>
          <span className="logo-glow"></span>
        </Link>

        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  data-active={activeSection === item.id}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;