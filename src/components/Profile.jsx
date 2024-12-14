import React,{useContext} from 'react'
import usercontext from '../Context/UserContext'

function Profile() {

  // yeh setuser Usercontextprovider se aaraha hai 
  const {user} = useContext(usercontext)
  if(!user) return <div>Please login</div>

  return <div>Welcome {user.username}</div>




}

export default Profile