import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Create from './components/Create';

import { TaskProvider } from './Context/TaskContext';

const App = () => {
  return(
  <div className='mainContainer'>
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  </div>
  )
};

export default App;
