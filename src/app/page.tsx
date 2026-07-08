"use client"

import React from 'react'
import { Waypoint } from 'react-waypoint'
import { useLinkContext } from '@/contexts/LinkProvider/LinkProvider'
import Image from 'next/image'

const skillGroups = [
  {
    label: 'frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Framer Motion', 'MUI', 'Shadcn-UI', 'ChakraUI', 'Radix'],
  },
  {
    label: 'state & data',
    skills: ['Redux', 'Zustand', 'TanStack Query', 'TanStack Table', 'Zod', 'React Hook Form'],
  },
  {
    label: 'backend',
    skills: ['Node.js', 'Express.js', 'Django', 'FAST API', 'REST APIs', 'Auth', 'WebSockets', 'Prisma', 'Mongoose', 'Knex'],
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
    label: 'cms',
    skills: ['Sanity', 'Contentful'],
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
    badge: 'Beta',
    link: 'https://photosoft.ai',
    desc: 'AI image generation SaaS with a credit system tied to generation count and model selection, generation history with download management, and user profiles. Architected the full data flow and built a polished animated UI, with Firebase Auth and Storage handled end-to-end.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'TailwindCSS', 'Shadcn-UI', 'Zod', 'TanStack Query', 'Comfy UI'],
  },
  {
    num: '02',
    name: 'PEEQ Platform',
    desc: 'Business and Admin apps for a 3-app food delivery and entertainment platform. Engineered complex multi-step onboarding with state persistence across steps, image cropping, a PDF viewer, and pixel-perfect custom UI components.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Firebase', 'Zod', 'React Hook Form'],
  },
  {
    num: '03',
    name: 'FABCOM Analytics & Management Platform',
    desc: 'Large-scale platform built from scratch, featuring live interactive dashboards with interconnected chart filters, a spreadsheet-style data editor handling 1000+ rows with custom per-column inputs and inline validation, and role-based user and team management. Solved a major performance bottleneck by isolating cell state and implementing row virtualization.',
    tags: ['React.js (Vite)', 'AM5 Charts', 'TanStack Table', 'Zustand'],
  },
  {
    num: '04',
    name: 'Iron Fist Consultants',
    desc: 'Motor dealership analytics app with custom chart types beyond Chart.js defaults. Built custom renderers and TailwindCSS-based visualizations to match precise client design requirements, with data handled via Redux Saga.',
    tags: ['React.js', 'Chart.js', 'TailwindCSS', 'Redux'],
  },
  {
    num: '05',
    name: 'RedCoast Web',
    link: 'https://redcoast.co',
    desc: 'Company marketing site with Contentful CMS for dynamic blog content, server-side rendering for strong SEO performance, Google reCAPTCHA integration, and smooth CSS animations. Clean, maintainable code built for long-term content updates.',
    tags: ['Next.js', 'Contentful CMS', 'CSS Animations'],
  },
  {
    num: '06',
    name: 'Stackwise',
    desc: 'AI-powered B2B marketing platform. Built a Brand Tone scoring module, an AI assistant that monitors live campaign data and surfaces actionable insights, a What-If simulation engine, and a full Campaign Planner with database and REST API.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI API', 'REST APIs'],
  },
  {
    num: '07',
    name: 'Ankota',
    desc: 'Analytics dashboard replicating Google Looker Studio\'s layout and interactions, designed for non-technical users migrating from Looker Studio with zero learning curve.',
    tags: ['React.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    num: '08',
    name: 'C2 Air Defense Simulator',
    desc: 'Real-time Ground Based Air Defense command and control simulator. Aircraft and weapons systems tracked live on a React Leaflet map, with 3D terrain data stored in MongoDB for line-of-sight constraints. Implemented a KNN-based threat neutralization engine in Python and a full friend-or-foe identification module. FYP.',
    tags: ['React.js', 'Python', 'React Leaflet', 'MongoDB', 'REST API'],
  },
  {
    num: '09',
    name: 'Social Networking App',
    desc: 'Full-stack social platform with auth, friend system, profile pages, and event following.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    num: '10',
    name: 'Bus Tracking Application',
    desc: 'Real-time bus route tracking application built on the MERN stack.',
    tags: ['MERN', 'ChakraUI', 'REST API'],
  },
]

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className='group border border-[#252525] rounded-lg p-5 hover:border-purple-700 hover:bg-purple-700/[0.04] hover:-translate-y-0.5 transition-all duration-300'
                >
                  <div className='flex items-center gap-2 pb-3'>
                    <span className='h-1.5 w-1.5 rounded-full bg-purple-700 group-hover:shadow-[0_0_8px_2px_rgba(126,34,206,0.6)] transition-shadow duration-300' />
                    <p className='text-purple-700 font-mono text-xs tracking-widest uppercase'>{group.label}</p>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className='text-[#949494] text-sm rounded-full border border-[#252525] px-3 py-1.5 hover:border-purple-700 hover:text-white hover:bg-purple-700/10 transition-colors duration-200 cursor-default'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className='text-[#2d2d2d] font-mono text-xs mt-10'>{'// and still picking up new ones'}</p>
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
                  className='border-l-2 border-[#252525] hover:border-purple-700 hover:bg-white/[0.02] pl-5 pr-3 py-3 transition-all duration-300 cursor-default group'
                >
                  <div className='flex flex-wrap items-center gap-3 mb-1'>
                    <span className='text-purple-700 font-mono text-xs'>{project.num}.</span>
                    <span className='text-white text-lg font-medium'>{project.name}</span>
                    {project.badge && (
                      <span className='rounded-full border border-[#3d3d3d] px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-[#949494]'>
                        {project.badge}
                      </span>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center gap-1 shrink-0 rounded-full border border-purple-700/60 bg-purple-700/10 px-3 py-1 text-xs font-mono text-purple-300 hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-colors duration-200'
                      >
                        live <ExternalLinkIcon />
                      </a>
                    )}
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
                href="https://docs.google.com/document/d/1mFB2Irzg7imRpskP3XQjzL-8OkPVlf_b8yvhXDp79oA/edit?usp=sharing"
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
