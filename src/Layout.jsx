import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root'
import Home from './pages/Home'
import ProjectList from './pages/ProjectList'
import TaskCard from './component/TaskCard'

const Layout = () => {

    const  router=createBrowserRouter([
        {
            path:'/',element:<Root/>,
            children:[
                {index:true,element:<Home />},
                {path:'addproject',element:<TaskCard/>},
                {path:'projectlist',element:<ProjectList/>}
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Layout
