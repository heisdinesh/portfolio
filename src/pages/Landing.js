import React from 'react';
import background from "../images/landingj.png";
import { Expertise, Navbar, ProjectsList, Testimonials, Contact } from '../components';
// import {Expertise} from "../components"
const Landing = () => {
  return (
   <> 
   <div className='bg-opacity-50 text-black h-screen flex flex-col items-center justify-center' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover",  }}>
     <div className="flex flex-col items-center justify-center">
       <div>
       <h1 className="tracking-widest font-bold text-white text-7xl lg:text-9xl">DINESH</h1>
       <p className="tracking-widest text-xl md:text-2xl text-white pt-2 font-bold">Designer, Software Engineer</p>
       </div>
     </div>
   </div>
   <Expertise />
   <ProjectsList />
   <Testimonials />
   <Contact />
   </>
  );
}

export default Landing;
