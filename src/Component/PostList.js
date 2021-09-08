import React from 'react'
import PostItems from './PostItems'
const PostList = (props) => {
    const { posts }=props

    return (
        <div>
            <h1>Total Post-{posts.length}</h1>
             <ul>
              {posts.length !==0 && posts.map((ele)=>{
                  return <PostItems key={ele.id} {...ele} />
              })}    
             </ul>   
        </div>
    )
}

export default PostList
