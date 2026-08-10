export default function Contact() {
  const links = [
    { label: "Email", value: "oualiy419@gmail.com", href: "mailto:oualiy419@gmail.com",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
    { label: "University", value: "yassine.ouali@usmba.ac.ma", href: "mailto:yassine.ouali@usmba.ac.ma",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
    { label: "Phone", value: "+212 609 408 356", href: "tel:+212609408356",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6z"/></svg> },
    { label: "GitHub", value: "github.com/Ysn-Ir", href: "https://github.com/Ysn-Ir",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
    { label: "Website", value: "www.ysnir.xyz", href: "https://www.ysnir.xyz",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  ];

  return (
    <section id="contact">
      <div className="section">
        <span className="sec-label">// 07 · Contact</span>
        <h2 className="sec-title" style={{ marginBottom: "3rem" }}>Get In Touch</h2>

        <div className="contact-grid">
          <div className="contact-links">
            {links.map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-link-item">
                <div className="contact-link-icon">{l.icon}</div>
                <div>
                  <span className="contact-link-label">{l.label}</span>
                  <span className="contact-link-value">{l.value}</span>
                </div>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginLeft: "auto", color: "var(--dim2)", flexShrink: 0 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            ))}
          </div>

          <div className="contact-avail">
            <div className="avail-status">
              <div className="avail-dot" />
              <span className="avail-title">Available Now</span>
            </div>
            <p className="avail-desc">
              Actively seeking a 6-month PFE internship in Full-Stack, ML/AI, or R&D. Available immediately, on-site or remote.
            </p>
            <div>
              {[
                { k: "Location",     v: "Fès, Morocco" },
                { k: "Availability", v: "Immediately" },
                { k: "Mode",         v: "On-site / Remote / Hybrid" },
                { k: "Duration",     v: "6 months (PFE)" },
              ].map(r => (
                <div key={r.k} className="avail-detail-row">
                  <span className="avail-detail-key">{r.k}</span>
                  <span className="avail-detail-val">{r.v}</span>
                </div>
              ))}
            </div>
            <a href="mailto:oualiy419@gmail.com" className="btn-sci btn-sci-primary" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
