import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, Header, PostCard} from '../components';
import SimpleImageSlider from "react-simple-image-slider";
import "../App.css"
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import DocCard from '../components/DocCard/DocCard';
import AboutUs from '../components/AboutUs';


function Home() {
    const [posts, setPosts] = useState([])
    const images = [
        img1,img2,img3,img4
    ]

    // useEffect(() => {
    //     appwriteService.getPosts().then((posts) => {
    //         if (posts) {
    //             setPosts(posts.documents)
    //         }
    //     })
    // }, [])
  
    // if (posts.length === 0) {
    //     return (
    //         <div className="w-full py-8 mt-4 text-center">
    //             <Container>
    //                 <div className="flex flex-wrap">
    //                     <div className="p-2 w-full">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                          Login to Read Post
    //                         </h1>
    //                     </div>
    //                 </div>
    //             </Container>
    //         </div>
    //     )
    // }
    return (
        <div className='w-full  bg-white'>
             <div className="slidercontainer bg-black">
          
          <SimpleImageSlider
              width={1100}
              height={600}
              images={images}
              showBullets={false}
              showNavs={false}
              autoPlay={true}
            
            /> 
          </div> 
          <DocCard /> 
          
          <AboutUs />
        </div>
    )
}

export default Home