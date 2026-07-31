import React from 'react'
import { useTask } from '../context/TaskContext'
import { useCreateTask } from '../context/CreateTaskContext';
import { useNavigate } from 'react-router';

const ProjectList = () => {
    const {state:taskState,dispatch:taskDispatch,setEditId,setBtn}=useCreateTask();
    const {state,dispatch}=useTask();
    const navigate=useNavigate();

    const handleEdit=(editId)=>{
      const getedititem=state.tasks.filter(task=>task.id===editId);
      // console.log(getedititem);
      console.log(state.tasks);
      
      setEditId(editId)
      setBtn(false)
      taskDispatch({ type: "ADD_PROJECTNAME", payload: getedititem[0].projectname });
      taskDispatch({ type: "ADD_PRIORITY", payload: getedititem[0].projectpriority });
      taskDispatch({ type: "ADD_DUEDATE", payload: getedititem[0].projectDate });
      console.log(taskState);
      navigate('/addproject')   
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
        <button>Add Assignment</button>
        <button>Edit Assignment</button>

    </div>
    
   ))}
   
      
    </div>
  )
}

export default ProjectList
