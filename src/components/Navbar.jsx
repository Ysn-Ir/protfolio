export default function Navbar() {
    return (
        <nav>
            <div className="nav-logo"><span>{" YSN_IR"}</span></div>
            <ul className="nav-links">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#certifications">Certs</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://github.com/Ysn-Ir/CV/blob/main/ysnCv.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", borderBottom: "1px solid var(--accent)", paddingBottom: "2px" }}>Resume ↗</a></li>
            </ul>
        </nav>
    );
}
