/* eslint-disable react-hooks/rules-of-hooks */
import { List } from '@mui/material';
import TaskItem from '../task/task';
import { Task } from '../task/utils';
import { useTasksContext } from '../tasks-window/utils';
import './task-list.scss';

function TaskList() {

  const { taskList,setTaskList } = useTasksContext();

  const deleteTask = (task : Task) : void => {
    setTaskList(taskList.filter((currentTask: Task) => task !== currentTask));
  }

  const updateTask = (task: Task) : void => {
    console.log('updated');
  }

  const toggleMarkTask = (task: Task) : void => {
        const updatedTasks : Task[] = taskList.map((currentTask: Task) => {if(currentTask.id === task.id) {
           currentTask.isMarked = !currentTask.isMarked;
        }
        return currentTask;
      })
      if(task.isMarked) {
        updatedTasks.push(updatedTasks.splice(updatedTasks.indexOf(task), 1)[0]);
      }
      else {
        updatedTasks.unshift(updatedTasks.splice(updatedTasks.indexOf(task), 1)[0]);
      }
      setTaskList(updatedTasks);
  }
  return (
    <div className="task-list">
      <List>
       { taskList.length > 0 ? 
    taskList.map((task : Task) =>  <TaskItem key={task.id} updateTask={() => updateTask(task)} deleteTask={() => deleteTask(task)} toggleMarkTask={() => toggleMarkTask(task)} task={task} />)
    : <h1 className='no-tasks-text'> לא נמצאו משימות, לחץ על הפלוס כדי להוסיף</h1>
  }
  </List>
    </div>
  );
}

export default TaskList;
