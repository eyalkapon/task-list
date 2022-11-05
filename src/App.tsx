import React from 'react';
import './App.scss';
import TasksWindow from './tasks-window/task-window';

function App() {
  return (
    <div className="App">
      <h1> welcome to the tasklist website!</h1>
     <TasksWindow/>
    </div>
  );
}

export default App;
