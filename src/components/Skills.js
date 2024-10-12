import React from 'react';

const Skills = () => {
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
      <h2 className="mt-4">My Skills</h2>
      <ul className="list-group">
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item">CSS</li>
        <li className="list-group-item">HTML</li>
        <li className="list-group-item">Node.js</li>
      </ul>
    </div>
  );
};

export default Skills;
