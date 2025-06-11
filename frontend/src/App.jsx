import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="home-container">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="certifications"><Certifications /></section>
      <section id="publications"><Publications /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;