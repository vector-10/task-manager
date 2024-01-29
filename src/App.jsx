import React from "react";
import { AppProvider } from "./context/AppContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import CategoryList from "./components/CategoryList";
//import CategorySelector from "./components/CategorySelector";


function App() {
  return (
   <AppProvider>
    <div className="App flex flex-col justify-center items-center">
        <h1>Task Manager App</h1>      
            <TaskForm />
            <TaskList />            
          </div>          
   </AppProvider>
  )
}

export default App
