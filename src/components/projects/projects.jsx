import React, { useState, useEffect, useRef } from 'react';
import './projects.css';

const projectsData = [
  {
    id: 1,
    title: "Nox Analytics Platform",
    description: "Developed interactive dashboards with 2D & 3D charts using React, D3.js & Three.js. Integrated CSV & REST APIs for real-time analytics.",
    tech: ["React", "D3.js", "Three.js", "JavaScript", "REST API"],
    github: "#",
    live: "#",
    category: "Analytics",
    year: "2026",
  },
  {
    id: 2,
    title: "MyFarmer Ecommerce App",
    description: "Ecommerce platform built using Frappe with product management, orders, and customer handling.",
    tech: ["Frappe", "JavaScript", "MariaDB"],
    github: "#",
    live: "#",
    category: "E-Commerce",
    year: "2024",
  },
  {
    id: 3,
    title: "Cold Storage Software",
    description: "Warehouse and storage management system with chamber, floor, piller hierarchy using Frappe.",
    tech: ["Frappe", "Python", "JavaScript", "MariaDB"],
    github: "#",
    live: "#",
    category: "Enterprise",
    year: "2024",
  },
  {
    id: 4,
    title: "Library Management System",
    description: "Complete library system for managing books, users, and transactions with fine tracking.",
    tech: ["Python", "Frappe", "MariaDB", "HTML", "CSS"],
    github: "#",
    live: "#",
    category: "Management",
    year: "2024",
  },
  {
    id: 5,
    title: "Spring Boot Ecommerce",
    description: "Full-stack ecommerce app using Spring Boot backend and React frontend with JWT auth.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    github: "#",
    live: "#",
    category: "E-Commerce",
    year: "2025",
  },
  {
    id: 6,
    title: "E-College Website",
    description: "Student management system for course registration and academic tracking.",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
    category: "Education",
    year: "2025",
  },
  {
    id: 7,
    title: "Java Chat Application",
    description: "Real-time chat application built using Java sockets with multi-user room support.",
    tech: ["Java", "Sockets", "Javascript"],
    github: "#",
    live: "#",
    category: "Networking",
    year: "2024",
  },
  {
    id: 8,
    title: "Tic Tac Toe Game",
    description: "Classic game implementation with clean UI, AI opponent, and score tracking.",
    tech: ["Javascript", "HTML", "CSS"],
    github: "#",
    live: "#",
    category: "Game",
    year: "2024",
  },
  {
    id: 8,
    title: "Personal Portfolio",
    description: "Personal Portfolio Website.",
    tech: ["React.js", "Javascript", "HTML", "CSS"],
    github: "#",
    live: "#",
    category: "Education",
    year: "2026",
  },
];


const FILTERS = ["All", "Analytics", "E-Commerce", "Enterprise", "Management", "Education", "Networking", "Game"];

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();
  const [hovered, setHovered] = useState(false);

  const catColors = {
    Analytics:   { bg: 'rgba(99,102,241,0.12)',  text: '#818cf8', border: 'rgba(99,102,241,0.25)'  },
    'E-Commerce':{ bg: 'rgba(16,185,129,0.1)',   text: '#34d399', border: 'rgba(16,185,129,0.25)'  },
    Enterprise:  { bg: 'rgba(245,158,11,0.1)',   text: '#fbbf24', border: 'rgba(245,158,11,0.25)'  },
    Management:  { bg: 'rgba(59,130,246,0.1)',   text: '#60a5fa', border: 'rgba(59,130,246,0.25)'  },
    Education:   { bg: 'rgba(168,85,247,0.1)',   text: '#c084fc', border: 'rgba(168,85,247,0.25)'  },
    Networking:  { bg: 'rgba(0,245,196,0.1)',    text: '#00f5c4', border: 'rgba(0,245,196,0.25)'   },
    Game:        { bg: 'rgba(236,72,153,0.1)',   text: '#f472b6', border: 'rgba(236,72,153,0.25)'  },
  };
  const cat = catColors[project.category] || catColors.Networking;

  return (
    <article
      ref={ref}
      className={`pc ${visible ? 'pc--vis' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row */}
      <div className="pc__top">
        <span className="pc__num">0{project.id}</span>
        <span
          className="pc__cat"
          style={{ background: cat.bg, color: cat.text, borderColor: cat.border }}
        >
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="pc__title">{project.title}</h3>

      {/* Description */}
      <p className="pc__desc">{project.description}</p>

      {/* Divider */}
      <div className="pc__divider" />

      {/* Footer */}
      <div className="pc__footer">
        <ul className="pc__tech">
          {project.tech.slice(0, 4).map(t => (
            <li key={t} className="pc__tech-item">{t}</li>
          ))}
          {project.tech.length > 4 && (
            <li className="pc__tech-item pc__tech-item--more">+{project.tech.length - 4}</li>
          )}
        </ul>
        <div className="pc__links">
          <a href={project.github} target="_blank" rel="noreferrer" className="pc__link" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="pc__link" aria-label="Live">
            <ExternalIcon />
          </a>
        </div>
      </div>

      {/* Hover accent line */}
      <div className="pc__accent" style={{ background: cat.text }} />
    </article>
  );
}

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [headRef, headVis] = useReveal();

  const filtered = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  const usedFilters = ['All', ...new Set(projectsData.map(p => p.category))];

  return (
    <section className="pjs" id="projects">

      {/* Background decoration */}
      <div className="pjs__bg" aria-hidden="true">
        <div className="pjs__bg-blob pjs__bg-blob--1" />
        <div className="pjs__bg-blob pjs__bg-blob--2" />
        <div className="pjs__bg-grid" />
      </div>

      <div className="pjs__wrap">

        {/* ── Header ── */}
        <header
          ref={headRef}
          className={`pjs__head ${headVis ? 'pjs__head--vis' : ''}`}
        >
          <div className="pjs__head-eyebrow">
            <span className="pjs__head-line" />
            <span>Portfolio</span>
            <span className="pjs__head-line" />
          </div>
          <h2 className="pjs__head-title">
            Things I've <em>Built</em>
          </h2>
          <p className="pjs__head-sub">
            A curated collection of projects across analytics, e-commerce, and systems.
            Each one shipped with care.
          </p>
          <div className="pjs__head-stat">
            <span className="pjs__stat"><strong>{projectsData.length}</strong> Projects</span>
            <span className="pjs__stat-dot" />
            <span className="pjs__stat"><strong>{new Set(projectsData.map(p=>p.category)).size}</strong> Categories</span>
            <span className="pjs__stat-dot" />
            <span className="pjs__stat"><strong>2</strong> Years</span>
          </div>
        </header>

        {/* ── Filters ── */}
        <div className="pjs__filters" role="tablist" aria-label="Filter projects">
          {usedFilters.map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`pjs__filter ${filter === f ? 'pjs__filter--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              {filter === f && <span className="pjs__filter-dot" />}
            </button>
          ))}
        </div>

        {/* ── Count ── */}
        <p className="pjs__count">
          Showing <strong>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
          {filter !== 'All' && ` in ${filter}`}
        </p>

        {/* ── Grid ── */}
        <div className="pjs__grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="pjs__cta">
          <a href="https://github.com/PratikGhuge2411?tab=repositories" target="_blank" rel="noreferrer" className="pjs__cta-btn">
            <GithubIcon />
            View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;