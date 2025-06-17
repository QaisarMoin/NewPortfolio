import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import CardPage from "./diffProComponent/CardPage/CardsPage"
import SectionDivider from './components/SectionDivider';
// Contact is now imported and rendered directly in Footer
// import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <section id="home">
      <Home />
      </section>
      <SectionDivider />
      <section id="about">
      <About />
      </section>
      <SectionDivider />
      {/* <Projects /> */}
      <section id="projects">
      <CardPage />
      </section>
      <SectionDivider />
      <section id="skills">
      <Skills/>
      </section>
      <SectionDivider /> {/* This divider is now between Skills and Footer */}
      <Footer />
    </>
  );
}

export default App;
