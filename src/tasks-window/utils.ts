import { createContext, useContext } from "react";
import { Task } from "../task/utils"

export type GlobalTaskList = {
 taskList: Task[],
 setTaskList:(taskList: Task[]) => void
  }

  export const TasksContext = createContext<GlobalTaskList>({taskList: [], setTaskList: () => {}});

  export const useTasksContext = () => useContext(TasksContext);


