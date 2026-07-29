import React from 'react'
import { useTask } from '../context/TaskContext'

const ProjectList = () => {
    const {state,dispatch}=useTask();
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

    </div>
    
   ))}
   {/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}
      
    </div>
  )
}

export default ProjectList
