import React, { useEffect } from 'react';
import Card from "../diffProComponent/Card"
import eco from "../assets/images/EcommerceBannerFinal.png";
import code2concept from "../assets/images/code2concept.png";
import blog from "../assets/images/BlogingWebsie.png";
import pixel from "../assets/images/pixelPrompt.png";
import webly from "../assets/images/weblyAiWebsite.png";
import extension from "../assets/images/webExtension.png";
import "./AllProjectsDialog.css"
import TechCapsule from "./TechCapsule"

function AllProjectsDialog({ isOpen, onClose }) {
  // Effect to control body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent body scroll when dialog is open
    } else {
      document.body.style.overflow = 'unset'; // Restore body scroll when dialog is closed
    }

    // Cleanup function to ensure scroll is restored if component unmounts while dialog is open
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]); // Re-run effect when isOpen changes

  if (!isOpen) {
    return null; // Don't render anything if not open
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blur ">


      {/* Dialog Content - Adjusted for scrolling */}
      {/* Use flex-col and pt-24 to manage space without pushing content out */} 
      <div className="relative w-full h-full flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 mt-10 cursor-pointer text-white text-3xl font-bold z-10"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Dialog Title - kept for structure, though content below replaces original title */}
        {/* <div className="text-white text-center">
          <h2 className="text-4xl font-bold">All Products</h2>
         </div> */}

        {/* Content Area - Made scrollable */}
        <div
          className="flex items-center flex-wrap justify-center flex-shrink gap-5 relative overflow-y-auto flex-grow py-20"
        >
          {/* Cards from previous edit */}

        {/* WEBLY_AI */}
        <div className="flex flex-col items-center  ">
          <Card
            image={webly}
            name="Webly-Ai"
            description="AI-powered website generator that converts user prompts into complete React applications."
            bg="middle_div_blue_bg"
            className="middle_div_blue_shadow"
            path="/project-details/ecommerce"
            link='https://weblyai.vercel.app/'
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
          <div className="flex max-w-[500px] flex-wrap justify-center">
            <TechCapsule techName="React" />
            <TechCapsule techName="Vite" />
            <TechCapsule techName="WebContainer" />
            <TechCapsule techName="Gemini API" />
            <TechCapsule techName="Redux Toolkit" />
            <TechCapsule techName="TailwindCSS" />
          </div>
          Converts user prompts into complete React applications with automated project structure. <br />
          Implemented live preview, runtime error detection, and ZIP export (~70% manual setup reduction). <br />
          Integrated Gemini API for intelligent code generation and dynamic UI creation. <br />
          </p>
        </div>

        {/* Pixel_Prompt */}
        <div className="flex flex-col items-center  ">
          <Card
            image={pixel}
            name="PixelPrompt"
            description="Sketch-to-Code AI Website Generator converting hand-drawn sketches into responsive websites."
            bg="middle_div_pink_bg"
            className="middle_div_pink_shadow"
            path="/project-details/ecommerce"
            link='https://pixelprompt-five.vercel.app/'
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
          <div className="flex max-w-[500px] flex-wrap justify-center">
            <TechCapsule techName="React" />
            <TechCapsule techName="Node.js" />
            <TechCapsule techName="Express.js" />
            <TechCapsule techName="OpenAI API" />
            <TechCapsule techName="WebContainer" />
            <TechCapsule techName="Excalidraw" />
            <TechCapsule techName="TailwindCSS" />
          </div>
          Converts hand-drawn UI sketches and images into fully responsive websites. <br />
          Features image upload, instant code generation, live preview, and downloadable builds. <br />
          Tested across 100+ inputs to ensure layout accuracy, responsiveness, and cross-browser compatibility. <br />
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
          <div className="flex max-w-[500px] flex-wrap justify-center">
            <TechCapsule techName="TypeScript" />
            <TechCapsule techName="React" />
            <TechCapsule techName="Gemini API" />
            <TechCapsule techName="Node.js" />
            <TechCapsule techName="TailwindCSS" />
          </div>
          Supercharge your browser with an AI that understands every page you visit. <br />
          Ask questions, get instant answers, and interact with content like never before. <br />
          Your smart assistant—built right into every tab. <br />
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
            link='https://github.com/QaisarMoin/Code2Concept'
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
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
          Stop struggling with dry DSA problems—see them come alive. <br />
          Code2Concept visualizes algorithms step-by-step for fun, intuitive learning. <br />
          Decode logic, watch execution flow, and master problem-solving. <br />
          </p>
        </div>

        
        {/* Blogging */}
        <div className="flex flex-col items-center  ">
          <Card
            image={blog}
            name="Blogging"
            description="A modern platform to write, publish, and manage your stories with ease."
            bg="middle_div_blue_bg"
            className="middle_div_blue_shadow"
            path="/project-details/ecommerce"
            link='https://ablog-app-virid.vercel.app/'
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
          <div className="flex max-w-[500px] flex-wrap">
          <TechCapsule techName="Appwrite" />
          <TechCapsule techName="ReactJs" />
          <TechCapsule techName="Gemini" />
          <TechCapsule techName="CSS" />
          <TechCapsule techName="ExpressJs" />
          <TechCapsule techName="NodeJs" />
          <TechCapsule techName="Tailwind" />
          <TechCapsule techName="Gsap" />
        

          </div>
          Write bold. Publish fast. Look stunning. <br />
A sleek platform to blog like a pro with zero clutter or distractions. <br />
Because your words deserve a better stage. <br />
          </p>
        </div>

        {/* Ecommerce */}
        <div className="flex flex-col items-center  ">
          <Card
            image={eco}
            name="Ecommerce"
            description="A complete e-commerce solution for seamless shopping and selling."
            bg="middle_div_blue_bg"
            className="middle_div_blue_shadow"
            path="/project-details/ecommerce"
            link=''
          />
          <p className="text-gray-400 text-md mt-4 px-2 text-center max-w-[600px]">
          <div className="flex max-w-[500px] flex-wrap">
          <TechCapsule techName="StackBlitz" />
          <TechCapsule techName="ReactJs" />
          <TechCapsule techName="Gemini" />
          <TechCapsule techName="CSS" />
          <TechCapsule techName="ExpressJs" />
          <TechCapsule techName="NodeJs" />
          <TechCapsule techName="Tailwind" />
          <TechCapsule techName="Gsap" />
        

          </div>
          Launch your online store with everything you need—fast. <br />
Add products, manage orders, and sell with seamless checkout. <br />
Powerful. Scalable. Ready for real business. <br />
          </p>
        </div>

         
          
          {/* Add more content here later */}
        </div>
      </div>
    </div>
  );
}

export default AllProjectsDialog; 