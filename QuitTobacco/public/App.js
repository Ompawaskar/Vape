import logo from './logo.svg';
import './App.css';
import DocCard from './components/DocCard';
import SimpleImageSlider from "react-simple-image-slider";
import React, { Component } from 'react';
import { AppointmentPicker } from 'react-appointment-picker'
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  
  const images = [
    "img1.jpg","img2.jpg","img3.jpg","img4.jpg"
]

  return (
    <div className="App">
    <Navbar/>
    <div>
          <div className="slidercontainer">
          
    <SimpleImageSlider
        width={1350}
        height={600}
        images={images}
        showBullets={false}
        showNavs={true}
        autoPlay={true}
      /> 
    </div>  
    </div>
    <div className="cardcont">
    <DocCard/>
    </div>
    <AboutUs/>
    <Footer/>
    </div>
  );
}

export default App;
