import React from 'react'
import { useEffect,useState } from 'react'
import '../Aps.css'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";


const Register = () => {
  

    const[set,setdata] = useState({})
    const[name,setname] = useState("")
    const[password,setpassword]= useState("");
    const[phone,setphone] =useState("")

    useEffect (() => {
        fetch("http://localhost:3000/my"
            
        )
        .then( res => res.json()).then(res => setdata(res))
          },[])
          console.log(set)
          function handle(e){
              e.preventDefault()
              axios.post("http://localhost:3000/submit_form",{name,password,phone }).then( res =>{
            console.log(res)

          })
          

          }
  return (
    <div className='flexy'>
      <div className='forms'>
          <h1 style={{paddingLeft:"39%"}}>Register</h1>
        <div style={{padding:"20px"}}>
        <form onSubmit={handle} >
          <label className='font'>Username
          
          
          <input type ="text" name="name" onChange={ (e) => {setname(e.target.value)}} />
          </label>
          <label className='font'>Email
          
          
          <input type ="text"name="email" />
          </label>
          <label className='font'>Phonenumber
          
          
          <input type ="text"name="phone" onChange={ (e) => {setphone(e.target.value)}} />
          </label>
          <label className='font'>Password
          
          
          <input type ="text" name="password"  onChange={ (e) => {setpassword(e.target.value)}}/>
          </label>
          <button type="submit">Submit</button>
        </form>
        </div>
      
      </div>
    </div>
  )
}

export default Register