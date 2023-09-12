import React from "react";
import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div
      id="contact"
      className="flex flex-col-reverse md:flex-row md:h-screen bg-blu pt-12"
    >
      <section className="flex pt-12 md:pt-0 text-white md:w-1/2">
        <div className="flex flex-col justify-evenly items-center ">
          <div className="flex flex-col    ">
            <p className="text-4xl md:text-6xl text-white font-bold ">
              Available for opportunities
            </p>
            {/* <div className=''> */}
            <p className="text-md font-semibold pt-8">
              Have an exciting project you need help with?
            </p>
            <p className="text-md font-semibold">
              Send me an email or contact me via instant message!
            </p>
            {/* </div> */}
          </div>
          <div>
            <p className="text-2xl text-white pt-8 md:pt-0">
              heisdinesh18@gmail.com
            </p>

            <div className="flex justify-evenly pt-8 pb-8 md:pb-0 ">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/heisdinesh"
                className="text-2xl"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                target="_blank"
                to="https://www.github.com/heisdinesh"
                className="text-2xl"
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                to="https://www.behance.net/heisdinesh"
                className="text-2xl"
              >
                <FaBehance />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row bg-green-800 md:w-1/2">
        <div className="md:w-1/2 bg-red-400 py-8 md:pt-36">
          <p className="text-justify p-8 text-sm md:text-md">
            It was a Pleasure to Work with Dinesh and would highly recommend him
            to any organisation or company, here were a few of the many
            advantage which I observed while working with him-
            <ul>
              <li>Very Quick at his work and delivers on time</li>
              <li>Flexible and also uses his own Ideas</li>
              <li>Has great design and IT Skills</li>
              <li>Recently won a National Level Hackathon</li>
            </ul>
            Great to work with and has displayed leadership qualities in his
            Work!! Wishing him all the Success in the Future
          </p>
          <p className="text-justify px-8 font-bold">-Roshaan Ray</p>
          <p className="text-justify px-8">Founder & CEO of SeedPaperIndia</p>
        </div>
        <div className="md:w-1/2 bg-red-900">
          <div className="h-1/2 py-8 md:py-0 bg-green-100">
            <p className="text-justify p-8 text-sm md:text-md ">
              Dinesh is a gifted logo-designer with a rare combination of
              patience, creative, and research skills. I’m lucky to have worked
              with Dinesh, his initial designs were spot on in terms of matching
              our brief, and he was able to articulate clearly and concisely why
              he had included particular features of the logo, how they would
              work to achieve our goals and appeal to our target market.
            </p>
            <p className="text-justify px-8 font-bold">-Naiyaan</p>
            <p className="text-justify px-8">CTO of HealthSphere</p>
          </div>
          <div className="h-1/2 bg-green-700"></div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
