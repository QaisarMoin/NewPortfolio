import React, { useState } from 'react';
import "./Header.css"
import Final_Qaisar_Resume from "../assets/Final_Qaisar_Resume.pdf"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-1000 px-4 md:px-6 lg:px-12 py-3 bg-black/30 bg-opacity-10 h-14 flex items-center blur-bg max-w-[100vw]">
      <nav className="container mx-auto flex justify-between items-center w-full p-2 md:p-4">
        <div className="bg-white text-black py-1 px-3 md:px-5 rounded-full text-[13px] md:text-[15px] font-semibold uppercase flex items-center hover:bg-gray-200 transition-colors duration-300 ease-in-out w-auto text-nowrap">
          Qaisar Moin
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-10 space-x-2 lg:space-x-5 uppercase text-sm font-medium text-gray-400">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white py-1 px-0 transition-colors duration-300 ease-in-out text-[13px] lg:text-[15px]"
          >
            HOME
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white py-1 px-0 transition-colors duration-300 ease-in-out text-[13px] lg:text-[15px]"
          >
            ABOUT
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-white py-1 px-0 transition-colors duration-300 ease-in-out text-[13px] lg:text-[15px]"
          >
            WORKS
          </button>
          <a 
            href={Final_Qaisar_Resume}
            download="Mohd_Qaisar_Moin_Resume.pdf"
            className="bg-white text-black py-1 px-3 lg:px-5 rounded-full text-[13px] lg:text-[15px] font-semibold uppercase flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 ease-in-out w-24 lg:w-28 text-center"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`fixed top-14 left-0 right-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center py-8 space-y-6">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300"
            >
              WORKS
            </button>
            <a 
              href={Final_Qaisar_Resume}
            download="Mohd_Qaisar_Moin_Resume.pdf"
              className="bg-white text-black py-2 px-8 rounded-full text-[15px] font-semibold uppercase hover:bg-gray-200 transition-colors duration-300"
            >
              RESUME
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black py-2 px-8 rounded-full text-[15px] font-semibold uppercase hover:bg-gray-200 transition-colors duration-300"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* Contact Button - Hidden on mobile */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:flex bg-white text-black py-1 px-3 lg:px-5 rounded-full text-[13px] lg:text-[15px] font-semibold uppercase items-center justify-center hover:bg-gray-200 transition-colors duration-300 ease-in-out w-24 lg:w-28 text-center"
        >
          CONTACT
        </button>
      </nav>
    </header>
  );
};

export default Header; 