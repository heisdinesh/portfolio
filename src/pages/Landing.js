import React from "react";
import background from "../images/landingj.png";

import {
  Expertise,
  Navbar,
  ProjectsList,
  Testimonials,
  Contact,
  About,
} from "../components";

const Landing = () => {
  return (
    <div id="landing" className="">
      <div
        className="bg-opacity-50 text-black h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Center the background image
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="tracking-widest font-bold text-white text-5xl md:text-7xl lg:text-9xl">
              DINESH
            </h1>
            <p className="tracking-widest text-lg md:text-xl text-white pt-2 font-bold">
              Designer, Software Engineer
            </p>
          </div>
        </div>
      </div>
      <About />
      <Expertise />
      <ProjectsList />
      <Testimonials />
      {/* <Contact /> */}
    </div>
  );
};

export default Landing;
