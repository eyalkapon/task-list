/* eslint-disable react/jsx-no-undef */
import { Checkbox, IconButton, Input, ListItem } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Task } from './utils';

type TaskProps = {
    task : Task,
    deleteTask: (task:Task) => void,
    toggleMarkTask: (task:Task) => void,
    updateTask: (task:Task) => void
}
 const TaskItem = ({task, deleteTask, toggleMarkTask,updateTask}: TaskProps) => {

  const handleKeyPress = (keyboardEvent : React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
       
    if(keyboardEvent.code === "Enter"){
      keyboardEvent.currentTarget.blur();
      if(task.content !== keyboardEvent.currentTarget.value){
      task.content = keyboardEvent.currentTarget.value;
      updateTask(task);      
      }
    }
    else if(keyboardEvent.key === "Escape"){
       keyboardEvent.currentTarget.blur();
       keyboardEvent.currentTarget.value = task.content;
    }
 }
  return (
    <ListItem className="task">
     <Input
          multiline
          maxRows={4}
          defaultValue= {task.content}
          onKeyDown={ (keyPress) =>  handleKeyPress(keyPress)}
        />
      <Checkbox edge={"end"} onClick={()=> toggleMarkTask(task
       )} checked={task.isMarked}></Checkbox>
             <IconButton onClick={() => deleteTask(task)}><Close/></IconButton>
    </ListItem>
    
  );
}

export default TaskItem;
