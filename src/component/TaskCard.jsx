import React, { useEffect, useState } from 'react'
import { useTask } from '../context/TaskContext';
import { useAssign } from '../context/AssignContext';
import Assigntask from './Assigntask';

const TaskCard = () => {
    const {state,dispatch}=useTask();
    const {state:addassignState,dispatch:dispatchAddAssign}=useAssign();
    const [taskname,setTaskname]=useState('');
    const [priority,setPriority]=useState('');
    // const [assigny,setAssigny]=useState(null);
    const [date,setDate]=useState('');
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
        console.log(taskname,priority,date);
        
        // setTaskitem(prev=>({...prev,name:taskname,priority:priority,dueDate:date,assignlist:addassignState.assign_in}));
        dispatch({
            type:"ADD_TASK",
            payload:{
                id:Date.now(),
                projectname:taskname,
                projectpriority:priority,
                projectDate:date,
                isCompleted:false,
                assignlist:addassignState.assign_in
            }
            
        })
        dispatchAddAssign({
            type:"CLEAR_ASSIGN_IN"
        })

    }

    const handleModal=(id)=>{
        setAssignId(id)
        setShowModal(true)
    }

    
  return (
    <div className='text-center'>
        <h1>Add Project</h1>
        <input type="text"
        placeholder='enter task'
        value={taskname}
        onChange={(e)=>setTaskname(e.target.value)}
        className='w-50 p-2 mb-1'
        
         />
         <br />
        <select  className="form-select" className='w-50 p-2 mb-1' aria-label="Default select example" onChange={(e)=>setPriority(e.target.value)}>
        <option>select priority</option>
        <option value="urgent">urgent</option>
        <option value="normal">normal</option>
        <option value="high">high</option>
        </select>
        <br />
   <label for="start">Select Date:</label>
   <input type="date" id="start" name="trip-start" value={date} onChange={(e)=>setDate(e.target.value)}/>

   <Assigntask/>

   <button onClick={handleAddProject} className='btn btn-warning'>Add Project</button>

   {/* <button onClick={()=>console.log(state)}>showprojects</button> */}
    </div>
  )
}

export default TaskCard
