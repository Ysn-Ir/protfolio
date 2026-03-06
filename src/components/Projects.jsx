/* ─── Project badge SVG icons ─── */

/* 02 – E-Commerce: shopping cart */
const CartIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
);

/* 03 – Trading: candlestick chart */
const TradingIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
);

/* 04 – Compiler: binary / CPU chip */
const CompilerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M3 9h2m0 6H3m4-9V4m6 2V4m6 2v-2m-2 7h2m0 6h-2M15 21v-2M9 21v-2M3 15h2M4 6h2" />
        <path d="M6 6h12v12H6z" rx="2" />
    </svg>
);

/* 05 – Audio FFT: waveform */
const AudioIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M2 12h2M6 8v8M10 4v16M14 6v12M18 8v8M22 12h-2" />
    </svg>
);

/* 06 – OpenGL: triangle / 3D cube face */
const OpenGLIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M12 3L21 18H3L12 3z" />
        <circle cx="12" cy="13" r="2.5" fill="currentColor" opacity="0.4" stroke="none" />
    </svg>
);

/* 07 – ML From Scratch: neural net / nodes */
const MLIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="4" cy="8" r="2" /><circle cx="4" cy="16" r="2" />
        <circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" />
        <circle cx="20" cy="9" r="2" /><circle cx="20" cy="15" r="2" />
        <line x1="6" y1="8" x2="10" y2="5" /><line x1="6" y1="8" x2="10" y2="12" />
        <line x1="6" y1="16" x2="10" y2="12" /><line x1="6" y1="16" x2="10" y2="19" />
        <line x1="14" y1="5" x2="18" y2="9" /><line x1="14" y1="12" x2="18" y2="9" />
        <line x1="14" y1="12" x2="18" y2="15" /><line x1="14" y1="19" x2="18" y2="15" />
    </svg>
);

/* 08 – Bike Share: bicycle */
const BikeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6h-3l-3 8h7l-2-8" />
        <path d="M5.5 17.5l5-8.5 3 8.5" />
        <path d="M12 6H9" />
    </svg>
);

