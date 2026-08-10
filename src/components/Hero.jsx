import { useState, useEffect } from "react";

const roles = [
  "Full-Stack Engineer",
  "ML / AI Developer",
  "Systems Programmer",
  "Reinforcement Learning",
  "Computer Vision",
  "VoIP & Real-Time Systems",
];

function useTypewriter(words, speed = 65, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[wi];
    let delay = del ? speed / 2 : speed;
    if (!del && ci === w.length) delay = pause;
    const t = setTimeout(() => {
      if (!del && ci < w.length)      { setDisplay(w.slice(0, ci + 1)); setCi(c => c + 1); }
      else if (!del && ci === w.length){ setDel(true); }
      else if (del && ci > 0)          { setDisplay(w.slice(0, ci - 1)); setCi(c => c - 1); }
      else                             { setDel(false); setWi(w => (w + 1) % words.length); }
    }, delay);
    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);
  return display;
}

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section id="hero" className="hero">
      {/* Tag */}
      <div className="hero-tag">
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 6px rgba(16,185,129,0.8)" }} />
        Available for PFE Internship · 2025–2026
      </div>

      {/* Name */}
      <h1 className="hero-name">
        Yassine<br />
        <span className="hero-name-sub">Ouali</span>
      </h1>

      {/* Typewriter */}
      <div className="hero-role">
        <span style={{ opacity: 0.4, fontFamily: "var(--mono)" }}>&gt;</span>
        <span>{role}</span>
        <span className="hero-cursor" />
      </div>

      {/* Bio */}
      <p className="hero-bio">
        Engineering student at ENSA Fès · Software Engineering & AI.
        I build full-stack systems, ML pipelines, publish research, and write code from Assembly to LLMs.
      </p>

      {/* Stats strip */}
      <div className="hero-stats">
        {[
          { val: "4",   lbl: "Papers" },
          { val: "5",   lbl: "Certs" },
          { val: "30+", lbl: "Projects" },
          { val: "4",   lbl: "Internships" },
        ].map(s => (
          <div key={s.lbl} className="hero-stat">
            <span className="hero-stat-val">{s.val}</span>
            <span className="hero-stat-lbl">{s.lbl}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="hero-actions">
        <button className="btn-sci btn-sci-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          View Projects
        </button>
        <a href="mailto:oualiy419@gmail.com" className="btn-sci">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Contact
        </a>
      </div>

      {/* Socials */}
      <div className="hero-socials">
        {[
          { href: "https://github.com/Ysn-Ir", label: "GitHub", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          { href: "mailto:oualiy419@gmail.com", label: "Email", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
          { href: "https://www.ysnir.xyz", label: "Website", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
          { href: "tel:+212609408356", label: "Phone", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6z"/></svg> },
        ].map(s => (
          <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="social-btn" title={s.label}>
            {s.icon}
          </a>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </section>
  );
}
