import React, { useContext } from 'react'
import { dataContext } from '../App'

const ComponentC = () => {
    const users = useContext(dataContext)
    console.log(users);
  return (
    <div>
        <h2>ComponentC</h2>
        <h3>The Data is :</h3>
        {users.map((user)=>{
            return <div key={user.id}>
                <h1>{user.name}</h1>
                <h2>{user.age}</h2>
                <h3>{user.profession}</h3>
            </div>
        })}
    </div>
  )
}

export default ComponentC