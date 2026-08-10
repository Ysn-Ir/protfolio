import { useState } from "react";
import { projects, categories } from "../data/projects";

const GH = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

function Card({ p }) {
  return (
    <div className="proj-card">
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        {p.badge && <span className="proj-badge">{p.badge}</span>}
        {p.featured && !p.badge && <span className="proj-badge">Featured</span>}
        {p.paper && <span className="proj-badge">Published</span>}
      </div>
      <div className="proj-title">{p.title}</div>
      <p className="proj-desc">{p.description}</p>
      <div className="tag-row">
        {p.tech.slice(0, 5).map(t => <span key={t} className="tag">{t}</span>)}
        {p.tech.length > 5 && <span className="tag">+{p.tech.length - 5}</span>}
      </div>
      <div className="proj-footer">
        <a href={p.github} target="_blank" rel="noreferrer" className="proj-link"><GH /> GitHub</a>
        <span className="proj-cat">{p.category}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const all = projects.filter(p => filter === "all" || p.category === filter);
  const pro = projects.filter(p => p.category === "professional");
  const featured = all.filter(p => p.featured && p.category !== "professional");
  const rest = all.filter(p => !p.featured);

  return (
    <section id="projects">
      <div className="section">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          <div>
            <span className="sec-label">// 04 · Projects</span>
            <h2 className="sec-title">Notable Projects</h2>
          </div>
          <div className="filter-row">
            {categories.map(c => (
              <button key={c.key} className={`filter-btn ${filter === c.key ? "active" : ""}`} onClick={() => setFilter(c.key)}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Professional Products */}
        {(filter === "all" || filter === "professional") && (
          <>
            <div className="subsection-label">Professional Products</div>
            <div className="projects-grid-featured" style={{ marginBottom: "2rem" }}>
              {pro.map(p => <Card key={p.title} p={p} />)}
            </div>
          </>
        )}

        {/* Featured */}
        {featured.length > 0 && (
          <>
            <div className="subsection-label">Featured</div>
            <div className="projects-grid-featured" style={{ marginBottom: "2rem" }}>
              {featured.map(p => <Card key={p.title} p={p} />)}
            </div>
          </>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <>
            <div className="subsection-label">All Projects</div>
            <div className="projects-grid">
              {rest.map(p => <Card key={p.title} p={p} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
