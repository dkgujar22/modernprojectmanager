import { useContext, useReducer } from "react";
import { createContext } from "react";

const CreateAssignContext=createContext();

const initialState={
    role:'',
    taskpriority:'',
    lastdate:'',
}

const reducer=(state,action)=>{
    switch(action.type){
        case "CREATE_ROLE":
                // console.log(action.payload);
            return {...state,role:action.payload};
        case "CREATE_PRIORITY":
            return {...state,taskpriority:action.payload};
        case "CREATE_LASTDATE":
            return {...state,lastdate:action.payload};
        default:
            return state;    
    }
}

export const CreateAssignyProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    return(
        <CreateAssignContext.Provider value={{state,dispatch}}>
            {children}
        </CreateAssignContext.Provider>
    )

}
export const useCreateAssigny=()=>useContext(CreateAssignContext);