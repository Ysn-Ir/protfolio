export default function Experience() {
    return (
        <section id="experience">
            <div className="section-label" data-num="03">Experience &amp; Research</div>

            <div className="exp-list">
                <div className="exp-item reveal">
                    <div>
                        <div className="exp-role">Full-Stack Engineer</div>
                        <div className="exp-org">École Normale Supérieure (ENS)</div>
                        <div className="exp-desc">
                            Developed the centralized university ERP system using Spring Boot and Angular.
                            Managed academic workflows and data for 1,000+ users. Full lifecycle ownership from architecture to deployment.
                        </div>
                    </div>
                    <div className="exp-type">Internship</div>
                </div>

                <div className="exp-item reveal">
                    <div>
                        <div className="exp-role">R&amp;D AI Engineer</div>
                        <div className="exp-org">Private Training Center — Remote</div>
                        <div className="exp-desc">
                            Designed and built an Intelligent Agent (RAG architecture) integrated into a Web learning platform.
                            Personalized learning paths using LLM-powered conversational AI and retrieval-augmented generation.
                        </div>
                    </div>
                    <div className="exp-type">Internship</div>
                </div>

                <div className="exp-item reveal">
                    <div>
                        <div className="exp-role">ML Research — DC Bike Share System</div>
                        <div className="exp-org">Xtreem Hackathon · IEEE</div>
                        <div className="exp-desc">
                            Competitive Data Science project — advanced time series analysis and demand forecasting
                            using XGBoost/LightGBM ensemble models. IEEE-level research quality and presentation.
                        </div>
                    </div>
                    <div className="exp-type">Research</div>
                </div>
            </div>
        </section>
    );
}
