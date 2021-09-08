import React from 'react'
import UsersList from './UsersList'

const Users = (props) =>{

    const {users}=props
    return (
        <div>
            <UsersList users={users}/>
        </div>
    )
}

export default Users
