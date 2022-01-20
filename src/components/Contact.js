import { createPopper } from "@popperjs/core";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaAt, FaGithub } from "react-icons/fa";

function Contact() {
  const [email, setEmail] = useState("juan.jose.gutierrez.99@gmail.com");
  const [modalMessage, setModalMessage] = useState(false);
  // Tooltip

  useEffect(() => {
    const link = document.querySelector("#email");
    const tooltip = document.querySelector("#tooltip");
    const popperInstance = createPopper(link, tooltip, {
      placement: "top",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    });

    function show() {
      tooltip.setAttribute("data-show", "");

      // We need to tell Popper to update the tooltip position
      // after we show the tooltip, otherwise it will be incorrect
      popperInstance.update();
    }

    function hide() {
      tooltip.removeAttribute("data-show");
    }

    const showEvents = ["mouseenter", "focus"];
    const hideEvents = ["mouseleave", "blur"];

    showEvents.forEach((event) => {
      link.addEventListener(event, show);
    });

    hideEvents.forEach((event) => {
      link.addEventListener(event, hide);
    });

    return () => {};
  }, []);

  useEffect(() => {
    let timerID;
    if (modalMessage) {
      timerID = setTimeout(() => {
        setModalMessage(false);
      }, 2000);
    }

    return () => {
      if (modalMessage) {
        clearTimeout(timerID);
      }
    };
  }, [modalMessage]);

  return (
    <article id="contact" className="snap-center h-screen grid items-center">
      {modalMessage && (
        <article
          id="modalMessage"
          className="absolute top-8 left-0 right-0 w-fit mx-auto px-4 py-2 rounded shadow text-black font-medium bg-white"
        >
          <p>Email copied to clipboard!</p>
        </article>
      )}

      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-ryb-light">
          <span className="border-b border-b-screaming-green">Contact me</span>
        </h2>
        <ul className="flex justify-evenly my-10 py-10 rounded text-2xl text-celeste font-medium bg-pine-tree-dark/75">
          <li>
            <a
              href="https://www.linkedin.com/in/juan-jose-gutierrez-gutierrez-3264641b2/"
              target="_blank"
              className="flex gap-2 items-center hover:underline"
              rel="noreferrer"
            >
              <span className="text-3xl">
                <FaLinkedin />
              </span>
              <span> Linkendin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JNFussion"
              target="_blank"
              className="flex gap-2 items-center hover:underline"
              rel="noreferrer"
            >
              <span>
                <FaGithub />
              </span>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <button
              id="email"
              type="button"
              className="flex gap-2 items-center hover:underline"
              data-bs-toggle="tooltip"
              title="Hi! I'm tooltip"
              onClick={() => {
                navigator.clipboard.writeText(email);
                setModalMessage(true);
              }}
            >
              <span>
                <FaAt />
              </span>
              <span>Email</span>
            </button>
            <span
              id="tooltip"
              className="p-2 rounded text-base text-white bg-army-green"
            >
              Copy to clipboard
              <div id="arrow" data-popper-arrow />
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Contact;
