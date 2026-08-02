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
                task.id===action.payload?{...task,isCompleted:!task.isCompleted}:task
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
        case "ADD_ASSIGNEE_TOPROJECT":
            // const findproject=state.tasks.filter((task)=>task.id===action.payload.projectid)
            return {tasks:state.tasks.map(task=>task.id===action.payload.projectid?{...task,assignlist:action.payload.addAssignee}:task)}  
        case "ADD_ROLE_TOASSIGNEE":
            const getprojects=state.tasks.map((task)=>task.id===action.payload.projectId?
            {...task,assignlist:
            task.assignlist.map((list)=>list.AssignId===action.payload.AssignId?
            {...list,role:action.payload.roleState.role,
                 priority:action.payload.roleState.taskpriority,
                  dueDate:action.payload.roleState.lastdate}:list)}:task)
            console.log(getprojects);
            
            // const updateproject=getproject[0].assignlist.map((list)=>
            //     list.AssignId===action.payload.AssignId?
            //     {...list,role:action.payload.roleState.role,
            //     priority:action.payload.roleState.taskpriority,
            //     dueDate:action.payload.roleState.lastdate}:list)
            
                
            
            return {tasks:getprojects};            
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
