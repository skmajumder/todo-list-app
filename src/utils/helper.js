import { v4 as uuidv4 } from 'uuid';

/**
 * * Get unique ID
 */
export function generateShortId() {
  const fullId = uuidv4();
  return fullId.substring(0, 8);
}

/**
 * * Get the current date and time
 */
export function formattedDate() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formattedDate;
}

/**
 * * Get items from the local storage
 */
export function getLocalStorage(storageName) {
  const storedItem = JSON.parse(localStorage.getItem(storageName)) || [];

  return storedItem;
}

/**
 * * Filter the tasks list based on the current priority value
 * @param {*} taskList
 * @param {*} priority
 */
export function filterTaskWithPriority(taskList, priority) {
  const filteredTaskList = taskList?.filter((task) => {
    if (priority === 'all') {
      return true;
    } else {
      return task.priority === priority;
    }
  });

  return filteredTaskList;
}
