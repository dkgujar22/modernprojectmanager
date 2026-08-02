import React, { useEffect, useState } from 'react'
import { useTask } from '../context/TaskContext';
import { useAssign } from '../context/AssignContext';
import Assigntask from './Assigntask';
import { useCreateTask } from '../context/CreateTaskContext';

const TaskCard = () => {
    const {state:taskState,dispatch:taskDispatch,editId,setEditId,btn,setBtn}=useCreateTask();
    const {state,dispatch}=useTask();
    const {state:addassignState,dispatch:dispatchAddAssign}=useAssign();
    // const [taskname,setTaskname]=useState('');
    // const [priority,setPriority]=useState('');
    // const [assigny,setAssigny]=useState(null);
    // const [date,setDate]=useState('');
    const [assignId,setAssignId]=useState(null);
    // const [taskitem,setTaskitem]=useState({
    //     name:'',
    //     priority:'',
    //     dueDate:'',
    //     assignlist:[]
    // });
    const [showModal,setShowModal]=useState(false);

    useEffect(()=>{
         console.log(addassignState);
         
    },[])

    const handleAddProject=()=>{
        // console.log(taskname,priority,date);
        
        // setTaskitem(prev=>({...prev,name:taskname,priority:priority,dueDate:date,assignlist:addassignState.assign_in}));
        dispatch({
            type:"ADD_TASK",
            payload:{
                id:Date.now(),
                projectname:taskState.projectname,
                projectpriority:taskState.priority,
                projectDate:taskState.dueDate,
                isCompleted:false,
                // assignlist:addassignState.assign_in
            }
            
        })
        console.log(state.tasks);
        
        // dispatchAddAssign({
        //     type:"CLEAR_ASSIGN_IN"
        // })

    }

    const handleModal=(id)=>{
        setAssignId(id)
        setShowModal(true)
    }
    const handleEditProject=()=>{
        dispatch({
            type:"HANDLE_EDIT",
            payload:{
                id:editId,
                taskState:taskState
            }
        })
        setBtn(true);
        setEditId(null);
        
    }

    
  return (
    <div className='text-center'>
        <h1>Add Project</h1>
        <input type="text"
        placeholder='enter task'
        value={taskState.projectname}
        onChange={(e)=>taskDispatch({
            type:"ADD_PROJECTNAME",
            payload:e.target.value
        })}
        className='w-50 p-2 mb-1'
        
         />
         <br />
        <select   onChange={(e)=>taskDispatch({
            type:"ADD_PRIORITY",
            payload:e.target.value
        })}  className="form-select" className='w-50 p-2 mb-1' aria-label="Default select example" >
        {/* <option>select priority</option> */}
        <option value="urgent">urgent</option>
        <option value="normal">normal</option>
        <option value="high">high</option>
        </select>
        <br />
   <label for="start">Select Date:</label>
   <input type="date" id="start" name="trip-start" value={taskState.dueDate} 
   onChange={(e)=>taskDispatch({
    type:"ADD_DUEDATE",
    payload:e.target.value
   })}/>

   {/* <Assigntask/> */}
   <br />
   {btn?<button onClick={handleAddProject} className='btn btn-warning'>Add Project</button>:
   <button onClick={handleEditProject} className='btn btn-warning'>Edit Project</button>} <br />
   <button onClick={()=>console.log(state)}>showprojects</button>
   <button onClick={()=>console.log(addassignState)}>show assignees</button>
    </div>
  )
}

export default TaskCard
