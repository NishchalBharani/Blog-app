import React from 'react'
import UserPostItem from './UserPostItem'

const UserPostList = (props) => {
    const {userPost,name}=props

    return (
        <div>
            <h1>Post Written By Users</h1>
            <ul>
                {userPost.map((ele)=>{
                    return <UserPostItem key={ele.id} {...ele} name={name}/>
                })}
            </ul>
        </div>
    )
}

export default UserPostList
