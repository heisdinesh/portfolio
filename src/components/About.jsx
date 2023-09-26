import React from "react";
import photo from "../images/professional_photo.jpeg";
import { useNavigate } from "react-router-dom";
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
} from "react-icons/si";
import { HashLink } from "react-router-hash-link";

const About = () => {
  const navigate = useNavigate();
  const skills = [
    {
      id: 1,
      name: "React",
      icon: SiReact,
    },
    {
      id: 2,
      name: "NextJS",
      icon: SiNextdotjs,
    },
    {
      id: 3,
      name: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      id: 4,
      name: "Express",
      icon: SiExpress,
    },
    {
      id: 5,
      name: "NodeJS",
      icon: SiNodedotjs,
    },
    {
      id: 6,
      name: "Git",
      icon: SiGit,
    },
    {
      id: 7,
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      id: 8,
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      id: 9,
      name: "Figma",
      icon: SiFigma,
    },
    {
      id: 10,
      name: "Illustrator",
      icon: SiAdobeillustrator,
    },
  ];

  return (
    <div
      id="about"
      className="pt-12 md:pt-24 md:h-screen bg-blu flex flex-col md:flex-row text-white text-justify justify-evenly content-center"
    >
      <section className="md:w-2/6 w-3/6 mx-auto md:mx-0">
        <img src={photo} className="rounded-md mx-auto md:mx-0" alt="" />
      </section>
      <div className="w-full md:w-2/4">
        <p className="text-center md:text-left p-6 md:p-0">
          Hey, I'm Dinesh A, a software developer passionate about design and
          user experience. Currently pursuing my undergrad at DSCE, I love
          turning ideas into sleek applications. Leading teams, diving into
          hackathons, and startups are my thing. Let's connect and innovate
          together!
        </p>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold pt-8">Skill Set </h1>
          <div className="pt-8 flex flex-wrap justify-center md:justify-start items-start gap-8">
            {skills.map((icon) => (
              <div
                className="border-2 border-zinc-600 rounded-md p-4 px-5 flex flex-col items-center justify-center"
                key={icon.id}
              >
                <p className="text-5xl p-4">
                  <icon.icon />
                </p>
                <p className="text-sm font-semibold">{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-12 text-center md:text-left pb-12 md:pb-0">
          <HashLink
            smooth
            to="/#projects"
            className="px-6 py-2 border-2 rounded-md"
          >
            View My Work
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default About;
