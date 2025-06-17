import React from 'react';
import Contact from '../pages/Contact';

function Footer() {
  return (
    <footer className="bg-neutral-100 text-neutral-900 py-16 px-4 sm:px-8 font-sans">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        {/* Left section */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-none mb-8 font-['Impact']">
              HAVE A PROJECT IN MIND?<br className="block lg:hidden"/> LET'S TALK ABOUT IT!
            </h2>
          </div>
          
           {/* Contact Information */}
           <div className="mt-8 grid grid-cols-1 gap-4 text-left">
            <div className="p-4 rounded-lg bg-white">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">qaisarashraf685@gmail.com</p>
            </div>
            <div className="p-4 rounded-lg bg-white">
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Jabalpur, India</p>
            </div>
            <div className="p-4 rounded-lg bg-white">
              <h3 className="text-lg font-semibold mb-2">Social</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/QaisarMoin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors duration-300">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/qaisar-moin-884918253/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors duration-300">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right section - now contains the Contact form */}
        <div className="flex items-start lg:items-end text-left lg:text-right h-full w-full">
          
          <Contact />
        </div>
      </div>
    </footer>
  );
}

export default Footer; 