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
