import { useState, useEffect } from "react";

const links = [
  { id: "hero",          label: "Home" },
  { id: "about",         label: "About" },
  { id: "skills",        label: "Skills" },
  { id: "experience",    label: "Experience" },
  { id: "projects",      label: "Projects" },
  { id: "research",      label: "Research" },
  { id: "certifications",label: "Certs" },
  { id: "contact",       label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3;
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id);
        if (el && el.offsetTop <= pos) { setActive(links[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="nav-status-dot" />
        <span className="nav-brand-text">Yassine<span style={{ opacity: 0.4 }}>.dev</span></span>
      </div>
      <div className="nav-links">
        {links.map(l => (
          <button
            key={l.id}
            className={`nav-link ${active === l.id ? "active" : ""}`}
            onClick={() => go(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
