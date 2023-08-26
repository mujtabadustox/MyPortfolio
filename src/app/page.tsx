"use client"

import React , {useState} from 'react'
import Greetings from '@/components/greetings/Greetings'
import { Waypoint } from 'react-waypoint'
import {useLinkContext} from '@/contexts/LinkProvider/LinkProvider'
import Image from 'next/image'






const Home = () => {
  const { link, setLink } = useLinkContext();


  const handleEnter = (id: string) => {
    console.log(link)
         setLink(id);
    
 }

 

 

 
  return (
    <div className="flex flex-col items-center">

<Waypoint topOffset="100px" bottomOffset="100px" onEnter={() => handleEnter("home")}>
                  <div id='home' className='w-fit md:w-[800px] p-2 md:p-0 h-[calc(100dvh)] py-[60px]'>
        <div className='flex pt-[100px]'>
          <div className='pt-[15px]'>
      <p className='text-[#949494] pb-5 text-2xl md:text-3xl'>hi, my name is <span className='text-white text-2xl md:text-3xl'>mujtaba ali</span>.</p>
      <p className='text-[#949494] pb-5 text-2xl md:text-3xl'>I am a computer science graduate and a software engineer, I create <span className='text-white text-2xl md:text-3xl'>websites</span> and <span className='text-white text-3xl'>apps!</span></p>
      <p className='text-white pb-5 text-sm'>based in Islamabad, Pakistan</p>
      <button className='border rounded-full mb-2 py-1 px-3 bg-[#121212] text-white text-md'>
      <a href="mailto:mujtabazoroark@gmail.com" target="_blank">Email Me</a>
      </button>
      </div>
      <div className={`flex flex-grow justify-end items-center hide-on-mobile`}>
    <Image className={`border h-[300px] w-[300px] bg-white hide-on-mobile`} alt="my-image" width={300} height={300} src="/images/1.png"/>
    <div className={`absolute pt-[290px] hide-on-mobile`}>
        <div className={`w-[240px] h-[140px] bg-black transform rotate-45 hide-on-mobile`}></div>
      </div>
  </div>
      </div>
      <div className="flex w-6 h-6 mr-2 cursor-pointer">
  <Image
  className='mr-2'
    src="/icons/LinkedIN_white.svg"
    alt="Icon"
    width={21}
    height={21}
    onClick={() => {
      window.open('https://www.linkedin.com/in/mujtabaali01/', '_blank');
    }}
  />
    <Image
    className='mr-2'
    src="/icons/Github_white.svg"
    alt="Icon"
    width={21}
    height={21}
    onClick={() => {
      window.open('https://github.com/mujtabadustox', '_blank');
    }}
  />
    <Image
    className='mr-2'
    src="/icons/Medium_white.svg"
    alt="Icon"
    width={21}
    height={21}
    onClick={() => {
      window.open('https://medium.com/@mujtabazoroark', '_blank');
    }}
  />
</div>
      </div> 
      </Waypoint>

     
                
     
      <Waypoint topOffset="100px" bottomOffset="100px" onEnter={() => handleEnter("skills")} onLeave={(props) => {
console.log("skills" , props)
}}>
      <div  id='skills' className='w-fit md:w-[800px] p-2 md:p-0 h-[calc(100dvh)] py-[60px]'>
        <div className='pt-[60px]'>
        <p className='text-[#949494] pb-5 text-3xl'>hi, my name is <span className='text-white text-3xl'>mujtaba ali</span>.</p>
      <p className='text-[#949494] pb-5 text-3xl'>I am a computer science graduate and a software engineer, I create <span className='text-white text-3xl'>websites</span> and <span className='text-white text-3xl'>apps!</span></p>
      <p className='text-white pb-5 text-sm'>based in Islamabad, Pakistan</p>
      <button className='border rounded-full py-1 px-3 bg-[#121212] text-white text-md'>Email Me</button>
      </div>
      </div>
      </Waypoint>

      <Waypoint topOffset="100px" bottomOffset="100px" onEnter={() => handleEnter("projects")} onLeave={(props) => {
console.log("proj" , props)
}}>
      <div id="projects" className='w-fit md:w-[800px] p-2 md:p-0 h-[calc(100dvh)] py-[60px]'>
        <div className='pt-[60px]'>
      <p className='text-[#949494] pb-5 text-3xl'>hi, my name is <span className='text-white text-3xl'>mujtaba ali</span>.</p>
      <p className='text-[#949494] pb-5 text-3xl'>I am a computer science graduate and a software engineer, I create <span className='text-white text-3xl'>websites</span> and <span className='text-white text-3xl'>apps!</span></p>
      <p className='text-white pb-5 text-sm'>based in Islamabad</p>
      <button className='border rounded-full py-1 px-3 bg-[#949494] text-white text-md'>Email Me</button>
      </div>
      </div>
      </Waypoint>
      

      <Waypoint topOffset="100px" bottomOffset="100px" onEnter={() => handleEnter("resume")}>
      <div id="resume" className='w-fit md:w-[800px] p-2 md:p-0 h-[calc(100dvh)] py-[60px]'>
        <div className='pt-[60px]'>
      <p className='text-[#949494] pb-5 text-3xl'>hi, my name is <span className='text-white text-3xl'>mujtaba ali</span>.</p>
      <p className='text-[#949494] pb-5 text-3xl'>I am a computer science graduate and a software engineer, I create <span className='text-white text-3xl'>websites</span> and <span className='text-white text-3xl'>apps!</span></p>
      <p className='text-white pb-5 text-sm'>based in Islamabad</p>
      <button className='border rounded-full py-1 px-3 bg-[#949494] text-white text-md'>Email Me</button>
      </div>
      </div>
      </Waypoint>



      
      </div>
    
  )
}

export default Home;