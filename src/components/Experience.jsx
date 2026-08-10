import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section">
        <span className="sec-label">// 03 · Experience</span>
        <h2 className="sec-title" style={{ marginBottom: "3rem" }}>Work Experience</h2>

        <div className="timeline">
          {experiences.map((e, i) => (
            <div key={i} className="tl-item">
              <div className="tl-dot" style={e.highlight ? { background: "rgba(255,255,255,0.8)", boxShadow: "0 0 8px rgba(255,255,255,0.4)" } : {}} />
              <div className="tl-card">
                <div className="tl-meta">
                  <span className="tl-period">{e.period}</span>
                  <span style={{ width: "1px", height: "10px", background: "var(--border)" }} />
                  <span className="tl-org">{e.org}</span>
                </div>
                <div className="tl-role">{e.role}</div>
                <p className="tl-desc">{e.description}</p>
                {e.project && (
                  <div className="tl-project-ref">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                    Product built: {e.project}
                  </div>
                )}
                <div className="tag-row">
                  {e.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
