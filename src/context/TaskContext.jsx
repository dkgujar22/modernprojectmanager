import { createContext, useContext, useReducer} from "react";

const TaskContext=createContext();

const initialState={
    tasks:[],

}

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TASK":
            return {tasks:[...state.tasks,action.payload]};
        case "TOGGLE_COMPLETE":
            return {tasks:state.tasks.map((task)=>(
                task.id===action.payload?{...task,isCompleted:true}:task
            ))} 
        case "TOGGLE_DELETE":
            return {tasks:state.tasks.filter((task)=>(
                task.id!==action.payload
            ))}  
        case "HANDLE_EDIT":
            return {tasks:state.tasks.map((task)=>(
                task.id===action.payload.id?{...task,
                    projectname:action.payload.taskState.projectname,
                    projectpriority:action.payload.taskState.priority,
                    projectDate:action.payload.taskState.dueDate}:task
            ))}         
        default:
            return state;    
    }
}
export const TaskProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask=()=>useContext(TaskContext);
