// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home"; // Adjust the import based on your folder structure
import Explore from "./Components/Explore/Explore";
import AboutUs from "./Components/AboutUs/Aboutus";
import Contact from "./Components/Contact/Contact";

import './App.css';


 

const App = () => {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Explore' element={<Explore />} />
          <Route path='/Aboutus' element={<AboutUs />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
