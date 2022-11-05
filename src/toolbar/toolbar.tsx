import { Button } from '@mui/material';
import React from 'react';
import { Task } from '../task/utils';
import "./toolbar.scss";
import { v4 as uuidv4 } from 'uuid';
import { useTasksContext } from '../tasks-window/utils';
const Toolbar = () => {

  const { taskList,setTaskList } = useTasksContext();

  const createTask = () : void => {
    const defaultTask : Task = {
      id: uuidv4() , content: `משימה לדוגמא ${taskList.length + 1}` , isMarked: false};
    setTaskList([defaultTask,...taskList]);
  }

  const deleteAllTasks = () : void => {
    setTaskList([]);
  }

  const deleteMarkedTasks = () : void => {
    setTaskList(taskList.filter((task : Task) =>  {
      return !task.isMarked;
    }))
}
  return (
    <div className="toolbar">
        <Button onClick={createTask} variant="contained" color={'success'}>+</Button>
        <Button onClick={deleteAllTasks} variant="contained" color={'error'}> Delete All</Button>
        <Button onClick={deleteMarkedTasks} variant="contained" color = {'info'}>Delete Completed</Button>
    </div>
  );
}

export default Toolbar;
