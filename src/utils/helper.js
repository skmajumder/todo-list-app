import { v4 as uuidv4 } from 'uuid';

export function generateShortId() {
  const fullId = uuidv4();
  return fullId.substring(0, 8);
}

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
