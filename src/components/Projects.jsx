import React, {useState} from "react";
import { project } from "../constant";





const Work = () => {

  const [items, setItems] = useState(project);

  const filterItem = (categoryItem) => {
      const updatedItems = project.filter((currentItem)=>{
        return currentItem.category === categoryItem;
      })
      setItems(updatedItems);
  }
  
  return (
    <div className="flex flex-col w-full ml-[110px]">
      
      <div className="bg-[#ffffff] boxshadow2 rounded-lg mt-16 ml-[310px] px-5 py-2 w-[745px]">
        <ul className="list-none flex flex-row space-x-8 font-[Poppins] text-[17px] cursor-pointer ">
          <li onClick={()=>setItems(project)}>All Projects</li>
          <li onClick={()=>filterItem("htmlcss")}>HTML & CSS</li>
          <li onClick={()=>filterItem("javascript")}>JavaScript</li>
          <li onClick={()=>filterItem("react")}>React</li>
          <li onClick={()=>filterItem("backend")}>Backend</li>
          <li onClick={()=>filterItem("fullstack")}>Full Stack(MERN)</li>
        </ul>
      </div>
      <div className=" mt-16 ml-20 w-[1225px] boxshadow2 rounded-lg flex flex-row gap-8 items-center w-[100vw] justify-center projectdiv px-6 py-8 mb-8">
        {items.map((project, index)=>(
          <div className="bg-[#404040] px-6 py-3 rounded-lg w-[220px]" key={project.id}>
            <div className="h-[250px]">{project.img}</div>
            <h2 className="text-[20px] text-white">{project.title}</h2>
          </div>
        ))}
      </div>
      <h1 className="text-[150px] font-bold projects">projects</h1>
    </div>
  );
};

export default Work;
