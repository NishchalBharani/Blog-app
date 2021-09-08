import axios from 'axios'
import React, { useEffect,useState } from 'react'
import PostComment from './PostComment'

const BridgeComponent = (props) => {
   
     const { forName, match:{params}}=props 
     
     const {id}=params
   
     const [comments,setCommnets]=useState([])

     const [post,setPost]=useState({})

     // Single Post

     useState(()=>{
         if(id){
             axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then((res)=>{
                 const result=res.data
                 setPost(result)
             }).catch((err)=>{
                 alert(err.message)
             })
         }
     },[id])

     //comments

     useEffect(()=>{
      if(id){
          axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then((res)=>{
              const result=res.data
              setCommnets(result)
          })
          .catch((err)=>{
              alert(err.message)
          })
      }
    },[id])
    
     return (
         <div>
            <PostComment  comments={comments} post={post} forName={forName} id={id}/>          
         </div>
    )
}

export default BridgeComponent
