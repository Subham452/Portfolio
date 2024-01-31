import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from "./Firebase"

import { useNavigate } from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate()
  
  const [email, setEmail] = useState("")
  
  const [password, setPassword] = useState("")

  const signup = async()=> {


    try{
      await createUserWithEmailAndPassword(auth, email, password)
      navigate("/")
    }
    catch(err){
      if(err.code==="Error (auth/email-already-exists)"){
        navigate("/")
      }
      else{
        navigate("/about")
      }
      console.error(err)
      alert(err)
    }

    
  }
  
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-screen h-screen gap-10'>
        <input type="email" className='bg-red-200' onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" className='bg-green-200' onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={signup}>Sign up</button>
      </div>
    </div>
  )
}

export default Login
