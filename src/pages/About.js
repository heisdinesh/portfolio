import React from 'react';
import photo from '../images/professional_photo.jpeg';
import { useNavigate } from 'react-router-dom';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiPostgresql,
  SiGit,
  SiAdobeillustrator,
} from 'react-icons/si';

const About = () => {
  const navigate = useNavigate();
  const skills=[
    {
      id:1,
      icon:SiReact
    },
    {
      id:2,
      icon:SiNextdotjs
    },
    {
      id:3,
      icon:SiTailwindcss
    },
    {
      id:4,
      icon:SiExpress
    },
    {
      id:5,
      icon:SiNodedotjs
    },
    {
      id:6,
      icon:SiGit
    },
    {
      id:7,
      icon:SiMongodb
    },
    {
      id:8,
      icon:SiPostgresql
    },
    {
      id:9,
      icon:SiFigma
    },
    {
      id:10,
      icon:SiAdobeillustrator
    },
  ]

  return (
    <div className="pt-12 md:h-screen bg-blu flex flex-col md:flex-row text-white text-justify justify-evenly content-center">
      <section className="md:w-2/6 w-3/6 mx-auto md:mx-0">
        <img src={photo} className="rounded-md mx-auto md:mx-0" alt="" />
      </section>
      <div className="w-full md:w-2/4">
        <p className="text-center md:text-left p-6 md:p-0">
          Hey, I'm Dinesh A, a software developer passionate about design and user experience.
          Currently pursuing my undergrad at DSCE, I love turning ideas into sleek applications.
          Leading teams, diving into hackathons, and startups are my thing. Let's connect and
          innovate together!
        </p>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold pt-8">Skill Set </h1>
          <div className="pt-8 flex flex-wrap justify-center md:justify-start items-start gap-8">
            {skills.map((icon) => (
              <div className="border-2 border-zinc-600 rounded-md p-4" key={icon.id}>
                <p className="text-5xl p-4">
                  <icon.icon />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-12 text-center md:text-left pb-12 md:pb-0">
          <button onClick={()=>navigate("/")} className="px-6 py-2 border-2 rounded-md">View My Work</button>
        </div>
      </div>
    </div>
  );
};

export default About;
