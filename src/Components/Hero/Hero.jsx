import React, { useState } from 'react';
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';
import play_icon from '../../Assets/play_icon.png';
import pause_icon from '../../Assets/pause_icon.png';
import video1 from '../../Assets/video1.mp4';
import video2 from '../../Assets/video2.mp4';
import { Link } from 'react-router-dom';

const Hero = ({ heroData, heroCount, setHeroCount }) => {
  const [playStatus, setPlayStatus] = useState(false);

  const handlePlayToggle = () => {
    setHeroCount(0); // Reset heroCount to 0 whenever play button is clicked
    setPlayStatus(!playStatus); // Toggle the playStatus state
  };
  

  const getVideoSource = () => {
    return heroCount === 0 ? video1 : video2;
  };

  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
      <Link to="/Explore"><button className='btn'>Explore the World <img src={dark_arrow} alt='Arrow'/> </button></Link>
      </div>
      <div className="hero-dot-play">
      <ul className="hero-dots">
    {[...Array(3)].map((_, index) => (
      <li key={index} onClick={() => setHeroCount(index)} className={heroCount === index ? "hero-dot orange" : "hero-dot"}></li>
    ))}
  </ul>
        <div className="hero-play">
          <img onClick={handlePlayToggle} src={playStatus ? pause_icon : play_icon} alt="" />
          <p>Stargaze</p>
        </div>
      </div>
      {playStatus && <video className='background fade-in' autoPlay loop muted>
        <source src={getVideoSource()} type='video/mp4' />
      </video>}
    </div>
  );
};

export default Hero;