import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import "../App2.css"

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
   
  return (
    <div className=''>
      
           
            <div className='allpostscont bg-white '>
                {posts.map((post) => (
                    <div key={post.$id} className='postcont'>
                        <PostCard {...post} className="Post"/>
                    </div>
                ))}
            </div>
         
    </div>
  )
}

export default AllPosts