export default function Contact() {
    return (
        <section id="contact">
            <div className="section-label" data-num="05">Contact</div>

            <div className="contact-wrapper">
                <div className="contact-left reveal">
                    <div className="contact-heading">
                        Let's build something <em>extraordinary</em> together.
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "32px" }}>
                        Looking for a full-spectrum engineer who can architect your backend,
                        train your models, and write your shaders. Available for new opportunities.
                    </div>

                    <div className="contact-links">
                        <a href="mailto:oualiy419@gmail.com" className="contact-link">
                            <span style={{ fontSize: "18px" }}>✉</span>
                            <div>
                                <span className="contact-link-label">Email</span>
                                oualiy419@gmail.com
                            </div>
                        </a>
                        <a href="https://github.com/Ysn-Ir" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span style={{ fontSize: "18px" }}>⌥</span>
                            <div>
                                <span className="contact-link-label">GitHub</span>
                                github.com/Ysn-Ir
                            </div>
                        </a>
                        <a href="https://github.com/Ysn-Ir/CV/blob/main/ysnCv.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span style={{ fontSize: "18px" }}>📄</span>
                            <div>
                                <span className="contact-link-label">Resume</span>
                                View / Download PDF ↗
                            </div>
                        </a>
                        <a href="tel:+212609408356" className="contact-link">
                            <span style={{ fontSize: "18px" }}>☏</span>
                            <div>
                                <span className="contact-link-label">Phone</span>
                                +212 609 408 356
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contact-right reveal">
                    <div className="contact-cta">
                        Open to <em>new</em> roles &amp; collaborations
                    </div>
                    <div className="contact-available">
                        <div className="avail-dot"></div>
                        AVAILABLE FOR HIRE · MARCH 2026
                    </div>
                    <div style={{ marginTop: "40px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "rgba(5,7,9,0.7)", lineHeight: "1.9" }}>
                        Full-Stack · ML/AI · Systems<br />
                        Open to Remote &amp; Relocation<br />
                        Fès, Morocco 🇲🇦
                    </div>
                </div>
            </div>
        </section>
    );
}
