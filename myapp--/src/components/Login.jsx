import React, { useContext, useState } from 'react'

const Login = () => {

    const [username,setUsername] = useState('')
    const {login} = useContext(useContext)

    const handleLogin=()=>{
        if (username){
            login(username)
        }
    };

  return (
    <div>

        <p>oifjvoijfdojrou </p>
        <input
         type='text'
         value={username}
         onChange={(e)=> setUsername(e.target.value)}
         placeholder='enterUsername'
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default Login
