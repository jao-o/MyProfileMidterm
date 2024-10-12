import React from 'react';

const Home = () => {
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
      <h2 className="mt-4">Home Page</h2>
      <p>Welcome to my profile. I'm John Matthew Nisperos, a passionate aspiring stand-up comedian and a dedicated computer science student.</p>
      <p>My goal is to become an iconic stand-up comedian, performing live shows globally and creating memorable moments through my comedy.</p>
    </div>
  );
};

export default Home;
