import Particles from "particlesjs/dist/particles";
import React, { useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
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
    <article className="snap-mandatory snap-y overflow-y-scroll max-h-screen">
      <Hero />
      <About />
      <Skills />
    </article>
  );
}

export default App;
