import React from 'react';
import './About.css'; // Import CSS for the About page
import mainAboutImage from "../assets/images/three.jpeg"; // Import the new image
import one from "../assets/images/one.jpeg"; // Import the new image
import ImageStack from '../components/ImageStack';

function About() {
  return (<>
   <div className="w-screen flex justify-center items-center text-center bg-[#0d0d0d] border border-t-white pt-10 ">
        <div className="max-w-3xl">
          <h2><span className="text-[30px] text-[#99a1af]">About Me</span> <br /> <span className="font-[Impact] text-[45px] text-white">Passion-Powered Journey</span>
          <br /> <span className="text-[20px] text-[#99a1af]">A curious mind driven by innovation, blending technical skills with creative<br /> vision to build meaningful digital experiences that leave a mark. </span> </h2>
        </div>
     </div>
    <div className="about-container">
      {/* Left Section: Main Image */}
      <div className="about-left">
        <ImageStack />
      </div>

      {/* Right Section: Text Content, Buttons, Stats and Service Blocks */}
      <div className="about-right">
        <h1 className="about-heading mb-10">Mohd Qaisar Moin<br/>Right Here!</h1>

        <div className="space-y-10 text-[#ccc] text-base leading-relaxed">
          <p>
            <span className="font-bold">Who I Am</span>
            <br />
            <span className="font-semibold text-white text-lg">Full Stack Developer & AI Engineer</span> with a passion for building scalable web applications, backend services, and AI systems. 
            <span className="font-semibold text-white text-lg">Pursuing B.Tech in Information Technology</span> at Jabalpur Engineering College (2022–2026), grounded in solid engineering and problem-solving.
          </p>

          <p>
            <span className="font-bold">What I Do</span>
            <br />
            <span className="font-semibold text-white text-lg">Specializing in MERN Stack, React Native, Python, and FastAPI</span> to create end-to-end digital products. 
            <span className="font-semibold text-white text-lg">From intelligent GenAI agents and RAG pipelines</span> (LangChain, LangGraph) to high-performance RESTful APIs, database design, and sleek user interfaces.
          </p>

          <p>
            <span className="font-bold">Experience & Impact</span>
            <br />
            <span className="font-semibold text-white text-lg">Delivered 10+ production-ready modules and 20+ RESTful APIs</span> supporting 500+ active users across roles at CloudLex, DoaGuru, and Isaii Ai. 
            <span className="font-semibold text-white text-lg">Certified in Agile Project Management & Full Stack Development</span>, dedicated to clean code, ownership, and measurable impact.
          </p>
        </div>
      </div>
    </div>
  </>
  );
}

export default About;