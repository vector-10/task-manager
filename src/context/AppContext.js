import React, { createContext, useContext, useEffect, useState } from "react";
// to create a react context
const AppContext = createContext();

const AppProvider = ({ children }) => {
    // set state for tasks categories 
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);

    // function to add a task to state
    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    }
    //function to mark a task as completed
    const completeTask = (taskId) => {
        setTasks((prevTasks) => 
        prevTasks.map((task) => 
        task.id === taskId ? { ...task, completed: !task.completed } : task))
    };

    //function to add a category
    const addCategory = (category) => {
        setCategories((prevCategories) => [...prevCategories, category])
    }

    // to load the data from local storage on component mount
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];

        setTasks(storedTasks);
        setCategories(storedCategories);
    }, [])

    //save the data to local storage when the task changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks]);

    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories])

    return(
        <AppContext.Provider value={{tasks, categories, addTask, completeTask, addCategory}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}