import './App.css';
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'
import { useState } from 'react'

function App() {

  const [activeBG, setActiveBG] = useState('light');
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState('0');
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <div className={`root ${activeBG}`}>
      <div className="App">
        <Header setActiveBG={setActiveBG}/>
        <AddTask tasks={tasks} setTasks={setTasks} setCount={setCount} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit}/>
        <ShowTask tasks={tasks} setTasks={setTasks} count={count} setCount={setCount} setTaskToEdit={setTaskToEdit}/>
      </div>
    </div>
  );
}

export default App;
