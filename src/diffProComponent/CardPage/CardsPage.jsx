import React, { useState } from "react";
import Card from "../Card"
import code2concept from "../../assets/images/code2concept.png";
import extension from "../../assets/images/webExtension.png";
import webly from "../../assets/images/weblyAiWebsite.png";
import pixel from "../../assets/images/pixelPrompt.png";
// import "../CardPage/sample.css";
import "./CardPage.css";
import AllProjectsDialog from '../../components/AllProjectsDialog';
import TechCapsule from '../../components/TechCapsule';

const Page2 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div
      className="text-white py-10 relative justify-center items-center
     bg-[#0d0d0d] text-center px-3 w-screen flex flex-col border-t-2 border-black "
    >
     <div className="w-screen flex justify-center items-center text-center">
        <div className="max-w-3xl">
          <h2><span className="text-[30px] text-[#99a1af]">Highlighted Projects</span> <br /> <span className="font-[Impact] text-[45px]">Tech-Driven Portfolio</span>
          <br /> <span className="text-[20px] text-[#99a1af]">A dynamic blend of cutting-edge web solutions,<br /> creative intelligence, and real-world  impact—built to impress and inspire.  </span> </h2>
        </div>

     </div>
     <button 
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold tracking-wide text-white transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#0d0d0d] border border-white/20 rounded-lg overflow-hidden hover:bg-white/10 mt-12 cursor-pointer"
          onClick={openDialog}
        >
          <span className="relative z-10 text-lg uppercase  ">All Projects</span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
        </button>

        
      <div
        className="flex items-center flex-wrap mt-12 justify-center flex-shrink gap-5 min-w-screen relative"
      >
        {/* WEBLY_AI */}
        <div className="flex flex-col items-center  ">
          <Card
            image={webly}
            name="Webly-Ai"
            description="AI-powered website generator that converts user prompts into complete React applications."
            bg="middle_div_blue_bg"
            className="middle_div_blue_shadow"
            path="/project-details/ecommerce"
            link="https://weblyai.vercel.app/"
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
            Converts user prompts into complete React applications with automated project structure. <br />
            Implemented live preview, runtime error detection, and ZIP export (~70% manual setup reduction). <br />
            Integrated Gemini API for intelligent code generation and dynamic UI creation. <br />

            <div className="flex max-w-full flex-wrap justify-center">
              <TechCapsule techName="React" />
              <TechCapsule techName="Vite" />
              <TechCapsule techName="WebContainer" />
              <TechCapsule techName="Gemini API" />
              <TechCapsule techName="Redux Toolkit" />
              <TechCapsule techName="TailwindCSS" />
            </div>
          </p>
        </div>

        {/* PixelPrompt */}
        <div className="flex flex-col items-center  ">
          <Card
            image={pixel}
            name="PixelPrompt"
            description="Sketch-to-Code AI Website Generator converting hand-drawn sketches into responsive websites."
            bg="middle_div_pink_bg"
            className="middle_div_pink_shadow"
            path="/project-details/ecommerce"
            link="https://pixelprompt-five.vercel.app/"
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
            Converts hand-drawn UI sketches and images into fully responsive websites. <br />
            Features image upload, instant code generation, live preview, and downloadable builds. <br />
            Tested across 100+ inputs to ensure layout accuracy, responsiveness, and cross-browser compatibility. <br />

            <div className="flex max-w-full flex-wrap justify-center">
              <TechCapsule techName="React" />
              <TechCapsule techName="Node.js" />
              <TechCapsule techName="Express.js" />
              <TechCapsule techName="OpenAI API" />
              <TechCapsule techName="WebContainer" />
              <TechCapsule techName="Excalidraw" />
              <TechCapsule techName="TailwindCSS" />
            </div>
          </p>
        </div>

        {/* WEB_EXTENSION */}
        <div className="flex flex-col items-center  ">
          <Card
            image={extension}
            name="Chatyy"
            description="Turn every tab into an AI-powered helper with instant page insights."
            bg="middle_div_pink_bg"
            className="middle_div_pink_shadow"
            path="/project-details/ecommerce"
            link="https://github.com/QaisarMoin/chatyy"
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
            Supercharge your browser with an AI that understands every page you visit. <br />
            Ask questions, get instant answers, and interact with content like never before. <br />
            Your smart assistant—built right into every tab. <br />

            <div className="flex max-w-[500px] flex-wrap justify-center">
              <TechCapsule techName="TypeScript" />
              <TechCapsule techName="React" />
              <TechCapsule techName="Gemini API" />
              <TechCapsule techName="Node.js" />
              <TechCapsule techName="TailwindCSS" />
            </div>
          </p>
        </div>

        {/* Code2Concept */}
        <div className="flex flex-col items-center  ">
          <Card
            image={code2concept}
            name="Code2Concept"
            description="Bring DSA problems to life with step-by-step visual animations."
            bg="middle_div_green_bg"
            className="middle_div_green_shadow"
            path="/project-details/ecommerce"
            link="https://github.com/QaisarMoin/Code2Concept"
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
            Stop struggling with dry DSA problems—see them come alive. <br />
            Visualizes algorithms step-by-step for intuitive learning. <br />
            Decode logic, watch execution flow, and master problem-solving. <br />

            <div className="flex max-w-[500px] flex-wrap justify-center">
              <TechCapsule techName="React" />
              <TechCapsule techName="Express.js" />
              <TechCapsule techName="Node.js" />
              <TechCapsule techName="Gemini API" />
              <TechCapsule techName="Manim" />
              <TechCapsule techName="WebContainer" />
              <TechCapsule techName="Excalidraw" />
              <TechCapsule techName="TailwindCSS" />
            </div>
          </p>
        </div>
      </div>
      
      

      <AllProjectsDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
};

export default Page2;
