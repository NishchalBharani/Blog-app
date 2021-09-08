
import React, { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'

const PostComment = (props) => {
    
    const {comments, post ,forName}=props
    const [name,setName]=useState([])
    
    let postId=post.userId

    useEffect(()=>{
        if(post){
            const result=forName.find((ele)=>{
                return ele.id ===postId 
            })
            if(result !==undefined){
                setName(result.name)
            }        
         }
    },[post,forName,postId])
    return (
          <div>
                <p>Users-{name}</p>
                <p>Title-<em>{post.title}</em></p>
                <p>Body:{post.body}</p>
            <hr/>
            <h1>Comments</h1>
            <ul>
                {comments.map((ele)=>{
                    return <li key={ele.id}>{ele.body}</li>
                })}
            </ul>
            <hr/>
            <p> <Link to={`/users/${post.userId}`}>More post of author - {name}</Link></p>
        </div>
    )
}

export default PostComment
