import React, { useEffect, useState } from 'react';
import './Home.css'; // Adjust the import based on your folder structure
import Background from '../Background/Background'; // Adjust the import based on your folder structure
import Hero from '../Hero/Hero'; // Adjust the import based on your folder structure
import Footer from '../Footer/Footer'; // Adjust the import based on your folder structure

const heroData = [
  { text1: "Explore", text2: "your passions" },
  { text1: "Discover", text2: "your destination" },
  { text1: "Follow", text2: "your fantasy" },
];

const Home = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container">
      <div className="content">
        <Background playStatus={playStatus} heroCount={heroCount} />
        
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
