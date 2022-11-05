import React, { useEffect, useState } from 'react';
import TaskList from '../task-list/task-list';
import { Task } from '../task/utils';
import Toolbar from '../toolbar/toolbar';
import './task-window.scss';
import {TasksContext } from './utils';

const TasksWindow = () => {

  const [taskList, setTaskList] = useState<Task[]>(JSON.parse(localStorage.getItem('taskList') || '[]'));

  useEffect(() => {  
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [setTaskList, taskList])
  
  return (
    <TasksContext.Provider value={{taskList,setTaskList}}>
    <div className="task-window">
    <Toolbar/>
    <TaskList/>
    </div>
    </TasksContext.Provider>
  );
}

export default TasksWindow;
