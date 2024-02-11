import { createContext, useState } from 'react';

import { generateShortId } from '../utils/uniqueId';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

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
      isTaskCompleted: false,
    };

    const todoTaskArr = [...allTodoList];
    todoTaskArr.push(newTodo);
    setAllTodoList(todoTaskArr);
    toast.success('Task add successfully');
  }

  /**
   * * Delete task from the list
   * @param {*} taskId
   */
  function handleDeleteTask(taskId) {
    Swal.fire({
      title: 'Are you sure to delete this task?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTodoList = allTodoList.filter(
          (task) => task.id !== taskId,
        );
        setAllTodoList(updatedTodoList);
        Swal.fire({
          title: 'Deleted!',
          text: 'Task deleted successfully',
          icon: 'success',
        });
      }
    });
  }

  function handleTaskCompletedStatus(taskId) {
    const updatedTodoList = allTodoList.map((task) =>
      task.id === taskId ? { ...task, isTaskCompleted: true } : task,
    );
    setAllTodoList(updatedTodoList);
    toast.success('Task marked as complete');
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
    handleDeleteTask,
    handleTaskCompletedStatus,
  };

  return (
    <TaskAddContext.Provider value={taskInfo}>
      {children}
    </TaskAddContext.Provider>
  );
};

export default TaskAddProvider;
