import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const TaskForm = () => {
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useAppContext();

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleAddTask = () => {
    // a little validation to ensure a string is written as a task
    if(newTask.trim() !== ''){
      addTask({
        id: new Date().getTime().toString(),
        title: newTask,
        description,
        completed: false,
      });
      setNewTask('');
      setDescription('');
    }
  };


  return (
    <div>
      <h2>Add New Task</h2>
      <div>
        <input 
        type='text'
        placeholder='Enter a new task'
        value={newTask}
        onChange={handleInputChange}
        className='taskform'
        />
        <h6>Description</h6>
        <textarea 
        placeholder='Task description'
        value={description}
        onChange={handleDescriptionChange}
        className='decription'
        />
        <button onClick={handleAddTask} className='add-button'>
          Add Task
        </button>
      </div>
    </div>
  )
}

export default TaskForm