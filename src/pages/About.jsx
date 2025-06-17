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
            <span className="font-semibold text-white text-lg">I'm a builder of digital experiences</span>—driven by curiosity, fueled by creativity, and grounded in strong technical foundations. 
            <span className="font-semibold text-white text-lg">I don't just write code</span>; I bring ideas to life with precision, performance, and purpose.
          </p>

          <p>
            <span className="font-bold">What I Do</span>
            <br />
            <span className="font-semibold text-white text-lg">From sleek user interfaces to complex system architectures</span>, I craft solutions that are fast, functional, and future-ready. 
            <span className="font-semibold text-white text-lg">Whether it's a web app, a smart AI tool, or a digital product</span>—I make it happen.
          </p>

          <p>
            <span className="font-bold">Why It Matters</span>
            <br />
            <span className="font-semibold text-white text-lg">Technology should solve real problems and elevate experiences</span>. 
            Every project I take on is built to do exactly that—<span className="font-semibold text-white text-lg">impact users, push boundaries, and leave a lasting impression</span>.
          </p>
        </div>
      </div>
    </div>
  </>
  );
}

export default About;