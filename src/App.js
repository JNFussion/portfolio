import Particles from "particlesjs/dist/particles";
import React, { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    window.onload = function () {
      Particles.init({
        selector: ".background",
        color: ["#6AA445"],
        connectParticles: true,
      });
    };
    return () => {};
  }, []);

  return (
    <article className="snap-y overflow-y-scroll max-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </article>
  );
}

export default App;
