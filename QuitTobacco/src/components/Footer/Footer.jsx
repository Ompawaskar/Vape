import React from "react";
import '../../App.css'
import { Link } from "react-router-dom";
import insta from './insta.png'
import twitter from './twitter.png'

export default function Footer(){
    return(
        <div>
            <div className="footer">
              <div className="socials">
            <img src="in.png" alt="" className="handles" />
            <img src="insta.png" alt="" className="handles" />
            <img src="twitter.png" alt="" className="handles" />    
            </div>
            <div className="foottext">
                <Link to={'/'}>
                <p className="ftext">LiveHelp QuitPlan | SmokefreeTXT
Home | About | Smokefree FOIAPrivacyAccessibility | Players & ViewersDisclaimer | HHS | Vulnerability | Disclosure
| U.S. Department of Health and Human ServicesNational | Institutes of HealthNational Cancer | InstituteUSA.gov</p>
          </Link>
            </div>  
            <div className="bottom">
                <p className="email">Learn More @JustQuitIt.org</p>
            </div>
            </div>
            
        </div>
    );
}