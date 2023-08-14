import React, { useState } from 'react';
import iedc from '../images/iedc.png';
import Project from './Project';
import { useSearchParams } from 'react-router-dom';

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
      id:4,
      image:iedc,
      name:"CheckInSystem",
      description:"A web app to streamline attendance tracking and manage food distribution for events based on QR technology.",
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
    <section id="projects" className="pt-12 bg-blu h-auto md:h-screen py-8 md:py-24 flex flex-col items-center">
      <h1 className="text-4xl md:text-7xl text-center font-bold text-white mb-8 md:mb-16">My Works</h1>
      <div className="pt-6 md:pt-12 flex gap-4 flex-wrap justify-center">
        {design
          ? designProjects.map((pro) => <Project key={pro.id} data={pro} />)
          : websiteProjects.map((pro) => <Project key={pro.id} data={pro} />)}
      </div>
    </section>
  );
};

export default ProjectsList;
