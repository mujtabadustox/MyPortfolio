"use client";

import Link from "next/link";
import React, {useState} from "react";
import Greetings from "../greetings/Greetings";
import {useLinkContext} from '@/contexts/LinkProvider/LinkProvider'



const Navbar = () => {

    const data = ['Hello','Salam','Namaste','Bonjour','Hallo']
    const myName = "Mujtaba"
    const span1 = "<"
    const span2 = " />"
    const { link, setLink } = useLinkContext();
    const [isOpen, setIsOpen] = useState(false);

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


    <nav className="flex items-center justify-between flex-wrap px-6 w-100">
    <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
    <Link href="/" className="font-bold text-[20px] md:mx-5 md:my-2.5 text-white">
        <span className="font-bold text-[20px] text-purple-700">{span1}</span>{myName}<span className="font-bold text-[20px] text-purple-700">{span2}</span>
      </Link>
    </div>
    <div className="block lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
      >
        <svg
          className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
    </div>
    <div
      className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
    >

<div className="md:pt-0 pt-9 mx-5 my-2.5 space-x-5">
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
  

     
    </div>

    <div className={`flex mx-5 my-2.5 min-w-[140px] max-w-[140px] hide-on-mobile`}>
        <Greetings data={data}/>
       
      </div>

  
    
  </nav>

  );
};

export default Navbar;
