import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserPostList from './UserPostList'

const UserPost = (props) => {
    const {id}=props.match.params
    const [singleUser,setSingleUser]=useState({})
    const [userPost,setUserPost]=useState([])
    
    useEffect(()=>{
        if(id){
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res)=>{
                const result=res.data
                setSingleUser(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    },[id])
    
    useEffect(()=>{
        if(id){
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((res)=>{
                const result=res.data
                setUserPost(result)      
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    },[id])

   return (
        <div>
            <h1>Username:{singleUser.name}</h1>
            <UserPostList  userPost={userPost} name={singleUser.name}/>
        </div>
    )
}

export default UserPost
