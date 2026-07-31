import React from 'react'
import { useTask } from '../context/TaskContext'

const ProjectList = () => {
    const {state,dispatch}=useTask();
    const handleEdit=(editId)=>{
      const getedititem=state.tasks.filter(task=>task.id===editId);
      console.log(getedititem);
      
      

       
    }
  return (
    <div>
        <h1>Project list</h1>
         {state.tasks.map((task)=>(
    <div key={task.id}>
        <h3>{task.projectname} | {task.projectpriority} | {task.projectDate}</h3>

        {task.assignlist.map((list)=>(
            <p key={list.developerId}>{list.developername} | {list.AssignState.role} | {list.AssignState.taskpriority} | {list.AssignState.lastdate} </p>
        ))}
        <button onClick={()=>dispatch({
          type:"TOGGLE_COMPLETE",
          payload:task.id
        })}>{task.isCompleted?"completed":"toggle complete"}</button>
        <button onClick={()=>dispatch({
          type:"TOGGLE_DELETE",
          payload:task.id
        })}>DELETE</button>

        <button onClick={()=>handleEdit(task.id)}>Edit project</button>
        <button>Edit Assignment</button>

    </div>
    
   ))}
   
      
    </div>
  )
}

export default ProjectList
