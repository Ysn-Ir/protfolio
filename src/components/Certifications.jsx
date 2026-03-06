export default function Certifications() {
    return (
        <section id="certifications">
            <div className="section-label" data-num="04">Certifications</div>

            <div className="certs-grid">
                <div className="cert-card reveal">
                    <div className="cert-icon">🤖</div>
                    <div>
                        <div className="cert-name">TensorFlow Developer</div>
                        <div className="cert-issuer">Google · TensorFlow</div>
                    </div>
                </div>

                <div className="cert-card reveal">
                    <div className="cert-icon">📊</div>
                    <div>
                        <div className="cert-name">Machine Learning Specialization</div>
                        <div className="cert-issuer">DeepLearning.AI · Andrew Ng</div>
                    </div>
                </div>

                <div className="cert-card reveal">
                    <div className="cert-icon">🧹</div>
                    <div>
                        <div className="cert-name">Data Cleaning Mastery</div>
                        <div className="cert-issuer">Kaggle · Data Engineering</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
