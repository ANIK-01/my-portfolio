import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Awards from "./components/Awards";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Certificates />
        <Awards />
        <Leadership />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
