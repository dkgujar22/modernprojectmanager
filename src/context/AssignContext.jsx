import { Children, createContext, useContext, useReducer } from "react";

const AssignContext=createContext();

const initialState={
    assign_in:[],
    developers: [
  {
    "id": 1,
    "name": "Ali Raza",
    "expertise": [
      "React.js",
      "JavaScript",
      "Frontend Development",
      "UI/UX Implementation"
    ],
    "experience": "5 years",
    "role": "Frontend Developer"
  },
  {
    "id": 2,
    "name": "Ahmed Khan",
    "expertise": [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Backend Development"
    ],
    "experience": "6 years",
    "role": "Backend Developer"
  },
  {
    "id": 3,
    "name": "Sara Ahmed",
    "expertise": [
      "React Native",
      "Mobile App Development",
      "Flutter",
      "Cross Platform Apps"
    ],
    "experience": "4 years",
    "role": "Mobile Developer"
  },
  {
    "id": 4,
    "name": "Usman Tariq",
    "expertise": [
      "Manager",
    ],
    "experience": "7 years",
    "role": "Python Developer"
  },
  {
    "id": 5,
    "name": "Fatima Noor",
    "expertise": [
      "UI Design",
      "Figma",
      "Design Systems",
      "User Research"
    ],
    "experience": "5 years",
    "role": "UI/UX Designer"
  },
  {
    "id": 6,
    "name": "Hassan Ali",
    "expertise": [
      "Manager",
    
    ],
    "experience": "8 years",
    "role": "Senior Backend Developer"
  },
  {
    "id": 7,
    "name": "Ayesha Malik",
    "expertise": [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD"
    ],
    "experience": "6 years",
    "role": "DevOps Engineer"
  },
  {
    "id": 8,
    "name": "Bilal Hussain",
    "expertise": [
      "SQL",
      "PostgreSQL",
      "Database Optimization",
      "Data Modeling"
    ],
    "experience": "5 years",
    "role": "Database Engineer"
  },
  {
    "id": 9,
    "name": "Zainab Khan",
    "expertise": [
      "Angular",
      "TypeScript",
      "Frontend Architecture",
      "Web Performance"
    ],
    "experience": "4 years",
    "role": "Frontend Developer"
  },
  {
    "id": 10,
    "name": "Hamza Shah",
    "expertise": [
      "Cyber Security",
      "Network Security",
      "Security Testing",
      "Penetration Testing"
    ],
    "experience": "7 years",
    "role": "Security Engineer"
  }
],
    modal:false

}
   

const reducer=(state,action)=>{
    switch(action.type){
        case "SELECT_ASSIGN_IN":
          // const developername=state.developers.filter((assign)=>(
          //      assign.id===action.payload && assign.name 
          //   ))
            return {...state,assign_in:[...state.assign_in,action.payload]};
        case "CLEAR_ASSIGN_IN":
          return {...state,assign_in:[]}  
        case "DELETE_ASSIGNEE":
          const assignee=state.assign_in.filter((assigne)=>assigne.selectAssignee.id!==action.payload)
          return {...state,assign_in:assignee};      
        case "HANDLE_MODAL":
          return {...state,modal:true}    

        default:
            return state;    
    }
}

export const AssignProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <AssignContext.Provider value={{state,dispatch}}>
            {children}
        </AssignContext.Provider>
    )
}
export const useAssign=()=>useContext(AssignContext);