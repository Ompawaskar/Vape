import React from "react";
import '../App.css'

export default function Navbar(){
 return(
    <div>
        <div className="nav">
            <div className="left">
                <img src="logoqv.png" alt="" className="logo"/>
            </div>
            <div className="right">
                <div className="rightcomp">
                    <p className="navtext">Home</p>
                </div>
                <div className="rightcomp">
                    <p className="navtext">Login</p>
                </div>
                <div className="rightcomp">
                    <p className="navtext">Consultation</p>
                </div>
            </div>
        </div>
    </div>
 );
}