import '../../App.css';
import React from 'react';
export default function DocCard(props){
    return(
      <div className='bg-white'>
       <div className="card">
         <div className="cardimage">
         <img src="randomuser.jpg" alt="" className='cardimg'/>   
         </div>
         <div className="namee ">
            <div className="na">
              <p className="name">Dr. Om Soni</p>
              
            </div>
            <div className="expdiv">
            <p className="exp">Psychatrist | 8 years exp</p>
            </div>
            <div className="botcont">
            <div className="bottext">
            <img src="location.svg" alt="img" />
            <p className="loc">Bandra (W),Mumbai</p>
            </div>
            <div className="bottext">
            <img src="language.svg" alt="img" />
            <p className="loc">Hindi,Marathi,Englis</p>
            </div>
            <div className="bottext">
            <img src="qualification.svg" alt="img" />
            <p className="loc">MBBS, MD</p>
            </div>
            </div>
         </div>
         <div className="btn ">
          <button className='book'>BOOK APPOINTMENT</button>
         </div>
         </div>
        </div>
    );
}