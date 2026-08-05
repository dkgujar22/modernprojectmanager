import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    // const [name,setName]=useState('')
    const navigate=useNavigate();
    const {state,dispatch,handleLoginwithsupabase}=useAuth();
    const handleLogin=async()=>{
        // dispatch({
        //     type:'LOGIN',
        //     payload:name
        // })
        const error=await handleLoginwithsupabase();
        
        if(error) toast.error(error.message)
        else {
    toast.success("Login successfully")
     setTimeout(() => {
            console.log(state);
            navigate('/addproject')
        }, 1000);
    }    
       
        

    }
  return (
    <div className='text-center' style={{marginTop:"200px"}}>
        <input type="email"
        placeholder='email'
        value={state.email}
        onChange={(e)=>dispatch({
            type:"SET_EMAIL",
            payload:e.target.value
        })} />

        <br />
        <input type="password"
        placeholder='password'
        value={state.password}
        onChange={(e)=>dispatch({
            type:"SET_PASSWORD",
            payload:e.target.value
        })} />
   <br />
        <button onClick={handleLogin}>login</button> <br />
        <span>Not have an account?<button onClick={()=>navigate('/signUp')} className='border-0 bg-transparent'>SignUp</button></span><br />

        <button>Continue with google</button>
        <ToastContainer/>

    </div>
  )
}

export default Login
