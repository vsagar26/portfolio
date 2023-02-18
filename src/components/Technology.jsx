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
    <div className="flex flex-col justify-center items-center h-[100vh] ">
      {/* <h2 className="text-[50px] font-[Roboto] font-[100] ml-[300px] pb-14 mt-[-60px]">Technology</h2> */}
      <div className="flex flex-col justify-center items-center ml-[340px] mt-[-50px]" >
        <div className="container1 ">
          <ul className="flex flex-row gap-4 ulist1" >
            <li>
              <div className="hex " >
                <img src={html} alt="html" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={css} alt="html" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={bootstrap} alt="html" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={tailwindcss} alt="html" className="h-[80px]" />
              </div>
            </li>
          </ul>
        </div>

        <div className="container2">
          <ul className="flex flex-row gap-4 ulist2">
            <li>
              <div className="hex">
                <img src={javascript} alt="html" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={reactjs} alt="html" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={redux} alt="html" className="h-[80px]" />
              </div>
            </li>
          </ul>
        </div>

        <div className="container3 ">
          <ul className="flex flex-row gap-4 ulist3">
            <li>
              <div className="hex">
                <img src={nodejs} alt="html" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={expressjs} alt="html" className="h-[50px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={mongodb} alt="html" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex">
                <img src={postman} alt="html" className="h-[80px]" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
