import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TaskCard from './component/TaskCard'
import { TaskProvider } from './context/TaskContext'
import { AssignProvider } from './context/AssignContext'
import { CreateAssignyProvider } from './context/CreateAssignyContext'
import Layout from './Layout'
import { CreateTaskProvider } from './context/CreateTaskContext'
import { AuthProvider } from './context/AuthContext'


// const Layout=()=>{

//   return(
//     <TaskCard />
//   )
// }

function App() {
  return (
    <AuthProvider>
       <TaskProvider>
    <AssignProvider>
      <CreateAssignyProvider>
        <CreateTaskProvider>
              <Layout/>
        </CreateTaskProvider>
      </CreateAssignyProvider>
    </AssignProvider>
   </TaskProvider>

    </AuthProvider>
  
  )
}

export default App
