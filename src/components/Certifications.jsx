/* Professional cert icons using inline SVG — no external image dependency */

const TensorFlowIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <path d="M32 4L8 18v28l24 14 24-14V18L32 4z" fill="none" stroke="#FF6F00" strokeWidth="2.5" />
        <path d="M32 4v56M8 18l48 28M56 18L8 46" stroke="#FF6F00" strokeWidth="1.5" opacity="0.4" />
        <path d="M24 28l8-4.5 8 4.5v9L32 42l-8-4.5V28z" fill="#FF6F00" opacity="0.9" />
        <circle cx="32" cy="32" r="4" fill="#fff" opacity="0.85" />
    </svg>
);

const DeepLearningAIIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        {/* neural network nodes */}
        <circle cx="12" cy="20" r="4" fill="#00C8FF" opacity="0.9" />
        <circle cx="12" cy="32" r="4" fill="#00C8FF" opacity="0.9" />
        <circle cx="12" cy="44" r="4" fill="#00C8FF" opacity="0.9" />
        <circle cx="32" cy="14" r="4" fill="#7C3AED" opacity="0.9" />
        <circle cx="32" cy="26" r="4" fill="#7C3AED" opacity="0.9" />
        <circle cx="32" cy="38" r="4" fill="#7C3AED" opacity="0.9" />
        <circle cx="32" cy="50" r="4" fill="#7C3AED" opacity="0.9" />
        <circle cx="52" cy="24" r="5" fill="#00C8FF" opacity="0.9" />
        <circle cx="52" cy="40" r="5" fill="#00C8FF" opacity="0.9" />
        {/* connections */}
        <line x1="16" y1="20" x2="28" y2="14" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
        <line x1="16" y1="20" x2="28" y2="26" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
        <line x1="16" y1="32" x2="28" y2="26" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
        <line x1="16" y1="32" x2="28" y2="38" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
        <line x1="16" y1="44" x2="28" y2="38" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
        <line x1="16" y1="44" x2="28" y2="50" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
        <line x1="36" y1="14" x2="47" y2="24" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
        <line x1="36" y1="26" x2="47" y2="24" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
        <line x1="36" y1="38" x2="47" y2="40" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
        <line x1="36" y1="50" x2="47" y2="40" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
    </svg>
);

const KaggleIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <rect x="4" y="4" width="56" height="56" rx="10" fill="none" stroke="#20BEFF" strokeWidth="2" />
        {/* K shape */}
        <line x1="18" y1="14" x2="18" y2="50" stroke="#20BEFF" strokeWidth="5" strokeLinecap="round" />
        <line x1="18" y1="32" x2="46" y2="14" stroke="#20BEFF" strokeWidth="5" strokeLinecap="round" />
        <line x1="28" y1="26" x2="46" y2="50" stroke="#20BEFF" strokeWidth="5" strokeLinecap="round" />
        {/* glow dot */}
        <circle cx="28" cy="26" r="4.5" fill="#20BEFF" opacity="0.6" />
    </svg>
);

export default function Certifications() {
    return (
        <section id="certifications">
            <div className="section-label" data-num="04">Certifications</div>

            <div className="certs-grid">
                <div className="cert-card reveal">
                    <div className="cert-icon cert-icon--svg">
                        <TensorFlowIcon />
                    </div>
                    <div>
                        <div className="cert-name">TensorFlow Developer</div>
                        <div className="cert-issuer">Google · TensorFlow</div>
                    </div>
                </div>

                <div className="cert-card reveal">
                    <div className="cert-icon cert-icon--svg">
                        <DeepLearningAIIcon />
                    </div>
                    <div>
                        <div className="cert-name">Machine Learning Specialization</div>
                        <div className="cert-issuer">DeepLearning.AI · Andrew Ng</div>
                    </div>
                </div>

                <div className="cert-card reveal">
                    <div className="cert-icon cert-icon--svg">
                        <KaggleIcon />
                    </div>
                    <div>
                        <div className="cert-name">Data Cleaning Mastery</div>
                        <div className="cert-issuer">Kaggle · Data Engineering</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
