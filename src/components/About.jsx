export default function About() {
  const areas = [
    "Medical & Agricultural CV",
    "Reinforcement Learning",
    "NLP / LLM & Agentic AI",
    "Signal & Audio Processing",
    "Conversational AI",
    "Cybersecurity & ML",
  ];

  const langs = [
    { name: "Arabic",  level: "Native" },
    { name: "French",  level: "Fluent" },
    { name: "English", level: "Professional" },
  ];

  const progLangs = ["Python","C / C++","Java","JavaScript","TypeScript","Kotlin","PHP","Assembly x64"];

  return (
    <section id="about">
      <div className="section">
        <span className="sec-label">// 01 · About</span>
        <h2 className="sec-title" style={{ marginBottom: "3rem" }}>Who I Am</h2>

        <div className="about-grid">
          {/* Left col */}
          <div className="about-sticky">
            <div className="stat-trio">
              <div className="stat-cell"><span className="stat-val">4</span><span className="stat-lbl">Papers</span></div>
              <div className="stat-cell"><span className="stat-val">30+</span><span className="stat-lbl">Projects</span></div>
              <div className="stat-cell"><span className="stat-val">5</span><span className="stat-lbl">Certs</span></div>
            </div>

            {/* Education */}
            <div className="info-block">
              <div className="info-block-header">Education</div>
              <div className="info-block-body">
                <div style={{ fontSize: "0.88rem", fontWeight: 500, color: "rgba(255,255,255,0.8)", marginBottom: "0.25rem" }}>ENSA Fès — Morocco</div>
                <div style={{ fontSize: "0.78rem", color: "var(--dim)" }}>Engineering · Software Engineering & AI</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", color: "var(--dim2)", marginTop: "0.5rem" }}>2022 — 2027</div>
              </div>
            </div>

            {/* Languages */}
            <div className="info-block">
              <div className="info-block-header">Languages</div>
              <div className="info-block-body">
                {langs.map(l => (
                  <div key={l.name} className="lang-row">
                    <span className="lang-name">{l.name}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming */}
            <div className="info-block">
              <div className="info-block-header">Programming Languages</div>
              <div className="info-block-body">
                <div className="tag-row">
                  {progLangs.map(l => <span key={l} className="tag">{l}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* Right col */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div>
              <p style={{ fontSize: "0.92rem", color: "var(--dim)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                I'm a 22-year-old engineering student at <span style={{ color: "rgba(255,255,255,0.75)" }}>ENSA Fès</span>, passionate about architecting scalable software ecosystems and bridging the gap between theoretical AI and production-ready systems.
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--dim)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                My expertise spans full-stack microservice architectures, complex telephony infrastructure (VoIP / SIP / WebRTC), and low-level systems — alongside end-to-end Machine Learning pipelines and real-world AI deployment.
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--dim)", lineHeight: 1.75 }}>
                I publish computer vision and RL research, implement deep learning architectures from scratch, and train autonomous agents — operating equally in AI research and production engineering environments.
              </p>
            </div>

            {/* Research areas */}
            <div className="info-block">
              <div className="info-block-header">// Research Focus Areas</div>
              <div className="info-block-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                {areas.map(a => (
                  <div key={a} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "var(--dim)", padding: "0.4rem 0", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Seeking */}
            <div style={{ padding: "1rem 1.25rem", borderRadius: "10px", border: "1px solid rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.04)", display: "flex", alignItems: "center", gap: "0.9rem" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px rgba(16,185,129,0.7)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "rgba(255,255,255,0.8)", marginBottom: "0.15rem" }}>
                  Seeking PFE Internship — 6 months
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--dim)" }}>
                  Open to Full-Stack, ML/AI, and R&D roles
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
