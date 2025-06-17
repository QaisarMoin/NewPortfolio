import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/cards/ProjectCard'; // Import ProjectCard
import '../App.css'; // Tailwind imports are now here
import code2concept from "../assets/images/code2concept.png";
import extension from "../assets/images/webExtension.png";
import webly from "../assets/images/weblyAiWebsite.png";
import ThreeDModel from './ThreeDModel';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null); // State to track hovered card index
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // State for current project index

  const projects = [
    { projectName: "DESIGN CLUB", imageUrl: webly, videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { projectName: "JOYEUX REPAS", imageUrl: extension, videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { projectName: "STUDIO FUGU", imageUrl: code2concept, videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  ];

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`bg-[#0d0d0d] text-white min-h-screen max-h-screen overflow-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
      <main className="pt-32 md:pt-24 md:flex md:flex-col md:gap-12">
        <section className="flex flex-col items-center justify-center text-center px-4 ">
          <div className=' w-[500px] mt-10'>
          <h1 className={`font-['Impact'] text-[45px] leading-tight mb-6 font-bold uppercase transition-opacity duration-300 ${hoveredCardIndex !== null ? 'opacity-30' : 'opacity-100'}`}>
            <span className="block md:text-4xl text-3xl">Software</span>
            <span className="block md:text-8xl text-5xl">DEVELOPER</span>
          </h1>
          <p className={` text-gray-400 leading-relaxed font-medium  text-md transition-opacity duration-300 ${hoveredCardIndex !== null ? 'opacity-30' : 'opacity-100'}`}>
            I'M <span className='text-white uppercase'>Qaisar Moin</span>, WEBDEVELOPER &  WEBDESIGNER  <br /> SINCE 2022.<br/>
            BASED IN <span className='text-white'>MADHYA PRADESH, INDIA</span> 
          </p>
          </div>
        </section>

        {/* Featured Works Section */}
        
       <ThreeDModel/>
      </main>
    </div>
  );
}

export default Home; 