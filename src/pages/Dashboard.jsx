import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Sidebar from '../component/Sidebar'

const Dashboard = () => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-6">
               <Sidebar/>
            </div>
             <div className="col-6">
               <Outlet/>
            </div>
          
           
        </div>
        
        {/* <NavLink to='/dashboard/addproject'>add project</NavLink> */}
      
    </div>
  )
}

export default Dashboard
