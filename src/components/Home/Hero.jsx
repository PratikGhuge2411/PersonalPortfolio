import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import portfoliodata from '../../data/portfoliodata';
import './hero.css';

const Hero = () => {
  const { personal } = portfoliodata;

  const stack = personal.skills?.slice(0, 6) || [
    'Java', 'Springboot', 'Javascript', 'Python', 'React.js', 'D3.js', 'Three.js',
    'Frappe', 'Openbravo', 'MySql', 'Angular'
  ];

  const roles = [
    personal.title || 'Full-Stack Developer',
    'Python Developer',
    'Java Developer',
    'Ui/UX Developer',
    'Problem Solver',
    'Event Manager'
  ];

  /* ── Typewriter ── */
  const [typed, setTyped] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = roles[roleIdx];
    let t;
    if (!deleting && charIdx < cur.length) t = setTimeout(() => setCharIdx(c => c + 1), 75);
    else if (!deleting && charIdx === cur.length) t = setTimeout(() => setDeleting(true), 1800);
    else if (deleting && charIdx > 0) t = setTimeout(() => setCharIdx(c => c - 1), 38);
    else { setDeleting(false); setRoleIdx(i => (i + 1) % roles.length); }
    setTyped(cur.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  /* ── Particle canvas ── */
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;

    const DOTS = Array.from({ length: 45 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1 + 0.2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      DOTS.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,245,196,0.25)'; ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  /* ── Mouse-parallax for image ── */
  const imgRef = useRef(null);
  const heroRef = useRef(null);
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
    const onMove = (e) => {
      const img = imgRef.current;
      if (!img) return;
      const { left, top, width, height } = section.getBoundingClientRect();
      const rx = ((e.clientY - top) / height - 0.5) * 4;
      const ry = ((e.clientX - left) / width - 0.5) * -4;
      img.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };
    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  /* ── Counter animation ── */
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0 });
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted) {
        setCounted(true);
        const targets = { years: 2, projects: 10};
        const dur = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCounts({
            years: Math.round(ease * targets.years),
            projects: Math.round(ease * targets.projects),
          });
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [counted]);

  /* ── Stagger reveal on mount ── */
  const wrapRef = useRef(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    el.querySelectorAll('.h-reveal').forEach((node, i) => {
      node.style.transitionDelay = `${i * 80}ms`;
      setTimeout(() => node.classList.add('h-reveal--in'), 60 + i * 80);
    });
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home">
      {/* particle bg - subtle */}
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      {/* ambient glows - subtle */}
      <div className="hero__glow hero__glow--tl" aria-hidden="true" />
      <div className="hero__glow hero__glow--br" aria-hidden="true" />

      <div className="hero__inner" ref={wrapRef}>

        {/* ══════════ LEFT COLUMN ══════════ */}
        <div className="hero__left">

          {/* badge */}
          <div className="h-reveal hero__badge">
            <span className="hero__badge-pulse" />
            Available for opportunities
          </div>

          {/* greeting */}
          <p className="h-reveal hero__greeting">Hello, I'm</p>

          {/* name */}
          <h1 className="h-reveal hero__name">
            {(personal.name || 'Your Name').split(' ').map((w, i) => (
              <span key={i} className={`hero__name-word${i === 1 ? ' hero__name-word--em' : ''}`}>
                {w}
              </span>
            ))}
          </h1>

          {/* typewriter role */}
          <div className="h-reveal hero__role" aria-live="polite">
            <span className="hero__role-prefix">&gt;&nbsp;</span>
            <span className="hero__role-typed">{typed}</span>
            <span className="hero__role-caret" aria-hidden="true" />
          </div>

          {/* bio */}
          <p className="h-reveal hero__bio">{personal.bio || 'Passionate developer creating amazing web experiences'}</p>

          {/* stack pills */}
          <div className="h-reveal hero__stack" aria-label="Tech stack">
            {stack.map((tech, i) => (
              <span
                key={tech}
                className="hero__pill"
                style={{ animationDelay: `${600 + i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="h-reveal hero__ctas">
            <Link to="/projects" className="hero__btn hero__btn--primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="#contact" className="hero__btn hero__btn--ghost">
              Get in touch
            </a>
            {personal.resumeUrl && (
              <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="hero__btn hero__btn--outline">
                Résumé
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M10 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>

          {/* stats */}
          <div className="h-reveal hero__stats" ref={statsRef}>
            {[
              { val: `${counts.years}+`, label: 'Years exp.' },
              { val: `${counts.projects}+`, label: 'Projects' },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="hero__stats-sep" aria-hidden="true" />}
                <div className="hero__stat">
                  <span className="hero__stat-val">{s.val}</span>
                  <span className="hero__stat-lbl">{s.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* ══════════ RIGHT COLUMN - CLEAN HD PROFILE IMAGE ══════════ */}
        <div className="hero__right">

          {/* subtle decorative ring - minimal */}
          <div className="hero__ring" aria-hidden="true">
            <svg viewBox="0 0 380 380" fill="none">
              <circle cx="190" cy="190" r="184" stroke="rgba(0,245,196,0.1)" strokeWidth="1" />
            </svg>
          </div>

          {/* profile card - CLEAN, HD IMAGE FOCUSED */}
          <div ref={imgRef} className="hero__card">
            {/* image - HD QUALITY, CLEAN, NO DISTRACTIONS */}
            <div className="hero__card-img">
              <img
                src="/assets/profile.jpeg"
                alt={personal.name || 'Profile'}
                className="hero__card-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x500?text=Profile+Image';
                }}
              />
            </div>
          </div>

          {/* subtle shadow */}
          <div className="hero__card-shadow" aria-hidden="true" />

        </div>
      </div>

      {/* scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-lbl">scroll</span>
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </div>
    </section>
  );
};

export default Hero;