import React from 'react';

const About = () => {
  return (
    <div 
      className="container text-center" 
      style={{ 
        backgroundColor: 'black', 
        color: 'white', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <h2 className="mt-4">About Me</h2>
      <p>
        I'm John Matthew Nisperos, a 3rd year student pursuing a degree in computer science student at the University of Cabuyao. 
        With a passion for technology and an ambition to become a stand-up comedian, I enjoy 
        blending creativity with analytical thinking.
      </p>
      <p>
        In my free time, I love exploring new music, writing comedy sketches, and honing my 
        performance skills. My educational journey has equipped me with a strong foundation 
        in programming and software development, which I aim to leverage in my future endeavors.
      </p>
    </div>
  );
};

export default About;
