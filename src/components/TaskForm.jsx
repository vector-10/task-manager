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
    if (newTask.trim() !== '' && description !== '' && selectedCategory !== '') {
      const category = categories.find((cat) => cat.name === selectedCategory);

      addTask({
        id: new Date().getTime().toString(),
        title: newTask,
        description: description,
        completed: false,
        category: category || null,
      });

      setNewTask('');
      setDescription('');
      setSelectedCategory('');
    }
  };

  return (
    <form className='w-full max-w-lg mt-5'>
      <div className='flex flex-wrap -mx-2 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
        <input value={newTask} onChange={handleInputChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-task-name" type="text" placeholder="Task Name"/>
        </div>
        {/* Next  */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
        <input value={description} onChange={handleDescriptionChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-task-description" type="text" placeholder="Description" />
        </div>       
      </div>
      {/* Next */}
      <div className="flex flex-wrap -mx-2 mb-6">
      <div className="w-full px-3 ">
      <div className="relative">
        <select value={selectedCategory} onChange={handleCategoryChange}className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option value="">Select Category </option>
        {categories.map((category) => (
             <option key={category.id} value={category.name}>
               {category.name}
             </option>
           ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      </div>
      </div>
      <button onClick={handleAddTask} className=" rounded p-2 bg-blue-500 text-white mt-2 "> Add Task </button>
    </form>
    
  );
};

export default TaskForm;



// <div className='p-2'>
//       <div className="flex">
//        <input
//           type="text"
//           placeholder="Task title"
//           value={newTask}
//           onChange={handleInputChange}
//           className=" p-2 border border-gray-300"
//         />
//         <textarea
//           placeholder="a brief task decription"
//           value={description}
//           onChange={handleDescriptionChange}
//           className=" border border-gray-300 "
//         />
        
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className=" w-full appearance-none border border-gray-300 hover:border-gray-400 rounded shadow leading-tight"
//         >
//           <option value="">Select Category </option>
//           {categories.map((category) => (
//             <option key={category.id} value={category.name}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//         <button onClick={handleAddTask} className="p-2 bg-blue-500 text-white mt-2 md:mt-0">
//           Add Task
//         </button>
//       </div>
//     </div>