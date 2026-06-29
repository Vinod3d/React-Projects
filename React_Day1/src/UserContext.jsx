import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({children})=>{
    const [users, setUsers] = useState({name:"John", age:30, profession:"Engineer"});

    const updateUser = (newName)=>{
        setUsers({...users, name:newName})
    }

    return <UserContext.Provider value={{users, updateUser}}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = ()=> useContext(UserContext)

export default UserProvider