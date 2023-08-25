"use client";

import Link from "next/link";
import React from "react";
import Greetings from "../greetings/Greetings";
import {useLinkContext} from '@/contexts/LinkProvider/LinkProvider'



const Navbar = () => {

    const data = ['Hello','Salam','Namaste','Bonjour','Hallo']
    const myName = "Mujtaba"
    const span1 = "<"
    const span2 = " />"
    const { link, setLink } = useLinkContext();

    const scrollToSection = (id : string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          setLink(id); // Update link state when manually scrolling
        }
      };

  return (
    <div className="flex justify-between w-100 ">
      <Link href="/" className="font-bold text-[20px] mx-5 my-2.5 text-white">
        <span className="font-bold text-[20px] text-purple-700">{span1}</span>{myName}<span className="font-bold text-[20px] text-purple-700">{span2}</span>
      </Link>

      <div className="mx-5 my-2.5 space-x-5">
<Link href="#home" className={`font-bold text-[20px] text-white hover:border-white border-b-4 transition border-transparent ${
    link === "home" ? "border-purple-700" : "border-transparent"
  }`} onClick={(e) => {
    e.preventDefault();
    scrollToSection("home");
  }}
  >
        Home
      </Link>
      <Link href="#skills" className={`font-bold text-[20px] text-white hover:border-white border-b-4 transition border-transparent ${
    link === "skills" ? "border-purple-700" : "border-transparent"
  }`} onClick={(e) => {
    e.preventDefault();
    scrollToSection("skills");
  }}
  >
        Skills
      </Link>
      <Link href="#projects" className={`font-bold text-[20px] text-white hover:border-white border-b-4 transition border-transparent ${
    link === "projects" ? "border-purple-700" : "border-transparent"
  }`} onClick={(e) => {
    e.preventDefault();
    scrollToSection("projects");
  }}
  >
        Projects
      </Link>
      <Link href="#resume" className={`font-bold text-[20px] text-white hover:border-white border-b-4 transition border-transparent ${
    link === "resume" ? "border-purple-700" : "border-transparent"
  }`} onClick={(e) => {
    e.preventDefault();
    scrollToSection("resume");
  }}
  >
        Resume
      </Link>
      </div>
  

      <div className="flex mx-5 my-2.5 min-w-[140px] max-w-[140px]">
        <Greetings data={data}/>
       
      </div>
    </div>
  );
};

export default Navbar;
