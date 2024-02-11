import { createContext, useState } from 'react';

import { generateShortId } from '../utils/uniqueId';

export const TaskAddContext = createContext(null);

const TaskAddProvider = ({ children }) => {
  const [allTodoList, setAllTodoList] = useState([]);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  /**
   *
   * * Set task title
   * @param {*} title
   */
  function handleTaskTitle(title) {
    setTaskTitle(title);
  }

  /**
   *
   * * Set task description
   * @param {*} description
   */
  function handleTaskDescription(description) {
    setTaskDescription(description);
  }

  /**
   *
   * * Set task priority
   * @param {*} priority
   */
  function handleTaskPriorityChange(priority) {
    setPriority(priority);
  }

  /**
   *
   * * Add task in the TODO list
   * @param {*} event
   */
  function handleAddTodo(event) {
    // * prevent page reload after submit the task
    event.preventDefault();

    // * Generate a unique ID
    const id = generateShortId();

    const newTodo = {
      id,
      title: taskTitle,
      description: taskDescription,
      priority,
      isTaskCompleted,
    };

    const todoTaskArr = [...allTodoList];
    todoTaskArr.push(newTodo);
    setAllTodoList(todoTaskArr);

    console.log(allTodoList);
  }

  const taskInfo = {
    priority,
    taskTitle,
    taskDescription,
    isTaskCompleted,
    allTodoList,
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
