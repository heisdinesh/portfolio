import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import resume from "../images/dinesh_resume.pdf"

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="z-50 flex flex-col md:flex-row justify-between md:items-center text-lg sticky top-0 h-auto md:h-16 py-2 bg-blu px-12 md:px-24 text-white font-semibold">
      <div className="flex justify-between w-full items-center">
        <Link to="/"  className="text-xl md:text-2xl">heisdinesh</Link >
      
        <div className="md:hidden text-2xl font-bold">
          <button onClick={toggleMenu} className="text-white">
            {menu ? <FiMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </div>
      <div className={`py-6 md:flex text-xl md:flex-row md:py-0 gap-12 ${menu ? 'hidden' : 'flex flex-col items-start'}`}>
       
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
