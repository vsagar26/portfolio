import React, { useState } from "react";
import { project } from "../constant";
import { motion } from "framer-motion";

const Work = () => {
  const [items, setItems] = useState(project);

  const filterItem = (categoryItem) => {
    const updatedItems = project.filter((currentItem) => {
      return currentItem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <motion.div
      className="flex flex-col w-full ml-[110px]"
      initial={{ y: 40 }}
      animate={{
        y: 0,
      }}
    >
      <div className="bg-[#ffffff] boxshadow2 rounded-lg mt-16 ml-[310px] px-5 py-2 w-[745px]">
        <ul className="list-none flex flex-row space-x-8 font-[Poppins] text-[17px] cursor-pointer ">
          <li onClick={() => setItems(project)} className="hoverEffect2">All Projects</li>
          <li onClick={() => filterItem("htmlcss")} className="hoverEffect2">HTML & CSS</li>
          <li onClick={() => filterItem("javascript")} className="hoverEffect2">JavaScript</li>
          <li onClick={() => filterItem("react")} className="hoverEffect2">React</li>
          <li onClick={() => filterItem("backend")} className="hoverEffect2">Backend</li>
          <li onClick={() => filterItem("fullstack")} className="hoverEffect2">Full Stack(MERN)</li>
        </ul>
      </div>
      <div className=" mt-16 ml-20 w-[1225px] boxshadow2 rounded-lg flex flex-row gap-8 items-center w-[100vw] justify-center projectdiv px-6 py-8 mb-8">
        {items.map((project, index) => (
          <div
            className="bg-[#404040] flex flex-col px-6 py-3 rounded-lg w-[220px] h-[350px]"
            key={project.id}
          >
            <div className="h-[250px]"><img src={project.img} alt="" className="rounded-xl"/></div>
            <h2 className="text-[17px] text-white text-center">
              {project.title}
            </h2>
            <button
              className="bg-white px-6 py-2 mt-2 rounded hoverEffect"
              onClick={() => window.open(project.deployed)}
            >
              See Live
            </button>
            <button
              className="bg-white px-6 py-2 mt-2 rounded hoverEffect"
              onClick={() => window.open(project.git)}
            >
              Github Repo
            </button>
          </div>
        ))}
      </div>
      <h1 className="text-[150px] font-bold projects">projects</h1>
    </motion.div>
  );
};

export default Work;
