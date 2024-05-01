import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  });
  const [tasksList, setTasksList] = useState([]);

  const addTask = () => {
    setTasksList([...tasksList, task]);
    setTask({ title: '', description: '', assign:'' }); // Reset the input fields
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasksList];
    updatedTasks.splice(index, 1); // Remove the task at the specified index
    setTasksList(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ task, setTask, tasksList, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
