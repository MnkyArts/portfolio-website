import React from "react";
import Image from "next/image";
import { getSortedPostsData } from "../../../lib/projects";
import ProjectItem from "./ProjectItem";

export const Projects = () => {
  const projects = getSortedPostsData();
  return (
    <section className="mx-auto min-w-full px-24 py-20 lg:py-32 lg:px-52 border-b-2 border-b-[#e5e7eb1c] overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0a0e1a]"></div>
      <ul className="z-10 grid grid-cols-1 lg:grid-cols-4 relative">
        {projects.map((project) => (
          <ProjectItem key={project.id} post={project} />
        ))}
      </ul>
      <div className="absolute top-0 left-0 w-full h-full grid-pattern bg-top [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/projectbg.jpg')] bg-no-repeat bg-cover [mask-image:linear-gradient(-180deg,transparent,black,transparent)]"></div>
    </section>
  );
};

export default Projects;
