import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="ml-20 font-[Poppins] ml-[200px]">
        <h1 className="about">About</h1>
        <motion.div
          initial={{ y: 30 }}
          animate={{
            y: 0,
          }}
        >
          <details className="mt-8 text-[16px] text-white cursor-pointer bg-[#6737A3] px-2 py-1 boxshadow rounded " open>
            <summary className="text-[20px] summary1"> Education</summary>
            <li className="list-none ml-16 mt-6  flex flex-col pb-8">
              <div className="flex flex-row gap-48 text-[18px] font-[600]">
                <div>Full Stack Web Development</div>
                <div>2022-2023</div>
              </div>
              <div className="flex flex-row gap-48 mt-2 text-[16px]">
                <div>iNeuron currently known as PW Skills</div>
              </div>
              {/* Graduation */}
              <div className="flex flex-row gap-40 text-[18px] font-[600] mt-8">
                <div>Bechelor of Technology (B.Tech)</div>
                <div>2017-2021</div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <div className="text-[16px]">Chemical Enginnering</div>
                <div>Birsa Institute of Technology</div>
                <div>Sindri Dhanbad, Jharkhand</div>
              </div>
              {/* Intermidiate */}
              <div className="flex flex-row gap-[331px] text-[18px] font-[600] mt-8">
                <div>Intermediate</div>
                <div>2016-2014</div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <div>St. Thomas High School</div>
                <div>Topchanchi Dhanbad, Jharkhand</div>
              </div>
              {/* Matriculation */}
              <div className="flex flex-row gap-[331px] text-[18px] font-[600] mt-8">
                <div>Matriculation</div>
                <div>2014-2013</div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <div>Saraswati Shishu Vidya Mandir</div>
                <div>Baghmara Dhanbad, Jharkhand</div>
              </div>
            </li>
          </details>
          <details className="mt-8 text-[16px] text-white cursor-pointer bg-[#6737A3] px-2 py-1 boxshadow rounded" open>
            <summary className="text-[20px] summary2"> Internship</summary>
            <li className="list-none ml-16 mt-6  flex flex-col">
              <div className="flex flex-row gap-48 text-[18px] font-[600]">
                <div>Full Stack Web Development</div>
                <div>2023</div>
              </div>
              <div className="flex flex-row gap-48 mt-2 pb-4">
                <div>iNeuron currently known as PW Skills</div>
              </div>
            </li>
          </details>
          <details className="mt-8 text-[16px] text-white cursor-pointer bg-[#6737A3] px-2 py-1 boxshadow w-[650px] rounded mb-6" open>
            <summary className="text-[20px] summary3">
              {" "}
              Roles & Responsibility
            </summary>
            <li className="list-none ml-16 mt-6  flex flex-col">
              <div className="flex flex-row gap-48 text-[18px] font-[600]">
                <div>Design & Technical Head</div>
                <div>2021-2020</div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <div>Birsa Institute of Technology</div>
                <div>Sindri Dhanbad, Jharkhand</div>
              </div>
              {/* Graphic Design Intern */}
              <div className="flex flex-row gap-[220px] text-[18px] font-[600] mt-8">
                <div>Graphic Design Intern</div>
                <div>2020</div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <div className="text-[16px]">
                  Dummy Mind Innovative Solutions
                </div>
                <div>Nurserynitra.com</div>
                <div>Dream Girl Foundation</div>
              </div>
              {/* Bitaansh */}
              <div className="flex flex-row gap-[240px] text-[18px] font-[600] mt-8">
                <div>Event Co-ordinator</div>
                <div>2019</div>
              </div>
              <div className="flex flex-col gap-1 mt-2 pb-8">
                <div>Birsa Institute of Technology</div>
                <div>Sindri Dhanbad, Jharkhand</div>
              </div>
            </li>
          </details>
        </motion.div>
      </div>
    </>
  );
};

export default About;
