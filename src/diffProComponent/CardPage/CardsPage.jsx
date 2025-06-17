import React, { useState } from "react";
import Card from "../Card"
import code2concept from "../../assets/images/code2concept.png";
import extension from "../../assets/images/webExtension.png";
import webly from "../../assets/images/weblyAiWebsite.png";
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
        className="flex items-center  flex-wrap mt-12
     justify-center flex-shrink gap-5 min-w-screen relative"
      >
          {/* WEBLY_AI */}
        <div className="flex flex-col items-center  ">
          <Card
            image={webly}
            name="Webly-Ai"
            description="Describe your idea, and Webly builds a stunning website in seconds."
            bg="middle_div_blue_bg"
            className="middle_div_blue_shadow"
            path="/project-details/ecommerce"
            link="https://weblyai.vercel.app/"
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
          
          Type your idea, and watch a fully functional website come to life—instantly. <br />
Webly-AI turns plain text into responsive, elegant websites with zero code. <br />
AI meets creativity. Websites made effortless. <br />

<div className="flex max-w-full flex-wrap ">
          <TechCapsule techName="StackBlitz" />
          <TechCapsule techName="ReactJs" />
          <TechCapsule techName="Gemini" />
          <TechCapsule techName="CSS" />
          <TechCapsule techName="ExpressJs" />
          <TechCapsule techName="NodeJs" />
          <TechCapsule techName="Tailwind" />
          <TechCapsule techName="Gsap" />
        

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
          <p className="text-gray-400 text-md mt-4 px-2 text-center
           max-w-[600px]">
       
          Supercharge your browser with an AI that understands every page you visit. <br />
Ask questions, get instant answers, and interact with content like never before. <br />
Your smart assistant—built right into every tab. <br />

<div className="flex max-w-[500px] flex-wrap">
          <TechCapsule techName="TypeScript" />
          <TechCapsule techName="ReactJs" />
          <TechCapsule techName="CSS" />
          <TechCapsule techName="Gemini" />
          <TechCapsule techName="NodeJs" />
          <TechCapsule techName="Tailwind" />
          <TechCapsule techName="Gsap" />

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
          Code2Concept visualizes algorithms step-by-step for fun, intuitive learning. <br />
Decode logic. Watch it flow. <br />

  <div className="flex max-w-[500px] flex-wrap">
          <TechCapsule techName="ReactJs" />
          <TechCapsule techName="CSS" />
          <TechCapsule techName="ExpressJs" />
          <TechCapsule techName="NodeJs" />
          <TechCapsule techName="Gemini" />
          <TechCapsule techName="Manim" />
          <TechCapsule techName="Tailwind" />
          <TechCapsule techName="Gsap" />
          <TechCapsule techName="StackBlitz" />
          <TechCapsule techName="ExcaliDraw" />

          </div>
          </p>
        </div>
       
       
      </div>
      
      

      <AllProjectsDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
};

export default Page2;
