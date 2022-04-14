import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const[name,setname] = useState("")
    const[password,setpassword]= useState("");
    function handle(e){
        e.preventDefault()
        axios.post("http://localhost:3000/login",{name}).then( res =>{
      console.log(res)
    })
    }
  return (
    <div className='flexy'>
      <div className='forms'>
        <div><img style={{marginLeft:"37%"}}src ="log.png"/></div>
          <h1 style={{paddingLeft:"39%"}}>Login</h1>
        <div style={{padding:"20px"}}>
        <form onSubmit={handle} >
          <label className='font'>Username
          
          
          <input type ="text" name="name" onChange={ (e) => {setname(e.target.value)}} />
          </label>

        
          <label className='font'>Password
          
          
          <input type ="text" name="password" onChange={ (e) => {setpassword(e.target.value)}}/>
          </label>
          <button  onClick={() =>{
            alert("Login Alert")
          }}type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login