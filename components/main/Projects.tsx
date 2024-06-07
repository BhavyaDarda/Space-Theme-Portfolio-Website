import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Screenshot 2024-04-27 153941.png"
          title="HeartBuddy Website"
          description="Your very own Urban Heart Companion."
        />
        <ProjectCard
          src="/"
          title="ecommerce website dupe"
          description="flipkart website landing page duplicate."
        />
        <ProjectCard
          src="/.png"
          title="Space Themed Portfolio Website"
          description="An attractive portfolio with appealing visual elements."
        />
      </div>
    </div>
  );
};

export default Projects;