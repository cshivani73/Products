import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";
// import NavBar from "./components/navbar";
import Navbar from "./components/Navbar";
import Contact from "./components/contact";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}