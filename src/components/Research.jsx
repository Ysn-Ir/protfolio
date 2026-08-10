import { publications, hackathons } from "../data/publications";

export default function Research() {
  return (
    <section id="research">
      <div className="section">
        <span className="sec-label">// 05 · Research</span>
        <h2 className="sec-title" style={{ marginBottom: "3rem" }}>Publications & Competitions</h2>

        <div className="papers-grid">
          {publications.map((p, i) => (
            <div key={i} className="paper-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="paper-index">Paper / {String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", color: "var(--dim2)", border: "1px solid var(--border)", padding: "0.1rem 0.4rem", borderRadius: "4px" }}>{p.year}</span>
              </div>
              <div className="paper-title">{p.title}</div>
              <div className="paper-authors">{p.authors.join(" · ")}</div>
              <div className="paper-inst">
                <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
                {p.institution}
              </div>
              <p className="paper-abstract">{p.abstract}</p>
              <div className="tag-row">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="subsection-label" style={{ marginTop: "2.5rem" }}>Hackathons & Competitions</div>
        <div className="hackathon-grid">
          {hackathons.map((h, i) => (
            <div key={i} className="hack-card">
              <div className="hack-name">{h.name}</div>
              <div className="hack-meta">
                {h.org} · {h.year}
                {h.topic && <span style={{ color: "var(--dim)" }}> — {h.topic}</span>}
              </div>
              <div style={{ marginTop: "0.6rem", fontFamily: "var(--mono)", fontSize: "0.6rem", color: "var(--dim2)", border: "1px solid var(--border)", display: "inline-block", padding: "0.12rem 0.45rem", borderRadius: "4px" }}>
                {h.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
