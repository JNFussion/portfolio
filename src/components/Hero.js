import React from "react";
import closeupPhoto from "../images/photo-closeup.jpg";

function Hero() {
  return (
    <header className="snap-center h-screen flex items-center">
      <div className="flex-1">
        <h1 className="w-fit px-4 py-6 mx-auto grid text-white rounded shadow shadow-white/30 bg-army-green/75 backdrop-blur">
          <span className="text-5xl">Hi</span>
          <span className="text-6xl text-celeste">I am Juan Gutierrez</span>
        </h1>
      </div>
      <div className="flex-1">
        <div className="w-96 h-auto">
          <img id="close" src={closeupPhoto} alt="Juan Gutierrez" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
