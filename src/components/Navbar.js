import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between p-4 text-celeste bg-pine-tree-dark">
      <ul className="hidden sm:flex gap-5">
        <li>
          <a href="#home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex gap-5 text-3xl">
        <li>
          <a
            href="https://github.com/JNFussion"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <FaGithub />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/juan-josé-gutiérrez-gutiérrez-3264641b2"
            target="_blank"
            className="flex gap-2 items-center hover:underline"
            rel="noreferrer"
          >
            <span>
              <FaLinkedin />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
