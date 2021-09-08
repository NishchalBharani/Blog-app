import React from 'react'
import { Link } from 'react-router-dom'

const UserPostItem = (props) => {
    const {id,title,name}=props    
    return (
        <div>
            <li><Link to={
                      {
                        pathname:`/posts/${id}`,
                        state:name                       
                      }}>{title}</Link></li>        
        </div>
    )
}

export default UserPostItem
