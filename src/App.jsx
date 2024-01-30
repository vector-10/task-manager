import React from "react";
import { AppProvider } from "./context/AppContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";



function App() {
  return (
   <AppProvider>
    <div className="App flex flex-col justify-center items-center bg-blue-200 " style={{ height: '100vh'}}>
       <div className="bg-blue-400 p-5 rounded-2xl">
       <h1 className="text-white font-black ">Task Manager</h1>      
            <TaskForm />
            <TaskList />   
      </div>         
          </div>          
   </AppProvider>
  )
}

export default App
