import React from "react";
import closeupPhoto from "../assets/images/photo-closeup.webp";

function Hero() {
  return (
    <header
      id="home"
      className="snap-center h-screen flex md:flex-col lg:flex-row py-20 flex-wrap items-center"
    >
      <div className="flex-1">
        <div className="w-fit px-4 py-6 mx-auto text-white rounded shadow shadow-white/30 bg-army-green/75 backdrop-blur">
          <h1 className="grid">
            <span className="text-4xl sm:text-5xl">Hi</span>
            <span className="text-5xl sm:text-6xl text-celeste">
              I am Juan Gutierrez
            </span>
          </h1>
          <p className="w-fit ml-auto text-2xl">Web Developer</p>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-72 mx-auto sm:w-96 h-auto">
          <img id="close" src={closeupPhoto} alt="Juan Gutierrez" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
