import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Root = () => {
  return (
    // <div classNameName=''>
    //     <ul>
    //         <li>
    //             <NavLink to='/'>Home</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to='/addproject'>add project</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to='/projectlist'>project list</NavLink>
    //         </li>
    //     </ul>
    //     <Outlet/>
      
    // </div>
   <div>
     <nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">ProjectManager</NavLink>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <button className='btn btn-success me-3'>Login</button>
        <button className='btn btn-warning'>Signup</button>
        {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/addproject">AddProject</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/projectlist">projects</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Link</a>
        </li> */}
      </ul>
      
     
    </div>
  </div>
</nav>
  <Outlet/>
   </div> 
   
  )
}

export default Root
