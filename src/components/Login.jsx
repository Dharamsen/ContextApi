import React ,{useState , useContext} from 'react'
import usercontext from '../Context/UserContext'

const Login = () => {

    const [username , setusername] = useState('')
    const [password, setpassword] = useState('')

    // yeh setuser Usercontextprovider se aaraha hai 
    const {setUser} = useContext(usercontext)

    const handleSubmit = (e) =>
    {
     e.preventDefault()
     setUser({username,password})
    }
  return (
    <>
    <h2>Login</h2> 
    <input 
    type='text' value={username}
    placeholder='username'
    onChange={(e)=>setusername(e.target.value)}
    

    />  

    <input type='text'
     value={password}
     placeholder='password' 
     onChange={(e)=>setpassword(e.target.value)} />  
     

    <button onClick={handleSubmit} > Submit</button>

    
    </>
  )
}

export default Login


