import React from "react";
import { project } from "../constant";

const Work = () => {
  return (
    <div className="flex flex-col w-full ml-[110px]">
      <h1 className="text-[150px] font-bold projects">projects</h1>
      <div className="bg-[#ffffff] boxshadow2 rounded-lg mt-16 ml-[310px] px-5 py-2 w-[745px]">
        <ul className="list-none flex flex-row space-x-8 font-[Poppins] text-[17px] cursor-pointer ">
          <li>All Projects</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Backend</li>
          <li>Full Stack(MERN)</li>
        </ul>
      </div>
      <div className="h-[400px] mt-16 ml-20 w-[1225px] boxshadow2 rounded-lg flex flex-row gap-8 items-center w-[100vw] justify-center">
        {project.map((project, index)=>(
          <div className="bg-[#404040] px-6 py-3 rounded-lg" key={project.id}>
            <div className="h-[250px]">{project.img}</div>
            <h2 className="text-[20px] text-white">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
