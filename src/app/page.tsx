"use client"

import React from 'react'
import { Waypoint } from 'react-waypoint'
import { useLinkContext } from '@/contexts/LinkProvider/LinkProvider'
import Image from 'next/image'

const skillGroups = [
  {
    label: 'frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Shadcn-UI', 'Framer Motion', 'ChakraUI', 'MUI'],
  },
  {
    label: 'state & data',
    skills: ['Redux', 'TanStack Query', 'TanStack Table', 'Zod', 'React Hook Form'],
  },
  {
    label: 'backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'WebSockets', 'Prisma', 'Mongoose', 'GraphQL'],
  },
  {
    label: 'databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'Oracle DB'],
  },
  {
    label: 'cloud & devops',
    skills: ['AWS', 'GCP', 'Azure DevOps', 'Firebase', 'Vercel', 'Docker', 'Jenkins'],
  },
  {
    label: 'testing',
    skills: ['Jest', 'Cypress', 'React Testing Library'],
  },
  {
    label: 'other',
    skills: ['Python', 'Java', 'C/C++', 'PHP', 'Git', 'Linux', 'Figma', 'Postman'],
  },
]

const projects = [
  {
    num: '01',
    name: 'PhotoSoft.ai',
    desc: 'AI image generation SaaS — architected data flow, built fully responsive UI, handled auth and cloud storage end-to-end.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'TailwindCSS', 'Shadcn-UI', 'Zod'],
  },
  {
    num: '02',
    name: 'PEEQ Platform',
    desc: 'Three-app entertainment and food delivery system — Business, Admin, and User modules with image cropping, PDF viewer, and multi-step forms.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Shadcn-UI'],
  },
  {
    num: '03',
    name: 'FABCOM Analytics Dashboard',
    desc: 'Data-dense analytics platform with interactive charts, custom tables, and performance-optimized component architecture.',
    tags: ['Next.js', 'AM5 Charts', 'TanStack Table', 'TailwindCSS'],
  },
  {
    num: '04',
    name: 'Iron Fist Consultants',
    desc: 'Motor dealership analytics app with multiple chart types and custom TailwindCSS-based visualizations.',
    tags: ['React.js', 'Chart.js', 'TailwindCSS'],
  },
  {
    num: '05',
    name: 'C2 Air Defense Simulator',
    desc: 'Real-time map-based simulator for a Ground Based Air Defense System\'s C2 layer with geospatial visualization. FYP.',
    tags: ['React.js', 'Python', 'React Leaflet', 'MERN', 'REST API'],
  },
  {
    num: '06',
    name: 'Social Networking App',
    desc: 'Full-stack social platform with auth, friend system, profile pages, and event following.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    num: '07',
    name: 'RedCoast Web',
    desc: 'Company portfolio with Contentful CMS, reCAPTCHA integration, and CSS animations.',
    tags: ['Next.js', 'Contentful CMS', 'CSS Animations'],
  },
  {
    num: '08',
    name: 'Bus Tracking Application',
    desc: 'Real-time bus route tracking application built on the MERN stack.',
    tags: ['MERN', 'ChakraUI', 'REST API'],
  },
]

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-[820px] mx-auto px-5 md:px-8 ${className}`}>
    {children}
  </div>
)

const Home = () => {
  const { setLink } = useLinkContext()

  const handleEnter = (id: string) => {
    setLink(id)
  }

  return (
    <div className="flex flex-col items-center w-full">

      {/* HOME */}
      <Waypoint topOffset="60px" bottomOffset="60px" onEnter={() => handleEnter("home")}>
        <div id='home' className='w-fit md:w-[800px] p-2 md:p-0 h-[calc(100dvh)] py-[60px] flex flex-col justify-center items-center'>
          <div className='flex flex-col gap-2'>
            <div className='flex'>
         <div className='pt-[15px]'>
              <p className='text-[#949494] pb-5 text-2xl md:text-3xl'>hi, my name is <span className='text-white text-2xl md:text-3xl'>mujtaba ali</span>.</p>
              <p className='text-[#949494] pb-5 text-2xl md:text-3xl'>I am a computer science graduate and a software engineer, I create <span className='text-white text-2xl md:text-3xl'>websites</span> and <span className='text-white text-3xl'>apps</span><span className='text-purple-700 text-3xl'>!</span></p>
              <p className='text-white pb-5 text-sm'>based in Islamabad, Pakistan</p>
              <button className='border border-purple-700 rounded-full mb-2 py-1 px-3 bg-[#121212] text-white text-md'>
                <a href="mailto:mujtabazoroark@gmail.com" target="_blank">Email Me</a>
              </button>
            </div>
            <div className={`flex flex-grow justify-end items-center hide-on-mobile`}>
              <Image className={`border h-[300px] w-[300px] bg-white hide-on-mobile`} alt="my-image" width={300} height={300} src="/images/1.png" />
              <div className={`absolute pt-[290px] hide-on-mobile`}>
                <div className={`w-[240px] h-[140px] bg-black transform rotate-45 hide-on-mobile`}></div>
              </div>
            </div>
            </div>
   
                      <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/mujtabaali01/" target="_blank" rel="noopener noreferrer">
              <Image className='border border-purple-700 rounded-full' src="/icons/LinkedIN_white.svg" alt="LinkedIn" width={22} height={22} />
            </a>
            <a href="https://github.com/mujtabadustox" target="_blank" rel="noopener noreferrer">
              <Image className='border border-purple-700 rounded-full' src="/icons/Github_white.svg" alt="GitHub" width={22} height={22} />
            </a>
            <a href="https://medium.com/@mujtabazoroark" target="_blank" rel="noopener noreferrer">
              <Image className='border border-purple-700 rounded-full' src="/icons/Medium_white.svg" alt="Medium" width={22} height={22} />
            </a>
          </div>
          </div>

        </div>
      </Waypoint>

      {/* SKILLS */}
      <Waypoint topOffset="60px" bottomOffset="60px" onEnter={() => handleEnter("skills")}>
        <div id='skills' className='w-full min-h-[calc(100dvh)] py-[100px]'>
          <Section>
            <p className='text-[#3d3d3d] pb-1 text-sm font-mono'>{'// tools of the trade'}</p>
            <p className='text-white pb-10 text-3xl md:text-4xl font-bold'>skills.</p>
            <div className='space-y-9'>
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className='text-purple-700 font-mono text-xs pb-3 tracking-widest uppercase'>{group.label}</p>
                  <div className='flex flex-wrap gap-2'>
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className='text-[#949494] text-sm border border-[#252525] px-3 py-1.5 hover:border-purple-700 hover:text-white transition-colors duration-200 cursor-default'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className='text-[#2d2d2d] font-mono text-xs mt-14'>{'// and still picking up new ones'}</p>
          </Section>
        </div>
      </Waypoint>

      {/* PROJECTS */}
      <Waypoint topOffset="60px" bottomOffset="60px" onEnter={() => handleEnter("projects")}>
        <div id="projects" className='w-full min-h-[calc(100dvh)] py-[100px]'>
          <Section>
            <p className='text-[#3d3d3d] pb-1 text-sm font-mono'>{"// things i've shipped"}</p>
            <p className='text-white pb-10 text-3xl md:text-4xl font-bold'>projects.</p>
            <div className='space-y-5'>
              {projects.map((project) => (
                <div
                  key={project.num}
                  className='border-l-2 border-[#252525] hover:border-purple-700 pl-5 py-3 transition-colors duration-300 cursor-default group'
                >
                  <div className='flex items-baseline gap-3 mb-1'>
                    <span className='text-purple-700 font-mono text-xs'>{project.num}.</span>
                    <span className='text-white text-lg font-medium'>{project.name}</span>
                  </div>
                  <p className='text-[#949494] text-sm leading-relaxed'>{project.desc}</p>
                  <div className='flex flex-wrap gap-3 mt-2'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='text-[#4a4a4a] font-mono text-xs group-hover:text-[#6a6a6a] transition-colors duration-200'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </Waypoint>

      {/* RESUME */}
      <Waypoint topOffset="60px" bottomOffset="60px" onEnter={() => handleEnter("resume")}>
        <div id="resume" className='w-full min-h-[calc(100dvh)] py-[100px] flex items-start'>
          <Section>
            <p className='text-[#3d3d3d] pb-1 text-sm font-mono'>{'// the full story'}</p>
            <p className='text-white pb-10 text-3xl md:text-4xl font-bold'>resume.</p>

            <div className='space-y-6 mb-10'>
              <div>
                <p className='text-purple-700 font-mono text-xs tracking-widest uppercase mb-2'>experience</p>
                <p className='text-[#949494] text-sm leading-relaxed'>
                  software engineer at <span className='text-white'>RedCoast</span>, islamabad — sep 2023 to present.
                  led end-to-end development of multiple client-facing web apps from architecture through production deployment.
                </p>
              </div>
              <div>
                <p className='text-purple-700 font-mono text-xs tracking-widest uppercase mb-2'>education</p>
                <p className='text-[#949494] text-sm leading-relaxed'>
                  bs computer science — <span className='text-white'>FAST NUCES</span>, islamabad. gpa 3.39 / 4.00.
                  2× dean&apos;s list of honor, fall 2022 &amp; spring 2023.
                </p>
              </div>
              <div>
                <p className='text-purple-700 font-mono text-xs tracking-widest uppercase mb-2'>certifications</p>
                <p className='text-[#949494] text-sm leading-relaxed'>
                  <span className='text-white'>aws certified cloud practitioner</span> · aspire leaders program 2023 (harvard-affiliated) · git fundamentals — 10pearls university.
                </p>
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              <a
                href="https://docs.google.com/document/d/1SnCTpes26yofN64imPKVvfRpVmpOhVuD_HY7-mH62ZA/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className='border border-[#3d3d3d] rounded-full py-1.5 px-5 bg-[#121212] text-white text-sm hover:border-purple-700 transition-colors duration-200'
              >
                view ↗
              </a>
            </div>
            <p className='text-[#2d2d2d] font-mono text-xs mt-8'>{'// or just reach out — mujtabazoroark@gmail.com'}</p>
          </Section>
        </div>
      </Waypoint>

    </div>
  )
}

export default Home
