import React from 'react'
import  { Link } from 'react-router-dom'
const PostItems = (props) => {
    const {id,title}=props
    
    return (
        <div>
            <li>
            <Link to={`/posts/${id}`}>{title} </Link></li>
        </div>
    )
}

export default PostItems