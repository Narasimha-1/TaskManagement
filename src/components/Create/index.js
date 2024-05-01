import './index.css';
import { useContext, useState } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import { useNavigate } from 'react-router-dom'; 

const Create = () => {
  const { task, setTask, addTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.description || !task.assign) {
      setError('Please fill in all fields');
      return;
    }
    addTask();
    navigate('/');
  };

  return (
    <div className='createContainer'>
      <div className='container'>
        <h1>Create a Task</h1>
        <p>Provide the information about the task you wish to complete.</p>
        <form className='form' onSubmit={handleSubmit}>
          <p>Title</p>
          <input type="text" id="title" name="title" value={task.title} onChange={handleInputChange} />
          <p>Description</p>
          <textarea id="description" name="description" rows="5" cols="30" value={task.description} onChange={handleInputChange}></textarea>
          <p>Assigning to</p>
          <input type="text" id="assign" name="assign" value={task.assign} onChange={handleInputChange} />
          {error && <p className="error">{error}</p>}
          <button type="submit" className='buttonElement'>Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
