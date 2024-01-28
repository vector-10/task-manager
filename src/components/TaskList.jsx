import React from 'react'
import { useAppContext } from '../context/AppContext'

const TaskList = () => {
  const { tasks, completeTask } = useAppContext();

  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  }

  return (
    <div className='main'>
      <h2>Task List</h2>
      <ul>
        {
          tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              {task.title} - {task.completed ? 'Completed' : 'Pending'}
              <button
              onClick={() => handleCompleteTask(task.id)} className=''>
                  {task.completed ? 'Undo' : 'Complete'}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TaskList