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
    <div className='task manager'>
      <h2 className='text-center'>Task List</h2>
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
      <table className='table-fixed'>
  <thead>
    <tr>
      <th className='border border-slate-600 p-1'>Title</th>
      <th className='border border-slate-600 p-1'>Description</th>
      <th className='border border-slate-600 p-1'>Status</th>
      <th className='border border-slate-600 p-1'>Category</th>
      <th className='border border-slate-600 p-1'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {/* Displaying tasks based on the selected category */}
    {filteredTasks.map((task) => (
      <tr key={task.id} className={task.completed ? 'completed' : ''}>
        <td className='border border-slate-600 p-2'><strong>{task.title}</strong></td>
        <td className='border border-slate-600 p-2'>{task.description}</td>
        <td className='border border-slate-600 p-2'>{task.completed ? 'Completed' : 'Pending'}</td>
        <td className='border border-slate-600 p-2'>{task.category ? task.category.name : 'N/A'}</td>
        <td className='border border-slate-600 p-2'>
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
