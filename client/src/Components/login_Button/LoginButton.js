import React, { useState, useEffect } from 'react'
import './loginButton.style.css'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'



function LoginButton() {
  const Navi=useNavigate()
const [loginBut,setLoginBut]=useState(false)



const handleLogout=()=>{
  const API = "https://blog-server-oxr9.onrender.com/user/logout"
  // const API = "http://localhost:4040"
  axios.post(API)
  .then(res=>{
    // console.log("logout",res.data);
    Navi('/')
    setLoginBut(false)
    localStorage.clear()
  })
  .catch(err=>console.log(err))

}

useEffect(()=>{
  if( localStorage.getItem("token")){
    // console.log( localStorage.getItem("token"));
    setLoginBut(true)
  }
 
},[])

const handleLogin=()=>{
    Navi('/login')
}
// console.log(loginBut);

const handleSignup=()=>{
    Navi('/signup')
}



  return (
    <>
    <div className='btnContainer'>
      
  {(!loginBut) && <button className="LoginButn btnClr" onClick={handleLogin} ><span>Log In</span></button>   }   
{(!loginBut) && <button className="SignupButn btnClr" onClick={handleSignup} ><span>Sign Up</span></button>}

{(loginBut) && <button className="LogoutBtn" onClick={handleLogout} ><span>Log out</span></button>   }   

{(loginBut) &&<p className='userName'><span>Hi {localStorage.getItem("name")}</span></p>}


    </div>
    </>
  )
}

export default LoginButton