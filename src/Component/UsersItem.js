import React from 'react'
import {Link} from 'react-router-dom'

const UsersItem = (props) => {
    const { id,name }=props    
        
    return (
        <div>
            <li><Link to={`/users/${id}`}>{name}</Link></li>
        </div>
    )
}

export default UsersItem
