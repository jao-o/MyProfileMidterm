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
      
      <h3 className="mt-4">Programming Skills</h3>
      <ol className="list-group list-group-numbered">
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">React.js</li>
        <li className="list-group-item">HTML/CSS</li>
        <li className="list-group-item">Laravel</li>
        <li className="list-group-item">Java</li>
      </ol>
      
      <h3 className="mt-4">Writing Skills</h3>
      <ol className="list-group list-group-numbered">
        <li className="list-group-item">Creative Writing</li>
        <li className="list-group-item">Technical Writing</li>
        <li className="list-group-item">Comedy</li>
        <li className="list-group-item">Scriptwriting</li>
        <li className="list-group-item">Public Speaking</li>
      </ol>
    </div>
  );
};

export default Skills;
