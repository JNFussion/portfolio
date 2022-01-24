import React from "react";

function About() {
  return (
    <section id="about" className="snap-center h-screen grid items-center">
      <div className="my-10 px-10 py-20 md:p-20 bg-white">
        <h2 className="w-fit mx-auto my-4 font-bold text-2xl md:text-4xl">
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
          <p>
            I have gained experience in HTML, CSS, JavaScript and ReactJS which
            i have acquired in my personal projects. Also I have learn Ruby On
            Rails to use it as back-end. <br />
            In this process i have found that I&apos;m a creative person with
            good problem solving skills. Furthermore, I’m a quiet person who
            likes to work alone but I wouldn’t have any problem working in a
            team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
