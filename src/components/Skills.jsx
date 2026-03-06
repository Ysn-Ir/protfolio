export default function Skills() {
    return (
        <section id="skills">
            <div className="section-label" data-num="01">Technical Stack</div>

            <div className="skills-grid">
                <div className="skill-card reveal">
                    <div className="skill-cat">Web &amp; Mobile</div>
                    <div className="skill-title">Full-Stack Engineering</div>
                    <div className="skill-tags">
                        <span className="tag">Spring Boot</span>
                        <span className="tag">Java</span>
                        <span className="tag">Laravel</span>
                        <span className="tag">Angular</span>
                        <span className="tag">React.js</span>
                        <span className="tag">TypeScript</span>
                        <span className="tag">Node.js</span>
                        <span className="tag">Android/Kotlin</span>
                        <span className="tag">PHP</span>
                        <span className="tag">Redux</span>
                    </div>
                </div>

                <div className="skill-card reveal">
                    <div className="skill-cat">Low-Level</div>
                    <div className="skill-title">Systems Engineering</div>
                    <div className="skill-tags">
                        <span className="tag">C/C++</span>
                        <span className="tag">OpenGL</span>
                        <span className="tag">NASM x64</span>
                        <span className="tag">Assembly</span>
                        <span className="tag">Linux</span>
                        <span className="tag">Memory Management</span>
                        <span className="tag">FFT</span>
                        <span className="tag">Audio Processing</span>
                    </div>
                </div>

                <div className="skill-card reveal">
                    <div className="skill-cat">AI / Data Science</div>
                    <div className="skill-title">Machine Learning &amp; AI</div>
                    <div className="skill-tags">
                        <span className="tag">TensorFlow</span>
                        <span className="tag">PyTorch</span>
                        <span className="tag">Scikit-learn</span>
                        <span className="tag">Computer Vision</span>
                        <span className="tag">LLMs</span>
                        <span className="tag">RAG</span>
                        <span className="tag">XAI</span>
                        <span className="tag">MFCCs</span>
                        <span className="tag">XGBoost</span>
                        <span className="tag">Fine-tuning</span>
                    </div>
                </div>

                <div className="skill-card reveal">
                    <div className="skill-cat">Infrastructure</div>
                    <div className="skill-title">DevOps &amp; Data</div>
                    <div className="skill-tags">
                        <span className="tag">Docker</span>
                        <span className="tag">Git</span>
                        <span className="tag">MySQL</span>
                        <span className="tag">MongoDB</span>
                        <span className="tag">PostgreSQL</span>
                        <span className="tag">Vector DBs</span>
                        <span className="tag">Firebase</span>
                        <span className="tag">Microservices</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
