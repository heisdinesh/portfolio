import React from 'react';

const Expertise = () => {
  return (
    <><section className="bg-blu h-screen">
    <h1 className="text-4xl md:text-7xl pt-24 text-center font-bold text-white">My Expertise</h1>
    <div className="flex flex-col md:flex-row md:mt-12 items-center justify-center md:gap-20 ">
      <div className="text-white text-sm max-w-sm md:max-w-md text-center md:text-left md:text-justify p-6 border-2 border-white rounded-lg md:mr-4 md:last:mr-0 mb-4 md:mb-0">
        <h1 className="text-3xl font-bold">🎨 Product Design </h1>
        <p className="pt-4">I create captivating tales that deeply resonate via a blend of colors, typography, and layout. My expertise ranges from intuitive UI/UX development to shaping brand-defining graphics, breathing life into abstract ideas.</p>
       
      </div>
      <div className="text-white text-sm max-w-sm md:max-w-md text-center md:text-left md:text-justify p-6 border-2 border-white rounded-lg md:ml-4 md:first:ml-0">
        <h1 className="text-3xl font-bold">🌐 Web Development</h1>
        <p className="pt-4">I craft digital landscapes with React and NextJS. My art lies in forging engaging, user-centric digital experiences. Beyond aesthetics, I ensure functionality, harmonizing design principles with technological finesse.</p>
      </div>
    </div>
   
  </section>
  
    </>
  );
}

export default Expertise;
