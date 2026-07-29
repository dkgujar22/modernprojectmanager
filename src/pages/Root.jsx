import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Root = () => {
  return (
    <div className=''>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/addproject'>add project</NavLink>
            </li>
            <li>
                <NavLink to='/projectlist'>project list</NavLink>
            </li>
        </ul>
        <Outlet/>
      
    </div>
  )
}

export default Root
