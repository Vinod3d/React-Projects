import React from 'react'
import { useUserContext } from '../UserContext';

const UserProfile = () => {
    const {users, updateUser} = useUserContext();
    console.log(users)
  return (
    <div>
        <h1>UserProfile</h1>
        <h2>UserName is: {users.name}</h2>
        <h2>User Age is: {users.age}</h2>
        <h2>User Profession is: {users.profession}</h2>

        <button onClick={() => updateUser("Jane")}>Update User</button>
    </div>
  )
}

export default UserProfile