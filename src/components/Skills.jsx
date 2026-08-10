import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    name: "AI & Machine Learning",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "Reinforcement Learning", level: 82 },
      { name: "HuggingFace / LLMs", level: 85 },
      { name: "RAG Pipelines", level: 88 },
      { name: "Audio Processing", level: 78 },
      { name: "Scikit-Learn", level: 83 },
    ],
  },
  {
    name: "Full-Stack & Mobile",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "React / Redux", level: 86 },
      { name: "Angular", level: 82 },
      { name: "TypeScript / Node.js", level: 83 },
      { name: "Laravel / PHP", level: 78 },
      { name: "VoIP / SIP / WebRTC", level: 80 },
      { name: "Android / Kotlin", level: 72 },
      { name: "REST & Microservices", level: 90 },
    ],
  },
  {
    name: "Systems & Low-Level",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
    skills: [
      { name: "C / C++", level: 88 },
      { name: "Compiler Design", level: 80 },
      { name: "OpenGL / GLSL", level: 78 },
      { name: "Assembly x64 (NASM)", level: 72 },
      { name: "Linux Memory Mgmt", level: 76 },
      { name: "FFT / Signal Processing", level: 80 },
      { name: "Physics Simulation", level: 75 },
      { name: "SFML / Graphics", level: 74 },
    ],
  },
  {
    name: "DevOps & Data",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    skills: [
      { name: "Docker", level: 82 },
      { name: "Git & CI/CD", level: 88 },
      { name: "PostgreSQL / MySQL", level: 84 },
      { name: "MongoDB", level: 80 },
      { name: "Vector Databases", level: 76 },
      { name: "AWS", level: 72 },
      { name: "Firebase", level: 76 },
      { name: "Linux / Bash", level: 82 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="section">
        <span className="sec-label">// 02 · Skills</span>
        <h2 className="sec-title" style={{ marginBottom: "3rem" }}>Technical Expertise</h2>

        <div className="skills-grid">
          {pillars.map(p => (
            <div key={p.name} className="pillar">
              <div className="pillar-head">
                <div className="pillar-icon">{p.icon}</div>
                <span className="pillar-name">{p.name}</span>
              </div>
              <div className="skill-list">
                {p.skills.map(s => (
                  <div key={s.name} className="skill-row">
                    <div className="skill-meta">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ width: on ? `${s.level}%` : "0%" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Math strip */}
        <div style={{ marginTop: "1px", border: "1px solid var(--border)", borderTop: "none", borderRadius: "0 0 12px 12px", padding: "1rem 1.5rem", background: "var(--panel)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dim2)", whiteSpace: "nowrap" }}>Mathematical Foundation</span>
          <div className="tag-row" style={{ flex: 1 }}>
            {["Linear Algebra","Calculus & Optimization","Probability & Stats","Bayesian Reasoning","Signal Processing","Information Theory"].map(m => (
              <span key={m} className="tag">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
