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
        <Container >
            <div className='title'>
                <h1 className='tit '>Blog Your Journey..</h1>
            </div>
            <div className='allpostscont'>
                {posts.map((post) => (
                    <div key={post.$id} className='postcont'>
                        <PostCard {...post} className="Post"/>
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts