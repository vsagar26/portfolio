import React from "react";
import { gmail, phone, linkedin, github, telegram, hashnode, instagram } from "../assets";



const Contact = () => {
  return (
    <div className="ml-[150px]">
      <h2 className="contact">Contact</h2>
      <div className="flex flex-col justify-center items-center ml-[340px] mt-10">
        <div className="container1 ">
          <ul className="flex flex-row gap-4 contactlist1">
            <li>
              <div className="hex2 " onClick={()=> window.open("mailto:vsagar267@gmail.com")}>
                <img src={gmail} alt="Email" className="h-[50px]" />
              </div>
            </li>
            <li>
              <div className="hex2" onClick={()=> window.open("tel:+918340506183")}>
                <img src={phone} alt="Phone" className="h-[60px]" />
              </div>
            </li>
          </ul>
        </div>
        <div className="container2 ">
          <ul className="flex flex-row gap-4 contactlist2">
            <li>
              <div className="hex2 " onClick={()=> window.open("https://www.linkedin.com/in/vsagarofficial")}>
                <img src={linkedin} alt="LinkedIn" className="h-[70px]" />
              </div>
            </li>
            <li>
              <div className="hex2" onClick={()=> window.open("https://github.com/vsagar26")}>
                <img src={github} alt="Github" className="h-[80px]" />
              </div>
            </li>
            <li>
              <div className="hex2" onClick={()=> window.open("https://t.me/bigbossvs")}>
                <img src={telegram} alt="Telegram" className="h-[80px]" />
              </div>
            </li>
          </ul>
        </div>
        <div className="container1 ">
          <ul className="flex flex-row gap-4 contactlist3">
            <li>
              <div className="hex2 " onClick={()=> window.open("https://hashnode.com/@vsagar")}>
                <img src={hashnode} alt="Hashnode" className="h-[70px]" />
              </div>
            </li>
            <li>
              <div className="hex2" onClick={()=> window.open("https://www.instagram.com/v_sagar005/")}>
                <img src={instagram} alt="Instagram" className="h-[60px]" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
