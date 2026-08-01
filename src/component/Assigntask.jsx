import React, { useState } from 'react'
import { useCreateAssigny } from '../context/CreateAssignyContext'
import { useAssign } from '../context/AssignContext';
import Select from 'react-select/base';

const Assigntask = () => {
     const {state,dispatch}=useCreateAssigny();
     const {state:AssignState,dispatch:DispatchAssign}=useAssign();
     const [handleselect,setHandleselect]=useState(false)

     const [developerId,setDeveloperId]=useState('')
     const handleModal=(devId)=>{
      setTimeout(()=>{
            DispatchAssign({type:"HANDLE_MODAL"})
      },1000)
      setDeveloperId(devId)
      // console.log(AssignState.modal);
     }

     const handleAssignTask=()=>{
      const developer=AssignState.developers.filter((dev)=>(
        dev.id===developerId
      ))
      DispatchAssign({
        type:"SELECT_ASSIGN_IN",
        payload:{
          developername:developer[0].name,
          developerId:developerId,
          AssignState:state

        }
      })
      console.log(AssignState.assign_in);
      


     }
     

  return (
    <div>
    <div>
        {/* ROLE */}
       <h5 className="card-title fw-bold mb-3 text-dark">Select Assignies</h5>
       <ol >
        {AssignState.assign_in.map((assign)=>(
        <li className='text-center'>{assign.developername} {assign.AssignState.role}</li>
       ))}

       </ol>     
               <div className='mx-auto' style={{maxWidth:"370px"}}>
                {AssignState.developers.map((dev)=>(
                  <div key={dev.id} className="card mb-1">
                    <p>{dev.name} | {dev.expertise[0]}
                      <span><button onClick={()=>handleModal(dev.id)} style={{width:"150px"}} type="button" class="btn btn-primary mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">select</button></span>
                    </p>
                  </div>
                ))}
               </div>

    </div>
      {AssignState.modal &&  

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

        <input
          type="text"
          className="form-control"
          placeholder="role"
          value={state.role}
          onChange={(e)=>dispatch({
            type:"CREATE_ROLE",
            payload:e.target.value
          })}
        />


        <select 
          className="form-select mt-3"
          onChange={(e)=>dispatch({
            type:"CREATE_PRIORITY",
            payload:e.target.value
          })}
        >
          <option value="high">high</option>
          <option value="low">low</option>
          <option value="normal">normal</option>
        </select>


        <input
          className="form-control mt-3"
          type="date"
          value={state.lastdate}
          onChange={(e)=>dispatch({
            type:"CREATE_LASTDATE",
            payload:e.target.value
          })}
        />


        <button onClick={handleAssignTask} className="btn btn-success mt-3" data-bs-dismiss="modal">
          Assign task
        </button>

      </div>


      {/* <div className="modal-footer">

        <button 
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>

        <button className="btn btn-primary">
          Understood
        </button>

      </div> */}

    </div>
  </div>
</div>   

      }
      {/* <button onClick={()=>console.log(AssignState.assign_in)}>show assign in</button> */}
  </div>
      


    ) 
}

export default Assigntask
