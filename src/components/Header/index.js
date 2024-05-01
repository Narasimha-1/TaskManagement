import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../../Context/TaskContext'; // Adjust the path accordingly


import './index.css';

const Header = () => {
  const { tasksList, deleteTask } = useContext(TaskContext); // Accessing tasksList and deleteTask from context

  const handleDelete = (index) => {
    deleteTask(index); // Call deleteTask function with the index of the task to be deleted
  };

  const taskMetrics = {
    totalTasks: tasksList.length,
    completedTasks: tasksList.filter(task => task.completed).length,
    pendingTasks: tasksList.filter(task => !task.completed).length,
  };

  return (
    <div className='fullContainer'>
      <div className='headerContainer'>
        <h1>Task Management</h1>
        <div>
            <Link to="/create" className='linkItem' style={{ display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
                </svg>
                <button className='createButton'>CreateTask</button>    
            </Link>
        </div>        
      </div>
      <div className='taskContainer'>
        <h2>Tasks:</h2>
        <ul>
          {tasksList.map((task, index) => (
            <li key={index} className='list'>
                <div className='heading'>
                    <h4>{task.title}</h4> 
                    <h6>Assigned To : <span className='assign'>{task.assign}</span></h6> 
                </div>
                <p>{task.description}</p>
                <div className='statusContainer'>
                    <label for="status">Status of the Task:</label>
                    <select name="Status" id="status">
                        <option value="Started">Started</option>
                        <option value="InProgress">InProgress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <button onClick={() => handleDelete(index)} className='deleteButton'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 16 16">
                            <path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"></path>
                        </svg>
                    </button> {/* Add delete button */}
                </div>
            </li>
          ))}
        </ul>
        <div className='taskContainer'>
            <h2>TaskStatus:</h2>
            <p>Total Tasks: {taskMetrics.totalTasks}</p>
            <p>Pending Tasks: {taskMetrics.pendingTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;