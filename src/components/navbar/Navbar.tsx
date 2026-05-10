"use client";

import Link from "next/link";
import React, { useState } from "react";
import Greetings from "../greetings/Greetings";
import { useLinkContext } from '@/contexts/LinkProvider/LinkProvider'

const Navbar = () => {
  const data = ['Hello', 'Salam', 'Namaste', 'Bonjour', 'Hallo']
  const myName = "Mujtaba"
  const span1 = "<"
  const span2 = " />"
  const { link, setLink } = useLinkContext()
  const [isOpen, setIsOpen] = useState(false)

  const NAVBAR_HEIGHT = 50

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
      window.scrollTo({ top, behavior: 'smooth' })
      setLink(id)
    }
  }

  return (
    <nav className="flex items-center justify-between px-6 h-full">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/" className="font-bold text-2xl text-white">
          <span className="font-bold text-2xl text-purple-700">{span1}</span>
          {myName}
          <span className="font-bold text-2xl text-purple-700">{span2}</span>
        </Link>
      </div>

      {/* Desktop nav — centered absolutely */}
      <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
        {['home', 'skills', 'projects', 'resume'].map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`font-bold text-[18px] text-white border-b-4 transition-colors duration-150 hover:border-white ${link === id ? 'border-purple-700' : 'border-transparent'}`}
            onClick={(e) => { e.preventDefault(); scrollToSection(id) }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </div>

      {/* Greetings — right side, desktop only */}
      <div className="hidden lg:flex items-center min-w-[140px] justify-end">
        <Greetings data={data} />
      </div>

      {/* Mobile hamburger */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 text-white"
        >
          {isOpen ? (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          ) : (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full bg-black border-t border-[#252525] z-20 px-6 py-4 flex flex-col gap-4">
          {['home', 'skills', 'projects', 'resume'].map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`font-bold text-[18px] text-white ${link === id ? 'text-purple-400' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(id); setIsOpen(false) }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
