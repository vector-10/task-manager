import React from "react";
import { AppProvider } from "./context/AppContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import CategoryList from "./components/CategoryList";
import CategorySelector from "./components/CategorySelector";


function App() {
  return (
   <AppProvider>
    <div className="App">
        <h1>Task Manager App</h1>
        <div className="">
          <div className="">
            <TaskForm />
            <TaskList />
          </div>
          <div className="">
            <CategorySelector />
            <CategoryList />
          </div>
        </div>
      </div>
   </AppProvider>
  )
}

export default App
