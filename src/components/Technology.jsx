import React from "react";
import {
  html,
  css,
  bootstrap,
  tailwindcss,
  javascript,
  reactjs,
  redux,
  mongodb,
  nodejs,
  expressjs,
  postman,
} from "../assets";


const Technology = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] ml-[110px]">
      <h2 className=" technology">Technology</h2>
      <div className="flex flex-col justify-center items-center ml-[340px] mt-[-70px]" >
        <div className="container1 ">
          <ul className="flex flex-row gap-4 ulist1" >
            <li>
              <div className="hex " >
                <img src={html} alt="html" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={css} alt="css" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={bootstrap} alt="bootstrap" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={tailwindcss} alt="tailwindcss" className="h-[60px]" />
              </div>
            </li>
          </ul>
        </div>

        <div className="container2">
          <ul className="flex flex-row gap-4 ulist2">
            <li>
              <div className="hex">
                <img src={javascript} alt="javascript" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={reactjs} alt="reactjs" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={redux} alt="redux" className="h-[80px]" />
              </div>
            </li>
          </ul>
        </div>

        <div className="container3 ">
          <ul className="flex flex-row gap-4 ulist3">
            <li>
              <div className="hex">
                <img src={nodejs} alt="nodejs" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={expressjs} alt="expressjs" className="h-[50px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={mongodb} alt="mongodb" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={postman} alt="postman" className="h-[80px]" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
