import { createContext, useState } from 'react';

export const TaskAddContext = createContext(null);

const TaskAddProvider = ({ children }) => {
  const [allTodoList, setAllTodoList] = useState([]);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  const [activeBtn, setActiveBtn] = useState('');

  function handleTaskTitle(title) {
    setTaskTitle(title);
  }

  function handleTaskDescription(description) {
    setTaskDescription(description);
  }

  function handleTaskPriorityChange(priority) {
    setPriority(priority);
  }

  const taskInfo = {
    priority,
    activeBtn,
    taskTitle,
    taskDescription,
    isCompleted: isTaskCompleted,
    setActiveBtn,
    setIsTaskCompleted,
    handleTaskTitle,
    handleTaskDescription,
    handleTaskPriorityChange,
  };

  return (
    <TaskAddContext.Provider value={taskInfo}>
      {children}
    </TaskAddContext.Provider>
  );
};

export default TaskAddProvider;
