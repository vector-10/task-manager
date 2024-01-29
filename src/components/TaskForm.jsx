// src/components/TaskForm.js
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const TaskForm = () => {
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { addTask, categories } = useAppContext();

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '' && selectedCategory !== '') {
      const category = categories.find((cat) => cat.name === selectedCategory);

      addTask({
        id: new Date().getTime().toString(),
        title: newTask,
        description,
        completed: false,
        category: category || null,
      });

      setNewTask('');
      setDescription('');
      setSelectedCategory('');
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <div className="flex flex-col md:flex-row items-center">
        <input
          type="text"
          placeholder="Task title"
          value={newTask}
          onChange={handleInputChange}
          className="mr-2 p-2 border border-gray-300"
        />
        <textarea
          placeholder="Task description"
          value={description}
          onChange={handleDescriptionChange}
          className="md:mr-2 p-2 border border-gray-300 mt-2 md:mt-0"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="md:mr-2 p-2 border border-gray-300 mt-2 md:mt-0"
        >
          <option value="">-- Select Category --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddTask} className="p-2 bg-blue-500 text-white mt-2 md:mt-0">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
