import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Certifications from "./components/Certifications";


function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24"> 
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications/>
        <Contact />
      </div>
    </>
  );
}

export default App;

