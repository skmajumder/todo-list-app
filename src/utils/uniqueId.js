import { v4 as uuidv4 } from 'uuid';

export function generateShortId() {
  const fullId = uuidv4();
  return fullId.substring(0, 8);
}
