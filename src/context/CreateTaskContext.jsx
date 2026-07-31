import { createContext, useContext, useReducer, useState } from "react";

const CreateTaskContext=createContext();

const initialState={
    projectname:'',
    priority:'',
    dueDate:'',

}

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_PROJECTNAME":
            return {...state,projectname:action.payload};
        case "ADD_PRIORITY":
            return {...state,priority:action.payload};
        case "ADD_DUEDATE":
            return {...state,dueDate:action.payload};
        default:
            return state;    
    }
}

export const CreateTaskProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);
    const [editId,setEditId]=useState(null);
    const [btn,setBtn]=useState(true);

    return(
        <CreateTaskContext.Provider value={{state,dispatch,editId,setEditId,btn,setBtn}}>
            {children}  
        </CreateTaskContext.Provider>
    )

}

export const useCreateTask=()=>useContext(CreateTaskContext);