import React, { useState } from 'react'
import { useTask } from '../context/TaskContext'
import { useCreateTask } from '../context/CreateTaskContext';
import { useNavigate } from 'react-router';
import { useAssign } from '../context/AssignContext';
import { FaClosedCaptioning, FaCross } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

const ProjectList = () => {
    const {state:taskState,dispatch:taskDispatch,setEditId,setBtn}=useCreateTask();
    const {state,dispatch}=useTask();
    const {state:AssignState,dispatch:AssignDispatch}=useAssign();
    const navigate=useNavigate();
    const [projectId,setProjectId]=useState(null);

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

    const addAssignee=(devid)=>{
      console.log(devid);
      
      const getselectAssignee=AssignState.developers.filter((dev)=>dev.id===devid);
      console.log(getselectAssignee);
      
      AssignDispatch({
        type:"SELECT_ASSIGN_IN",
        payload:getselectAssignee[0]
      })
    }

    const deleteAssignee=(assignid)=>{
        AssignDispatch({
          type:"DELETE_ASSIGNEE",
          payload:assignid
        })
    }
    const addAssigneeToProject=()=>{

        
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
        })}>
          {task.isCompleted?"completed":"toggle complete"}
          </button>
        <button onClick={()=>dispatch({
          type:"TOGGLE_DELETE",
          payload:task.id
        })}>DELETE</button>

        <button onClick={()=>handleEdit(task.id)}>Edit project</button>
        
        
        <button onClick={()=>setProjectId(task.id)} type="button" className="btn btn-primary mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Assignees
          </button>
        <div 
            className="modal fade" 
            id="exampleModal" 
            tabIndex="-1" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true"

        >
      <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>

          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="modal"
          ></button>
        </div>

     
      <div className="modal-body">

       {AssignState.assign_in.map((assign)=>(
        <div key={assign.id}>
          <p>{assign.name}</p>
          <button onClick={()=>deleteAssignee(assign.id)}><FaDeleteLeft/></button>
        </div>
       ))}
       
       <hr />
        {/* add assignment */}
        {AssignState.developers.map((dev)=>(
          <div className='row' key={dev.id}>
          <div className='col-8'>
            <p style={{fontSize:"12px"}}>{dev.name} {dev.expertise[0]} </p>
           </div>
           <div className='col-4'>
             <button onClick={()=>addAssignee(dev.id)} style={{fontSize:"12px"}} className='btn btn-info px-4' type='btn'>Add</button>
           </div>

          </div>
               ))}


        <button onClick={()=>console.log(AssignState.assign_in)}>show assignerr</button>
        <button onClick={addAssigneeToProject} className="btn btn-success mt-3" data-bs-dismiss="modal">
          Assign task
        </button>

      </div>
    </div>
  </div>
</div> 
         
      
        <button>Edit Assignment</button>
        </div>
   ))}
   
      
    </div>
    
  )
}

export default ProjectList;
