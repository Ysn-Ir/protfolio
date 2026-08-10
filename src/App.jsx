import "./index.css";
import CustomCursor from "./components/CustomCursor";
import ParticleBg from "./components/MatrixBg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Template FX layers */}
      <div className="scanlines" />
      <div className="vignette" />
      <ParticleBg />

      <CustomCursor />
      <Navbar />

      <div className="page-content">
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Research />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
