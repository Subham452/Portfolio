import React, { useState } from 'react'
import vdo from "../Assets/bg_video.mp4"
import { Link } from 'react-router-dom'
import { auth } from "./Firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [show, setShow] = useState(true)

  const [email1, setEmail1] = useState('')

  const [password1, setPassword1] = useState('')

  const navigate = useNavigate()

  // const [errorIng, setErrorIng] = useState("Nothing error")


  const signup = async () => {

    try {
      await createUserWithEmailAndPassword(auth, email1, password1)
      navigate("/home")
    }
    catch (err) {
      if (err === "auth/email-already-exists") {
        // navigate("/")
        // alert("heyy")
        navigate("/home")
      }
      else {
        navigate("/home")
      }
      console.error(err)
      alert("Already Have account login")
    }
    // alert("hey")


  }


  return (
    <div>
      <div className='flex items-center justify-center w-screen h-screen overflow-hidden bg-black'>
        <video autoPlay={true} loop={true} src={vdo} className='object-cover w-full'></video>
        <div className='absolute top-0 left-0 w-screen h-screen bg-black/30'></div>
        <div className={`absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-10 mx-auto bg-transparent bg-red-100`}>
          <div className={`h-[60vh] w-[50vw] flex-col bg-white/0 rounded-lg  ${show ? "flex" : "hidden"} justify-center gap-10 items-center`}>
            <h1 className='text-5xl text-white'><Link to="/home">Subham Patnaik Welcome You</Link></h1>
            <button className='text-3xl text-white' onClick={() => { navigate("/home") }}>Continue as guest</button>
            <button className='h-auto px-3 py-2 text-lg text-black bg-white rounded w-72' onClick={() => { setShow(!show) }}>Signup / Login</button>
          </div>

          <div className={`h-auto w-auto px-32 py-10  ${!show ? "flex" : "hidden"} flex-col bg-white/10 rounded-lg justify-center gap-10 items-center`}>
            <div className='relative w-auto h-auto px-2 text-black bg-white cursor-pointer -left-44 top-4' onClick={() => { setShow(!show) }}>BACK</div>

            <h1 className='text-5xl text-white' onClick={signup}><Link to="/home">Login / Signup</Link></h1>
            <div className='flex flex-col w-auto h-auto gap-5 bg-red-000'>
              <div className='flex flex-col items-start justify-center w-auto h-auto gap-2'>
                <h1 className='text-xl text-white'>Email Address</h1>
                <input type="email" className='h-10 text-white outline-none bg-white/20 w-72 roubded-md' onChange={(e) => { setEmail1(e.target.value) }} />
              </div>

              <div className='flex flex-col items-start justify-center w-auto h-auto gap-2'>
                <h1 className='text-xl text-white'>Password</h1>
                <input type="password" className='h-10 text-white outline-none bg-white/20 w-72 roubded-md' onChange={(e) => { setPassword1(e.target.value) }} />
              </div>
            </div>
            {/* <button className='text-3xl text-white'>Continue as guest</button> */}
            <button className='h-auto px-3 py-2 text-lg text-black bg-white rounded w-72' onClick={signup}>Signup / Login</button>
            {/* <p className='-mt-5 text-white'>{errorIng}</p> */}
          </div>

          {/* <button onClick={() => { setShow(!show) }} className='mx-auto text-6xl text-black bg-white'>Show/ notShow</button> */}

        </div>
      </div>
    </div>
  )
}

export default Register
