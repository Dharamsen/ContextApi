import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {

  const [user , setUser] = React.useState(null)
  return (
    <div> <>
    {/* value is prop in usercontetxt */}
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    
    </></div>
  )
}

export default UserContextProvider

