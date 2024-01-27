import React from "react";
import '../App.css'

export default function AboutUs(){
    return(
        <div className="bg-white text-7xl py-2 bold">
            <div className="text-center">
                <h1>About Us</h1>
            </div>
            <div className="sec">
                <img src="abou1.jpg" alt="image" className="aboutimage"/>
                <div className="abouttextt">
                <p className="abouttext">Welcome to Just Quit It, your dedicated companion on the journey to a smoke-free life. Our mission is to empower individuals to quit smoking and lead healthier, happier lives. We understand that quitting is a unique and challenging experience for each person, and our website is designed to provide personalized support every step of the way.</p>
                </div>
            </div>
            <div className="sec">
                <div className="abouttextt abouttextt2">
                <p className="abouttext abouttext2">
Our Vision

At Just Quit it, we envision a world where individuals are empowered to break free from the chains of smoking and embrace a healthier, smoke-free lifestyle. Our vision is fueled by a commitment to providing comprehensive, personalized, and supportive solutions that transform the journey to quitting smoking into a positive and achievable experience.</p>
                </div> 
                <img src="about2.avif" alt="image" className="aboutimage"/>
                </div>
        </div>
    );
}