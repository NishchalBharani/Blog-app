import React from 'react'
import UsersItem from './UsersItem'
const UsersList = (props) => {
    const { users }=props

    return (
        <div style={{margin:'20px'}}>
            <h1>Users List-{users.length}</h1>
            <ul>
                {users.map((ele)=>{
                    return <UsersItem key={ele.id} {...ele} />
                })}
            </ul>
        </div>
   )
}

export default UsersList
