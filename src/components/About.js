import React from "react";

function About() {
  return (
    <section id="about" className="snap-center h-screen grid items-center">
      <div className="my-10 p-20 bg-white">
        <h2 className="w-fit mx-auto my-4 font-bold text-4xl">
          <span className="border-b border-b-army-green">About me</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p>
            I&apos;m Higher Technician in Computer Network Systems Management.
            In 2020 after the lockdown due to COVID, I found{" "}
            <a
              href="https://www.theodinproject.com/"
              className="text-celeste-dark font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              The Odin Project
            </a>{" "}
            in Reddit. In that moment I decided to switch path and become a Web
            developer. <br />
            Since then I have been doing the Fullstack path in The Odin Project.
            That website is a open source community with a curated list of
            webdev resources and it&apos;s focused in building projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
