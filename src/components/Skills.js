import React from "react";
import htmlLogo from "../assets/images/logos/HTML5 Logo Badge.svg";
import cssLogo from "../assets/images/logos/CSS3_logo.svg";
import tailwindLogo from "../assets/images/logos/Tailwind_CSS_Logo.svg";
import javascriptLogo from "../assets/images/logos/js.svg";
import reactLogo from "../assets/images/logos/reactLogo.png";
import jestLogo from "../assets/images/logos/jest-seeklogo.com.svg";
import rubyLogo from "../assets/images/logos/Ruby_logo.png";
import rubyOnRailsLogo from "../assets/images/logos/Ruby_On_Rails_Logo.svg";
import postgresqlLogo from "../assets/images/logos/Postgresql_elephant.svg";
import gitLogo from "../assets/images/logos/Git-logo.svg";
import webpackLogo from "../assets/images/logos/webpack_logo.svg";

function Skills() {
  return (
    <article className="snap-center h-screen grid items-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="my-4 text-4xl font-bold text-green-ryb-light">
          <span className="border-b border-b-screaming-green">Skills</span>
        </h2>
        <ul className="flex flex-wrap gap-14 justify-between">
          {[
            [htmlLogo, "HTML5", "w-20"],
            [cssLogo, "CSS3", "w-20"],
            [tailwindLogo, "Tailwind", "w-20"],
            [javascriptLogo, "JavaScript", "w-20"],
            [reactLogo, "React", "w-20"],
            [jestLogo, "Jest", "w-20"],
            [rubyLogo, "Ruby", "w-20"],
            [rubyOnRailsLogo, "Ruby On Rails", "w-24"],
            [postgresqlLogo, "PostgreSQL", "w-20"],
            [gitLogo, "Git", "w-24"],
            [webpackLogo, "Webpack", "w-20"],
          ].map(([logo, text, size]) => (
            <li className="flex-1 grid justify-items-center items-center">
              <h3 className="my-1 text-2xl text-white">{text}</h3>
              <div className={size}>
                <img src={logo} alt="logo" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Skills;
