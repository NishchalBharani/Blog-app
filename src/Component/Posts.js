import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostList from './PostList'

const Posts = () => {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{  
            const result=res.data
            setPosts(result)
        }).catch((err)=>{
            alert(err.message)
        })
    },[])
    
    return (
        <div style={{margin:'20px'}}>
            <PostList posts={posts} />
        </div>
    )
}

export default Posts
