import React from 'react';
import Marquee from 'react-fast-marquee';
import './Skills.css'; // Import CSS for this page

function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "CSS",
    "HTML",
    "Git",
    "Responsive Design",
    // Add your other skills here
  ];

  const marqueeImages = [
    "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498e94a3494f2_punk6.png",
    // Repeat the URL multiple times for the marquee content
     "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498eebd3494fc_punk9.png",
      "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498b5ea3494f4_Punk4.png",
       "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b9749877b53494f9_punk12.png",
        "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498f0543494e3_punk3.png",
         "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498889a349501_punk8.png",
          "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498f80a3494e7_punk10.png",
     "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b974982b013494f0_punk1.png",
      "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498b7a83494f5_punk5.png",
       "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b9749839be3494fa_punk2.png",
        
    "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498e94a3494f2_punk6.png",
    // Repeat the URL multiple times for the marquee content
     "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498eebd3494fc_punk9.png",
      "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498b5ea3494f4_Punk4.png",
       "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b9749877b53494f9_punk12.png",
        "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498f0543494e3_punk3.png",
         "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498889a349501_punk8.png",
          "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498f80a3494e7_punk10.png",
     "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b974982b013494f0_punk1.png",
      "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b97498b7a83494f5_punk5.png",
       "https://assets.website-files.com/61ce9200b97498bf4d3494a3/61ce9200b9749839be3494fa_punk2.png",
        
           
  ];

  return (
    <div className="skills-container">
      {/* Marquee Section using react-fast-marquee */}
      <div className="marquee-section border-t ">
        <Marquee
            speed={50} // Adjust speed as needed
            gradient={false} // No gradient
        >
          {marqueeImages.map((imageUrl, index) => (
            <img 
              key={index} 
              src={imageUrl} 
              alt={`Marquee Item ${index}`} 
              className="mx-2 md:h-[150px] h-[80px] transition-all duration-300" 
            />
          ))}
        </Marquee>
      </div>

      {/* Skills Section */}
      <div className="skills-list-section mt-10">
      <div className="w-screen flex justify-center items-center text-center">
        <div className="max-w-3xl">
          <h2><span className="text-[30px] text-[#99a1af]">My Skillset</span> <br /> <span className="font-[Impact] text-[45px]">The Engine Behind the Innovation</span>
 </h2>
        </div>
     </div>

          <div className="skills-cards-container mt-10">
              {/* Placeholder for skill cards based on the second part of the image */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-items-center">





                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">ReactJs</h3>
                </div>
                

                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">NextJs</h3>
                </div>
                

                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">Redux</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">React Native</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">GSAP</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">HTML</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">CSS</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">JavaScript</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">Node.js</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">Express.js</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">MongoDB</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">MySQL</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">Socket.io</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">Redis</h3>
                </div>
                
              </div>
              {/* Add more skill cards as needed */}
          </div>
      </div>


      {/* Language Section */}
      <div className="skills-list-section mt-10">
      <div className="w-screen flex justify-center items-center text-center">
        <div className="max-w-3xl">
          <h2> <span className="font-[Impact] text-[45px]">Programming Languages</span> </h2>
        </div>
     </div>

          <div className="skills-cards-container mt-10">
              {/* Placeholder for skill cards based on the second part of the image */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-items-center">
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">JavaScript</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">TypeScript</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">Java</h3>
                </div>
                
                
              </div>
              {/* Add more skill cards as needed */}
          </div>
      </div>


      {/* Developer Section */}
      <div className="skills-list-section mt-10">
      <div className="w-screen flex justify-center items-center text-center">
        <div className="max-w-3xl">
          <h2> <span className="font-[Impact] text-[45px]">Developer Tools</span> </h2>
        </div>
     </div>

          <div className="skills-cards-container mt-10">
              {/* Placeholder for skill cards based on the second part of the image */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-items-center">
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">Cursor</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">VS Code</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">Git CodeSpace</h3>
                </div>
                
                <div 
                className=" group w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[60px] p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-[#1a1a1a] border border-white/20 rounded-lg overflow-hidden hover:bg-black/10  cursor-pointer">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-center text-white">Android Studio</h3>
                </div>
                
                
              </div>
              {/* Add more skill cards as needed */}
          </div>
      </div>



    </div>
  );
}

export default Skills; 