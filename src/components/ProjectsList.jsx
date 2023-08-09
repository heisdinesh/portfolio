import React, { useState } from 'react'
import iedc from '../images/iedc.png'
import contest from '../images/contest.png'
import Project from './Project'
import { useSearchParams } from 'react-router-dom'

const ProjectsList = () => {
  const [design, setDesign] = useState(false);
  const websiteProjects =[
    {
      id:1,
      image:iedc,
      name:"Hackman",
      description:"A web portal designed to streamline hackathon registrations and provide essential information to users",
      code:"https://github.com/Hackman-Genesis/hackmanv6.git",
      demo:"https://www.hackman.in/",
      type:"web"
    },
    {
      id:2,
      image:iedc,
      name:"Contest Crawler",
      description:"A web bot that scrapes hackathon and competition details from different platforms and presents to users.",
      code:"https://github.com/heisdinesh/contest_crawler.git",
      demo:"https://propel-hack.vercel.app/",
      type:"web"
    },
    {
      id:3,
      image:iedc,
      name:"IEDC",
      description:"A webapp with resources and access to network, funding and mentors for aspiring student entrepreneurs.",
      code:"https://github.com/heisdinesh/contest_crawler.git",
      demo:"https://propel-hack.vercel.app/",
      type:"web"
    },
    {
      id:3,
      image:iedc,
      name:"IEDC",
      description:"A webapp with resources and access to network, funding and mentors for aspiring student entrepreneurs.",
      code:"https://github.com/heisdinesh/contest_crawler.git",
      demo:"https://propel-hack.vercel.app/",
      type:"web"
    },
    
   
  ]
  const designProjects =[
    {
      id:1,
      image:iedc,
      name:"IEDC",
      description:"A webapp with resources and access to network, funding and mentors for aspiring student entrepreneurs.",
      demo:"https://propel-hack.vercel.app/",
      type:"design"
    },
    {
      id:1,
      image:iedc,
      name:"IEDC",
      description:"A webapp with resources and access to network, funding and mentors for aspiring student entrepreneurs.",
      demo:"https://propel-hack.vercel.app/",
      type:"design"
    },
    {
      id:1,
      image:iedc,
      name:"IEDC",
      description:"A webapp with resources and access to network, funding and mentors for aspiring student entrepreneurs.",
      demo:"https://propel-hack.vercel.app/",
      type:"design"
    },
    {
      id:1,
      image:iedc,
      name:"IEDC",
      description:"A webapp with resources and access to network, funding and mentors for aspiring student entrepreneurs.",
      demo:"https://propel-hack.vercel.app/",
      type:"design"
    },
  ]
  return (
   <section className="bg-blu h-screen">
      <h1 className="text-4xl md:text-7xl pt-24 text-center font-bold text-white">My Works</h1>
      {/* <div className='flex justify-center gap-4 text-white font-bold text-xl pt-8 rounded-lg'>
        <button  onClick={()=>setDesign(true)}>Designs</button>
        <p>|</p>
        <button onClick={()=>setDesign(false)}>Websites</button>
      </div> */}
      <div className="pt-12 flex flex-wrap justify-center">
        {
            // design && 
            websiteProjects.map((pro)=>(
              <Project data={pro} />
            ))
            
          }
          {/* {
            // !design && 
            designProjects.map((pro)=>(
              <Project data={pro} />
            ))
          } */}
      </div>

   </section>
  )
}

export default ProjectsList