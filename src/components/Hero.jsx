export default function Hero() {
    return (
        <section className="hero" id="top">
            <div className="hero-bg"></div>
            <div className="hero-glow"></div>

            <div className="hero-content">
                <div className="hero-tag">Full-Stack · ML/AI · Systems Engineering</div>
                <div className="hero-name">
                    <div className="first">YASSINE</div>
                    <div className="last">OUALI</div>
                </div>
                <div className="hero-title">Ingénieur Full-Stack &amp; ML/IA — Fès, Maroc</div>
                <div className="hero-desc">
                    Building the full spectrum: from <span className="hl">neural networks in PyTorch</span>{" "}
                    to <span className="hl2">Assembly x64 compilers</span>, from{" "}
                    <span className="hl3">Spring Boot microservices</span>{" "}
                    to <span className="hl">OpenGL physics engines</span>. I don't pick a lane — I own the road.
                </div>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="https://github.com/Ysn-Ir/CV/blob/main/ysnCv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Resume ↗</a>
                    <a href="https://github.com/Ysn-Ir" target="_blank" rel="noopener noreferrer" className="btn btn-outline">github.com/Ysn-Ir</a>
                    <a href="mailto:oualiy419@gmail.com" className="btn btn-outline">Get in Touch</a>
                </div>
            </div>

            <div className="terminal-badge">
                <div className="t-header">
                    <div className="t-dot r"></div>
                    <div className="t-dot y"></div>
                    <div className="t-dot g"></div>
                    <div className="t-title">~ profile.json</div>
                </div>
                <div className="t-line"><span className="cmd">{"{"}</span></div>
                <div className="t-line">&nbsp;&nbsp;<span className="cmd">"name"</span>: <span className="str">"Yassine Ouali"</span>,</div>
                <div className="t-line">&nbsp;&nbsp;<span className="cmd">"role"</span>: <span className="str">"FullStack + ML Engineer"</span>,</div>
                <div className="t-line">&nbsp;&nbsp;<span className="cmd">"location"</span>: <span className="str">"Fès, Morocco"</span>,</div>
                <div className="t-line">&nbsp;&nbsp;<span className="cmd">"stacks"</span>: [</div>
                <div className="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Spring Boot"</span>, <span className="str">"React"</span>,</div>
                <div className="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"PyTorch"</span>, <span className="str">"C++"</span>, <span className="str">"NASM"</span></div>
                <div className="t-line">&nbsp;&nbsp;],</div>
                <div className="t-line">&nbsp;&nbsp;<span className="cmd">"projects"</span>: <span className="num">8+</span>,</div>
                <div className="t-line">&nbsp;&nbsp;<span className="cmd">"available"</span>: <span className="num">true</span></div>
                <div className="t-line"><span className="cmd">{"}"}</span><span className="t-cursor"></span></div>
            </div>
        </section>
    );
}
