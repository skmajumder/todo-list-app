import { createContext, useState } from 'react';

export const TaskAddContext = createContext(null);

const TaskAddProvider = ({ children }) => {
  const [allTodoList, setAllTodoList] = useState([]);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  // * Set task title
  function handleTaskTitle(title) {
    setTaskTitle(title);
  }

  // * Set task description
  function handleTaskDescription(description) {
    setTaskDescription(description);
  }

  // * Set task priority
  function handleTaskPriorityChange(priority) {
    setPriority(priority);
  }

  // * Set task in the lists
  function handleAddTodo(e) {
    // * prevent page reload after submit the task
    e.preventDefault();

    const newTodo = {
      title: taskTitle,
      description: taskDescription,
      priority,
      isTaskCompleted,
    };

    console.log(newTodo);
  }

  const taskInfo = {
    priority,
    taskTitle,
    taskDescription,
    isTaskCompleted,
    setIsTaskCompleted,
    handleTaskTitle,
    handleTaskDescription,
    handleTaskPriorityChange,
    handleAddTodo,
  };

  return (
    <TaskAddContext.Provider value={taskInfo}>
      {children}
    </TaskAddContext.Provider>
  );
};

export default TaskAddProvider;
