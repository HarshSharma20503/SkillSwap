import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    height: '200vh',
    backgroundColor: '#2D2D2D', // Set background color for the whole page
  };

  const titleContainerStyle = {
    marginTop: '300px',
    backgroundColor: '#2D2D2D',
    padding: '20px', 
    margin: '60px', 
    border: '10px solid #3BB4A1'
    
  };

  const titleStyle = {
    fontFamily: 'Josefin Sans, sans-serif',
    color: '#3BB4A1',
    fontWeight: 700,
    fontSize: '5.5rem',
    textAlign: 'center',
  };

  const descriptionStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.2rem',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#3BB4A1',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const imageStyle = {
    position: 'absolute',
    left: `${scrollPosition}px`, 
    width: '400px',
    justifyContent: 'center'
  };

  const imageBelowStyle = {
    position: 'absolute',
    right: `${scrollPosition}px`,
    width: '400px',
    justifyContent: 'center'
  };

  const handleButtonClick = () => {
    // Handle button click event
    console.log('Button clicked!');
  };

  return (
    <div style={containerStyle}>
      <div>
      <div><img src={'/assets/images/1.png'} alt="Above Image" style={imageStyle} /></div>
        <div style={titleContainerStyle}>
          <h1 style={titleStyle}>SKILL SWAP</h1>
        </div>
        <div><img src={'/assets/images/2.png'} alt="Below Image" style={imageBelowStyle} /></div>
      </div>
    </div>
  );
};

export default LandingPage;