export default function Projects() {
    return (
        <section id="projects">
            <div className="section-label" data-num="02">Engineering Projects</div>

            <div className="projects-grid">

                {/* FEATURED: MedStral */}
                <div className="project-card featured reveal">
                    <div className="featured-left">
                        <div className="project-num">FEATURED · 01</div>
                        <div className="project-title">MedStral Suite</div>
                        <div className="project-tech">Python · Mistral-7B · XAI · Audio Processing · Computer Vision</div>
                        <div className="project-desc">
                            A full medical AI ecosystem integrating Web, ML, and signal processing — three interconnected diagnostic tools powered by a fine-tuned LLM.
                        </div>
                        <ul className="project-features">
                            <li>Agentic RAG chatbot fine-tuned on Mistral-7B orchestrating medical diagnosis tools via Web interface</li>
                            <li>ChestXpert XAI — CNN-based chest pathology detection with Explainable AI heatmaps (Grad-CAM)</li>
                            <li>COVID Voice Detect — Full audio pipeline using MFCCs for voice-based COVID-19 screening</li>
                        </ul>
                    </div>
                    <div className="featured-right">
                        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "var(--muted)", lineHeight: "2" }}>
                            <div style={{ color: "var(--accent)", marginBottom: "16px", fontSize: "10px", letterSpacing: "0.2em" }}>TECH BREAKDOWN</div>
                            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "8px", marginBottom: "8px" }}>
                                <span>LLM Fine-tuning</span><span style={{ color: "var(--accent3)" }}>Mistral-7B</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "8px", marginBottom: "8px" }}>
                                <span>Vision Model</span><span style={{ color: "var(--accent3)" }}>CNN + Grad-CAM</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "8px", marginBottom: "8px" }}>
                                <span>Signal Processing</span><span style={{ color: "var(--accent3)" }}>MFCC Pipeline</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "8px", marginBottom: "8px" }}>
                                <span>RAG Architecture</span><span style={{ color: "var(--accent3)" }}>Agentic</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>XAI Module</span><span style={{ color: "var(--accent3)" }}>Heatmaps</span>
                            </div>
                            <div style={{ marginTop: "28px" }}>
                                <a href="https://github.com/Ysn-Ir" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: "10px", padding: "10px 20px" }}>View on GitHub →</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-card reveal">
                    <div className="project-badge project-badge--svg"><CartIcon /></div>
                    <div className="project-num">02</div>
                    <div className="project-title">Intelligent E-Commerce Platform</div>
                    <div className="project-tech">Spring Boot · React.js · Python ML · Amazon Dataset</div>
                    <div className="project-desc">Next-gen e-commerce platform with an AI recommendation engine trained on the Amazon dataset.</div>
                    <ul className="project-features">
                        <li>Content-Based Filtering algorithm predicting user preferences in real-time</li>
                        <li>Secure Spring Boot microservices backend + React/Redux frontend</li>
                        <li>Optimized large product inventory management with personalized suggestions</li>
                    </ul>
                </div>

                <div className="project-card reveal">
                    <div className="project-badge project-badge--svg"><TradingIcon /></div>
                    <div className="project-num">03</div>
                    <div className="project-title">Trading Platform</div>
                    <div className="project-tech">Spring Boot · Angular · Microservices · Forecasting</div>
                    <div className="project-desc">Real-time trading backend with price forecasting and live Angular dashboard.</div>
                    <ul className="project-features">
                        <li>Spring Boot microservices architecture for scalability</li>
                        <li>ML-based market forecasting integrated into the backend</li>
                        <li>Real-time Angular dashboard with live data streaming</li>
                    </ul>
                </div>

                <div className="project-card reveal">
                    <div className="project-badge project-badge--svg"><CompilerIcon /></div>
                    <div className="project-num">04</div>
                    <div className="project-title">C++ → x64 Compiler</div>
                    <div className="project-tech">C++ · NASM · Assembly x64 · Compiler Theory</div>
                    <div className="project-desc">A complete compiler pipeline translating C++ source code to executable x64 Assembly.</div>
                    <ul className="project-features">
                        <li>Full Lexer/Parser pipeline with AST generation</li>
                        <li>Code generation targeting NASM x64 executable output</li>
                        <li>Deep hardware optimization and low-level memory awareness</li>
                    </ul>
                </div>

                <div className="project-card reveal">
                    <div className="project-badge project-badge--svg"><AudioIcon /></div>
                    <div className="project-num">05</div>
                    <div className="project-title">Audio FFT Analyzer (Shazam-like)</div>
                    <div className="project-tech">C++ · FFT · Spectrograms · Signal Processing</div>
                    <div className="project-desc">C++ application implementing Fast Fourier Transform for audio frequency visualization and fingerprinting.</div>
                    <ul className="project-features">
                        <li>Real-time FFT implementation from scratch in C++</li>
                        <li>Spectrogram generation and audio frequency manipulation</li>
                        <li>Shazam-like audio fingerprinting logic</li>
                    </ul>
                </div>

                <div className="project-card reveal">
                    <div className="project-badge project-badge--svg"><OpenGLIcon /></div>
                    <div className="project-num">06</div>
                    <div className="project-title">OpenGL Physics Engine</div>
                    <div className="project-tech">C++ · OpenGL · Physics · Particle Systems</div>
                    <div className="project-desc">Graphics engine built from scratch handling physics simulation and particle rendering.</div>
                    <ul className="project-features">
                        <li>Gravity, collision detection, and rigid body physics</li>
                        <li>Particle system with real-time OpenGL rendering</li>
                        <li>Full custom math and vector library</li>
                    </ul>
                </div>

                <div className="project-card reveal">
                    <div className="project-badge project-badge--svg"><MLIcon /></div>
                    <div className="project-num">07</div>
                    <div className="project-title">ML Algorithms From Scratch</div>
                    <div className="project-tech">Python · NumPy · Applied Mathematics</div>
                    <div className="project-desc">Pure reimplementation of core ML algorithms without libraries — deep mathematical understanding.</div>
                    <ul className="project-features">
                        <li>Logistic/Linear Regression, Neural Networks with manual Backpropagation</li>
                        <li>SVM, K-Means implemented with NumPy only</li>
                        <li>Benchmarked against Scikit-learn — comparable performance</li>
                    </ul>
                </div>

                <div className="project-card reveal">
                    <div className="project-badge project-badge--svg"><BikeIcon /></div>
                    <div className="project-num">08</div>
                    <div className="project-title">DC Bike Share Demand Prediction</div>
                    <div className="project-tech">XGBoost · LightGBM · Time Series · IEEE Hackathon</div>
                    <div className="project-desc">Advanced Data Science project for the Xtreem Hackathon (IEEE) — time series demand forecasting.</div>
                    <ul className="project-features">
                        <li>Time Series analysis with feature engineering</li>
                        <li>XGBoost and LightGBM ensemble for demand prediction</li>
                        <li>IEEE Xtreem Hackathon competitive submission</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
