import React from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';

const SignUp = () => {

    const {state,dispatch,handleSignUpsupabase}=useAuth();
    const navigate=useNavigate();
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async(data) => {
    console.log(data);
    const error=await handleSignUpsupabase(data.email,data.password);
    if(error) toast.error('signup failed')
    else{
    toast.success('Email registered successfully');
    navigate('/login')
    
  }

 
  }
  return (
     <form onSubmit={handleSubmit(onSubmit)} className='text-center mt-5'>
        <h1>SignUp</h1>

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        style={{width:"300px"}}
        className='p-2'
        // value={state.email}
        // onChange={(e)=>dispatch({
        //     type:"SET_EMAIL",
        //     payload:e.target.value
            
        // })}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Enter a valid email address",
          },
        })}
      />
      <p>{errors.email?.message}</p>

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        style={{width:"300px"}}
        className='p-2'
        // value={state.password}
        // onChange={(e)=>dispatch({
        //     type:"SET_PASSWORD",
        //     payload:e.target.value
            
        // })}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
      />
      <p>{errors.password?.message}</p>

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Confirm Password"
        style={{width:"300px"}}
        className='p-2'
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
      />
      <p>{errors.confirmPassword?.message}</p>

      <button className='btn btn-primary' type="submit">Sign Up</button>
      <ToastContainer />
    </form>
  )
}

export default SignUp
