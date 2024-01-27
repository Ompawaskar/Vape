import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import "../App2.css"
function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
      <div className='postgod'>
        <div className='postcard'>
            <div className='postimagecont'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='postimage' />
             
            </div>
            <h2
            className='posttitle'>
            {title}</h2>
            <div className="articletext">
              <p className="article">Quitting smoking can re-wire your brain and help break the cycle of addiction.</p>
            </div>
        </div>
        </div>
    </Link>
  )
}


export default PostCard