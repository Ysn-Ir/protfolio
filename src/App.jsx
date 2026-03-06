import "./index.css";
import CustomCursor from "./components/CustomCursor";
import MatrixBg from "./components/MatrixBg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <MatrixBg />
      <CustomCursor />
      <Navbar />
      <Hero />
      <StatsBar />
      <Skills />
      <div className="line-divider"></div>
      <Projects />
      <div className="line-divider"></div>
      <Experience />
      <div className="line-divider"></div>
      <Certifications />
      <div className="line-divider"></div>
      <Contact />
      <Footer />
    </>
  );
}
