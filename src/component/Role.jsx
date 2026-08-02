import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useCreateAssigny } from '../context/CreateAssignyContext'
import { useTask } from '../context/TaskContext';

const Role = ({projectId,AssignId}) => {
    const {state:CreateRoleState,dispatch:CreateDispatch}=useCreateAssigny();
    const {state,dispatch}=useTask();


    const getAssigneeId=()=>{



    }

    const handleAddrole=()=>{

        // const getAssignee=state.tasks.map((task)=>task.id===projectId?
        // )
        console.log(CreateRoleState);
        console.log(projectId);

        // const getproject=state.tasks.map((tasks)=>task.id===projectId)
        

        dispatch({
          type:"ADD_ROLE_TOASSIGNEE",
          // payload:CreateRoleState
          payload:{
            projectId:projectId,
            AssignId:AssignId,
            roleState:CreateRoleState
          }
        })
        
    }
  return (
    <div>
        <button onClick={getAssigneeId}  type="button" className="btn btn-primary mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          <FaPlus/>
          </button>

               <div 
                    className="modal fade" 
                    id="exampleModal2" 
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
        
                <input type="text"
                placeholder='role'
                value={CreateRoleState.role}
                onChange={(e)=>CreateDispatch({
                    type:"CREATE_ROLE",
                    payload:e.target.value
                    })} />
                <br />
                <input type="text"
                placeholder='priority'
                value={CreateRoleState.priority}
                onChange={(e)=>CreateDispatch({
                    type:"CREATE_PRIORITY",
                    payload:e.target.value
                    })} />
                <br />
                <input type="date"
                value={CreateRoleState.lastdate}
                onChange={(e)=>CreateDispatch({
                    type:"CREATE_LASTDATE",
                    payload:e.target.value
                    })} />
                <br />
                <button onClick={handleAddrole}>Add role</button>    
        
              </div>
            </div>
          </div>
        </div> 
          
       
    </div>
  )
}

export default Role
