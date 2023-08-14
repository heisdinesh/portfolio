import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumeLink from '../images/dinesh_resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth); // Set initial width

  const handleResize = () => {
    setWidth(window.innerWidth); // Update width on window resize
  };

  useEffect(() => {
    // Attach the resize event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Remove the resize event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getScale = () => {
    if (width > 786) {
      return 1.7;
    } else {
      return 0.6;
    }
  };

  const pageContainerStyle = {
    flexGrow: 1,
    zIndex: -1,
  };

  return (
    <div className='bg-blu h-screen md:h-auto flex flex-col items-center justify-center' style={pageContainerStyle}>
      <div className='pt-12'>
        <a
          download
          target="_blank"
          className="text-2xl font-bold rounded-md px-6 py-2 border-2 text-white"
          href={resumeLink}
        >
          Download CV
        </a>
      </div>
      <div className='py-12' >
        <Document file={resumeLink}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            scale={getScale()}
          />
        </Document>
      </div>
      <div className='pb-12'>
        <a
          download
          target="_blank"
          className="text-2xl font-bold rounded-md px-6 py-2 border-2 text-white"
          href={resumeLink}
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Resume;
