import { createContext, useContext, useReducer } from "react";
import { supabase } from "../createClient";

const AuthContext=createContext();

const initialState={
    user:null,
    email:'',
    password:''
}

const reducer=(state,action)=>{
    switch(action.type){
        case "SET_EMAIL":
            return {...state,email:action.payload};
        case "SET_PASSWORD":
            return {...state,password:action.payload};    
        case "SET_USER":
            return {...state,user:action.payload};
        default:
            return state;    
    }

}

export const AuthProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);



   const handleSignUpsupabase=async(email,password)=>{
     const {error}=await supabase.auth.signUp({
        email,
        password
     })
     return error
   }

   const handleLoginwithsupabase=async()=>{
    const {error}=await supabase.auth.signInWithPassword({
        email:state.email,
        password:state.password
    })
    return error
   }

   const Logout=async()=>{
    await supabase.auth.signOut();
   }


    return(
        <AuthContext.Provider value={{state,dispatch,handleLoginwithsupabase,handleSignUpsupabase,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext);