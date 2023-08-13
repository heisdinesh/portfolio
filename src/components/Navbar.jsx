import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const links = [
    {
      id: 1,
      name: 'About',
      link: 'about',
    },
    {
      id: 2,
      name: 'Projects',
      link: 'projects',
    },
    {
      id: 3,
      name: 'Resume',
      link: '../images/dinesh_resume.pdf',
      download: ' download',
    },
    {
      id: 4,
      name: 'Contact',
      link: 'contact',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center text-lg sticky top-0 h-auto md:h-16 py-2 bg-blu px-12 md:px-24 text-white font-semibold">
      <div className="flex justify-between w-full items-center">
        <div className="text-xl md:text-2xl">heisdinesh</div>
        <div className="md:hidden text-2xl font-bold">
          <button onClick={() => setMenu(!menu)} className="text-white">
            {menu ? <FiMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </div>
      <div className={`py-6 md:flex text-xl md:flex-row md:py-0 gap-12 ${menu ? 'hidden' : 'flex flex-col items-start'}`}>
        {links.map((x) => (
          <a key={x.id} href={`${x.link}`} download={x.download}>
            {x.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
