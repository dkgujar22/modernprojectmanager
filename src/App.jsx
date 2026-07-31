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


// const Layout=()=>{

//   return(
//     <TaskCard />
//   )
// }

function App() {
  return (
   <TaskProvider>
    <AssignProvider>
      <CreateAssignyProvider>
        <CreateTaskProvider>
              <Layout/>
        </CreateTaskProvider>
      </CreateAssignyProvider>
    </AssignProvider>
   </TaskProvider>
  )
}

export default App
