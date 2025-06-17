import React, { useState } from 'react';
import './ImageStack.css';
import mainAboutImage from "../assets/images/three.jpeg";
import one from "../assets/images/one.jpeg";

const portfolioImages = {
  'Portfolio Image 1': {
    name: 'Portfolio Image 1',
    image: mainAboutImage,
    desc: 'Portfolio image 1'
  },
  'Portfolio Image 2': {
    name: 'Portfolio Image 2',
    image: one,
    desc: 'Portfolio image 2'
  }
  // Add more images as needed
};

const entries = Object.entries(portfolioImages);
const n = entries.length;
const m = 15;

function rand(max, min, prc = 2) {
  return +(min + (max - min) * Math.random()).toFixed(2);
}

function ImageStack() {
  const [k, setK] = useState(0);

  const handleClick = (inc) => {
    setK((prevK) => ((prevK + inc + n) % n));
  };

  return (
    <div className="image-stack-container">
      <section style={{ '--n': n, '--k': k }}>
        {entries.map(([key, value], i) => (
          <article key={key} style={{ '--i': i, '--a': `${rand(m, -1 * m)}deg` }}>
            <img 
              src={value.image} 
              alt={value.desc} 
            />
          </article>
        ))}
        <div>
          <button 
            aria-label="next" 
            data-inc="1"
            onClick={() => handleClick(1)}
          >Next</button>
        </div>
      </section>
    </div>
  );
}

export default ImageStack; 