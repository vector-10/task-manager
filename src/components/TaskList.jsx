// src/components/TaskList.js
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const TaskList = () => {
  const { tasks, completeTask, categories } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState('');


  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  };

  const handleCategoryFilter = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter tasks based on the selected category
  const filteredTasks = selectedCategory
    ? tasks.filter((task) => task.category && task.category.name === selectedCategory)
    : tasks;

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <label className="mr-2">Filter tasks by Category:</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryFilter}
          className="p-2 border border-gray-300"
        >
          <option value=""> All Categories </option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Status</th>
      <th>Category</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {/* Displaying tasks based on the selected category */}
    {filteredTasks.map((task) => (
      <tr key={task.id} className={task.completed ? 'completed' : ''}>
        <td><strong>{task.title}</strong></td>
        <td>{task.description}</td>
        <td>{task.completed ? 'Completed' : 'Pending'}</td>
        <td>{task.category ? task.category.name : 'N/A'}</td>
        <td>
          {/* Button to complete/undo a task */}
          <button
            onClick={() => handleCompleteTask(task.id)}
            className="text-blue-500"
          >
            {task.completed ? 'Undo' : 'Complete'}
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default TaskList;
