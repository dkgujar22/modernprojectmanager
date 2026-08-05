import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router';
import { supabase } from '../createClient';

const Home = () => {
  const {state,dispatch}=useAuth();
  const navigate=useNavigate();
   const getUser=async()=>{
      const {data:{user}}=await supabase.auth.getUser();
      dispatch({
        type:"SET_USER",
        payload:user
      })
      
      
    }

  useEffect(()=>{
    getUser();

    supabase.auth.onAuthStateChange((_event,session)=>{
      dispatch({
        type:"SET_USER",
        payload:session?.user || null
      })
    })

  },[])

  const createProject=()=>{
    if(state.user){
      navigate('/addproject')
    }
    else {
      navigate('/login')
    }
  }
  return (
    <div className='container text-center'>
      <h2 className='text-center' style={{marginTop:"200px",fontSize:"50px"}}>Lorem ipsum dolor sit amet consectetur <br />
       adipisicing elit. Delectus, quibusdam.</h2> 
       <button onClick={createProject} className='btn btn-light text-dark border-dark  px-4 py-2'>Create Workspace</button>
    </div>
  )
}

export default Home
