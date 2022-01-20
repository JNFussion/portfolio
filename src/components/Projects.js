import React from "react";
import "tw-elements";
import ProjectsList from "../assets/data/projects";
import Modal from "./Modal";

function Projects() {
  return (
    <article id="projects" className="snap-start py-20">
      <div className="max-w-5xl mx-auto py-10">
        <h2 className="text-4xl font-bold text-green-ryb-light">
          <span className="border-b border-b-screaming-green">Projects</span>
        </h2>
        <div className="my-10 p-10 rounded bg-army-green/75 backdrop-blur">
          {ProjectsList.map(
            ({
              title,
              description,
              photos,
              photoPreview,
              liveURL,
              codeURL,
            }) => (
              <article className="grid md:grid-cols-3 md:gap-5 p-4 text-white border-b-2 border-pine-tree">
                <div className="col-span-1">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={`#${title
                      .replace(/\s/g, "-")
                      .toLowerCase()}`}
                  >
                    <img src={photoPreview} alt="" />
                  </button>
                </div>
                <div className="md:col-span-2 grid grid-rows-media">
                  <h3 className="mb-2 text-lg font-bold border-b border-b-celeste">
                    <div className="w-fit mx-auto">{title}</div>
                  </h3>
                  <p>{description}</p>
                  <footer>
                    <ul className="flex gap-5">
                      {liveURL && (
                        <li>
                          <a
                            href={liveURL}
                            target="_blank"
                            className="text-celeste transition-all duration-50 ease-in-out hover:underline"
                            rel="noreferrer"
                          >
                            Live
                          </a>
                        </li>
                      )}
                      <li>
                        <a
                          href={codeURL}
                          target="_blank"
                          className="text-celeste hover:underline"
                          rel="noreferrer"
                        >
                          Code
                        </a>
                      </li>
                    </ul>
                  </footer>
                </div>

                <Modal
                  modalID={title.replace(/\s/g, "-").toLowerCase()}
                  photos={photos}
                  title={title}
                />
              </article>
            )
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;
