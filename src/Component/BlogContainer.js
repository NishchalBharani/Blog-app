import React, { useEffect ,useState} from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import BridgeComponent from './BridgeComponent'
import UserPost from './UserPost'
import axios from 'axios'

const BlogContainer = (props) => {

    const  [forName,setForName]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            const result=res.data
            setForName(result)
        })
        .catch((err)=>{
            console.log("Error Occured using render method in reactcouterdom")
        })
    },[])

    return (
        <div className="container">
            <h1>Blog App</h1>
            <div>
                <Link to="/" style={{padding:'20px',textDecoration:'none'}}>Home</Link>                    
                <Link to="/users" style={{textDecoration:'none'}}>Users</Link>
                <Link to="/posts" style={{padding:'20px',textDecoration:'none'}}>Posts</Link> 
             </div>

             <Route path="/" component={Home} exact/>
             <Route path="/users" render={(props)=><Users users={forName} {...props}/>} exact/>
             <Route path="/posts" component={Posts} exact/>

             <Route path='/posts/:id' render={(props) =><BridgeComponent forName={forName} {...props}/> }/>
             <Route path='/users/:id' component={UserPost}  />
        </div>
    )
}

export default BlogContainer