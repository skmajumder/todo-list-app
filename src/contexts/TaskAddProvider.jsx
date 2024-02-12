import { createContext, useEffect, useState } from 'react';

import {
  formattedDate,
  generateShortId,
  getLocalStorage,
} from '../utils/helper';

import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

export const TaskAddContext = createContext(null);

const TaskAddProvider = ({ children }) => {
  // * Load tasks from local storage on component mount
  const [allTodoList, setAllTodoList] = useState(
    getLocalStorage('allTodoList'),
  );

  const [editedTask, setEditedTask] = useState(null);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [taskCompletedOn, setTaskCompletedOn] = useState('');

  const [priorityFilter, setPriorityFilter] = useState('all');

  // * Save tasks to local storage whenever allTodoList is updated
  useEffect(() => {
    localStorage.setItem('allTodoList', JSON.stringify(allTodoList));
  }, [allTodoList]);

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

  function handleResetTaskField() {
    setTaskTitle('');
    setTaskDescription('');
    setPriority('');
    setIsTaskCompleted(false);
    setTaskCompletedOn('');
  }

  /**
   *
   * * Add task in the TODO list
   * @param {*} event
   */
  function handleAddTodo(event) {
    // * prevent page reload after submit the task
    event.preventDefault();

    if (!taskTitle) return toast.error('Title is required');
    if (!taskDescription) return toast.error('Description is required');
    if (!priority) return toast.error('Task priority is required');

    // * Generate a unique ID
    const id = generateShortId();

    const newTodo = {
      id,
      title: taskTitle,
      description: taskDescription,
      priority,
      isTaskCompleted,
      taskCompletedOn,
      isEdit: false,
    };

    const todoTaskArr = [...allTodoList];
    todoTaskArr.push(newTodo);
    setAllTodoList(todoTaskArr);
    toast.success('Task add successfully');

    handleResetTaskField();
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

  /**
   * * Marked the task as complete
   * @param {*} taskId
   */
  function handleTaskCompletedStatus(taskId) {
    const updatedTodoList = allTodoList.map((task) =>
      task.id === taskId
        ? { ...task, isTaskCompleted: true, taskCompletedOn: formattedDate() }
        : task,
    );
    setAllTodoList(updatedTodoList);
    toast.success('Task marked as complete');
  }

  /**
   * * Update task information
   * @param {*} taskId
   */
  function handleEditTask(taskId) {
    const taskToEdit = allTodoList.find((task) => task.id === taskId);
    setEditedTask(taskToEdit);

    // * Update isEdit to true
    setEditedTask((prevEditedTask) => ({ ...prevEditedTask, isEdit: true }));

    // * Set the current task values to the form fields
    setTaskTitle(taskToEdit.title);
    setTaskDescription(taskToEdit.description);
    setPriority(taskToEdit.priority);
  }

  /**
   * * Handle Edit Task
   */
  function handleUpdateTodo(event) {
    event.preventDefault();
    // * Find the index of the edited task in the array
    const index = allTodoList.findIndex((task) => task.id === editedTask.id);

    if (index !== -1) {
      const updatedTodoList = [...allTodoList];

      // Update the task at the found index
      updatedTodoList[index] = {
        ...editedTask,
        title: taskTitle,
        description: taskDescription,
        priority,
      };

      // * Update the state with the new array and reset the edited task
      setAllTodoList(updatedTodoList);
      setEditedTask(null);

      toast.success('Updated task successfully');

      handleResetTaskField();
    }
  }

  /**
   * * Show the task base on the task priority
   * @param {*} priority
   */
  function handleFilterByPriority(priority = 'all') {
    setPriorityFilter(priority);
  }

  const taskInfo = {
    priority,
    taskTitle,
    taskDescription,
    isTaskCompleted,
    taskCompletedOn,
    allTodoList,
    editedTask,
    priorityFilter,
    setIsTaskCompleted,
    handleTaskTitle,
    handleTaskDescription,
    handleTaskPriorityChange,
    handleAddTodo,
    handleDeleteTask,
    handleTaskCompletedStatus,
    handleEditTask,
    handleUpdateTodo,
    handleResetTaskField,
    handleFilterByPriority,
  };

  return (
    <TaskAddContext.Provider value={taskInfo}>
      {children}
    </TaskAddContext.Provider>
  );
};

export default TaskAddProvider;
