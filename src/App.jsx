import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Placeholder sections for scroll targets */}
      <section id="about" className="bg-white">
        <About />
      </section>
      <section id="education" className="bg-gray-50">
        <Education />
      </section>
      <section id="skills" className="bg-white">
        <Skills />
      </section>
      <section id="contact" className="bg-gray-50">
        <Projects />
      </section>
      <Certifications />
      <Technologies />
      <Footer />
    </>
  );
}

export default App;
