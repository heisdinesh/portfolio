import React from 'react';

const Expertise = () => {
  return (
    <section className="bg-blu h-auto md:h-screen py-8 md:py-24">
      <h1 className="text-4xl md:text-7xl text-center font-bold text-white mb-8 md:mb-16">My Expertise</h1>
      <div className="mx-6 flex flex-col md:flex-row md:mt-8 items-center justify-center md:gap-12">
        <div className=" text-white text-base md:text-md max-w-md text-center md:text-left p-4 md:p-6 border-2 border-white rounded-lg md:mr-4 md:last:mr-0 mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">🎨 Product Design</h1>
          <p className="mb-2 md:pt-2 md:text-justify">
            I create captivating tales that deeply resonate via a blend of colors, typography, and layout. My expertise ranges from intuitive UI/UX development to shaping brand-defining graphics, breathing life into abstract ideas.
          </p>
        </div>
        <div className="text-white text-base md:text-md  max-w-md text-center md:text-left p-4 md:p-6 border-2 border-white rounded-lg md:ml-4 md:first:ml-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">🌐 Web Development</h1>
          <p className="mb-2  md:pt-2  md:text-justify">
            I craft digital landscapes with React and NextJS. My art lies in forging engaging, user-centric digital experiences. Beyond aesthetics, I ensure functionality, harmonizing design principles with technological finesse.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
